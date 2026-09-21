import assert from 'node:assert/strict';
import { Cleanup } from '../../src/cleanup.js';
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
