import { EditorBinding } from './editor_binding.js';
import { Cleanup } from './cleanup.js';
import { validateConsumer, validateDocument, validateProvider } from './connection.js';
export { setConsumer } from './connection.js';

const Base = typeof HTMLElement === 'undefined' ? class {} : HTMLElement;

export class Collaboration extends Base {
  #configuration = {};
  #state = { phase: 'detached' };
  #lastRecoveryAt = null;

  get status() { return this.#state.phase; }
  get consumer() { return this.#configuration.consumer; }
  set consumer(value) { this.configure({ ...this.#configuration, consumer: value }); }
  get doc() { return this.#state.session?.doc || this.#configuration.doc; }
  set doc(value) { this.configure({ ...this.#configuration, doc: value }); }
  get provider() { return this.#state.session?.provider || this.#configuration.provider; }
  set provider(value) { this.configure({ ...this.#configuration, provider: value }); }
  get awareness() { return this.provider?.awareness; }

  // Replace configuration atomically, including a document/provider pair.
  // Existing property setters use the same boundary for one-field changes.
  configure(options = {}) {
    if (!['detached', 'failed'].includes(this.status)) {
      throw new Error('Cannot reconfigure mounted collaboration. Remove the element before changing its inputs.');
    }
    for (const key of Object.keys(options)) {
      if (!['consumer', 'doc', 'provider'].includes(key)) throw new TypeError(`Unknown collaboration option: ${key}`);
    }
    const { consumer, doc, provider } = options;
    if (consumer != null) validateConsumer(consumer);
    if (doc != null) validateDocument(doc);
    if (provider != null) validateProvider(provider, doc);
    if (this.status === 'failed') {
      const { editorElement, editor, seed } = this.#state;
      this.#transition({ phase: 'failed', editorElement, editor, seed });
    }
    this.#configuration = { consumer: consumer ?? undefined, doc: doc ?? undefined, provider: provider ?? undefined };
  }

  connectedCallback() { this.#scheduleReconcile(); }
  disconnectedCallback() { this.#scheduleReconcile(); }

  // Same-turn DOM moves within one editor keep their binding and queued edits.
  // Every deferred action checks its owning state before it can do more work.
  #scheduleReconcile() { queueMicrotask(() => this.#reconcile()); }

  #reconcile({ seed = true } = {}) {
    const editorElement = this.closest('lexxy-editor');
    if (!this.isConnected) {
      this.#transition({ phase: 'detached' });
      return;
    }
    if (this.#state.editorElement === editorElement
        && this.#state.editor === editorElement?.editor
        && this.status !== 'detached') return;
    if (this.status !== 'detached') {
      this.#restart(seed);
      return;
    }
    if (!editorElement) {
      this.#setupFailed(new Error('<lexxy-collaboration> must be placed inside a <lexxy-editor>.'));
      return;
    }
    const editor = editorElement.editor;
    if (!editor) {
      const cleanup = new Cleanup();
      const waiting = { phase: 'waiting', editorElement, editor, cleanup };
      const initialize = () => {
        if (this.#state === waiting) this.#reconcile();
      };
      editorElement.addEventListener('lexxy:initialize', initialize);
      cleanup.add(() => editorElement.removeEventListener('lexxy:initialize', initialize));
      this.#transition(waiting);
      return;
    }
    const cleanup = new Cleanup();
    const starting = { phase: 'starting', editorElement, editor, cleanup };
    this.#transition(starting);
    try {
      const session = new EditorBinding({
        ...this.#options(), editorElement, editor, seed,
      }, error => this.#desync(session, error));
      starting.session = session;
      cleanup.add(() => session.close());
      session.start();
      if (this.#state === starting) this.#state = { ...starting, phase: 'active' };
    } catch (error) {
      if (this.#state === starting) this.#setupFailed(error, editorElement, editor);
    }
  }

  #options() {
    // Attributes are a mount-time configuration, just like doc/provider.
    let channelParams = {};
    if (!this.#configuration.provider) {
      channelParams = JSON.parse(this.getAttribute('channel-params') || '{}');
      if (!channelParams || Array.isArray(channelParams) || typeof channelParams !== 'object') {
        throw new TypeError('channel-params must be a JSON object.');
      }
    }
    return {
      ...this.#configuration,
      id: this.getAttribute('doc-id') || 'main',
      name: this.getAttribute('name') || 'Example User',
      color: this.getAttribute('color') || '#958DF1',
      channelName: this.getAttribute('channel-name') || 'SyncChannel',
      channelParams,
    };
  }

  #transition(next) {
    const previous = this.#state;
    this.#state = next;
    previous.cleanup?.close();
  }

  #setupFailed(error, editorElement, editor) {
    this.#transition({ phase: 'failed', editorElement, editor });
    this.dispatchEvent(new CustomEvent('lexxy-realtime:error', { bubbles: true, detail: { error } }));
    console.error('lexxy-realtime: could not start collaboration.', error);
  }

  #desync(session, error) {
    if (this.#state.session !== session) return;
    const now = Date.now();
    const recovering = session.canRecover && (this.#lastRecoveryAt === null || now - this.#lastRecoveryAt > 15000);
    if (recovering) this.#lastRecoveryAt = now;
    const failed = { ...this.#state, seed: false, phase: recovering ? 'recovering' : 'failed' };
    this.#state = failed;
    // Prevent edits that look saved while the poisoned binding is stopped.
    const wasEditable = failed.editor.isEditable();
    failed.editor.setEditable(false);
    failed.cleanup.add(() => { if (wasEditable) failed.editor.setEditable(true); });
    this.dispatchEvent(new CustomEvent('lexxy-realtime:desync', { bubbles: true, detail: { error, recovering } }));
    queueMicrotask(() => {
      if (this.#state !== failed) return;
      session.close({ discard: true });
      if (recovering) {
        this.#restart(false);
      } else if (!this.isConnected) {
        this.#transition({ phase: 'detached' });
      }
    });
  }

  // Explicit retry after fixing a setup error or replacing host-owned inputs.
  retry() {
    if (this.status !== 'failed') return;
    this.#restart(this.#state.seed ?? true);
  }

  #restart(seed) {
    const editorElement = this.closest('lexxy-editor');
    const restarting = { phase: 'starting', editorElement, editor: editorElement?.editor };
    this.#transition(restarting);
    // Yrby defers unsubscribe. Finish it before subscribing to the same
    // channel again, or Rails may never confirm the replacement provider.
    queueMicrotask(() => {
      if (this.#state !== restarting) return;
      this.#state = { phase: 'detached' };
      this.#reconcile({ seed });
    });
  }
}
