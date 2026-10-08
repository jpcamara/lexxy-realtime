// These tests run real Lexical and Yjs bindings and choose the order in which
// each peer receives updates. There is no server and no waiting. Each case is
// a delivery order that can duplicate or lose characters in the browser.
import assert from 'node:assert/strict';
import { createEditor, $getRoot, $getSelection, $setSelection, $createRangeSelection, $isRangeSelection,
  $createParagraphNode, $createTextNode, $createLineBreakNode, $isTextNode, createState, $setState, $getState,
  CONTROLLED_TEXT_INSERTION_COMMAND, COMMAND_PRIORITY_EDITOR } from 'lexical';
import { createBinding, createUndoManager, syncLexicalUpdateToYjs, syncYjsChangesToLexical } from '@lexical/yjs';
import { Doc, XmlText, Map as YMap, UndoManager, applyUpdate, encodeStateAsUpdate, decodeUpdate } from 'yjs';
import { Awareness } from 'y-protocols/awareness';
import { patchCollabElementSplice } from '../../src/attachment_sync.js';
import { createRemoteApplier } from '../../src/editor_collaboration.js';
import { registerTextReconciliation, syncEditorUpdate } from '../../src/text_reconciliation.js';
import { registerSelectionNormalization } from '../../src/selection_normalization.js';

const settle = () => new Promise(resolve => setImmediate(resolve));
const review = createState('review', { parse: value => typeof value === 'string' ? value : '' });
// Set LEXXY_TEST_LEGACY=1 to run plain @lexical/yjs without our text
// reconciliation and selection normalization. Every case except the
// unmergeable boundary fails in that mode. That case checks that the
// selection handler leaves such a caret alone.
const legacy = process.env.LEXXY_TEST_LEGACY === '1';
const schedules = Number(process.env.LEXXY_TEST_SCHEDULES || 100);

let failures = 0;
async function test(name, fn) {
  try {
    await fn();
    console.log(`ok: ${name}`);
  } catch (error) {
    failures++;
    console.log(`FAIL: ${name}\n  ${String(error.message).split('\n')[0]}`);
  }
}

// Runs one test per seed and reports them as one line.
async function seeded(name, seeds, fn) {
  const failed = [];
  for (const seed of seeds) {
    try { await fn(seed); } catch (error) { failed.push(`${seed}: ${String(error.message).split('\n')[0]}`); }
  }
  if (failed.length) {
    failures++;
    console.log(`FAIL: ${name} (${failed.length} of ${seeds.length} failed)\n  ${failed[0]}`);
  } else {
    console.log(`ok: ${name} (${seeds.length})`);
  }
}

