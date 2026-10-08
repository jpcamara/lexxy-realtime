// Attachment properties that must not sync, and a fix that lets
// @lexical/yjs bind an empty document.

// These attachment properties stay on the local client. Yjs can't encode a
// File and throws partway through a sync. `editor` is a live object, and
// `previewSrc` is an object URL that only works in this browser.
// `uploadUrl` and `blobUrlTemplate` are host config, and keeping them local
// stops a peer from starting a second DirectUpload. `progress`,
// `uploadError`, and `pendingPreview` do sync, so peers see upload
// progress, errors, and the placeholder shown while the server generates a
// preview.
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

// Builds the excludedProperties map for createBinding, keyed by the node
// classes this editor registered.
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

// In @lexical/yjs, CollabElementNode.splice throws in development, and
// records `undefined` in production, when it removes a child at an index
// that has none and has nothing to insert. Binding an empty document makes
// exactly that call, so we turn it into a no-op. createBinding builds
// binding.root without making the call, so patching right after binding is
// early enough. The prototype isn't exported, so we reach it through
// binding.root. Every @lexical/yjs binding on the page shares that
// prototype. We patch it once and never undo the patch.
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
