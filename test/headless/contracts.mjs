import assert from 'node:assert/strict';
import { Cleanup } from '../../src/cleanup.js';
import { Lifecycle } from '../../src/lifecycle.js';
import { openConnection } from '../../src/connection.js';
import { EditorBinding } from '../../src/editor_binding.js';
import { Collaboration, setConsumer } from '../../src/index.js';
import { Doc } from 'yjs';
import { Awareness } from 'y-protocols/awareness';

// An SSR import must neither register elements nor open a socket.
const element = new Collaboration();
assert.equal(element.status, 'detached');
assert.equal(element.provider, undefined);
console.log('ok: public package imports without browser globals');

// A reentrant, failing unsubscribe cannot prevent the other resources closing.
const calls = [];
const cleanup = new Cleanup();
cleanup.add(() => calls.push('socket'));
cleanup.add(() => { calls.push('listener'); cleanup.close(); throw new Error('intentional cleanup fault'); });
cleanup.close();
cleanup.close();
cleanup.add(() => calls.push('late acquisition'));
assert.deepEqual(calls, ['listener', 'socket', 'late acquisition']);
console.log('ok: reentrant and throwing cleanup releases every resource exactly once');

assert.throws(() => setConsumer({}), /subscriptions.create/);
assert.throws(() => { element.provider = {}; }, /Yjs provider/);
assert.throws(() => { element.doc = {}; }, /live Y.Doc/);
const doc = new Doc();
const other = new Doc();
const awareness = new Awareness(doc);
const provider = { doc, awareness, synced: true };
try {
  element.provider = provider;
  assert.throws(() => { element.doc = other; }, /same Y.Doc/);
  assert.equal(element.doc, undefined);
  assert.equal(element.provider, provider);
  assert.throws(() => element.configure({ doc: other, provider }), /same Y.Doc/);
  assert.equal(element.provider, provider);
  assert.throws(() => element.configure({ provder: provider }), /Unknown collaboration option/);
  element.configure({ doc, provider });
  assert.equal(element.doc, doc);
  element.configure({ doc: other });
  assert.equal(element.doc, other);
  assert.equal(element.provider, undefined);
  assert.throws(() => { element.awareness = awareness; }, TypeError);
  assert.throws(() => { element.status = 'active'; }, TypeError);
  other.destroy();
  assert.throws(() => { element.doc = other; }, /live Y.Doc/);
} finally { awareness.destroy(); doc.destroy(); other.destroy(); }
console.log('ok: invalid configuration is rejected atomically and runtime state is read-only');

// Rejected events cannot replace the snapshot or smuggle in a destination.
const lifecycle = new Lifecycle('Test owner', 'idle', {
  idle: { start: 'running', invalidTarget: 'missing' },
  running: { refresh: 'running', stop: 'closed' },
  closed: {},
});
const idle = lifecycle.current;
for (const event of ['stop', 'unknown', 'toString', 'invalidTarget']) {
  assert.throws(() => lifecycle.transition(event, { phase: 'running' }), /Test owner: cannot/);
  assert.equal(lifecycle.current, idle);
}
assert.throws(() => { lifecycle.current.phase = 'running'; }, TypeError);
assert.throws(() => { lifecycle.current = { phase: 'running' }; }, TypeError);
const resource = {};
const running = lifecycle.transition('start', { resource, phase: 'closed' });
assert.equal(running.phase, 'running');
assert.equal(running.resource, resource);
assert.notEqual(lifecycle.transition('refresh', running), running);
assert.equal(idle.phase, 'idle');
lifecycle.transition('stop');
assert.throws(() => lifecycle.transition('start'), /cannot start while closed/);
assert.deepEqual(lifecycle.current, { phase: 'closed' });
console.log('ok: invalid transitions are atomic, snapshots are read-only, and closed is terminal');

// Closing before setup is legal; a later start must not acquire anything.
const unused = new EditorBinding({}, () => assert.fail('closed binding emitted a fault'));
unused.close();
unused.start();
unused.close();
assert.equal(unused.doc, undefined);
console.log('ok: a closed binding cannot start or acquire a document');

// Presence removal can reenter teardown. It must see closing, not open or
// closed, and cannot reclaim the connection before it actually starts draining.
const consumer = { subscriptions: { create() { assert.fail('test unexpectedly connected'); } } };
const options = { consumer, channelName: 'DocumentChannel', channelParams: { id: 'transition-test' } };
const connection = openConnection(options);
const ownedDoc = connection.doc;
const ownedProvider = connection.provider;
let presenceCalls = 0;
let destroyed = 0;
ownedDoc.on('destroy', () => destroyed++);
Object.defineProperty(ownedProvider, 'hasPending', { configurable: true, get: () => true });
const setPresence = ownedProvider.awareness.setLocalState.bind(ownedProvider.awareness);
ownedProvider.awareness.setLocalState = state => {
  presenceCalls++;
  connection.close();
  assert.throws(() => connection.reclaim(), /cannot reclaim while closing/);
  setPresence(state);
};
assert.throws(() => connection.reclaim(), /cannot reclaim while open/);
connection.close();
assert.equal(presenceCalls, 1);
assert.equal(destroyed, 0);
assert.equal(openConnection(options), connection);
await new Promise(resolve => setTimeout(resolve, 150));
assert.equal(destroyed, 0, 'retired drain timer destroyed a reclaimed document');
ownedProvider.awareness.setLocalState = setPresence;
connection.close({ discard: true });
connection.close();
assert.equal(destroyed, 1);
assert.throws(() => connection.reclaim(), /cannot reclaim while closed/);
console.log('ok: reentrant close, pending drain, reclaim, and terminal disposal preserve ownership');
