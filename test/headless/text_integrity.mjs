// Real Lexical/Yjs bindings with explicit delivery order. No server or sleeps:
// these regressions reproduce the browser's duplicate/lost-character failures.
import assert from 'node:assert/strict';
import { createEditor, $getRoot, $getSelection, $setSelection, $createRangeSelection,
  $createParagraphNode, $createTextNode, $createLineBreakNode, createState, $setState, $getState,
  CONTROLLED_TEXT_INSERTION_COMMAND, COMMAND_PRIORITY_EDITOR } from 'lexical';
import { createBinding, syncLexicalUpdateToYjs } from '@lexical/yjs';
import { Doc, XmlText, Map as YMap, applyUpdate, encodeStateAsUpdate, decodeUpdate } from 'yjs';
import { Awareness } from 'y-protocols/awareness';
import { patchCollabElementSplice } from '../../src/attachment_sync.js';
import { createRemoteApplier } from '../../src/remote_applier.js';
import { registerTextReconciliation, syncEditorUpdate } from '../../src/text_reconciliation.js';
import { registerSelectionNormalization } from '../../src/selection_normalization.js';

const settle = () => new Promise(resolve => setImmediate(resolve));
const review = createState('review', { parse: value => typeof value === 'string' ? value : '' });
// Set LEXXY_TEST_LEGACY=1 to reproduce the upstream failures without our fixes.
const legacy = process.env.LEXXY_TEST_LEGACY === '1';

function network() {
  const peers = [];
  const pending = [];
  const errors = [];
  function peer(name) {
    const doc = new Doc();
    doc.clientID = peers.length + 1;
    const editor = createEditor({ namespace: name, onError: error => { throw error; } });
    const provider = { awareness: new Awareness(doc) };
    const binding = createBinding(editor, provider, name, doc, new Map([[name, doc]]));
    patchCollabElementSplice(binding);
    const cleanup = [];
    if (!legacy) {
      cleanup.push(registerTextReconciliation(binding));
      cleanup.push(registerSelectionNormalization(editor));
    }
    cleanup.push(editor.registerCommand(CONTROLLED_TEXT_INSERTION_COMMAND, text => {
      $getSelection().insertText(text);
      return true;
    }, COMMAND_PRIORITY_EDITOR));
    cleanup.push(editor.registerUpdateListener(update => {
      if (!legacy) syncEditorUpdate(binding, provider, update);
      else {
        const { prevEditorState, editorState, dirtyElements, dirtyLeaves, normalizedNodes, tags } = update;
        syncLexicalUpdateToYjs(binding, provider, prevEditorState, editorState, dirtyElements, dirtyLeaves, normalizedNodes, tags);
      }
    }));
    const observer = createRemoteApplier(provider, binding, { onDesync: error => errors.push(error) });
    binding.root.getSharedType().observeDeep(observer);
    cleanup.push(() => binding.root.getSharedType().unobserveDeep(observer));
    const result = { name, doc, editor, binding, provider, cleanup,
      text: () => editor.getEditorState().read(() => $getRoot().getTextContent()),
      update: fn => editor.update(fn, { discrete: true }),
    };
    doc.on('update', (update, origin) => {
      if (origin !== 'network') for (const target of peers) if (target !== result) pending.push({ from: result, to: target, update });
    });
    peers.push(result);
    return result;
  }
  async function deliver(index = 0, duplicate = false) {
    const { to, update } = pending.splice(index, 1)[0];
    applyUpdate(to.doc, update, 'network');
    if (duplicate) applyUpdate(to.doc, update, 'network');
    await settle();
  }
  async function flush(random = () => 0) {
    await settle();
    for (let i = 0; i < 1000; i++) {
      if (!pending.length) { await settle(); if (!pending.length) return; }
      await deliver(Math.floor(random() * pending.length), true);
    }
    assert.fail('updates did not settle');
  }
  function converged(expected) {
    assert.deepEqual(errors, []);
    const texts = peers.map(p => p.text());
    assert.equal(new Set(texts).size, 1, `editors disagree: ${JSON.stringify(texts)}`);
    assert.deepEqual([...texts[0]].sort(), [...expected].sort(), `characters changed: ${texts[0]}`);
    const first = encodeStateAsUpdate(peers[0].doc);
    for (const p of peers) assert.deepEqual(encodeStateAsUpdate(p.doc), first, `${p.name}: shared document diverged`);
  }
  async function seed() {
    peers[0].update(() => $getRoot().append($createParagraphNode()));
    await flush();
  }
  function close() {
    for (const p of peers) {
      for (const dispose of p.cleanup.reverse()) dispose();
      p.provider.awareness.destroy();
      p.doc.destroy();
    }
  }
  return { peers, pending, peer, seed, deliver, flush, converged, close };
}

