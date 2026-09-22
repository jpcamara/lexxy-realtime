import { syncYjsChangesToLexical } from '@lexical/yjs';

// The Yjs->Lexical apply, wrapped so a throw cannot silently desync the
// editor. The failure mode without this: the observer fires from inside
// Y.applyUpdate, which y-protocols wraps in a catch-and-log — so by the time
// anything throws in Lexical's apply, the Y.Doc already holds the update, the
// exception is swallowed upstream, and this editor permanently shows less
// than the document (a reconnect is a doc no-op, so no observer ever fires
// again for the lost content). One throw also poisons the binding's collab
// offset caches, which can delete further visible text on later applies.
//
// onDesync fires once per binding — the recovery replaces the binding (and
// this observer with it), so a persistent fault surfaces once per rebuild
// rather than once per frame. `sync` is injectable for tests.
export function createRemoteApplier(provider, binding, { onDesync, sync = syncYjsChangesToLexical } = {}) {
  let desynced = false;
  return (events, transaction) => {
    if (transaction.origin === binding) return;
    if (desynced) return;
    try {
      sync(binding, provider, events, false);
    } catch (error) {
      desynced = true;
      console.error(
        'lexxy-realtime: a remote update failed to apply; the editor is out of sync with the document.',
        error
      );
      try { onDesync?.(error); }
      catch (callbackError) { console.error('lexxy-realtime: desync callback failed.', callbackError); }
    }
  };
}
