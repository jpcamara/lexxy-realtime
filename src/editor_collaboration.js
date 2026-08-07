import {
  createBinding,
  syncLexicalUpdateToYjs,
  syncYjsChangesToLexical,
  syncCursorPositions,
  setLocalStateFocus,
  initLocalState,
} from '@lexical/yjs';
import { $getRoot, $createParagraphNode, $nodesOfType, HISTORY_MERGE_TAG } from 'lexical';
import { Doc } from 'yjs';
import { createConsumer } from '@rails/actioncable';
import { YrbyProvider } from './yrby_provider';

// One shared Action Cable consumer for every element that isn't handed one.
// createConsumer() reads the standard `action-cable-url` meta tag (rendered by
// Rails' action_cable_meta_tag) and falls back to /cable, so a server-rendered
// element works with no host JavaScript at all. Shared so multiple editors on
// a page ride one WebSocket, like Rails' own consumer module.
let sharedConsumer;
let configuredConsumer;

// The app-wide default consumer, for transports the element can't build
// itself: call once at boot, before editors mount. Accepts the consumer or
// a function returning one, resolved lazily on first use.
//
//   import { createCable } from "@anycable/web";
//   import { setConsumer } from "lexxy-realtime";
//   setConsumer(() => createCable());
//
// A consumer assigned directly on an element still wins.
export function setConsumer(consumerOrFactory) {
  configuredConsumer = consumerOrFactory;
}

function resolveConsumer() {
  if (typeof configuredConsumer === 'function') configuredConsumer = configuredConsumer();
  return configuredConsumer || (sharedConsumer ??= createConsumer());
}

export class Collaboration extends HTMLElement {
  #teardown = null;

  connectedCallback() {
    this.editorElement = this.closest('lexxy-editor');
    if (!this.editorElement) {
      console.error('<lexxy-collaboration> must be placed inside a <lexxy-editor>.');
      return;
    }
    this.editor = this.editorElement.editor;

    // Init now if the editor is already present, otherwise wait for it.
    if (this.editor) {
      this.#init();
    } else {
      this.editorElement.addEventListener(
        'lexxy:initialize',
        () => {
          this.editor = this.editorElement.editor;
          this.#init();
        },
        { once: true }
      );
    }
  }

  disconnectedCallback() {
    this.#teardown?.();
  }

  #init() {
    // The Yjs document id (the @lexical/yjs binding key). A dedicated attribute
    // rather than the global HTML `id`, which it used to overload.
    const id = this.getAttribute('doc-id') || 'main';
    const name = this.getAttribute('name') || 'Example User';
    const color = this.getAttribute('color') || '#958DF1';
    const channelName = this.getAttribute('channel-name') || 'SyncChannel';
    const rawParams = this.getAttribute('channel-params') || '{}';
    let channelParams;
    try {
      channelParams = typeof rawParams === 'string' ? JSON.parse(rawParams) : rawParams;
    } catch {
      console.error(
        '<lexxy-collaboration>: invalid channel-params attribute (expected JSON); using {}.',
        rawParams
      );
      channelParams = {};
    }

    // Track what we create vs. what the host supplied. A host-supplied provider
    // is the host's to manage -- it called connect(), it calls disconnect() --
    // so we must not disconnect it on teardown. Doing so also broke DOM moves:
    // moving the element fires disconnect+reconnect, and disconnecting the
    // host's provider (then reusing it without reconnecting) left it dead.
    const ownsProvider = !this.provider;
    const ownsDoc = !this.doc;
    const doc = this.doc || new Doc();
    const provider =
      this.provider ||
      new YrbyProvider(doc, this.consumer || resolveConsumer(), channelName, channelParams);
    // A provider we created is ours to run: YrbyProvider does not
    // auto-connect. A host-supplied provider is the host's — it decides
    // when to connect.
    if (ownsProvider) provider.connect();