// Browser reproduction: A arrives while B and C still have an element caret
// from the empty paragraph. Each controlled insertion used to replace A with
// an independently created BA / CA, yielding two As after convergence.
{
  const n = network();
  const [a, b, c] = ['A', 'B', 'C'].map(n.peer);
  try {
    await n.seed();
    a.update(() => $getRoot().getFirstChild().append($createTextNode('A')));
    await n.flush();
    for (const p of [b, c]) p.update(() => {
      const selection = $createRangeSelection();
      const key = $getRoot().getFirstChild().getKey();
      selection.anchor.set(key, 0, 'element');
      selection.focus.set(key, 0, 'element');
      $setSelection(selection);
      p.editor.dispatchCommand(CONTROLLED_TEXT_INSERTION_COMMAND, p.name);
    });
    await n.flush();
    n.converged('ABC');
    console.log('ok: simultaneous first keystrokes preserve existing CRDT characters');
  } finally { n.close(); }
}

// Real normalization cleanup overtakes the insertion it depends on. Exercise
// plain and formatted text, and another local edit while the header is absent.
for (const formatted of [false, true]) {
  const n = network();
  const [a, b, c] = ['A', 'B', 'C'].map(n.peer);
  try {
    await n.seed();
    for (const p of [a, b, c]) p.update(() => {
      const node = $createTextNode(p.name);
      if (formatted) { node.toggleFormat('bold'); node.setStyle('color: red;'); $setState(node, review, 'approved'); }
      $getRoot().getFirstChild().append(node);
    });
    await n.deliver(n.pending.findIndex(item => item.from === c && item.to === b));
    const cleanup = n.pending.findIndex(item => item.from === b && item.to === c && decodeUpdate(item.update).structs.length === 0);
    assert.notEqual(cleanup, -1, 'B must have normalized the adjacent B/C text nodes');
    await n.deliver(cleanup);
    assert.equal(c.text(), 'C', 'out-of-order header removal must not delete C');
    // Continue delivering cleanup/repair traffic but keep B's initial insertion
    // withheld. Repair must settle instead of generating a message ping-pong.
    for (let count = 0; ; count++) {
      const index = n.pending.findIndex(item => (item.from === c && item.to === b)
        || (item.from === b && item.to === c && decodeUpdate(item.update).structs.length === 0));
      if (index === -1) break;
      assert.ok(count < 4, 'repair must settle while the predecessor is still missing');
      await n.deliver(index);
    }
    assert.equal(c.text(), 'C');
    c.update(() => {
      const node = $getRoot().getFirstChild().getFirstChild();
      if (formatted) {
        assert.equal(node.hasFormat('bold'), true);
        assert.equal(node.getStyle(), 'color: red;');
        assert.equal($getState(node, review), 'approved');
      }
      node.selectEnd().insertText('c');
    });
    await n.flush();
    n.converged('ABCc');
    const reader = n.peer('reader');
    applyUpdate(reader.doc, encodeStateAsUpdate(a.doc), 'network');
    await n.flush();
    n.converged('ABCc');
    console.log(`ok: reordered cleanup preserves ${formatted ? 'formatted text and NodeState' : 'text'}, further edits, and a cold reader`);
  } finally { n.close(); }
}

