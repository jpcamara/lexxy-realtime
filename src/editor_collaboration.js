import {
  createBinding,
  syncLexicalUpdateToYjs,
  syncYjsChangesToLexical,
  initLocalState
} from '@lexical/yjs';
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

    // Bind the editor to Yjs and register the editor<->Yjs sync listeners
    // before touching awareness, so the first updates are observed.
    const binding = createBinding(this.editor, provider, id, doc, docMap);
    const unsubscribeListeners = registerCollaborationListeners(this.editor, provider, binding);

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