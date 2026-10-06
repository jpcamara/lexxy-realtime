import { Map as YMap } from 'yjs';
import { $createTextNode, $getNodeByKey, COLLABORATION_TAG, HISTORIC_TAG } from 'lexical';
import { syncLexicalUpdateToYjs } from '@lexical/yjs';

const bindings = new WeakSet();
const patchedPrototypes = new WeakSet();

// @lexical/yjs v1 merges adjacent text by deleting a metadata embed and
// keeping its characters. A peer can receive that deletion before the embed
// for the text that survives. The incremental adapter then treats the text
// as dangling and deletes it, and that deletion syncs to every client. This
// patch rebuilds the children from the shared value and adds a metadata
// embed wherever text has none, so the surviving characters are kept. The
// document format stays v1, and the patch only affects bindings created by
// this package.
export function registerTextReconciliation(binding) {
  bindings.add(binding);
  const proto = binding.root.constructor.prototype;
  if (!patchedPrototypes.has(proto)) {
    const apply = proto.applyChildrenYjsDelta;
    proto.applyChildrenYjsDelta = function (current, deltas) {
      if (!bindings.has(current)) return apply.call(this, current, deltas);
      let snapshot = this._xmlText.toDelta();
      const sources = survivingTextSources(this._children, deltas);
      let previousIsText = false;
      let offset = 0;
      let added = 0;
      for (const { insert } of snapshot) {
        if (typeof insert === 'string') {
          if (!previousIsText && insert.length) {
            const replacement = textHeader(current, sources.get(offset));
            current.doc.transact(() => this._xmlText.insertEmbed(offset + added, replacement), current);
            added++;
            previousIsText = true;
          }
          offset += insert.length;
        } else {
          previousIsText = insert instanceof YMap && insert.get('__type') !== 'linebreak';
          offset++;
        }
      }
      if (added) snapshot = this._xmlText.toDelta();
      // A cached text node may have taken part in a local merge. Reusing its
      // old text while replaying the snapshot would duplicate characters, so
      // clear it first.
      this._children = [];
      for (const { insert } of snapshot) {
        const child = typeof insert === 'object' && insert._collabNode;
        if (child && typeof child._text === 'string') {
          child._text = '';
          child._normalized = false;
        }
      }
      return apply.call(this, current, snapshot);
    };
    patchedPrototypes.add(proto);
  }
  return () => bindings.delete(binding);
}

// Finds removed headers whose text survived the deletion and maps each one's
// original node to the text's new offset. A text run after a linebreak then
// keeps its own formatting. Without this it would take the formatting of
// the paragraph's first text node.
function survivingTextSources(children, deltas) {
  const ranges = [];
  let end = 0;
  for (const child of children) {
    const start = end;
    end += child.getSize();
    if (typeof child._text === 'string') ranges.push({ start, end, child });
  }
  const sources = new Map();
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

// Lexical removes empty text nodes without listing them in normalizedNodes.
// After a remote update, the v1 adapter would keep their headers in its
// child cache, and the next local edit would go to the wrong child index.
// This adds those nodes to normalizedNodes.
export function syncEditorUpdate(binding, provider, update) {
  const { editorState, prevEditorState, dirtyElements, dirtyLeaves, tags } = update;
  let { normalizedNodes } = update;
  editorState.read(() => {
    if (tags.has(COLLABORATION_TAG) || tags.has(HISTORIC_TAG)) {
      // A leaf created and removed in the same update is also missing from
      // dirtyLeaves, so check the cached children of each dirty parent.
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
}
