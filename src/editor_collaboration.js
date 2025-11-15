import {
  createBinding,
  syncLexicalUpdateToYjs,
  syncYjsChangesToLexical,
  initLocalState
} from '@lexical/yjs';
import { Doc } from 'yjs';
import { Awareness } from 'y-protocols/awareness';
import { CustomYjsProvider } from './custom_yjs_provider';
import { LexxyCursorManager, syncLocalCursorPosition } from './lexxy-cursor-manager';

export class Collaboration extends HTMLElement {
  connectedCallback() {
    this.editorElement = this.closest("lexxy-editor")
    this.editor = this.editorElement.editor

    // Check if editor is already initialized or wait for it
    if (this.editor && this.editor.isReady && this.editor.isReady()) {
      console.log('Editor already initialized, starting collaboration');
      this.#init();
    } else if (this.editor) {
      // Editor exists but might not be ready, just init
      console.log('Editor exists, starting collaboration');
      this.#init();
    } else {
      // No editor yet, wait for initialization event
      this.editorElement.addEventListener(`lexxy:initialize`, (...args) => {
        console.log('Editor initialized event, starting collaboration', args);
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
    const provider = this.provider || new CustomYjsProvider(doc, this.consumer, channelName, channelParams, { awareness });

    // const docMap = new Map([[id, doc]]);
    const docMap = new Map();
    docMap.set(id, doc);

    // Create binding first to initialize Yjs types
    const binding = createBinding(this.editor, provider, id, doc, docMap);

    // Register collaboration listeners before other initialization
    const unsubscribeListeners = registerCollaborationListeners(this.editor, provider, binding);

    // Set user state in awareness BEFORE initLocalState
    awareness.setLocalStateField('user', {
      name: name,
      color: color,
    });

    // Set initial heartbeat timestamp
    awareness.setLocalStateField('lastSeen', Date.now());

    // Initialize local state with the same user info
    // This function might override our user settings, so let's set them again after
    initLocalState(provider, name, color, true, { name, color });

    // Set user state again to make sure it persists
    awareness.setLocalStateField('user', {
      name: name,
      color: color,
    });

    // Set heartbeat again to ensure it's present
    awareness.setLocalStateField('lastSeen', Date.now());

    // Use our custom cursor manager instead of the React-based one
    // syncCursorPositions(binding, provider, { cursorBuilder: undefined });

    // Initialize the custom cursor manager after provider is connected
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