    // The provider owns its Awareness: it constructs its own and ignores any
    // passed in. Every presence operation here -- initLocalState,
    // setLocalStateFocus, syncLexicalUpdateToYjs, syncCursorPositions -- goes
    // through `provider`, so the re-render trigger MUST listen on this exact
    // instance. Listening on a separately-created Awareness (the old bug) meant
    // remote cursor/selection changes, which only mutate the provider's
    // instance, never triggered a re-render: a peer's caret moved only when they
    // also edited text (an awareness-only move was invisible until then).
    const awareness = provider.awareness;

    const docMap = new Map();
    docMap.set(id, doc);

    // Capture what Lexxy loaded before aligning the editor with the collab
    // tree: the server-rendered field value (an existing Action Text body).
    // If the document turns out to be brand-new at first sync, this state
    // seeds it (see bootstrapWhenSynced), so pre-existing content becomes the
    // collaborative document instead of being lost to an empty bootstrap.
    const initialEditorState = this.editor.getEditorState();

    // Start the editor empty so Lexical and the Yjs collab tree align at bind
    // time. Lexxy otherwise seeds a paragraph that the binding never captures,
    // and @lexical/yjs >= 0.44 then silently refuses to sync edits. New docs are
    // seeded once the first sync confirms the doc is empty (see
    // bootstrapWhenSynced); existing docs are loaded by the Yjs->Lexical observer.
    this.editor.update(() => $getRoot().clear(), { tag: HISTORY_MERGE_TAG, discrete: true });

    const excludedProperties = attachmentExclusions(this.editor);
    const binding = createBinding(this.editor, provider, id, doc, docMap, excludedProperties);
    patchCollabElementSplice(binding);
    const unsubscribeListeners = registerCollaborationListeners(this.editor, provider, binding);
    const cancelBootstrap = bootstrapWhenSynced(this.editor, provider, binding, initialEditorState);

    // Remote cursors/selections are rendered by @lexical/yjs (syncCursorPositions)
    // into a positioned overlay it manages via `binding.cursorsContainer`.
    const cursorsContainer = this.#createCursorsContainer();
    binding.cursorsContainer = cursorsContainer;

    // Seed local presence (identity + focus). The local cursor's anchor/focus is
    // written to awareness by syncLexicalUpdateToYjs on every editor update, as
    // Yjs relative positions that stay correct across concurrent edits.
    //
    // `focusing` stays true for the whole session. @lexical/yjs's
    // syncCursorPositions renders a peer's caret ONLY while their `focusing` flag
    // is true, so toggling it off on editor blur (the @lexical/react default)
    // makes a collaborator vanish the moment their editor loses focus -- e.g.
    // they click another window/tab, or (when testing two windows on one machine)
    // simply whenever the other window is focused. We keep peers visible at their
    // last position for as long as they're connected; a departed peer is removed
    // by the provider's disconnect/pagehide presence removal and the awareness
    // timeout.
    initLocalState(provider, name, color, true, { name, color });
    setLocalStateFocus(provider, name, color, true, { name, color });

    // When this page dies mid-upload, its in-flight upload placeholders die
    // with it: the DirectUpload runs only in this browser, so no client
    // exists to finish or remove them, and peers would keep a dead
    // placeholder forever. pagehide removes our own upload nodes. Teardown
    // is the wrong hook for this; a DOM move fires teardown while the
    // upload survives. The send is best-effort, like the provider's
    // presence removal. persisted means bfcache; the page may come back
    // and the upload with it.
    const removeOwnPendingUploads = (event) => {
      if (event?.persisted) return;
      removePendingUploadNodes(this.editor);
    };
    window.addEventListener('pagehide', removeOwnPendingUploads);

    // The pagehide send can be lost (the page is dying; nothing
    // retransmits), so a second layer sweeps leftovers: a client that has
    // been alone for a while deletes remote upload placeholders. See
    // removeOrphanedUploadsWhenAlone.
    const cancelOrphanSweep = removeOrphanedUploadsWhenAlone(this.editor, provider, awareness);

