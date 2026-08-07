import {
  createBinding,
  syncLexicalUpdateToYjs,
  syncYjsChangesToLexical,
  syncCursorPositions,
  setLocalStateFocus,
  initLocalState,
} from '@lexical/yjs';
import { $getRoot, $createParagraphNode, HISTORY_MERGE_TAG } from 'lexical';
import { Doc } from 'yjs';
import { createConsumer } from '@rails/actioncable';
import { YrbyProvider } from './yrby_provider';
import { attachmentExclusions, patchCollabElementSplice } from './attachment_sync';
import { registerUploadCleanup } from './upload_cleanup';

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

    // An in-flight upload leaves a placeholder node only this client can
    // complete. If this page or editor goes away mid-upload, remove it;
    // upload_cleanup.js has the layers.
    const cancelUploadCleanup = registerUploadCleanup(this.editorElement, this.editor, provider, awareness);

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
      cancelUploadCleanup();
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
// duplicate is visible and easily deleted. The same check also means
// anything the user gets into the editor before that first sync (typed
// text, a dropped file's upload placeholder) makes the root non-empty and
// suppresses the seed of the captured content. Server-side seeding needs
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
