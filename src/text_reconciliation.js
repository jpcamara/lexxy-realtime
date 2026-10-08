import { Map as YMap } from 'yjs';
import { $createTextNode, $getNodeByKey, COLLABORATION_TAG, HISTORIC_TAG } from 'lexical';
import { syncLexicalUpdateToYjs } from '@lexical/yjs';

const bindings = new WeakSet();
const patchedPrototypes = new WeakSet();
// Text collab nodes whose header this peer added to repair text.
const repairs = new WeakSet();
// Elements with a repair header that may still need to be released.
const elementsWithRepairs = new WeakSet();

// The origin of the changes this package writes while it applies a remote
// change or an undo: repair headers, and the cleanup of text nodes that
// Lexical normalized during that update. Neither is an edit the user can
// undo. A Yjs UndoManager tracks the binding's own origin, so it would
// record them as the user's steps. One extra undo or redo would then change
// nothing, and recording one right after an undo clears the redo stack. The
// element skips these transactions as it skips its own.
export const reconciliationOrigin = Object.freeze({ name: 'lexxy-realtime reconciliation' });

// In the @lexical/yjs v1 format, each text run in an element's Y.XmlText
// is a metadata embed (its header) followed by its characters. The binding
// applies each remote delta to a cached list of children, and some deltas
// leave that cache wrong:
//
// - Normalization on one peer merges two text nodes and deletes the second
//   header. A peer that hasn't received the text in front of those
//   characters yet treats them as dangling and deletes them from the shared
//   document, and that deletion syncs to every client.
// - Characters can arrive with no header in front of them, for example when
//   one user removes a text node while another types into it. The binding
//   deletes them too.
// - An embed inserted directly after a header is cached in front of that
//   text node. Yjs gives the run's characters to the new embed, but the
//   cache keeps them on the old node, so later edits land on the wrong node
//   and the editor shows duplicated text.
// - A header this patch added comes back as an insert when the repair ran
//   inside a transaction that was already open. The binding would add it to
//   the cache a second time.
//
// This patch checks each delta first, without changing anything. Ordinary
// deltas go to the binding's own incremental update. For the cases above it
// rebuilds the element's children from the Y.XmlText value instead, and
// gives text without a header a new header rather than deleting it. The
// document format stays v1, and the patch only affects bindings created by
// this package.
export function registerTextReconciliation(binding) {
  bindings.add(binding);
  const proto = binding.root.constructor.prototype;
  if (!patchedPrototypes.has(proto)) {
    const apply = proto.applyChildrenYjsDelta;
    proto.applyChildrenYjsDelta = function (current, deltas) {
      if (!bindings.has(current) || !needsRebuild(this._children, deltas)) return apply.call(this, current, deltas);
      rebuildChildren(this, current, deltas, apply);
    };
    const syncChildren = proto.syncChildrenFromYjs;
    proto.syncChildrenFromYjs = function (current) {
      const result = syncChildren.call(this, current);
      if (bindings.has(current)) releaseEmptyRepairs(this);
      return result;
    };
    patchedPrototypes.add(proto);
  }
  return () => bindings.delete(binding);
}