    // Re-render remote cursors when presence changes or the document reflows.
    const renderCursors = () => syncCursorPositions(binding, provider);
    awareness.on('update', renderCursors);
    const unsubscribeCursorRender = this.editor.registerUpdateListener(renderCursors);
    syncCursorPositions(binding, provider); // initial paint of anyone already present

    this.provider = provider;
    this.doc = doc; // expose the doc (created or host-supplied) to the host
    this.awareness = awareness; // expose the real (provider-owned) instance to the host
    this.binding = binding;
    this.#teardown = () => {
      this.#teardown = null;
      window.removeEventListener('pagehide', removeOwnPendingUploads);
      cancelOrphanSweep();
      awareness.off('update', renderCursors);
      unsubscribeCursorRender();
      unsubscribeListeners();
      cancelBootstrap();
      cursorsContainer.remove();
      // Only disconnect a provider we created. A host-supplied provider is the
      // host's to disconnect; tearing it down here breaks DOM moves (which
      // reconnect and reuse it) and disconnects a provider the host may reuse.
      if (ownsProvider) {
        provider.disconnect();
        this.provider = null;
      }
      if (ownsDoc) this.doc = null;
    };
  }

  // An absolutely-positioned overlay covering the editor; @lexical/yjs positions
  // remote carets/selections within it (relative to its offsetParent).
  #createCursorsContainer() {
    const host = this.editorElement.querySelector('.lexxy-editor-container') || this.editorElement;
    if (getComputedStyle(host).position === 'static') host.style.position = 'relative';
    const container = document.createElement('div');
    container.className = 'lexxy-collab-cursors';
    container.style.cssText = 'position:absolute;inset:0;pointer-events:none;';
    host.appendChild(container);
    return container;
  }
}

// What stays local: `file` (yjs can't encode a File and throws mid-sync),
// `editor` (live object reference), `previewSrc` (client-local object URL),
// and `uploadUrl` / `blobUrlTemplate` (host config — and an absent
// uploadUrl is what stops a peer from starting its own duplicate
// DirectUpload). Everything else syncs on purpose: `progress` and
// `uploadError` give peers a live progress bar and the error state, and
// `pendingPreview` tells peers to render the poll-until-ready placeholder
// for server-generated previews (PDFs and friends) instead of requesting a
// preview that doesn't exist yet and giving up.
const UNSYNCABLE_ATTACHMENT_PROPERTIES = new Set([
  'editor',
  'file',
  'previewSrc',
  'uploadUrl',
  'blobUrlTemplate',
]);

// The Lexxy node types that carry those properties. Keyed by node type:
// construction is upstream's job now (basecamp/lexxy#1196), but a raw File
// still can't cross the sync boundary.
const LEXXY_ATTACHMENT_NODE_TYPES = new Set([
  'action_text_attachment',
  'action_text_attachment_upload',
  'custom_action_text_attachment',
]);

// The excluded-properties map for createBinding: every registered
// attachment type keeps its client-local properties out of the shared doc.
// @lexical/yjs's CollabElementNode.splice throws (dev) / appends `undefined`
// (prod) when asked to insert at an index that has no existing child and no
// collab node to insert -- which is exactly what the empty-collab-tree bootstrap
// does. Make that one case a no-op so an empty document can bind. createBinding
// builds binding.root without triggering this case, so patching the (unexported)
// CollabElementNode prototype through the live binding root -- right after the
// bind, before bootstrap/sync runs -- is in time. Guarded by a per-prototype
// flag.
//
// Blast radius: this mutates the SHARED CollabElementNode prototype once, for
// the whole page, and is never reverted -- every @lexical/yjs consumer on the
// page sees the patched splice. It only narrows the one undefined-at-empty-index
// no-op case, so it is safe, but it is a page-global side effect by design.
function patchCollabElementSplice(binding) {
  const proto = binding?.root?.constructor?.prototype;
  if (!proto || typeof proto.splice !== 'function' || proto.__yrbySplicePatched) return;
  const original = proto.splice;
  proto.splice = function (b, index, delCount, collabNode) {
    if (this._children[index] === undefined && collabNode === undefined) return;
    return original.call(this, b, index, delCount, collabNode);
  };
  proto.__yrbySplicePatched = true;
}

