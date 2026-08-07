import { $nodesOfType, HISTORY_MERGE_TAG } from 'lexical';

// Abandoned-upload cleanup. An upload placeholder syncs to every client,
// but only the client holding the File can complete it. When that client
// goes away mid-upload, the placeholder would sit in the shared document
// forever. Three layers remove it:
//
// 1. pagehide: the dying page removes its own file-bearing upload nodes.
//    Best-effort; the send can be lost with the page.
// 2. Turbo discard: a body or frame swap keeps the page's JS alive but
//    destroys the editor, so the same removal runs from Turbo's events,
//    which fire while the binding still syncs.
// 3. Alone sweep: a client alone for a settle delay deletes remote
//    (file-less) placeholders nobody can complete. The backstop for lost
//    pagehide sends and for discards no event covers (streams, morphing).
export function registerUploadCleanup(editorElement, editor, provider, awareness) {
  // pagehide, not teardown: a DOM move fires teardown while the upload
  // survives. persisted means bfcache; the page may come back and the
  // upload with it.
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

// A remote upload node (no local File) can only ever be completed by the
// client that holds the File. When awareness reports no other clients for
// a full settle delay, that client is presumed gone and the node is swept.
// The delay exists because awareness lags the doc: at join time the doc
// syncs before peers' awareness states arrive, and a quiet peer is only
// re-learned when y-protocols renews its state on a ~15s cycle. The delay
// must outlast that cycle, or the last client into a quiet room sweeps a
// live upload. Sweeping has no deadline, so long is safe.
//
// This is a heuristic, not a guarantee. Awareness frames are best-effort,
// and a background tab throttled past the settle delay can look absent
// while its upload is still running; a peer would then sweep the live
// node. Own in-flight nodes (file still present) are never touched: being
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
