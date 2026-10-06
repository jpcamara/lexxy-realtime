import { $nodesOfType, HISTORY_MERGE_TAG } from 'lexical';

// Upload nodes sync without their File, so only the uploading client can
// finish them. On pagehide and before Turbo discards the page, this client
// removes its own nodes that hold a File, while the binding can still sync
// the deletion. A client that stays alone past an awareness settle delay
// removes any remaining placeholders without a File, because their
// uploader is probably gone. That covers deletions from a pagehide that
// never reached the server, and page changes that fire no event, such as
// Turbo Streams and morphing.
export function registerUploadCleanup(editorElement, editor, provider, awareness) {
  // Teardown also runs on DOM moves, where the upload keeps going, so
  // teardown doesn't remove nodes. A persisted pagehide means the page went
  // into the bfcache, and the page and its upload may come back.
  const removeOwnPendingUploads = (event) => {
    if (event?.persisted) return;
    removePendingUploadNodes(editor);
  };
  window.addEventListener('pagehide', removeOwnPendingUploads);

  // These are plain DOM events, so apps without Turbo never fire them. An
  // editor inside data-turbo-permanent survives the navigation with its
  // upload, so we leave it alone. The listeners run in the capture phase,
  // so they remove the nodes before <yrby-document> handles
  // turbo:before-cache and unbinds the editor.
  const removeUploadsBeforeTurboDiscard = (event) => {
    if (editorElement.closest('[data-turbo-permanent]')) return;
    if (event.type === 'turbo:before-frame-render' && !event.target.contains(editorElement)) return;
    removePendingUploadNodes(editor);
  };
  document.addEventListener('turbo:before-cache', removeUploadsBeforeTurboDiscard, true);
  document.addEventListener('turbo:before-frame-render', removeUploadsBeforeTurboDiscard, true);

  const cancelOrphanSweep = removeOrphanedUploadsWhenAlone(editor, provider, awareness);

  return () => {
    window.removeEventListener('pagehide', removeOwnPendingUploads);
    document.removeEventListener('turbo:before-cache', removeUploadsBeforeTurboDiscard, true);
    document.removeEventListener('turbo:before-frame-render', removeUploadsBeforeTurboDiscard, true);
    cancelOrphanSweep();
  };
}

// A synced client that sees no other awareness state for the whole settle
// delay removes upload nodes that have no File, assuming their uploader
// left. The delay has to be longer than y-protocols' awareness renewal,
// which is about 15 seconds. Otherwise the last client to join a quiet room
// could remove a live upload. Nothing needs the sweep to happen quickly, so
// a long delay is fine. Awareness is best-effort, though. A tab throttled
// past the delay looks absent while its upload is still running. The sweep
// never removes this client's own nodes that hold a File, because being
// alone while uploading is normal.
const ORPHAN_SWEEP_SETTLE_MS = 25000;

function removeOrphanedUploadsWhenAlone(editor, provider, awareness) {
  let timer = null;
  let cancelled = false;

  const alone = () => awareness.getStates().size <= 1;

  const sweep = () => {
    timer = null;
    if (cancelled || !alone()) return;
    if (!provider.synced) {
      // Not synced yet, so try again after another settle delay.
      schedule();
      return;
    }
    const info = editor?._nodes?.get?.('action_text_attachment_upload');
    if (!info) return;

    editor.update(
      () => {
        for (const node of $nodesOfType(info.klass)) {
          if (node.getType() === 'action_text_attachment_upload' && !node.file) node.remove();
        }
      },
      { discrete: true, tag: HISTORY_MERGE_TAG }
    );
  };

  const schedule = () => {
    if (!cancelled && !timer && alone()) timer = setTimeout(sweep, ORPHAN_SWEEP_SETTLE_MS);
  };
  const onAwarenessChange = () => {
    if (alone()) {
      schedule();
    } else if (timer) {
      clearTimeout(timer);
      timer = null;
    }
  };

  awareness.on('change', onAwarenessChange);
  // An orphan can also arrive with no awareness change at all: its
  // author's awareness frames were lost, so only the doc update shows up.
  // schedule is a no-op unless this client is alone with no sweep pending,
  // so listening on every update costs one timer at most.
  provider.doc?.on?.('update', schedule);
  provider.whenSynced?.then?.(schedule);
  schedule();

  return () => {
    // The flag also stops the whenSynced callback, which can run after
    // teardown and would otherwise start the timer again.
    cancelled = true;
    clearTimeout(timer);
    timer = null;
    awareness.off('change', onAwarenessChange);
    provider.doc?.off?.('update', schedule);
  };
}

// Removes this client's own in-flight upload nodes, the ones that still hold
// a local File. `file` is excluded from sync, so a node with a File always
// belongs to this client.
function removePendingUploadNodes(editor) {
  const uploadType = 'action_text_attachment_upload';
  const info = editor?._nodes?.get?.(uploadType);
  if (!info) return;

  editor.update(
    () => {
      for (const node of $nodesOfType(info.klass)) {
        if (node.getType() === uploadType && node.file) node.remove();
      }
    },
    { discrete: true, tag: HISTORY_MERGE_TAG }
  );
}
