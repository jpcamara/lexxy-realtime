import {
  createBinding,
  syncYjsChangesToLexical,
  syncCursorPositions,
  setLocalStateFocus,
  initLocalState,
} from '@lexical/yjs';
import { $getRoot, $createParagraphNode, HISTORY_MERGE_TAG, COLLABORATION_TAG, CLEAR_HISTORY_COMMAND } from 'lexical';
import { Doc } from 'yjs';
import { YrbyDocumentElement } from 'yrby-client/element';
import { attachmentExclusions, patchCollabElementSplice } from './attachment_sync';
import { registerUploadCleanup } from './upload_cleanup';
import { registerCursorTheme, injectStyles } from './cursor_theme';
import { registerTextReconciliation, syncEditorUpdate, reconciliationOrigin } from './text_reconciliation';
import { registerSelectionNormalization } from './selection_normalization';

// Sets the Action Cable consumer that every <yrby-document> on the page
// uses. Call it once at boot, before editors mount. It accepts a consumer,
// a promise of one, or a function that returns either. <yrby-document>
// calls the function the first time it needs a consumer and reuses the
// result.
//
//   import { createConsumer } from "@anycable/web";
//   import { setConsumer } from "lexxy-realtime";
//   setConsumer(() => createConsumer());
//
// Without it, <yrby-document> creates an @rails/actioncable consumer from
// the page's action-cable-url meta tag, or /cable.
export function setConsumer(consumer) {
  YrbyDocumentElement.consumer = consumer;
}

// @lexical/yjs caches its collab nodes on the Yjs types, so two bindings on
// one Y.Doc would overwrite each other's caches.
const boundDocs = new WeakMap();

// After a remote update fails to apply, the element replaces its session
// at most once in this window. A fault that comes back right after a
// rebuild waits for the window to end, so a fault that repeats every time
// costs the server one new session every 15 seconds.
const RECOVERY_INTERVAL_MS = 15000;

// Node (SSR, unit tests) has no HTMLElement. The module still has to load
// there, so only registration is browser-gated (see index.js).
const Base = typeof HTMLElement === 'undefined' ? class {} : HTMLElement;

export class Collaboration extends Base {
  #hostDoc = null;
  #hostProvider = null;
  #editorElement = null;
  #yrbyDocument = null;
  #bound = null;
  #lastRecoveryAt = 0;
  #recoveryTimer = null;
  // True from discarding a broken session until the next session binds.
  #recovering = false;

  // Assign doc and provider before the element connects to use your own
  // Yjs provider. Without them the element binds to the session of its
  // closest <yrby-document>. Once bound, these return what the editor is
  // bound to.
  get doc() {
    return this.#bound?.doc ?? this.#hostDoc;
  }

  set doc(doc) {
    this.#hostDoc = doc ?? null;
  }

  get provider() {
    return this.#bound?.provider ?? this.#hostProvider;
  }

  set provider(provider) {
    this.#hostProvider = provider ?? null;
  }

  get awareness() {
    return this.#bound?.provider.awareness;
  }

  get binding() {
    return this.#bound?.binding;
  }

