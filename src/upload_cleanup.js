import { $nodesOfType, HISTORY_MERGE_TAG } from 'lexical';

// Upload nodes sync without their File, so only the uploading client can
// finish them. Pagehide and Turbo discard remove this client's own
// file-bearing nodes while the binding can still sync the deletion. A
// client alone past an awareness settle delay removes remaining file-less
// placeholders, presuming their uploader gone -- the backstop for lost
// pagehide sends and for discards no event covers (streams, morphing).
export function registerUploadCleanup(editorElement, editor, provider, awareness) {
  // Teardown also fires on DOM moves, where the upload lives on, so it
  // cannot remove nodes. A persisted pagehide means bfcache: the page
  // and its upload may come back.
  const removeOwnPendingUploads = (event) => {
    if (event?.persisted) return;
    removePendingUploadNodes(editor);
  };
  window.addEventListener('pagehide', removeOwnPendingUploads);

  // Plain DOM events; apps without Turbo never fire them. An editor
  // inside data-turbo-permanent survives the navigation, upload included,
  // so it is left alone.
  const removeUploadsBeforeTurboDiscard = (event) => {
    if (editorElement.closest('[data-turbo-permanent]')) return;
    if (event.type === 'turbo:before-frame-render' && !event.target.contains(editorElement)) return;
    removePendingUploadNodes(editor);
  };
  document.addEventListener('turbo:before-cache', removeUploadsBeforeTurboDiscard);
  document.addEventListener('turbo:before-frame-render', removeUploadsBeforeTurboDiscard);

  const cancelOrphanSweep = removeOrphanedUploadsWhenAlone(editor, provider, awareness);

  return () => {
    window.removeEventListener('pagehide', removeOwnPendingUploads);
    document.removeEventListener('turbo:before-cache', removeUploadsBeforeTurboDiscard);
    document.removeEventListener('turbo:before-frame-render', removeUploadsBeforeTurboDiscard);
    cancelOrphanSweep();
  };
}

// A synced client that has seen no other awareness state for the whole
// settle delay removes file-less upload nodes, presuming their uploader
// gone. The delay must outlast y-protocols' ~15s awareness renewal, or
// the last client into a quiet room sweeps a live upload; sweeping has no
// deadline, so long is safe. Awareness stays best-effort: a tab throttled
// past the delay looks absent while its upload runs. Own file-bearing
// nodes are never touched, since being alone while uploading is normal.
const ORPHAN_SWEEP_SETTLE_MS = 25000;

function removeOrphanedUploadsWhenAlone(editor, provider, awareness) {
  let timer = null;
  let cancelled = false;

  const alone = () => awareness.getStates().size <= 1;

  const sweep = () => {
    timer = null;
    if (cancelled || !alone()) return;
    if (!provider.synced) {
      // Not synced yet; try again after another settle delay.
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
    // The flag also covers the whenSynced continuation, which can fire
    // after teardown and would otherwise re-arm the timer.
    cancelled = true;
    clearTimeout(timer);
    timer = null;
    awareness.off('change', onAwarenessChange);
    provider.doc?.off?.('update', schedule);
  };
}

// Remove this client's own in-flight upload nodes -- the ones still holding
// a local File. Remote copies have `file` excluded from sync, so a
// file-bearing node is always ours.
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
