import {
  createBinding,
  syncLexicalUpdateToYjs,
  syncYjsChangesToLexical,
  initLocalState,
  syncCursorPositions
} from '@lexical/yjs';
import { Doc } from 'yjs';
import { Awareness } from 'y-protocols/awareness';
import { consumer } from './consumer';
import { WebsocketProvider } from "@y-rb/actioncable";
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
    const opts = {};
    const name = 'Example User';
    const color = '#958DF1';

    const id = 'main';
    const doc = new Doc();
    const awareness = new Awareness(doc);

    // const docMap = new Map([[id, doc]]);
    const docMap = new Map();
    docMap.set(id, doc);

    const provider = new WebsocketProvider(doc, consumer, "SyncChannel", { id: "2" }, { awareness, disableBc: true });

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