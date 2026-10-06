// These tests run real Lexical and Yjs bindings and choose the order in which
// each peer receives updates. There is no server and no waiting. Each case is
// a delivery order that can duplicate or lose characters in the browser.
import assert from 'node:assert/strict';
import { createEditor, $getRoot, $getSelection, $setSelection, $createRangeSelection,
  $createParagraphNode, $createTextNode, $createLineBreakNode, createState, $setState, $getState,
  CONTROLLED_TEXT_INSERTION_COMMAND, COMMAND_PRIORITY_EDITOR } from 'lexical';
import { createBinding, syncLexicalUpdateToYjs } from '@lexical/yjs';
import { Doc, XmlText, Map as YMap, applyUpdate, encodeStateAsUpdate, decodeUpdate } from 'yjs';
import { Awareness } from 'y-protocols/awareness';
import { patchCollabElementSplice } from '../../src/attachment_sync.js';
import { createRemoteApplier } from '../../src/editor_collaboration.js';
import { registerTextReconciliation, syncEditorUpdate } from '../../src/text_reconciliation.js';
import { registerSelectionNormalization } from '../../src/selection_normalization.js';

const settle = () => new Promise(resolve => setImmediate(resolve));
const review = createState('review', { parse: value => typeof value === 'string' ? value : '' });
// Set LEXXY_TEST_LEGACY=1 to run plain @lexical/yjs without our text
// reconciliation and selection normalization. The cases fail in that mode.
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

// B and C receive A's text while their carets are still element selections in
// the empty paragraph, and then both type. Without reconciliation, each
// insertion replaces A with a new text node ("BA" and "CA"), and the merged
// document ends up with two As.
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
    console.log('ok: first keystrokes typed at the same time keep existing characters');
  } finally { n.close(); }
}

// A peer's normalization cleanup arrives before the insertion it depends on.
// This runs with plain and formatted text, and makes another local edit while
// the text header is still missing.
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
    assert.notEqual(cleanup, -1, 'expected B to merge the adjacent B and C text nodes');
    await n.deliver(cleanup);
    assert.equal(c.text(), 'C', 'removing the header out of order keeps C');
    // Keep delivering cleanup and repair updates, but hold back B's first
    // insertion. The repairs have to stop after a few rounds instead of
    // bouncing between peers.
    for (let count = 0; ; count++) {
      const index = n.pending.findIndex(item => (item.from === c && item.to === b)
        || (item.from === b && item.to === c && decodeUpdate(item.update).structs.length === 0));
      if (index === -1) break;
      assert.ok(count < 4, 'repairs stop while the earlier insertion is still missing');
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
    console.log(`ok: out-of-order cleanup keeps ${formatted ? 'formatted text and NodeState' : 'text'}, later edits, and a late-joining reader`);
  } finally { n.close(); }
}

// A repair can arrive before the original text header. After both are
// applied, the original header is empty and Lexical removes its node during
// normalization. The binding has to drop that node's cache entry before the
// next local edit.
{
  const n = network();
  const [a, b, c] = ['A', 'B', 'C'].map(n.peer);
  try {
    await n.seed();
    for (const p of [a, b, c]) p.update(() => $getRoot().getFirstChild().append($createTextNode(p.name)));
    await n.deliver(n.pending.findIndex(item => item.from === c && item.to === a));
    await n.deliver(n.pending.findIndex(item => item.from === a && item.to === c && decodeUpdate(item.update).structs.length === 0));
    const repair = n.pending.findIndex(item => item.from === c && item.to === b && decodeUpdate(item.update).structs[0]?.id.clock === 7);
    assert.notEqual(repair, -1, 'expected C to send a replacement header');
    await n.deliver(repair);
    await n.deliver(n.pending.findIndex(item => item.from === c && item.to === b && decodeUpdate(item.update).structs[0]?.id.clock === 0));
    b.update(() => $getRoot().getFirstChild().selectEnd().insertText('B'));
    await n.flush();
    n.converged('ABBC');
    console.log('ok: an empty normalized header does not absorb the next local edit');
  } finally { n.close(); }
}

// When the header after a linebreak is deleted, the second text run keeps its
// format.
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
    console.log('ok: repair after a linebreak keeps the second run and its format');
  } finally { n.close(); }
}

// Random delivery orders from fixed seeds. They include cleanup that arrives
// before its insertion and updates delivered twice. Each run compares both the
// editor text and the Y.Doc on every peer.
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
