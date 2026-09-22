import { Map as YMap } from 'yjs';
import { $createTextNode, $getNodeByKey, COLLABORATION_TAG, HISTORIC_TAG } from 'lexical';
import { syncLexicalUpdateToYjs } from '@lexical/yjs';

const bindings = new WeakSet();
const patchedPrototypes = new WeakSet();

// @lexical/yjs v1 merges adjacent text by deleting a metadata embed while
// keeping its characters. That deletion can arrive before the surviving
// peer's embed. Its incremental adapter then deletes the "dangling" text,
// broadcasting permanent data loss. Reconcile from the actual shared value
// and supply missing metadata instead; never delete surviving characters.
// This preserves the v1 document format and applies only to our bindings.
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
      // The same cached text node may have participated in a local merge.
      // Reusing its old text when replaying a snapshot duplicates characters.
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

// Locate a removed header whose text survived the deletion. Map its original
// node to the resulting text offset, so a later run after a linebreak keeps
// its OWN formatting rather than inheriting the paragraph's first text node.
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
  // Keep a repaired header stable: another peer may already know the missing
  // predecessor and otherwise normalize this header away again. That causes
  // an endless repair/cleanup exchange until the predecessor finally arrives.
  // The public TextNode flag preserves this boundary without changing text.
  const unmergeable = $createTextNode().toggleUnmergeable().getDetail();
  header.set('__detail', (node?.getDetail() || properties.__detail || 0) | unmergeable);
  // NodeState has its own serialization; it is excluded from nodeProperties.
  const state = node?.exportJSON().$;
  if (state && Object.keys(state).length) header.set('__state', new YMap(Object.entries(state)));
  return header;
}

// Lexical removes empty text nodes without listing them in normalizedNodes.
// On a remote update the v1 adapter otherwise leaves their headers in its
// child cache, so the next local edit is written to the wrong child index.
export function syncEditorUpdate(binding, provider, update) {
  const { editorState, prevEditorState, dirtyElements, dirtyLeaves, tags } = update;
  let { normalizedNodes } = update;
  editorState.read(() => {
    if (tags.has(COLLABORATION_TAG) || tags.has(HISTORIC_TAG)) {
      // Newly created, immediately removed leaves are also dropped from
      // dirtyLeaves. Inspect only the affected parents' cached children.
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
