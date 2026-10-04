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
import { registerCursorTheme } from './cursor_theme';

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
//   import { createConsumer } from "@anycable/web";
//   import { setConsumer } from "lexxy-realtime";
//   setConsumer(() => createConsumer());
//
// A consumer assigned directly on an element still wins.
export function setConsumer(consumerOrFactory) {
  configuredConsumer = consumerOrFactory;
}

function resolveConsumer() {
  if (typeof configuredConsumer === 'function') configuredConsumer = configuredConsumer();
  return configuredConsumer || (sharedConsumer ??= createConsumer());
}

// Node (SSR, unit tests) has no HTMLElement; the module must still load
// there, so only registration is browser-gated (see index.js).
const Base = typeof HTMLElement === 'undefined' ? class {} : HTMLElement;

export class Collaboration extends Base {
  #teardown = null;
  #ownsEverything = false;
  #lastRecoveryAt = 0;

  connectedCallback() {
    this.editorElement = this.closest('lexxy-editor');
    if (!this.editorElement) {
      console.error('<lexxy-collaboration> must be placed inside a <lexxy-editor>.');
      return;
    }
    this.editor = this.editorElement.editor;

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
    // The Yjs document id, used as the @lexical/yjs binding key.
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

    // A provider created here is connected and disconnected with the
    // element. A host-supplied provider keeps its own lifecycle:
    // disconnecting it on teardown broke DOM moves, which reconnect and
    // reuse it.
    const ownsProvider = !this.provider;
    const ownsDoc = !this.doc;
    const doc = this.doc || new Doc();
    const provider =
      this.provider ||
      new YrbyProvider(doc, this.consumer || resolveConsumer(), channelName, channelParams);
    // YrbyProvider does not auto-connect.
    if (ownsProvider) provider.connect();

    // Every presence operation goes through the provider, so cursor
    // re-rendering must listen on the provider's own Awareness instance.
    // A separate instance never sees awareness-only cursor moves.
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
    this.#ownsEverything = ownsProvider && ownsDoc;
    const unsubscribeListeners = registerCollaborationListeners(
      this.editor,
      provider,
      binding,
      (error) => this.#recoverFromDesync(error)
    );
    const cancelBootstrap = bootstrapWhenSynced(this.editor, provider, binding, initialEditorState);

    // Remote cursors/selections are rendered by @lexical/yjs (syncCursorPositions)
    // into a positioned overlay it manages via `binding.cursorsContainer`.
    registerCursorTheme(this.editor);
    const cursorsContainer = this.#createCursorsContainer();
    binding.cursorsContainer = cursorsContainer;

    // Seed local presence. Editor updates write the local selection to
    // awareness as Yjs relative positions, which stay correct across
    // concurrent edits. `focusing` stays true for the whole session:
    // @lexical/yjs only renders a peer's caret while their focusing flag
    // is true, and toggling it off on blur made peers vanish whenever
    // their window lost focus. Departed peers are removed by the
    // provider's presence removal and the awareness timeout.
    initLocalState(provider, name, color, true, { name, color });
    setLocalStateFocus(provider, name, color, true, { name, color });

    // Upload placeholders sync to peers, but only this client can finish
    // its own. Discards (pagehide, Turbo) remove ours; a lone client
    // sweeps orphans.
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
      if (ownsProvider) {
        provider.disconnect();
        this.provider = null;
      }
      if (ownsDoc) this.doc = null;
    };
  }

  // A remote update failed to apply (see createRemoteApplier). When this
  // element owns its document and provider, it heals itself: tear everything
  // down and re-init with a fresh Y.Doc and provider, so the server's full
  // state repopulates a fresh binding through the normal sync path — the only
  // event-driven way to rebuild, since Yjs never re-emits on the same doc,
  // and the one that also discards the poisoned collab offset caches. The
  // trade: edits not yet acked at the moment of desync are lost with the old
  // doc, and undo history resets — consistency over the unacked tail.
  //
  // A host-supplied document or provider cannot be swapped out from under the
  // host, so those setups only get the event; the host recreates the element
  // (or reloads) on 'lexxy-realtime:desync'. Rebuilds are rate-limited: a
  // fault that recurs immediately after a rebuild is permanent, and looping
  // teardown/init would thrash the server.
  #recoverFromDesync(error) {
    const canRebuild = this.#ownsEverything && Date.now() - this.#lastRecoveryAt > 15000;
    this.dispatchEvent(
      new CustomEvent('lexxy-realtime:desync', {
        bubbles: true,
        detail: { error, recovering: canRebuild },
      })
    );
    if (!canRebuild) return;

    this.#lastRecoveryAt = Date.now();
    // Deferred: the desync surfaces from inside the provider's own message
    // handling (observer -> Y.applyUpdate -> cable callback), and tearing the
    // provider down re-entrantly from that stack is asking for trouble.
    queueMicrotask(() => {
      this.#teardown?.();
      this.#init();
    });
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

// Seed only after the first sync, so an existing document loads through
// the Yjs->Lexical observer and is never overwritten. A still-empty
// document receives the captured Action Text body, or a fresh paragraph.
// Two clients opening a new document together can both seed; Lexical's
// CollaborationPlugin has the same check-then-act race, and its docs
// recommend seeding server-side, which needs HTML-to-Yjs conversion on
// the server. Local input before the first sync (typed text, an upload
// placeholder) also suppresses the captured seed.
// Repro: test/headless/bootstrap_race_repro.mjs.
//
// The returned canceller stops the fallback poll and makes a late
// whenSynced resolution a no-op.
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

// The Yjs->Lexical apply, wrapped so a throw cannot silently desync the
// editor. The failure mode without this: the observer fires from inside
// Y.applyUpdate, which y-protocols wraps in a catch-and-log — so by the time
// anything throws in Lexical's apply, the Y.Doc already holds the update, the
// exception is swallowed upstream, and this editor permanently shows less
// than the document (a reconnect is a doc no-op, so no observer ever fires
// again for the lost content). One throw also poisons the binding's collab
// offset caches, which can delete further visible text on later applies.
//
// onDesync fires once per binding — the recovery replaces the binding (and
// this observer with it), so a persistent fault surfaces once per rebuild
// rather than once per frame. `sync` is injectable for tests.
export function createRemoteApplier(provider, binding, { onDesync, sync = syncYjsChangesToLexical } = {}) {
  let desynced = false;
  return (events, transaction) => {
    if (transaction.origin === binding) return;
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

  const observer = createRemoteApplier(provider, binding, { onDesync });

  binding.root.getSharedType().observeDeep(observer);

  return () => {
    unsubscribeUpdateListener();
    binding.root.getSharedType().unobserveDeep(observer);
  };
}