// Runs the binding's incremental update on a copy of the children's sizes
// and returns true if it would delete text without a header, misplace
// characters, or cache a header twice. The copy follows
// getPositionFromElementAndOffset and applyChildrenYjsDelta in @lexical/yjs
// 0.44.
function needsRebuild(children, deltas) {
  const runs = children.map(child => (typeof child._text === 'string'
    ? { child, text: child._text.length, header: child._normalized ? 0 : 1 }
    : { child, text: -1, header: 1 }));
  let index = 0;
  let splitText = null;
  for (const delta of deltas) {
    const { insert } = delta;
    // Text split off by an embed must be followed by a text header inserted
    // with it. Otherwise it has no header.
    if (splitText !== null && (insert == null || typeof insert !== 'object')) return true;
    if (delta.retain != null) {
      index += delta.retain;
    } else if (typeof delta.delete === 'number') {
      let remaining = delta.delete;
      while (remaining > 0) {
        const { run, at, offset, length } = runAt(runs, index, false);
        if (!run) return true;
        if (run.text < 0) {
          runs.splice(at, 1);
          remaining -= 1;
          continue;
        }
        const count = Math.min(remaining, length);
        if (offset === 0 && length === sizeOf(run)) {
          // The header is deleted. Characters after it survive only if a
          // text node precedes them.
          const dangling = Math.max(0, run.text - (count - 1));
          if (dangling > 0) {
            const previous = runs[at - 1];
            if (!previous || previous.text < 0) return true;
            previous.text += dangling;
          }
          runs.splice(at, 1);
        } else {
          run.text -= count;
        }
        remaining -= count;
      }
    } else if (typeof insert === 'string') {
      // Characters belong to a text node only when they follow its header.
      const { run, length } = runAt(runs, index, true);
      if (!run || run.text < 0 || length >= sizeOf(run)) return true;
      run.text += insert.length;
      index += insert.length;
    } else if (insert != null) {
      const type = sharedTypeOf(insert);
      if (typeof type !== 'string') return true;
      const cached = insert._collabNode;
      if (cached !== undefined && runs.some(run => run.child === cached)) return true;
      const text = insert instanceof YMap && type !== 'linebreak' ? (cached?._text.length ?? 0) : -1;
      const entry = { child: cached, text, header: 1 };
      const { run, at, length } = runAt(runs, index, false);
      if (run && run.text >= 0 && length > 0 && length <= run.text) {
        // The binding only splits when the embed lands after the run's
        // first character. Directly after the header, it caches the embed in
        // front of the run while Yjs gives the run's characters to the embed.
        if (length === run.text) return true;
        run.text -= length;
        runs.splice(at + 1, 0, entry);
        splitText = length;
      } else {
        runs.splice(at, 0, entry);
      }
      if (splitText !== null && entry.text >= 0) {
        entry.text += splitText;
        splitText = null;
      }
      index += 1;
    } else {
      return true;
    }
  }
  return splitText !== null;
}

function sizeOf(run) {
  return run.text < 0 ? 1 : run.text + run.header;
}

function runAt(runs, offset, boundaryIsEdge) {
  let end = 0;
  for (let at = 0; at < runs.length; at++) {
    const run = runs[at];
    const start = end;
    end += sizeOf(run);
    if ((boundaryIsEdge ? end >= offset : end > offset) && run.text >= 0) {
      return { run, at, offset: Math.max(offset - start - 1, 0), length: end - offset };
    }
    if (end > offset) return { run, at, offset: start, length: 0 };
  }
  return { run: null, at: runs.length, offset: 0, length: 0 };
}

function sharedTypeOf(sharedType) {
  return sharedType instanceof YMap ? sharedType.get('__type') : sharedType.getAttribute?.('__type');
}

// Rebuilds the element's children from the shared value, through the
// binding's own update with the whole value as one insert. Existing collab
// nodes keep their identity. Text without a header gets one first.
function rebuildChildren(element, binding, deltas, apply) {
  const sources = survivingTextSources(element._children, deltas);
  const xmlText = element._xmlText;
  let snapshot = xmlText.toDelta();
  const headers = [];
  let previousIsText = false;
  let offset = 0;
  for (const { insert } of snapshot) {
    if (typeof insert === 'string') {
      if (!previousIsText && insert.length) {
        const header = textHeader(binding, sources.get(offset));
        binding.doc.transact(() => xmlText.insertEmbed(offset + headers.length, header), reconciliationOrigin);
        headers.push(header);
        previousIsText = true;
      }
      offset += insert.length;
    } else {
      const type = sharedTypeOf(insert);
      previousIsText = insert instanceof YMap && typeof type === 'string' && type !== 'linebreak';
      offset++;
    }
  }
  if (headers.length) snapshot = xmlText.toDelta();
  // A type already deleted by a concurrent undo has no metadata left.
  snapshot = snapshot.filter(({ insert }) => typeof insert === 'string' || typeof sharedTypeOf(insert) === 'string');
  // A cached text node may have taken part in a local merge. Reusing its
  // old text while replaying the snapshot would duplicate characters, so
  // clear it first.
  element._children = [];
  for (const { insert } of snapshot) {
    const child = typeof insert === 'object' && insert._collabNode;
    if (child && typeof child._text === 'string') {
      child._text = '';
      child._normalized = false;
    }
  }
  apply.call(element, binding, snapshot);
  for (const header of headers) {
    if (header._collabNode) repairs.add(header._collabNode);
  }
  if (headers.length) elementsWithRepairs.add(element);
}

