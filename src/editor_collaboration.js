import { EditorBinding } from './editor_binding.js';
import { Cleanup } from './cleanup.js';
import { Lifecycle } from './lifecycle.js';
import { validateConsumer, validateDocument, validateProvider } from './connection.js';
export { setConsumer } from './connection.js';

const Base = typeof HTMLElement === 'undefined' ? class {} : HTMLElement;

export class Collaboration extends Base {
  #configuration = {};
  #lifecycle = new Lifecycle('Collaboration', 'detached', {
    detached: { wait: 'waiting', start: 'starting', setupFailed: 'failed', detach: 'detached' },
    waiting: { restart: 'restarting', detach: 'detached' },
    restarting: { released: 'detached', restart: 'restarting', detach: 'detached' },
    starting: { started: 'active', setupFailed: 'failed', recover: 'recovering', fail: 'failed', restart: 'restarting', detach: 'detached' },
    active: { recover: 'recovering', fail: 'failed', restart: 'restarting', detach: 'detached' },
    recovering: { restart: 'restarting', detach: 'detached' },
    failed: { configure: 'failed', restart: 'restarting', detach: 'detached' },
  });
  get #state() { return this.#lifecycle.current; }
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
      this.#transition('configure', { editorElement, editor, seed });
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
      this.#transition('detach');
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
      const waiting = this.#transition('wait', { editorElement, editor, cleanup });
      const initialize = () => {
        if (this.#state === waiting) this.#reconcile();
      };
      editorElement.addEventListener('lexxy:initialize', initialize);
      cleanup.add(() => editorElement.removeEventListener('lexxy:initialize', initialize));
      return;
    }
    let starting;
    try {
      const session = new EditorBinding({
        ...this.#options(), editorElement, editor, seed,
      }, error => this.#desync(session, error));
      const cleanup = new Cleanup();
      cleanup.add(() => session.close());
      starting = this.#transition('start', { editorElement, editor, cleanup, session });
      session.start();
      if (this.#state === starting) this.#transition('started');
    } catch (error) {
      if (!starting || this.#state === starting) this.#setupFailed(error, editorElement, editor);
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

  #transition(event, details = {}) {
    const previous = this.#state;
    // Activation and desync keep the current binding lifetime. All other
    // events release it. Commit first so cleanup callbacks see the new phase.
    const retained = ['started', 'recover', 'fail'].includes(event) ? previous : {};
    const next = this.#lifecycle.transition(event, { ...retained, ...details });
    if (previous.cleanup !== next.cleanup) previous.cleanup?.close();
    return next;
  }

  #setupFailed(error, editorElement, editor) {
    this.#transition('setupFailed', { editorElement, editor });
    this.dispatchEvent(new CustomEvent('lexxy-realtime:error', { bubbles: true, detail: { error } }));
    console.error('lexxy-realtime: could not start collaboration.', error);
  }

  #desync(session, error) {
    if (this.#state.session !== session || !['starting', 'active'].includes(this.status)) return;
    const now = Date.now();
    const recovering = session.canRecover && (this.#lastRecoveryAt === null || now - this.#lastRecoveryAt > 15000);
    if (recovering) this.#lastRecoveryAt = now;
    const failed = this.#transition(recovering ? 'recover' : 'fail', { seed: false });
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
        this.#transition('detach');
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
    const restarting = this.#transition('restart', { editorElement, editor: editorElement?.editor });
    // Yrby defers unsubscribe. Finish it before subscribing to the same
    // channel again, or Rails may never confirm the replacement provider.
    queueMicrotask(() => {
      if (this.#state !== restarting) return;
      this.#transition('released');
      this.#reconcile({ seed });
    });
  }
}
