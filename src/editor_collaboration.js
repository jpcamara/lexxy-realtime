import {
  createBinding,
  syncLexicalUpdateToYjs,
  syncYjsChangesToLexical,
  initLocalState
} from '@lexical/yjs';
import { $getRoot, $createParagraphNode, HISTORY_MERGE_TAG } from 'lexical';
import { Doc } from 'yjs';
import { Awareness } from 'y-protocols/awareness';
import { YrbLiteProvider } from './yrb_lite_provider';
import { LexxyCursorManager, syncLocalCursorPosition } from './lexxy-cursor-manager';

export class Collaboration extends HTMLElement {
  connectedCallback() {
    this.editorElement = this.closest("lexxy-editor")
    this.editor = this.editorElement.editor

    // Init now if the editor is already present, otherwise wait for it.
    if (this.editor) {
      this.#init();
    } else {
      this.editorElement.addEventListener('lexxy:initialize', () => {
        this.editor = this.editorElement.editor;
        this.#init();
      }, { once: true });
    }
  }

  disconnectedCallback() {
    // Clean up when element is removed
    if (this.cursorManager) {
      this.cursorManager.destroy();
    }
    if (this.unsubscribeCursorSync) {
      this.unsubscribeCursorSync();
    }
    if (this.unsubscribeListeners) {
      this.unsubscribeListeners();
    }
    if (this.provider) {
      this.provider.disconnect();
    }
  }

  async #init() {
    // Get configurable values from attributes or use defaults
    const id = this.getAttribute('id') || 'main';
    const name = this.getAttribute('name') || 'Example User';
    const color = this.getAttribute('color') || '#958DF1';
    const channelName = this.getAttribute('channel-name') || 'SyncChannel';
    const rawParams = this.getAttribute('channel-params') || '{}';
    const channelParams = typeof rawParams === 'string' ? JSON.parse(rawParams) : rawParams;
    const disableBc = this.hasAttribute('disable-bc') 
      ? this.getAttribute('disable-bc') !== 'false' 
      : true;

    const doc = this.doc || new Doc();
    const awareness = this.awareness || new Awareness(doc);
    const provider = this.provider ||
      new YrbLiteProvider(doc, this.consumer, channelName, channelParams, { awareness, disableBc });

    const docMap = new Map();
    docMap.set(id, doc);

    // Start the editor empty so Lexical and the Yjs collab tree align at bind
    // time. Lexxy otherwise seeds a paragraph that the binding never captures,
    // and @lexical/yjs >= 0.44 then silently refuses to sync edits. New docs are
    // seeded once the first sync confirms the doc is empty (see
    // bootstrapWhenSynced); existing docs are loaded by the Yjs->Lexical observer.
    this.editor.update(() => { $getRoot().clear(); }, { tag: HISTORY_MERGE_TAG, discrete: true });

    // Bind the editor to Yjs and register the editor<->Yjs sync listeners
    // before touching awareness, so the first updates are observed.
    const binding = createBinding(this.editor, provider, id, doc, docMap);
    const unsubscribeListeners = registerCollaborationListeners(this.editor, provider, binding);
    bootstrapWhenSynced(this.editor, provider, binding);

    // Seed local presence: user identity + a heartbeat the cursor manager uses
    // to reap inactive peers. initLocalState may set the user field itself, so
    // set ours afterwards to be authoritative.
    initLocalState(provider, name, color, true, { name, color });
    awareness.setLocalStateField('user', { name, color });
    awareness.setLocalStateField('lastSeen', Date.now());

    const containerElement = this.editorElement.querySelector('.lexxy-editor-container') || this.editorElement;
    this.cursorManager = new LexxyCursorManager(this.editor, provider, containerElement);

    // Sync local cursor position to awareness
    this.unsubscribeCursorSync = syncLocalCursorPosition(this.editor, provider);

    // Store references for cleanup
    this.provider = provider;
    this.binding = binding;
    this.unsubscribeListeners = unsubscribeListeners;
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
      editor.update(() => {
        const root = $getRoot();
        root.clear();
        root.append($createParagraphNode());
      }, { tag: HISTORY_MERGE_TAG });
    }
  };
  const timer = setInterval(seed, 50);
  if (typeof timer?.unref === 'function') timer.unref();
}

function registerCollaborationListeners(
  editor,
  provider,
  binding,
) {
  // Skip first update to avoid premature access
  let skipInitialUpdate = false;

  const unsubscribeUpdateListener = editor.registerUpdateListener(
    ({
      dirtyElements,
      dirtyLeaves,
      editorState,
      normalizedNodes,
      prevEditorState,
      tags,
    }) => {
      if (skipInitialUpdate) {
        skipInitialUpdate = false;
        return;
      }

      // console.log(dirtyElements, dirtyLeaves, editorState, normalizedNodes, prevEditorState, tags);
      editor.getEditorState().read(() => {
        // console.log(args);
        if (tags.has('skip-collab') === false) {
          syncLexicalUpdateToYjs(
            binding,
            provider,
            prevEditorState,
            editorState,
            dirtyElements,
            dirtyLeaves,
            normalizedNodes,
            tags,
          );
        }
      });
    },
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