import { $getRoot, $createParagraphNode, $createTextNode } from 'lexical';
import { Awareness } from 'y-protocols/awareness';
import { Doc, XmlText } from 'yjs';

const tick = () => new Promise(resolve => setTimeout(resolve, 0));
const assert = (condition, message) => { if (!condition) throw new Error(message); };
async function until(condition) {
  const deadline = Date.now() + 12000;
  while (!condition()) {
    if (Date.now() > deadline) throw new Error('Condition timed out: ' + condition);
    await new Promise(resolve => setTimeout(resolve, 25));
  }
}
function text(editor) { return editor.editor.getEditorState().read(() => $getRoot().getTextContent()); }
function write(editor, value) {
  editor.editor.update(() => $getRoot().clear().append($createParagraphNode().append($createTextNode(value))), { discrete: true });
}
function fault(editor, doc) {
  const original = editor.editor.update;
  editor.editor.update = function (fn, options) {
    if (options?.tag === 'collaboration') throw new Error('injected remote apply fault');
    return original.call(this, fn, options);
  };
  try { doc.transact(() => doc.get('root', XmlText).setAttribute('testFault', Date.now()), 'remote'); }
  finally { editor.editor.update = original; }
}

// Hold real ACK envelopes at the transport boundary, without reaching into a
// provider's delivery/session implementation. Other inbound messages keep flowing.
function acknowledgementGate(consumer) {
  let holding = false;
  const held = [];
  return {
    consumer: {
      subscriptions: {
        create(params, callbacks) {
          return consumer.subscriptions.create(params, {
            ...callbacks,
            received(message) {
              const deliver = () => callbacks.received.call(this, message);
              if (holding && message?.ack !== undefined) held.push(deliver);
              else deliver();
            },
          });
        },
      },
    },
    hold() { holding = true; },
    get pending() { return held.length; },
    release() {
      holding = false;
      for (const deliver of held.splice(0)) deliver();
    },
  };
}