// A repair can arrive before the original text header. Once both integrate,
// the original header is empty. Lexical removes its node during normalization;
// the binding must remove that cache entry before the next local edit.
{
  const n = network();
  const [a, b, c] = ['A', 'B', 'C'].map(n.peer);
  try {
    await n.seed();
    for (const p of [a, b, c]) p.update(() => $getRoot().getFirstChild().append($createTextNode(p.name)));
    await n.deliver(n.pending.findIndex(item => item.from === c && item.to === a));
    await n.deliver(n.pending.findIndex(item => item.from === a && item.to === c && decodeUpdate(item.update).structs.length === 0));
    const repair = n.pending.findIndex(item => item.from === c && item.to === b && decodeUpdate(item.update).structs[0]?.id.clock === 7);
    assert.notEqual(repair, -1, 'C emitted a replacement header');
    await n.deliver(repair);
    await n.deliver(n.pending.findIndex(item => item.from === c && item.to === b && decodeUpdate(item.update).structs[0]?.id.clock === 0));
    b.update(() => $getRoot().getFirstChild().selectEnd().insertText('B'));
    await n.flush();
    n.converged('ABBC');
    console.log('ok: an empty normalized header cannot consume the next local edit');
  } finally { n.close(); }
}

// A missing header after a linebreak must preserve the second run's format.
{
  const n = network();
  const a = n.peer('A');
  try {
    await n.seed();
    a.update(() => $getRoot().getFirstChild().append(
      $createTextNode('prefix').toggleFormat('italic'), $createLineBreakNode(),
      $createTextNode('keep').toggleFormat('bold').setStyle('color: blue;'),
    ));
    const paragraph = a.binding.root._children[0].getSharedType();
    const snapshot = encodeStateAsUpdate(a.doc);
    const replica = new Doc();
    applyUpdate(replica, snapshot);
    let deletion;
    replica.on('update', update => { deletion = update; });
    replica.get('root', XmlText).toDelta()[0].insert.delete(8, 1); // prefix header + six characters + linebreak
    applyUpdate(a.doc, deletion, 'network');
    await settle();
    assert.equal(a.text(), 'prefix\nkeep');
    a.editor.getEditorState().read(() => {
      const node = $getRoot().getFirstChild().getLastChild();
      assert.equal(node.hasFormat('bold'), true);
      assert.equal(node.hasFormat('italic'), false);
      assert.equal(node.getStyle(), 'color: blue;');
    });
    assert.ok(paragraph.toDelta().find(d => d.insert instanceof YMap && d.insert.get('__format') === 1));
    replica.destroy();
    console.log('ok: repair after a linebreak retains the correct text run and formatting');
  } finally { n.close(); }
}

// Seeded permutations include cleanup-before-insertion and duplicate delivery.
// Compare both the rendered editor and the actual Y.Doc on every peer.
const schedules = Number(process.env.LEXXY_TEST_SCHEDULES || 100);
for (let seed = 1; seed <= schedules; seed++) {
  const n = network();
  let state = seed;
  const random = () => ((state = (1664525 * state + 1013904223) >>> 0) / 2 ** 32);
  try {
    ['A', 'B', 'C'].map(n.peer);
    await n.seed();
    for (const p of n.peers) p.update(() => $getRoot().getFirstChild().selectEnd().insertText(p.name));
    // Keep typing while earlier updates (including normalization) are queued.
    for (let burst = 1; burst < 8; burst++) {
      for (const p of n.peers) {
        if (n.pending.length && random() < 0.7) await n.deliver(Math.floor(random() * n.pending.length), true);
        p.update(() => $getRoot().getFirstChild().selectEnd().insertText(p.name));
      }
    }
    await n.flush(random);
    n.converged('ABC'.repeat(8));
  } finally { n.close(); }
}
console.log(`ok: ${schedules} concurrent schedules converge without lost or duplicated characters`);