// A remote upload node (no local File) can only ever be completed by the
// client that holds the File. When awareness reports no other clients for
// a full settle delay, that client is presumed gone and the node is swept.
// The delay exists because awareness lags the doc: at join time the doc
// syncs before peers' awareness states arrive, and a quiet peer is only
// re-learned when y-protocols renews its state on a ~15s cycle. The delay
// must outlast that cycle, or the last client into a quiet room sweeps a
// live upload. Sweeping has no deadline, so long is safe.
//
// This is a heuristic, not a guarantee. Awareness frames are best-effort,
// and a background tab throttled past the settle delay can look absent
// while its upload is still running; a peer would then sweep the live
// node. Own in-flight nodes (file still present) are never touched: being
// alone while uploading is normal.
const ORPHAN_SWEEP_SETTLE_MS = 25000;

function removeOrphanedUploadsWhenAlone(editor, provider, awareness) {
  let timer = null;
  let cancelled = false;

  const alone = () => awareness.getStates().size <= 1;

  const sweep = () => {
    timer = null;
    if (cancelled || !alone()) return;
    if (!provider.synced) {
      // Not synced yet; try again after another settle delay.
      schedule();
      return;
    }
    const info = editor?._nodes?.get?.('action_text_attachment_upload');
    if (!info) return;

    editor.update(
      () => {
        for (const node of $nodesOfType(info.klass)) {
          if (node.getType() === 'action_text_attachment_upload' && !node.file) node.remove();
        }
      },
      { discrete: true, tag: HISTORY_MERGE_TAG }
    );
  };

  const schedule = () => {
    if (!cancelled && !timer && alone()) timer = setTimeout(sweep, ORPHAN_SWEEP_SETTLE_MS);
  };
  const onAwarenessChange = () => {
    if (alone()) {
      schedule();
    } else if (timer) {
      clearTimeout(timer);
      timer = null;
    }
  };

  awareness.on('change', onAwarenessChange);
  provider.whenSynced?.then?.(schedule);
  schedule();

  return () => {
    // The flag also covers the whenSynced continuation, which can fire
    // after teardown and would otherwise re-arm the timer.
    cancelled = true;
    clearTimeout(timer);
    timer = null;
    awareness.off('change', onAwarenessChange);
  };
}

// Remove this client's own in-flight upload nodes -- the ones still holding
// a local File. Remote copies have `file` excluded from sync, so a
// file-bearing node is always ours.
function removePendingUploadNodes(editor) {
  const uploadType = 'action_text_attachment_upload';
  const info = editor?._nodes?.get?.(uploadType);
  if (!info) return;

  editor.update(
    () => {
      for (const node of $nodesOfType(info.klass)) {
        if (node.getType() === uploadType && node.file) node.remove();
      }
    },
    { discrete: true, tag: HISTORY_MERGE_TAG }
  );
}

function attachmentExclusions(editor) {
  const excludedProperties = new Map();
  const nodes = editor?._nodes;
  if (!nodes || typeof nodes.forEach !== 'function') return excludedProperties;
  nodes.forEach((info, type) => {
    if (LEXXY_ATTACHMENT_NODE_TYPES.has(type)) {
      excludedProperties.set(info.klass, UNSYNCABLE_ATTACHMENT_PROPERTIES);
    }
  });
  return excludedProperties;
}