export function contractScenarios({ consumer, makeEditor }) {
  // Each case cleans up even when an assertion fails; no case can pass by
  // inheriting another case's provider, editor, or timers.
  const scenario = fn => async () => {
    const dispose = [];
    async function mount({ owned = false, synced = true, append = true, provider, doc, consumer: cableConsumer = consumer } = {}) {
      const editor = await makeEditor();
      const collab = document.createElement('lexxy-collaboration');
      if (!owned) {
        doc ||= provider?.doc || new Doc();
        provider ||= { doc, awareness: new Awareness(doc), synced };
        collab.doc = doc;
        collab.provider = provider;
        dispose.push(() => { provider.awareness.destroy(); doc.destroy(); });
      }
      collab.consumer = cableConsumer;
      collab.setAttribute('channel-name', 'DocumentChannel');
      collab.setAttribute('channel-params', JSON.stringify({ id: `contract-${crypto.randomUUID()}` }));
      dispose.push(() => editor.remove());
      if (append) {
        editor.appendChild(collab);
        await until(() => collab.status === 'active');
        if (owned) await until(() => collab.provider.synced);
        await tick();
      }
      return { editor, collab, doc: collab.doc, provider: collab.provider };
    }
    try { await fn({ mount, dispose }); return { passed: true }; }
    finally { for (const cleanup of dispose.reverse()) cleanup(); await tick(); }
  };

  return {
    publicConfiguration: scenario(async ({ mount }) => {
      const { collab, doc, provider } = await mount();
      for (const [name, value] of [['doc', doc], ['provider', provider], ['consumer', consumer], ['awareness', provider.awareness], ['status', 'detached']]) {
        let rejected = false;
        try { collab[name] = value; } catch { rejected = true; }
        assert(rejected, `${name} was writable while active`);
      }
      let rejected = false;
      try { collab.configure({ doc, provider }); } catch { rejected = true; }
      assert(rejected, 'configure replaced active resources');
      assert(collab.doc === doc && collab.provider === provider && collab.status === 'active', 'configuration drifted');
    }),
    providerDocument: scenario(async ({ mount, dispose }) => {
      const { editor, collab, provider } = await mount({ append: false });
      collab.doc = undefined;
      editor.appendChild(collab);
      await tick();
      assert(collab.doc === provider.doc && collab.status === 'active', 'provider document was not inferred');
      const other = new Doc();
      dispose.push(() => other.destroy());
      const second = document.createElement('lexxy-collaboration');
      second.doc = other;
      let rejected = false;
      try { second.provider = provider; } catch { rejected = true; }
      assert(rejected && !second.provider && second.doc === other, 'mismatch changed configuration');
    }),
    duplicateEditor: scenario(async ({ mount }) => {
      const { editor, collab } = await mount();
      write(editor, 'KEEP THIS');
      const second = document.createElement('lexxy-collaboration');
      editor.appendChild(second);
      await tick();
      assert(second.status === 'failed', 'second binding mounted');
      assert(collab.status === 'active' && text(editor) === 'KEEP THIS', 'duplicate disturbed original');
      assert(editor.querySelectorAll('.lexxy-collab-cursors').length === 1, 'duplicate cursor overlay');
    }),
    duplicateDocument: scenario(async ({ mount }) => {
      const first = await mount();
      write(first.editor, 'FIRST');
      const second = await mount({ append: false, provider: first.provider });
      write(second.editor, 'SECOND');
      second.editor.appendChild(second.collab);
      await tick();
      assert(second.collab.status === 'failed' && text(second.editor) === 'SECOND', 'shared doc cleared second editor');
      assert(text(first.editor) === 'FIRST', 'shared doc disturbed original');
    }),
    populatedRemount: scenario(async ({ mount }) => {
      const { editor, collab, doc } = await mount();
      write(editor, 'SURVIVES');
      for (let i = 0; i < 3; i++) {
        collab.remove();
        await tick();
        assert(collab.status === 'detached', 'did not detach');
        editor.appendChild(collab);
        await tick();
        assert(text(editor) === 'SURVIVES', 'remount lost existing document');
        assert(doc.get('root', XmlText).length === 1, 'remount duplicated root children');
      }
      write(editor, 'AFTER REMOUNTS');
      assert(doc.get('root', XmlText).toString().includes('AFTER REMOUNTS'), 'remounted binding cannot write');
    }),
    sameTurnMove: scenario(async ({ mount }) => {
      const { editor, collab, doc, provider } = await mount({ owned: true });
      write(editor, 'MOVE');
      collab.remove();
      editor.appendChild(collab);
      await tick();
      assert(collab.provider === provider && collab.doc === doc, 'same-turn move replaced resources');
      assert(text(editor) === 'MOVE', 'same-turn move changed content');
    }),
    delayedInitialization: scenario(async ({ mount }) => {
      const { editor, collab } = await mount({ owned: true, append: false });
      const lexical = editor.editor;
      Object.defineProperty(editor, 'editor', { configurable: true, value: undefined });
      editor.appendChild(collab);
      await tick();
      assert(collab.status === 'waiting', 'did not take delayed initialize path');
      collab.remove();
      await tick();
      Object.defineProperty(editor, 'editor', { configurable: true, value: lexical });
      editor.dispatchEvent(new CustomEvent('lexxy:initialize'));
      await tick();
      assert(collab.status === 'detached' && !collab.provider, 'late initialize mounted detached element');
      editor.appendChild(collab);
      await until(() => collab.status === 'active' && collab.provider.synced);
      assert(editor.querySelectorAll('.lexxy-collab-cursors').length === 1, 'stale initialize duplicated binding');
    }),
    initializeWhileWaiting: scenario(async ({ mount }) => {
      const { editor, collab } = await mount({ append: false });
      write(editor, 'WAITED FOR INITIALIZATION');
      const lexical = editor.editor;
      Object.defineProperty(editor, 'editor', { configurable: true, value: undefined });
      editor.appendChild(collab);
      await tick();
      assert(collab.status === 'waiting', 'did not wait for editor initialization');
      Object.defineProperty(editor, 'editor', { configurable: true, value: lexical });
      editor.dispatchEvent(new CustomEvent('lexxy:initialize'));
      assert(collab.status === 'restarting', 'initialization did not release the waiting scope');
      editor.dispatchEvent(new CustomEvent('lexxy:initialize'));
      await until(() => collab.status === 'active');
      assert(text(editor) === 'WAITED FOR INITIALIZATION', 'initialization lost the captured content');
      assert(editor.querySelectorAll('.lexxy-collab-cursors').length === 1, 'repeated initialization duplicated the binding');
    }),
    recoveryRemoval: scenario(async ({ mount }) => {
      const { editor, collab, doc } = await mount({ owned: true });
      let events = 0;
      collab.addEventListener('lexxy-realtime:desync', () => { events++; collab.remove(); });
      fault(editor, doc);
      await tick();
      assert(events === 1 && collab.status === 'detached' && !collab.provider, 'queued recovery resurrected element');
      await until(() => doc.isDestroyed);
      assert(!editor.querySelector('.lexxy-collab-cursors'), 'removed recovery leaked overlay');
    }),
    automaticRecovery: scenario(async ({ mount }) => {
      const { editor, collab, doc, provider } = await mount({ owned: true });
      write(editor, 'DURABLE RECOVERY');
      await until(() => !provider.hasPending);
      let recovering;
      collab.addEventListener('lexxy-realtime:desync', event => { recovering = event.detail.recovering; });
      fault(editor, doc);
      await until(() => collab.status === 'active' && collab.doc !== doc && collab.provider.synced).catch(error => { throw new Error(`${error.message}; status=${collab.status}, sameDoc=${collab.doc === doc}, provider=${collab.provider?.status}, oldDestroyed=${doc.isDestroyed}`); });
      assert(recovering && doc.isDestroyed && text(editor) === 'DURABLE RECOVERY', 'recovery lost persisted content');
      assert(editor.editor.isEditable(), 'recovery did not restore editability');
      // An immediately recurring fault must stop, not repeatedly reconnect.
      const recoveredDoc = collab.doc;
      fault(editor, recoveredDoc);
      await tick();
      assert(collab.status === 'failed' && recovering === false, 'recovery rate limit failed');
      assert(!editor.editor.isEditable(), 'failed binding still accepts edits');
    }),
    hostRecovery: scenario(async ({ mount }) => {
      const { editor, collab, doc, provider } = await mount();
      write(editor, 'HOST CONTENT');
      fault(editor, doc);
      await tick();
      assert(collab.status === 'failed' && !editor.editor.isEditable(), 'host failure not explicit');
      assert(!doc.isDestroyed && collab.provider === provider, 'host resources destroyed');
      collab.retry();
      await tick();
      assert(collab.status === 'active' && editor.editor.isEditable() && text(editor) === 'HOST CONTENT', 'host retry failed');
    }),
    retryInsideDesync: scenario(async ({ mount, dispose }) => {
      const { editor, collab, doc, provider } = await mount();
      const replacementDoc = new Doc();
      const replacement = { doc: replacementDoc, awareness: new Awareness(replacementDoc), synced: true };
      dispose.push(() => { replacement.awareness.destroy(); replacementDoc.destroy(); });
      let duringRetry;
      let reconfigurationRejected = false;
      collab.addEventListener('lexxy-realtime:desync', () => {
        collab.configure({ doc: replacementDoc, provider: replacement });
        collab.retry();
        collab.retry();
        duringRetry = collab.status;
        try { collab.configure({ doc, provider }); } catch { reconfigurationRejected = true; }
      }, { once: true });
      fault(editor, doc);
      await until(() => collab.status === 'active');
      assert(duringRetry === 'restarting' && reconfigurationRejected, 'restart was not an exclusive phase');
      assert(collab.doc === replacementDoc && collab.provider === replacement, 'stale fault work replaced new binding');
      assert(!doc.isDestroyed && editor.editor.isEditable(), 'retry lost host ownership or editability');
      assert(editor.querySelectorAll('.lexxy-collab-cursors').length === 1, 'retry duplicated binding');
      write(editor, 'AFTER REENTRANT RETRY');
      assert(replacementDoc.get('root', XmlText).toString().includes('AFTER REENTRANT RETRY'), 'replacement cannot publish edits');
    }),
    removeInsideRetry: scenario(async ({ mount }) => {
      const { editor, collab, doc } = await mount();
      collab.addEventListener('lexxy-realtime:desync', () => {
        collab.retry();
        collab.remove();
      }, { once: true });
      fault(editor, doc);
      await tick();
      collab.retry();
      collab.disconnectedCallback();
      await tick();
      assert(collab.status === 'detached' && !doc.isDestroyed, 'queued retry resurrected a removed binding');
      assert(editor.editor.isEditable() && !editor.querySelector('.lexxy-collab-cursors'), 'retry removal leaked failure resources');
    }),
    partialSetup: scenario(async ({ mount }) => {
      const { editor, collab } = await mount({ append: false });
      write(editor, 'KEEP ON FAILURE');
      const register = editor.editor.registerUpdateListener;
      let calls = 0;
      editor.editor.registerUpdateListener = function (...args) {
        if (++calls === 2) throw new Error('injected setup failure');
        return register.apply(this, args);
      };
      editor.appendChild(collab);
      await tick();
      editor.editor.registerUpdateListener = register;
      assert(collab.status === 'failed' && !editor.querySelector('.lexxy-collab-cursors'), 'partial setup leaked');
      assert(text(editor) === 'KEEP ON FAILURE', 'partial setup lost original content');
      collab.retry();
      await tick();
      assert(collab.status === 'active', 'partial setup cannot retry');
    }),
    throwingCleanup: scenario(async ({ mount }) => {
      const { editor, collab } = await mount({ owned: true, append: false });
      const register = editor.editor.registerUpdateListener;
      editor.editor.registerUpdateListener = function (...args) {
        const off = register.apply(this, args);
        return () => { off(); throw new Error('injected cleanup failure'); };
      };
      editor.appendChild(collab);
      await until(() => collab.provider?.synced && !collab.provider.hasPending);
      editor.editor.registerUpdateListener = register;
      const doc = collab.doc;
      collab.remove();
      await until(() => doc.isDestroyed);
      assert(collab.status === 'detached' && !editor.querySelector('.lexxy-collab-cursors'), 'cleanup failure stranded resources');
    }),
    reconnectBootstrap: scenario(async ({ mount }) => {
      const { editor, collab, provider, doc } = await mount({ synced: false, append: false });
      provider.whenSynced = Promise.resolve();
      editor.appendChild(collab);
      await tick();
      assert(doc.get('root', XmlText).length === 0, 'seeded before sync');
      provider.synced = true;
      await until(() => doc.get('root', XmlText).length === 1);
      assert(collab.status === 'active' && editor.editor.isEditable(), 'reconnected bootstrap failed');
    }),
    sameRoomEditors: scenario(async ({ mount }) => {
      const first = await mount({ owned: true });
      write(first.editor, 'SHARED ROOM');
      await until(() => !first.provider.hasPending);
      const second = await mount({ owned: true, append: false });
      second.collab.setAttribute('channel-params', first.collab.getAttribute('channel-params'));
      second.editor.appendChild(second.collab);
      await until(() => second.collab.provider?.synced);
      assert(text(second.editor) === 'SHARED ROOM', 'second editor on shared consumer did not sync');
      write(second.editor, 'BOTH EDITORS');
      await until(() => text(first.editor) === 'BOTH EDITORS');
      assert(first.doc !== second.collab.doc, 'editors share a local document');
    }),
    pendingRemount: scenario(async ({ mount, dispose }) => {
      const acknowledgements = acknowledgementGate(consumer);
      dispose.push(() => acknowledgements.release());
      const { editor, collab, doc, provider } = await mount({ owned: true, consumer: acknowledgements.consumer });
      await until(() => !provider.hasPending);
      acknowledgements.hold();
      write(editor, 'REMOUNT BEFORE ACK');
      await until(() => acknowledgements.pending > 0);
      collab.remove();
      await tick();
      editor.appendChild(collab);
      await until(() => collab.status === 'active' && collab.provider.synced);
      assert(collab.doc === doc && collab.provider === provider, 'pending connection was not reclaimed');
      assert(text(editor) === 'REMOUNT BEFORE ACK', 'pending remount lost content');
      acknowledgements.release();
      await tick();
      assert(!doc.isDestroyed && collab.status === 'active', 'old drain timer destroyed remounted resources');
    }),
    moveBetweenEditors: scenario(async ({ mount }) => {
      const { editor, collab, provider } = await mount({ owned: true });
      write(editor, 'MOVE BETWEEN EDITORS');
      await until(() => !provider.hasPending);
      const target = await mount({ owned: true, append: false });
      target.editor.appendChild(collab);
      await until(() => collab.status === 'active' && collab.provider.synced && collab.provider !== provider);
      assert(text(target.editor) === 'MOVE BETWEEN EDITORS', 'new editor did not load document');
      assert(!editor.querySelector('.lexxy-collab-cursors') && target.editor.querySelectorAll('.lexxy-collab-cursors').length === 1, 'old editor retained binding');
    }),
    pendingDrain: scenario(async ({ mount, dispose }) => {
      const acknowledgements = acknowledgementGate(consumer);
      dispose.push(() => acknowledgements.release());
      const { editor, collab, doc, provider } = await mount({ owned: true, consumer: acknowledgements.consumer });
      await until(() => !provider.hasPending);
      acknowledgements.hold();
      write(editor, 'WAIT FOR ACK');
      await until(() => acknowledgements.pending > 0);
      collab.remove();
      await tick();
      assert(provider.hasPending && !doc.isDestroyed && collab.status === 'detached', 'pending edits discarded');
      acknowledgements.release();
      await until(() => doc.isDestroyed);
      assert(provider.status === 'disconnected', 'drained provider stayed connected');
    }),
    invalidParameters: scenario(async ({ mount }) => {
      const { editor, collab } = await mount({ owned: true, append: false });
      write(editor, 'INVALID PARAMS');
      collab.setAttribute('channel-params', 'null');
      let reported;
      collab.addEventListener('lexxy-realtime:error', event => { reported = event.detail.error; });
      editor.appendChild(collab);
      await tick();
      assert(reported && collab.status === 'failed' && !collab.provider, 'invalid params created provider');
      assert(text(editor) === 'INVALID PARAMS', 'invalid params cleared editor');
      collab.setAttribute('channel-params', JSON.stringify({ id: `fixed-${crypto.randomUUID()}` }));
      collab.retry();
      await until(() => collab.provider?.synced);
      await tick();
      assert(text(editor) === 'INVALID PARAMS', 'setup retry lost initial content');
    }),
  };
}
