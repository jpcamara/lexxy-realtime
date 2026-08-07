// What Lexxy's attachment nodes need to sync under @lexical/yjs:
// client-local properties kept out of the shared doc, and a splice patch
// so an empty document can bind.

// What stays local: `file` (yjs can't encode a File and throws mid-sync),
// `editor` (live object reference), `previewSrc` (client-local object URL),
// and `uploadUrl` / `blobUrlTemplate` (host config -- and an absent
// uploadUrl is what stops a peer from starting its own duplicate
// DirectUpload). Everything else syncs on purpose: `progress` and
// `uploadError` give peers a live progress bar and the error state, and
// `pendingPreview` tells peers to render the poll-until-ready placeholder
// for server-generated previews (PDFs and friends) instead of requesting a
// preview that doesn't exist yet and giving up.
const UNSYNCABLE_ATTACHMENT_PROPERTIES = new Set([
  'editor',
  'file',
  'previewSrc',
  'uploadUrl',
  'blobUrlTemplate',
]);

// The Lexxy node types that carry those properties. Keyed by node type:
// construction is upstream's job now (basecamp/lexxy#1196), but a raw File
// still can't cross the sync boundary.
const LEXXY_ATTACHMENT_NODE_TYPES = new Set([
  'action_text_attachment',
  'action_text_attachment_upload',
  'custom_action_text_attachment',
]);

// The excluded-properties map for createBinding: every registered
// attachment type keeps its client-local properties out of the shared doc.
export function attachmentExclusions(editor) {
  const excludedProperties = new Map();
  const nodes = editor?._nodes;
  if (!nodes || typeof nodes.forEach !== 'function') return excludedProperties;
  nodes.forEach((info, type) => {
    if (LEXXY_ATTACHMENT_NODE_TYPES.has(type)) {
      excludedProperties.set(info.klass, UNSYNCABLE_ATTACHMENT_PROPERTIES);
    }
  });
  return excludedProperties;
}

// @lexical/yjs's CollabElementNode.splice throws (dev) / appends `undefined`
// (prod) when asked to insert at an index that has no existing child and no
// collab node to insert -- which is exactly what the empty-collab-tree bootstrap
// does. Make that one case a no-op so an empty document can bind. createBinding
// builds binding.root without triggering this case, so patching the (unexported)
// CollabElementNode prototype through the live binding root -- right after the
// bind, before bootstrap/sync runs -- is in time. Guarded by a per-prototype
// flag.
//
// Blast radius: this mutates the SHARED CollabElementNode prototype once, for
// the whole page, and is never reverted -- every @lexical/yjs consumer on the
// page sees the patched splice. It only narrows the one undefined-at-empty-index
// no-op case, so it is safe, but it is a page-global side effect by design.
export function patchCollabElementSplice(binding) {
  const proto = binding?.root?.constructor?.prototype;
  if (!proto || typeof proto.splice !== 'function' || proto.__yrbySplicePatched) return;
  const original = proto.splice;
  proto.splice = function (b, index, delCount, collabNode) {
    if (this._children[index] === undefined && collabNode === undefined) return;
    return original.call(this, b, index, delCount, collabNode);
  };
  proto.__yrbySplicePatched = true;
}