// True when an editor state holds no user content: no children, or a single
// childless paragraph (Lexical's resting state). An attachment-only body has a
// decorator child, so it counts as content.
function emptyEditorState(state) {
  return state.read(() => {
    const root = $getRoot();
    if (root.getChildrenSize() === 0) return true;
    const only = root.getChildrenSize() === 1 && root.getFirstChild();
    return !!only && only.getType() === 'paragraph' && only.getChildrenSize() === 0;
  });
}

// Once the provider reports its first sync, seed a brand-new (empty) document:
// with the editor's captured initial content when there was any (an existing
// Action Text body becomes the collaborative document), otherwise with a fresh
// paragraph -- the equivalent of @lexical/react's CollaborationPlugin
// bootstrap with initialEditorState. Doing it post-sync (not at bind time)
// means an existing document is loaded by the Yjs->Lexical observer first, so
// we never push stray content onto a doc that already has some.
//
// Two clients joining a still-empty document at the same instant can both
// seed, duplicating the initial content. Lexical's CollaborationPlugin has
// the same check-then-act race; its docs call client bootstrap dev-only
// and recommend seeding server-side. We take the client path knowingly:
// the window is one sync round trip on a document's first-ever open, and a
// duplicate is visible and easily deleted. Server-side seeding needs
// HTML-to-Yjs conversion on the server, which yrby doesn't have yet.
// Repro: test/headless/bootstrap_race_repro.mjs.
//
// Returns a canceller for teardown before the first sync: it stops the
// fallback poll and makes a late whenSynced resolution a no-op.
function bootstrapWhenSynced(editor, provider, binding, initialEditorState) {
  let done = false;
  const seed = () => {
    if (done || !provider.synced) return;
    done = true;
    if (timer) clearInterval(timer);
    if (binding.root.getSharedType().length === 0) {
      if (initialEditorState && !emptyEditorState(initialEditorState)) {
        // Restore the captured content. The binding diffs against the cleared
        // (empty) state, so every restored node registers as new and flows
        // into the collab tree -- seeding the document.
        editor.setEditorState(initialEditorState, { tag: HISTORY_MERGE_TAG });
        return;
      }
      // New (empty) document. Lexical won't keep the root empty, so the
      // paragraph Lexxy seeded shares the same node key in prev/next and the
      // binding never treats it as "new". Replace it with a fresh-keyed
      // paragraph in one transaction so the binding creates it in the collab
      // tree, aligning Lexical with Yjs. (Existing docs are loaded by the
      // Yjs->Lexical observer, so this only runs for a brand-new document.)
      editor.update(
        () => {
          const root = $getRoot();
          root.clear();
          root.append($createParagraphNode());
        },
        { tag: HISTORY_MERGE_TAG }
      );
    }
  };
  // Event-driven on providers that expose whenSynced (YrbyProvider); the
  // poll is the fallback for foreign providers, which only promise a
  // `synced` getter.
  let timer;
  if (provider.whenSynced?.then) {
    provider.whenSynced.then(seed, () => {});
  } else {
    timer = setInterval(seed, 50);
    if (typeof timer?.unref === 'function') timer.unref();
  }
  return () => {
    done = true;
    if (timer) clearInterval(timer);
  };
}

function registerCollaborationListeners(editor, provider, binding) {
  const unsubscribeUpdateListener = editor.registerUpdateListener(
    ({ dirtyElements, dirtyLeaves, editorState, normalizedNodes, prevEditorState, tags }) => {
      editor.getEditorState().read(() => {
        if (tags.has('skip-collab') === false) {
          syncLexicalUpdateToYjs(
            binding,
            provider,
            prevEditorState,
            editorState,
            dirtyElements,
            dirtyLeaves,
            normalizedNodes,
            tags
          );
        }
      });
    }
  );

  const observer = (events, transaction) => {
    if (transaction.origin !== binding) {
      syncYjsChangesToLexical(binding, provider, events, false);
    }
  };

  binding.root.getSharedType().observeDeep(observer);

  return () => {
    unsubscribeUpdateListener();
    binding.root.getSharedType().unobserveDeep(observer);
  };
}
