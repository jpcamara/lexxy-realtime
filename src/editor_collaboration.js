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
import { YrbyProvider } from './yrby_provider';

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
    const doc = this.doc || new Doc();
    const provider =
      this.provider || new YrbyProvider(doc, this.consumer, channelName, channelParams);
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

    // Start the editor empty so Lexical and the Yjs collab tree align at bind
    // time. Lexxy otherwise seeds a paragraph that the binding never captures,
    // and @lexical/yjs >= 0.44 then silently refuses to sync edits. New docs are
    // seeded once the first sync confirms the doc is empty (see
    // bootstrapWhenSynced); existing docs are loaded by the Yjs->Lexical observer.
    this.editor.update(() => $getRoot().clear(), { tag: HISTORY_MERGE_TAG, discrete: true });

    const excludedProperties = attachmentExclusions(this.editor);
    const binding = createBinding(this.editor, provider, id, doc, docMap, excludedProperties);
    const unsubscribeListeners = registerCollaborationListeners(this.editor, provider, binding);
    const cancelBootstrap = bootstrapWhenSynced(this.editor, provider, binding);

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

    // Re-render remote cursors when presence changes or the document reflows.
    const renderCursors = () => syncCursorPositions(binding, provider);
    awareness.on('update', renderCursors);
    const unsubscribeCursorRender = this.editor.registerUpdateListener(renderCursors);
    syncCursorPositions(binding, provider); // initial paint of anyone already present

    this.provider = provider;
    this.awareness = awareness; // expose the real (provider-owned) instance to the host
    this.binding = binding;
    this.#teardown = () => {
      this.#teardown = null;
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

// The Lexxy node types that carry those properties. Exclusions key off the
// node TYPE, not off which classes fail the no-arg constructor probe: a
// future Lexxy that defaults its constructor parameters stops throwing —
// the whole guard machinery below goes dormant — but a raw File still
// can't cross the sync boundary.
const LEXXY_ATTACHMENT_NODE_TYPES = new Set([
  'action_text_attachment',
  'action_text_attachment_upload',
  'custom_action_text_attachment',
]);

// The excluded-properties map for createBinding: every registered
// attachment type keeps its client-local properties out of the shared doc.
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

// Once the provider reports its first sync, seed a brand-new (empty) document
// with an initial paragraph -- the equivalent of @lexical/react's
// CollaborationPlugin bootstrap. Doing it post-sync (not at bind time) means an
// existing document is loaded by the Yjs->Lexical observer first, so we never
// push a stray paragraph onto a doc that already has content.
// Returns a canceller: the poll interval otherwise runs forever if the element
// is torn down (or the provider never syncs) before the first sync, since `seed`
// only clears it on success.
function bootstrapWhenSynced(editor, provider, binding) {
  let done = false;
  const seed = () => {
    if (done || !provider.synced) return;
    done = true;
    clearInterval(timer);
    if (binding.root.getSharedType().length === 0) {
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
  const timer = setInterval(seed, 50);
  if (typeof timer?.unref === 'function') timer.unref();
  return () => {
    done = true;
    clearInterval(timer);
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
