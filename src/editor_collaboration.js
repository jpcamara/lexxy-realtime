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
import { Awareness } from 'y-protocols/awareness';
import { YrbLiteProvider } from './yrb_lite_provider';

export class Collaboration extends HTMLElement {
  #teardown = null;

  connectedCallback() {
    this.editorElement = this.closest('lexxy-editor');
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

  async #init() {
    const id = this.getAttribute('id') || 'main';
    const name = this.getAttribute('name') || 'Example User';
    const color = this.getAttribute('color') || '#958DF1';
    const channelName = this.getAttribute('channel-name') || 'SyncChannel';
    const rawParams = this.getAttribute('channel-params') || '{}';
    const channelParams = typeof rawParams === 'string' ? JSON.parse(rawParams) : rawParams;

    const doc = this.doc || new Doc();
    const awareness = this.awareness || new Awareness(doc);
    const provider =
      this.provider || new YrbLiteProvider(doc, this.consumer, channelName, channelParams, { awareness });

    const docMap = new Map();
    docMap.set(id, doc);

    // Start the editor empty so Lexical and the Yjs collab tree align at bind
    // time. Lexxy otherwise seeds a paragraph that the binding never captures,
    // and @lexical/yjs >= 0.44 then silently refuses to sync edits. New docs are
    // seeded once the first sync confirms the doc is empty (see
    // bootstrapWhenSynced); existing docs are loaded by the Yjs->Lexical observer.
    this.editor.update(() => $getRoot().clear(), { tag: HISTORY_MERGE_TAG, discrete: true });

    const binding = createBinding(this.editor, provider, id, doc, docMap);
    const unsubscribeListeners = registerCollaborationListeners(this.editor, provider, binding);
    bootstrapWhenSynced(this.editor, provider, binding);

    // Remote cursors/selections are rendered by @lexical/yjs (syncCursorPositions)
    // into a positioned overlay it manages via `binding.cursorsContainer`.
    const cursorsContainer = this.#createCursorsContainer();
    binding.cursorsContainer = cursorsContainer;

    // Seed local presence (identity + focus). The local cursor's anchor/focus is
    // written to awareness by syncLexicalUpdateToYjs on every editor update, as
    // Yjs relative positions that stay correct across concurrent edits.
    initLocalState(provider, name, color, true, { name, color });
    setLocalStateFocus(provider, name, color, true, { name, color });

    // Toggle our `focusing` flag on focus/blur so peers hide our caret when we
    // click away (syncCursorPositions only renders focusing peers).
    const rootElement = this.editor.getRootElement();
    const onFocus = () => setLocalStateFocus(provider, name, color, true, { name, color });
    const onBlur = () => setLocalStateFocus(provider, name, color, false, { name, color });
    rootElement?.addEventListener('focus', onFocus);
    rootElement?.addEventListener('blur', onBlur);

    // Re-render remote cursors when presence changes or the document reflows.
    const renderCursors = () => syncCursorPositions(binding, provider);
    awareness.on('update', renderCursors);
    const unsubscribeCursorRender = this.editor.registerUpdateListener(renderCursors);
    syncCursorPositions(binding, provider); // initial paint of anyone already present

    this.provider = provider;
    this.binding = binding;
    this.#teardown = () => {
      this.#teardown = null;
      rootElement?.removeEventListener('focus', onFocus);
      rootElement?.removeEventListener('blur', onBlur);
      awareness.off('update', renderCursors);
      unsubscribeCursorRender();
      unsubscribeListeners();
      cursorsContainer.remove();
      provider.disconnect();
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

// Once the provider reports its first sync, seed a brand-new (empty) document
// with an initial paragraph -- the equivalent of @lexical/react's
// CollaborationPlugin bootstrap. Doing it post-sync (not at bind time) means an
// existing document is loaded by the Yjs->Lexical observer first, so we never
// push a stray paragraph onto a doc that already has content.
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