// Finds removed headers whose text survived the deletion and maps each one's
// original node to the text's new offset. A text run after a linebreak then
// keeps its own formatting. Without this it would take the formatting of
// the paragraph's first text node.
function survivingTextSources(children, deltas) {
  const sources = new Map();
  if (!deltas.some(delta => delta.delete != null)) return sources;
  const ranges = [];
  let end = 0;
  for (const child of children) {
    const start = end;
    end += child.getSize();
    if (typeof child._text === 'string') ranges.push({ start, end, child });
  }
  let before = 0;
  let after = 0;
  for (const delta of deltas) {
    if (delta.retain != null) { before += delta.retain; after += delta.retain; }
    else if (delta.delete != null) {
      const end = before + delta.delete;
      for (const range of ranges) {
        if (range.start >= before && range.start < end && range.end > end) sources.set(after, range.child);
      }
      before = end;
    } else if (delta.insert != null) {
      after += typeof delta.insert === 'string' ? delta.insert.length : 1;
    }
  }
  return sources;
}

function textHeader(binding, source) {
  const node = source?.getNode();
  const properties = binding.nodeProperties.get(node?.getType() || 'text');
  const header = new YMap(Object.entries(properties).map(([key, value]) => [key, node ? node[key] : value]));
  // Mark a repaired header unmergeable so other peers keep it. A peer that
  // already has the missing predecessor would otherwise normalize the header
  // away, and the two clients would keep adding and removing it until the
  // predecessor arrives. The unmergeable flag is public TextNode API, and it
  // keeps the boundary without changing the text.
  const unmergeable = $createTextNode().toggleUnmergeable().getDetail();
  header.set('__detail', (node?.getDetail() || properties.__detail || 0) | unmergeable);
  // NodeState has its own serialization; it is excluded from nodeProperties.
  const state = node?.exportJSON().$;
  if (state && Object.keys(state).length) header.set('__state', new YMap(Object.entries(state)));
  return header;
}

// Two peers can repair the same characters at once. Each adds a header in
// front of them, so all but the last header are empty. Each peer makes an
// empty header it created mergeable again when another text header follows
// it. Lexical then removes the empty node during normalization, and
// syncEditorUpdate reports the removal so the binding deletes the header.
function releaseEmptyRepairs(element) {
  if (!elementsWithRepairs.has(element)) return;
  elementsWithRepairs.delete(element);
  const children = element._children;
  for (let i = 0; i < children.length; i++) {
    const child = children[i];
    if (!repairs.has(child)) continue;
    if (child._text === '' && typeof children[i + 1]?._text === 'string') {
      repairs.delete(child);
      const node = child.getNode();
      if (node?.isUnmergeable()) node.toggleUnmergeable();
    } else {
      elementsWithRepairs.add(element);
    }
  }
}

// Lexical removes empty text nodes during normalization without listing
// them in normalizedNodes: an empty node it normalizes, and an empty sibling
// next to it. After a remote update, the v1 adapter would keep their headers
// in its child cache, and the next local edit would go to the wrong child
// index. This adds those nodes to normalizedNodes, including nodes created
// and removed in the same update. The binding then writes their removal to
// Yjs under reconciliationOrigin.
export function syncEditorUpdate(binding, provider, update) {
  const { editorState, prevEditorState, dirtyElements, dirtyLeaves, tags } = update;
  const remote = tags.has(COLLABORATION_TAG) || tags.has(HISTORIC_TAG);
  let { normalizedNodes } = update;
  const sync = () => editorState.read(() => {
    if (remote) {
      // A leaf created and removed in the same update is also missing from
      // dirtyLeaves, so check the cached children of each dirty parent.
      // Removing a node always marks its parent dirty.
      for (const key of dirtyElements.keys()) {
        const parent = key === 'root' ? binding.root : binding.collabNodeMap.get(key);
        for (const child of parent?._children || []) {
          if (child._text === '' && $getNodeByKey(child._key) === null) {
            if (normalizedNodes === update.normalizedNodes) normalizedNodes = new Set(normalizedNodes);
            normalizedNodes.add(child._key);
          }
        }
      }
    }
    syncLexicalUpdateToYjs(binding, provider, prevEditorState, editorState, dirtyElements, dirtyLeaves, normalizedNodes, tags);
  });
  // For a remote update, the binding writes only the normalization cleanup.
  if (remote) binding.doc.transact(sync, reconciliationOrigin);
  else sync();
}
