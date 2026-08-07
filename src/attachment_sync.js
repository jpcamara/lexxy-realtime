// Attachment property exclusions and an empty-document binding
// workaround for @lexical/yjs.

// What stays local: `file` (yjs cannot encode a File and throws
// mid-sync), `editor` (live object reference), `previewSrc` (client-local
// object URL), and `uploadUrl` / `blobUrlTemplate` (host config; without
// them a peer cannot start a duplicate DirectUpload). `progress`,
// `uploadError`, and `pendingPreview` sync on purpose, so peers render
// live progress, the error state, and the poll-until-ready placeholder
// for server-generated previews.
const UNSYNCABLE_ATTACHMENT_PROPERTIES = new Set([
  'editor',
  'file',
  'previewSrc',
  'uploadUrl',
  'blobUrlTemplate',
]);

const LEXXY_ATTACHMENT_NODE_TYPES = new Set([
  'action_text_attachment',
  'action_text_attachment_upload',
  'custom_action_text_attachment',
]);

// The excluded-properties map for createBinding, keyed by the node
// classes the editor actually registered.
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

// @lexical/yjs's CollabElementNode.splice throws (dev) or records
// `undefined` (prod) when an empty binding removes a child at an index
// that has none, with nothing to insert -- which is what the
// empty-collab-tree bootstrap does. Make that case a no-op so an empty
// document can bind. createBinding builds binding.root without hitting
// the case, so patching the unexported prototype through the live binding
// root right after bind is in time. The patch lands once, on the
// prototype shared by every @lexical/yjs binding on the page, and is
// never reverted.
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