  connectedCallback() {
    injectStyles();
    const editorElement = this.closest('lexxy-editor');
    if (!editorElement) {
      console.error('<lexxy-collaboration> must be placed inside a <lexxy-editor>.');
      return;
    }
    const yrbyDocument = this.#hostProvider ? null : this.closest('yrby-document');

    // Moved in the same turn without its editor being rebuilt: keep the binding.
    if (
      this.#bound &&
      editorElement === this.#editorElement &&
      yrbyDocument === this.#yrbyDocument &&
      editorElement.editor === this.#bound.editor
    ) {
      return;
    }

    this.#stop();
    if (!this.#hostProvider && !yrbyDocument) {
      console.error(
        '<lexxy-collaboration> needs a <yrby-document> ancestor, or a doc and provider assigned before it connects.'
      );
      return;
    }
    this.#editorElement = editorElement;
    editorElement.addEventListener('lexxy:initialize', this.#onInitialize);
    if (!this.#hostProvider) {
      this.#yrbyDocument = yrbyDocument;
      yrbyDocument.addEventListener('yrby:synced', this.#onSynced);
    }
    this.#start();
  }

  disconnectedCallback() {
    // A move within the same turn reconnects before this microtask runs.
    queueMicrotask(() => {
      if (!this.isConnected) this.#stop();
    });
  }

  #onSynced = (event) => {
    if (event.target === this.#yrbyDocument) this.#start();
  };

  // Lexxy dispatches lexxy:initialize once its editor is ready. It also
  // builds a new Lexical editor without disconnecting its children, for
  // example when a Turbo morph changes its `connected` attribute, and
  // dispatches the event again. #start binds whichever editor is current.
  #onInitialize = () => this.#start();

  #start() {
    if (!this.isConnected || !this.#editorElement) return;
    const editor = this.#editorElement.editor;
    if (!editor) return;
    if (this.#bound && this.#bound.editor !== editor) this.#unbind();

    if (this.#hostProvider) {
      if (this.#bound) return;
      const provider = this.#hostProvider;
      this.#bind(this.#hostDoc ?? provider.doc ?? new Doc(), provider, null);
      return;
    }

    // Wait for the next yrby:synced when the <yrby-document> has no live session.
    // `current` is the live session's yrby:synced detail, or undefined
    // until the <yrby-document> has one.
    const synced = this.#yrbyDocument.current;
    if (!synced) return;
    if (this.#bound?.synced === synced) return;
    this.#unbind();
    this.#bind(synced.doc, synced.provider, synced);
  }

  #stop() {
    this.#editorElement?.removeEventListener('lexxy:initialize', this.#onInitialize);
    this.#yrbyDocument?.removeEventListener('yrby:synced', this.#onSynced);
    this.#yrbyDocument = null;
    this.#editorElement = null;
    this.#recovering = false;
    this.#unbind();
  }

  #unbind() {
    const bound = this.#bound;
    if (!bound) return;
    this.#bound = null;
    clearTimeout(this.#recoveryTimer);
    this.#recoveryTimer = null;
    bound.teardown();
  }

  // Binds the editor to a doc and provider. `synced` is the yrby:synced
  // detail in yrby mode and null when the host supplied the provider. The
  // element never destroys the doc or provider, because the yrby session
  // or the host owns them.
  #bind(doc, provider, synced) {
    const editorElement = this.#editorElement;
    const editor = editorElement.editor;
    const owner = boundDocs.get(doc);
    if (owner) {
      if (owner.isConnected) {
        console.error('<lexxy-collaboration>: this Y.Doc is already bound to another editor.');
        return;
      }
      // An element that replaced the owner in the same turn connects
      // before the owner's disconnect microtask releases the doc.
      owner.#unbind();
    }

    // The Yjs document id, used as the @lexical/yjs binding key.
    const id = this.getAttribute('doc-id') || 'main';
    const name = this.getAttribute('name') || 'Example User';
    const color = this.getAttribute('color') || '#958DF1';

    // Every presence operation goes through the provider, so cursor
    // rendering listens on the provider's own Awareness instance. A
    // separate instance never sees awareness-only cursor moves.
    const awareness = provider.awareness;

    // What Lexxy loaded before the bind, usually an existing Action Text
    // body. If the document is still empty after the first sync, this
    // state seeds it (see bootstrapWhenSynced). After a desync the editor
    // shows a state that doesn't match any document, so a recovery bind
    // takes everything from the new session and seeds nothing.
    const recovery = !!synced && this.#recovering;
    this.#recovering = false;
    const initialEditorState = recovery ? null : editor.getEditorState();

    // Start the editor empty so Lexical and the Yjs collab tree match at
    // bind time. Otherwise Lexxy's default paragraph never enters the
    // collab tree, and @lexical/yjs >= 0.44 stops syncing edits.
    editor.update(() => $getRoot().clear(), { tag: HISTORY_MERGE_TAG, discrete: true });

    const binding = createBinding(editor, provider, id, doc, new Map([[id, doc]]), attachmentExclusions(editor));
    boundDocs.set(doc, this);
    patchCollabElementSplice(binding);
    const stopTextReconciliation = registerTextReconciliation(binding);
    const stopSelectionNormalization = registerSelectionNormalization(editor);

    // Yjs only reports changes, so content the doc already holds (a synced
    // session, or a host provider after a DOM move) is rendered here.
    editor.update(
      () => {
        binding.root.syncPropertiesFromYjs(binding, null);
        binding.root.applyChildrenYjsDelta(binding, binding.root.getSharedType().toDelta());
        binding.root.syncChildrenFromYjs(binding);
      },
      { tag: COLLABORATION_TAG, discrete: true }
    );

    let bound;
    const sync = registerCollaborationListeners(editor, provider, binding, (error) => this.#desync(bound, error));
    const cancelBootstrap = bootstrapWhenSynced(editor, provider, binding, initialEditorState);

    // @lexical/yjs renders remote carets and selections (syncCursorPositions)
    // into this overlay through `binding.cursorsContainer`.
    registerCursorTheme(editor);
    const cursorsContainer = createCursorsContainer(editorElement);
    binding.cursorsContainer = cursorsContainer;

    // Editor updates write the local selection to awareness as Yjs relative
    // positions, which stay correct across concurrent edits. `focusing`
    // stays true for the whole binding because @lexical/yjs only renders a
    // peer's caret while their focusing flag is true. Turning it off on
    // blur hid peers whenever their window lost focus. Peers that leave are
    // removed by the provider's presence removal and the awareness timeout.
    initLocalState(provider, name, color, true, { name, color });
    setLocalStateFocus(provider, name, color, true, { name, color });

    // Upload placeholders sync to peers, but only this client can finish
    // its own. Discards (pagehide, Turbo) remove ours, and a client alone
    // in the document removes orphans.
    const cancelUploadCleanup = registerUploadCleanup(editorElement, editor, provider, awareness);

    // Re-render remote cursors when presence changes or the document reflows.
    const renderCursors = () => syncCursorPositions(binding, provider);
    awareness.on('update', renderCursors);
    const unsubscribeCursorRender = editor.registerUpdateListener(renderCursors);
    renderCursors();

    // Undo history from before a desync would replay old states into the
    // new document as local edits.
    if (recovery) editor.dispatchCommand(CLEAR_HISTORY_COMMAND, undefined);

    const onAbort = () => {
      if (this.#bound === bound) this.#unbind();
    };
    synced?.signal.addEventListener('abort', onAbort, { once: true });

    bound = {
      editor,
      doc,
      provider,
      binding,
      synced,
      stopSyncing: sync.stop,
      // Set by #desync: whether the editor was editable before the desync
      // made it read-only. Teardown restores it.
      editableBeforeDesync: null,
      teardown: () => {
        synced?.signal.removeEventListener('abort', onAbort);
        cancelUploadCleanup();
        awareness.off('update', renderCursors);
        unsubscribeCursorRender();
        sync.stop();
        stopSelectionNormalization();
        stopTextReconciliation();
        cancelBootstrap();
        cursorsContainer.remove();
        releaseBinding(binding);
        boundDocs.delete(doc);
        // The session keeps running for other views and pending edits, so
        // take this editor's cursor out of presence. A host provider keeps
        // whatever presence the host manages.
        synced?.lease.setPresence(null);
        if (bound.editableBeforeDesync !== null) editor.setEditable(bound.editableBeforeDesync);
      },
    };
    this.#bound = bound;
  }

  // A remote update failed to apply (see createRemoteApplier), so this
  // editor doesn't match the document. The element stops syncing in
  // both directions and makes the editor read-only, so local typing can't
  // reach the document through the broken binding.
  //
  // With a host provider the element only reports it. The host owns the doc
  // and provider, and recovers by recreating the element or reloading.
  //
  // In yrby mode the element rebuilds. Yjs never re-emits updates the doc
  // already holds, so a rebuild needs a fresh Y.Doc, which means a fresh
  // session. The element discards the broken session and asks the
  // <yrby-document> to acquire a new one, which loads the server's state.
  // Edits the server hadn't acknowledged are lost with the old session, and
  // undo history is cleared.
  #desync(bound, error) {
    if (this.#bound !== bound) return;
    bound.stopSyncing();
    bound.editableBeforeDesync = bound.editor.isEditable();
    bound.editor.setEditable(false);
    const recovering = !!bound.synced;
    this.dispatchEvent(new CustomEvent('lexxy-realtime:desync', { bubbles: true, detail: { error, recovering } }));
    if (!recovering) return;

    const rebuild = () => {
      this.#recoveryTimer = null;
      if (this.#bound !== bound || !this.isConnected) return;
      this.#lastRecoveryAt = Date.now();
      this.#recovering = true;
      const yrbyDocument = this.#yrbyDocument;
      // Discarding releases every lease, which unbinds this element.
      // retry() then has the <yrby-document> acquire a new session, which
      // loads the server's state into a fresh Y.Doc.
      bound.synced.session.discard();
      yrbyDocument.retry();
    };
    const wait = this.#lastRecoveryAt + RECOVERY_INTERVAL_MS - Date.now();
    if (wait > 0) {
      this.#recoveryTimer = setTimeout(rebuild, wait);
    } else {
      // The fault is reported from inside Y.applyUpdate, which runs in the
      // provider's message handler, so the session is closed after that
      // handler returns.
      queueMicrotask(rebuild);
    }
  }
}

// An absolutely positioned overlay covering the editor. @lexical/yjs
// positions remote carets and selections inside it, relative to its
// offsetParent.
function createCursorsContainer(editorElement) {
  const host = editorElement.querySelector('.lexxy-editor-container') || editorElement;
  if (getComputedStyle(host).position === 'static') host.style.position = 'relative';
  const container = document.createElement('div');
  container.className = 'lexxy-collab-cursors';
  container.style.cssText = 'position:absolute;inset:0;pointer-events:none;';
  host.appendChild(container);
  return container;
}

// Lexical's collab nodes cache themselves on the Yjs types as _collabNode.
// A later binding to the same doc reuses any cache it finds and duplicates
// child offsets, so this clears them.
function releaseBinding(binding) {
  const nodes = new Set([binding.root, ...binding.collabNodeMap.values()]);
  for (const node of nodes) {
    for (const child of node._children || []) nodes.add(child);
    const type = node.getSharedType();
    if (type._collabNode === node) delete type._collabNode;
  }
  binding.root.destroy(binding);
  binding.cursors.clear();
  binding.cursorsContainer = null;
  binding.docMap.clear();
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

// Seeds the document only after the first sync, so an existing document
// loads from the server and is never overwritten. A document that is
// still empty gets the captured Action Text body, or a fresh paragraph.
// A provider that is already synced, like a yrby session, seeds right
// away.
//
// Two clients opening a new document together can both seed. Lexical's
// CollaborationPlugin has the same check-then-act race, and its docs
// recommend seeding on the server, which needs HTML-to-Yjs conversion
// there. Local input before the first sync (typed text, an upload
// placeholder) also suppresses the captured seed.
// Repro: test/headless/bootstrap_race_repro.mjs.
//
// The returned function stops the fallback poll and makes a late
// whenSynced resolution a no-op.
function bootstrapWhenSynced(editor, provider, binding, initialEditorState) {
  let done = false;
  let timer;
  const seed = () => {
    if (done || !provider.synced) return;
    done = true;
    if (timer) clearInterval(timer);
    if (binding.root.getSharedType().length > 0) return;
    if (initialEditorState && !emptyEditorState(initialEditorState)) {
      // The binding diffs against the cleared state, so every restored
      // node counts as new and goes into the collab tree.
      editor.setEditorState(initialEditorState, { tag: HISTORY_MERGE_TAG });
      return;
    }
    // A new, empty document. Lexical won't keep the root empty, so the
    // paragraph Lexxy added keeps the same node key before and after, and
    // the binding never sees it as new. Replacing it with a fresh paragraph
    // in one update makes the binding create it in the collab tree.
    editor.update(
      () => {
        const root = $getRoot();
        root.clear();
        root.append($createParagraphNode());
      },
      { tag: HISTORY_MERGE_TAG }
    );
  };

  seed();
  if (!done) {
    // YrbyProvider exposes whenSynced. Other providers only promise a
    // `synced` getter, so we poll those.
    if (provider.whenSynced?.then) {
      provider.whenSynced.then(seed, () => {});
    } else {
      timer = setInterval(seed, 50);
      if (typeof timer?.unref === 'function') timer.unref();
    }
  }
  return () => {
    done = true;
    if (timer) clearInterval(timer);
  };
}

// Wraps the Yjs-to-Lexical apply so a throw can't leave the editor silently
// out of sync. The observer runs inside Y.applyUpdate, and y-protocols
// catches and logs anything it throws. By then the Y.Doc already holds the
// update, so without this the editor would show less than the document
// until a rebuild. A reconnect doesn't help, because the doc has nothing new
// to report. The failed apply also leaves the binding's collab offset
// caches wrong, which can delete visible text on later applies.
//
// This catches errors thrown while Lexical runs the update function. Lexxy
// creates its editor with Lexical's default onError, which rethrows them.
// Errors in Lexical's commit phase happen later, in a microtask, and don't
// reach this try/catch.
//
// onDesync is called once per binding, and the applier ignores events after
// that. `sync` is injectable for tests.
export function createRemoteApplier(provider, binding, { onDesync, sync = syncYjsChangesToLexical } = {}) {
  let desynced = false;
  return (events, transaction) => {
    // Skip changes this binding wrote, including text reconciliation.
    if (transaction.origin === binding || transaction.origin === reconciliationOrigin) return;
    if (desynced) return;
    try {
      sync(binding, provider, events, false);
    } catch (error) {
      desynced = true;
      console.error(
        'lexxy-realtime: a remote update failed to apply; the editor is out of sync with the document.',
        error
      );
      onDesync?.(error);
    }
  };
}

function registerCollaborationListeners(editor, provider, binding, onDesync) {
  const unsubscribeUpdateListener = editor.registerUpdateListener((update) => {
    if (!update.tags.has('skip-collab')) syncEditorUpdate(binding, provider, update);
  });

  const observer = createRemoteApplier(provider, binding, { onDesync });
  const root = binding.root.getSharedType();
  root.observeDeep(observer);

  let stopped = false;
  return {
    stop() {
      if (stopped) return;
      stopped = true;
      unsubscribeUpdateListener();
      root.unobserveDeep(observer);
    },
  };
}