function random(seed) {
  let state = seed;
  return () => ((state = (1664525 * state + 1013904223) >>> 0) / 2 ** 32);
}

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
    // Changes from an UndoManager apply as history, as the element does.
    let fromUndo = false;
    const apply = createRemoteApplier(provider, binding, {
      onDesync: error => errors.push(error),
      sync: (b, p, events) => syncYjsChangesToLexical(b, p, events, fromUndo),
    });
    const observer = (events, transaction) => {
      fromUndo = transaction.origin instanceof UndoManager;
      apply(events, transaction);
    };
    binding.root.getSharedType().observeDeep(observer);
    cleanup.push(() => binding.root.getSharedType().unobserveDeep(observer));
    const result = { name, doc, editor, binding, provider, cleanup,
      text: () => editor.getEditorState().read(() => $getRoot().getTextContent()),
      update: fn => editor.update(fn, { discrete: true }),
      // Each paragraph's children as [text, format].
      runs: () => editor.getEditorState().read(() => $getRoot().getChildren().map(paragraph =>
        paragraph.getChildren().map(node => [node.getTextContent(), $isTextNode(node) ? node.getFormat() : null]))),
      type: character => result.update(() => editor.dispatchCommand(CONTROLLED_TEXT_INSERTION_COMMAND, character)),
      undoManager: () => {
        const manager = createUndoManager(binding, binding.root.getSharedType());
        cleanup.push(() => manager.destroy());
        return manager;
      },
    };
    doc.on('update', (update, origin) => {
      if (origin !== 'network') for (const target of peers) if (target !== result) pending.push({ from: result, to: target, update });
    });
    peers.push(result);
    return result;
  }
  async function deliver(index = 0, duplicate = false) {
    assert.ok(index >= 0 && index < pending.length, 'expected a queued update');
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
    const first = canonicalState(peers[0].doc);
    for (const p of peers) assert.deepEqual(canonicalState(p.doc), first, `${p.name}: shared document diverged`);
    for (const p of peers) {
      assert.equal(sharedText(p.binding.root.getSharedType()), texts[0], `${p.name}: editor and Y.Doc disagree`);
      cacheMatches(p);
    }
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

// A Y.Doc's state, encoded from a fresh copy. An UndoManager keeps deleted
// items from being merged, so the same content can encode differently on the
// peer that undid it.
function canonicalState(doc) {
  const copy = new Doc();
  applyUpdate(copy, encodeStateAsUpdate(doc));
  const state = encodeStateAsUpdate(copy);
  copy.destroy();
  return state;
}

// The text a Y.Doc holds, read from the shared types instead of the editor.
// Paragraphs are joined with blank lines, as Lexical's getTextContent does.
function sharedText(root) {
  const text = type => type.toDelta().map(({ insert }) => typeof insert === 'string' ? insert
    : insert instanceof YMap && insert.get('__type') === 'linebreak' ? '\n'
    : insert instanceof XmlText ? text(insert) : '').join('');
  return root.toDelta().map(({ insert }) => insert instanceof XmlText ? text(insert) : '').join('\n\n');
}

// The binding's cached children must match the shared value: one cached node
// per embed, in order, and each text node holding the characters after its
// header.
function cacheMatches(p) {
  const visit = element => {
    const expected = [];
    for (const { insert } of element._xmlText.toDelta()) {
      if (typeof insert === 'string') {
        const last = expected[expected.length - 1];
        assert.ok(last && typeof last.child?._text === 'string', `${p.name}: text without a header in the Y.Doc`);
        last.text += insert;
      } else {
        expected.push({ child: insert._collabNode, text: '' });
      }
    }
    assert.equal(element._children.length, expected.length, `${p.name}: cached children count`);
    expected.forEach(({ child, text }, i) => {
      assert.equal(element._children[i], child, `${p.name}: cached child ${i}`);
      if (typeof child._text === 'string') assert.equal(child._text, text, `${p.name}: cached text of child ${i}`);
      if (child._xmlText) visit(child);
    });
  };
  visit(p.binding.root);
}

const $paragraph = () => $getRoot().getFirstChild();

function $clickIntoEmptyParagraph() {
  const key = $paragraph().getKey();
  const selection = $createRangeSelection();
  selection.anchor.set(key, 0, 'element');
  selection.focus.set(key, 0, 'element');
  $setSelection(selection);
}

const countOf = (text, character) => [...text].filter(c => c === character).length;

// B and C receive A's text while their carets are still element selections in
// the empty paragraph, and then both type. Without reconciliation, each
// insertion replaces A with a new text node ("BA" and "CA"), and the merged
// document ends up with two As.
await test('first keystrokes typed at the same time keep existing characters', async () => {
  const n = network();
  const [a, b, c] = ['A', 'B', 'C'].map(n.peer);
  try {
    await n.seed();
    a.update(() => $paragraph().append($createTextNode('A')));
    await n.flush();
    for (const p of [b, c]) p.update(() => {
      $clickIntoEmptyParagraph();
      p.editor.dispatchCommand(CONTROLLED_TEXT_INSERTION_COMMAND, p.name);
    });
    await n.flush();
    n.converged('ABC');
  } finally { n.close(); }
});

// The same, with the carets placed before A's text arrives, as when three
// people click into an empty paragraph and type.
await test('three peers typing into an empty paragraph keep one copy of each character', async () => {
  const n = network();
  const [a, b, c] = ['A', 'B', 'C'].map(n.peer);
  try {
    await n.seed();
    for (const p of [a, b, c]) p.update($clickIntoEmptyParagraph);
    a.type('A');
    while (n.pending.some(item => item.from === a)) await n.deliver(n.pending.findIndex(item => item.from === a));
    for (const p of [b, c]) p.editor.getEditorState().read(() => {
      const selection = $getSelection();
      assert.ok($isRangeSelection(selection) && selection.anchor.type === 'element', `${p.name} keeps an element caret`);
    });
    b.type('B');
    c.type('C');
    await n.flush();
    n.converged('ABC');
    for (const p of n.peers) for (const character of 'ABC') assert.equal(countOf(p.text(), character), 1, `${p.name} shows ${p.text()}`);
  } finally { n.close(); }
});

// A caret beside unmergeable text is an intentional boundary. Typing there
// adds a new node instead of extending the unmergeable one.
await test('typing at an element caret keeps an unmergeable boundary', async () => {
  const n = network();
  const [a, b] = ['A', 'B'].map(n.peer);
  try {
    await n.seed();
    a.update(() => $paragraph().append($createTextNode('ab').toggleUnmergeable()));
    await n.flush();
    b.update(() => {
      const key = $paragraph().getKey();
      const selection = $createRangeSelection();
      selection.anchor.set(key, 1, 'element');
      selection.focus.set(key, 1, 'element');
      $setSelection(selection);
    });
    b.type('x');
    await n.flush();
    n.converged('abx');
    for (const p of n.peers) assert.deepEqual(p.runs()[0].map(([text]) => text), ['ab', 'x'], `${p.name} children`);
  } finally { n.close(); }
});

// A peer's normalization cleanup arrives before the insertion it depends on.
// This runs with plain and formatted text, and makes another local edit while
// the text header is still missing.
for (const formatted of [false, true]) {
  await test(`out-of-order cleanup keeps ${formatted ? 'formatted text and NodeState' : 'text'}, later edits, and a late-joining reader`, async () => {
    const n = network();
    const [a, b, c] = ['A', 'B', 'C'].map(n.peer);
    try {
      await n.seed();
      for (const p of [a, b, c]) p.update(() => {
        const node = $createTextNode(p.name);
        if (formatted) { node.toggleFormat('bold'); node.setStyle('color: red;'); $setState(node, review, 'approved'); }
        $paragraph().append(node);
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
        const node = $paragraph().getFirstChild();
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
    } finally { n.close(); }
  });
}

// A repair can arrive before the original text header. After both are
// applied, the original header is empty and Lexical removes its node during
// normalization. The binding has to drop that node's cache entry before the
// next local edit.
await test('an empty normalized header does not absorb the next local edit', async () => {
  const n = network();
  const [a, b, c] = ['A', 'B', 'C'].map(n.peer);
  try {
    await n.seed();
    for (const p of [a, b, c]) p.update(() => $paragraph().append($createTextNode(p.name)));
    await n.deliver(n.pending.findIndex(item => item.from === c && item.to === a));
    const insertion = n.pending.find(item => item.from === c && item.to === b);
    const beforeRepair = new Set(n.pending);
    await n.deliver(n.pending.findIndex(item => item.from === a && item.to === c && decodeUpdate(item.update).structs.length === 0));
    const repair = n.pending.findIndex(item => item.from === c && item.to === b && !beforeRepair.has(item));
    assert.notEqual(repair, -1, 'expected C to send a replacement header');
    await n.deliver(repair);
    await n.deliver(n.pending.indexOf(insertion));
    b.update(() => $paragraph().selectEnd().insertText('B'));
    await n.flush();
    n.converged('ABBC');
  } finally { n.close(); }
});

// Two peers repair the same text at once. Both headers end up in front of it,
// and one of them is empty. The peer that created the empty one removes it,
// so no editor keeps an empty text node.
await test('peers repairing the same text at once leave no empty text node', async () => {
  const n = network();
  const [a, b, c] = ['A', 'B', 'C'].map(n.peer);
  try {
    await n.seed();
    a.update(() => $paragraph().append($createTextNode('Hello')));
    await n.flush();
    b.update(() => $paragraph().selectEnd().insertText('Word'));
    c.update(() => $paragraph().getFirstChild().remove());
    // A and B each receive C's deletion after B's insertion, so each finds
    // "Word" without a header and repairs it before hearing from the other.
    await n.deliver(n.pending.findIndex(item => item.from === b && item.to === a));
    await n.deliver(n.pending.findIndex(item => item.from === c && item.to === a));
    await n.deliver(n.pending.findIndex(item => item.from === c && item.to === b));
    await n.flush();
    n.converged('Word');
    for (const p of n.peers) assert.deepEqual(p.runs()[0].map(([text]) => text), ['Word'], `${p.name} children`);
  } finally { n.close(); }
});

// An embed inserted directly after a text header takes that run's characters
// in Yjs. The binding has to move them to the new node too. Otherwise the
// editor shows them with the old node's format, and later edits land on the
// wrong node.
await test('a header inserted directly after another header takes its characters', async () => {
  const n = network();
  const [a, b] = ['A', 'B'].map(n.peer);
  try {
    await n.seed();
    a.update(() => $paragraph().append($createTextNode('Hello')));
    await n.flush();
    const replica = new Doc();
    replica.clientID = 99;
    applyUpdate(replica, encodeStateAsUpdate(a.doc));
    const paragraph = replica.get('root', XmlText).toDelta()[0].insert;
    const header = paragraph.toDelta()[0].insert;
    const bold = new YMap(Object.entries(header.toJSON()).map(([key, value]) => [key, key === '__format' ? 1 : value]));
    paragraph.insertEmbed(1, bold);
    paragraph.insert(7, '!');
    for (const p of [a, b]) applyUpdate(p.doc, encodeStateAsUpdate(replica), 'network');
    replica.destroy();
    await n.flush();
    n.converged('Hello!');
    for (const p of n.peers) assert.deepEqual(p.runs()[0], [['Hello!', 1]], `${p.name} runs`);
    a.update(() => $paragraph().selectEnd().insertText('?'));
    await n.flush();
    n.converged('Hello!?');
  } finally { n.close(); }
});

// The left peer types two paragraphs, the right peer types into the second
// one, and the left peer undoes its text there through a Yjs UndoManager.
// The undo removes the header in front of the right peer's characters. They
// stay in a new text node, and the editors agree. The repair isn't an undo
// step, so one redo and one more undo are enough. This runs with undo called
// directly and inside an editor update, as an UNDO_COMMAND handler calls it.
for (const command of [false, true]) {
  await test(`undoing a text node another peer typed into keeps their text${command ? ' (from a command)' : ''}`, async () => {
    const n = network();
    const [left, right] = ['left', 'right'].map(n.peer);
    try {
      const undo = left.undoManager();
      const run = fn => command ? left.update(fn) : fn();
      left.update(() => $getRoot().append($createParagraphNode()));
      left.update(() => $getRoot().getFirstChild().selectEnd().insertText('Line 1'));
      left.update(() => $getRoot().getFirstChild().insertAfter($createParagraphNode()));
      undo.stopCapturing();
      left.update(() => $getRoot().getLastChild().selectEnd().insertText('This is a test. '));
      await n.flush();
      right.update(() => $getRoot().getLastChild().selectEnd().insertText('Word'));
      await n.flush();
      n.converged('Line 1\n\nThis is a test. Word');
      run(() => undo.undo());
      await n.flush();
      n.converged('Line 1\n\nWord');
      for (const p of n.peers) assert.deepEqual(p.runs()[1].map(([text]) => text), ['Word'], `${p.name} second paragraph`);
      assert.deepEqual([undo.undoStack.length, undo.redoStack.length], [1, 1], 'undo and redo stacks');
      run(() => undo.redo());
      await n.flush();
      n.converged('Line 1\n\nThis is a test. Word');
      run(() => undo.undo());
      await n.flush();
      n.converged('Line 1\n\nWord');
    } finally { n.close(); }
  });
}

// When the header after a linebreak is deleted, the second text run keeps its
// format.
await test('repair after a linebreak keeps the second run and its format', async () => {
  const n = network();
  const a = n.peer('A');
  try {
    await n.seed();
    a.update(() => $paragraph().append(
      $createTextNode('prefix').toggleFormat('italic'), $createLineBreakNode(),
      $createTextNode('keep').toggleFormat('bold').setStyle('color: blue;'),
    ));
    const paragraph = a.binding.root._children[0].getSharedType();
    const replica = new Doc();
    applyUpdate(replica, encodeStateAsUpdate(a.doc));
    let deletion;
    replica.on('update', update => { deletion = update; });
    replica.get('root', XmlText).toDelta()[0].insert.delete(8, 1); // prefix header + six characters + linebreak
    applyUpdate(a.doc, deletion, 'network');
    await settle();
    assert.equal(a.text(), 'prefix\nkeep');
    a.editor.getEditorState().read(() => {
      const node = $paragraph().getLastChild();
      assert.equal(node.hasFormat('bold'), true);
      assert.equal(node.hasFormat('italic'), false);
      assert.equal(node.getStyle(), 'color: blue;');
    });
    assert.ok(paragraph.toDelta().find(d => d.insert instanceof YMap && d.insert.get('__format') === 1));
    replica.destroy();
  } finally { n.close(); }
});

// Random delivery orders from fixed seeds. They include cleanup that arrives
// before its insertion and updates delivered twice. Each run compares the
// editor text, the Y.Doc, and the binding's cache on every peer.
await seeded('concurrent typing schedules converge without lost or duplicated characters',
  Array.from({ length: schedules }, (_, i) => i + 1), async seed => {
    const n = network();
    const next = random(seed);
    try {
      ['A', 'B', 'C'].map(n.peer);
      await n.seed();
      for (const p of n.peers) p.update(() => $paragraph().selectEnd().insertText(p.name));
      // Keep typing while earlier updates (including normalization) are queued.
      for (let burst = 1; burst < 8; burst++) {
        for (const p of n.peers) {
          if (n.pending.length && next() < 0.7) await n.deliver(Math.floor(next() * n.pending.length), true);
          p.update(() => $paragraph().selectEnd().insertText(p.name));
        }
      }
      await n.flush(next);
      n.converged('ABC'.repeat(8));
    } finally { n.close(); }
  });

// Three peers click into an empty paragraph and type 4, 6, and 5 characters
// through the controlled insertion command, with updates reordered and
// sometimes delivered twice.
await seeded('element-caret typing schedules converge without lost or duplicated characters',
  Array.from({ length: Math.ceil(schedules / 2) }, (_, i) => 1000 + i), async seed => {
    const n = network();
    const next = random(seed);
    const typed = { A: 4, B: 6, C: 5 };
    try {
      const peers = ['A', 'B', 'C'].map(n.peer);
      await n.seed();
      for (const p of peers) p.update($clickIntoEmptyParagraph);
      const remaining = { ...typed };
      while (peers.some(p => remaining[p.name] > 0)) {
        for (const p of peers) {
          while (n.pending.length && next() < 0.5) await n.deliver(Math.floor(next() * n.pending.length), next() < 0.3);
          if (remaining[p.name] > 0) {
            remaining[p.name]--;
            p.type(p.name);
          }
        }
      }
      await n.flush(next);
      n.converged(Object.entries(typed).map(([character, count]) => character.repeat(count)).join(''));
    } finally { n.close(); }
  });

if (failures) {
  console.log(`\nFAILED: ${failures} check(s) failed`);
  process.exit(1);
}
