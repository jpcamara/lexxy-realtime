import { createBinding, syncLexicalUpdateToYjs, syncCursorPositions, initLocalState } from '@lexical/yjs';
import { $getRoot, HISTORY_MERGE_TAG, COLLABORATION_TAG } from 'lexical';
import { attachmentExclusions, patchCollabElementSplice } from './attachment_sync.js';
import { registerUploadCleanup } from './upload_cleanup.js';
import { registerCursorTheme } from './cursor_theme.js';
import { bootstrapWhenSynced } from './bootstrap.js';
import { createRemoteApplier } from './remote_applier.js';
import { openConnection } from './connection.js';
import { Cleanup } from './cleanup.js';
import { Lifecycle } from './lifecycle.js';

const editors = new WeakMap();
const documents = new WeakMap();

export class EditorBinding {
  #cleanup = new Cleanup();
  #listeners = new Cleanup();
  #lifecycle = new Lifecycle('EditorBinding', 'new', {
    new: { start: 'active', close: 'closed' },
    active: { fail: 'failed', close: 'closed' },
    failed: { close: 'closed' },
    closed: {},
  });
  #connection;

  constructor(options, onDesync) {
    this.options = options;
    this.onDesync = onDesync;
  }

  get doc() { return this.#connection?.doc; }
  get provider() { return this.#connection?.provider; }
  get canRecover() { return this.#connection?.canRecover ?? false; }

  start() {
    if (this.#lifecycle.phase !== 'new') return;
    this.#lifecycle.transition('start');
    const { editorElement, editor, id, name, color, seed = true } = this.options;
    let initialState;
    let changedEditor = false;
    try {
      if (editors.has(editor)) throw new Error('This editor already has a collaboration binding.');
      this.#connection = openConnection(this.options);
      const { doc, provider } = this.#connection;
      // @lexical/yjs stores binding-specific node caches directly on the Y.Doc.
      if (documents.has(doc)) throw new Error('This Y.Doc already has a collaboration binding; use a separate document per editor.');
      editors.set(editor, this);
      documents.set(doc, this);
      this.#cleanup.add(() => editors.delete(editor));
      this.#cleanup.add(() => documents.delete(doc));

      initialState = editor.getEditorState();
      changedEditor = true;
      editor.update(() => $getRoot().clear(), { tag: HISTORY_MERGE_TAG, discrete: true });
      const binding = createBinding(editor, provider, id, doc, new Map([[id, doc]]), attachmentExclusions(editor));
      this.#cleanup.add(() => releaseBinding(binding));
      patchCollabElementSplice(binding);
      registerCursorTheme(editor);
      const cursors = createCursorsContainer(editorElement);
      this.#cleanup.add(() => cursors.remove());
      binding.cursorsContainer = cursors;

      // Existing state needs an explicit first render: Yjs never re-emits old
      // updates when an already-synced host provider is mounted or remounted.
      editor.update(() => {
        binding.root.syncPropertiesFromYjs(binding, null);
        binding.root.applyChildrenYjsDelta(binding, binding.root.getSharedType().toDelta());
        binding.root.syncChildrenFromYjs(binding);
      }, { tag: COLLABORATION_TAG, discrete: true });

      this.#listeners.add(editor.registerUpdateListener(
        ({ dirtyElements, dirtyLeaves, editorState, normalizedNodes, prevEditorState, tags }) => {
          if (this.#lifecycle.phase !== 'active' || tags.has('skip-collab')) return;
          editorState.read(() => syncLexicalUpdateToYjs(
            binding, provider, prevEditorState, editorState, dirtyElements, dirtyLeaves, normalizedNodes, tags
          ));
        }
      ));
      const observer = createRemoteApplier(provider, binding, { onDesync: error => this.#fail(error) });
      const root = binding.root.getSharedType();
      root.observeDeep(observer);
      this.#listeners.add(() => root.unobserveDeep(observer));
      this.#listeners.add(bootstrapWhenSynced(editor, provider, binding, seed ? initialState : null));

      initLocalState(provider, name, color, true, { name, color });
      this.#listeners.add(registerUploadCleanup({ editorElement, editor, provider, doc }));
      const renderCursors = () => {
        if (this.#lifecycle.phase === 'active') syncCursorPositions(binding, provider);
      };
      provider.awareness.on('update', renderCursors);
      this.#listeners.add(() => provider.awareness.off('update', renderCursors));
      this.#listeners.add(editor.registerUpdateListener(renderCursors));
      renderCursors();
      this.#connection.connect();
    } catch (error) {
      this.close();
      if (changedEditor && !initialState.isEmpty()) editor.setEditorState(initialState);
      throw error;
    }
  }

  #fail(error) {
    if (this.#lifecycle.phase !== 'active') return;
    this.#lifecycle.transition('fail');
    this.#listeners.close();
    this.onDesync(error);
  }

  close(options) {
    if (this.#lifecycle.phase === 'closed') return;
    const discard = options?.discard ?? this.#lifecycle.phase === 'failed';
    this.#lifecycle.transition('close');
    this.#listeners.close();
    this.#cleanup.close();
    this.#connection?.close({ discard });
  }
}

function createCursorsContainer(editorElement) {
  const host = editorElement.querySelector('.lexxy-editor-container') || editorElement;
  if (getComputedStyle(host).position === 'static') host.style.position = 'relative';
  const container = editorElement.ownerDocument.createElement('div');
  container.className = 'lexxy-collab-cursors';
  container.style.cssText = 'position:absolute;inset:0;pointer-events:none;';
  host.appendChild(container);
  return container;
}

function releaseBinding(binding) {
  // Lexical's destroy() clears the map but leaves _collabNode caches on Yjs
  // types. Reusing those with a new binding duplicates child offsets on remount.
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
