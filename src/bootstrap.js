import { $getRoot, $createParagraphNode, HISTORY_MERGE_TAG } from 'lexical';

// True when an editor state holds no user content: no children, or a single
// childless paragraph (Lexical's resting state). An attachment-only body has a
// decorator child, so it counts as content.
function emptyEditorState(state) {
  return state.read(() => {
    const root = $getRoot();
    if (root.getChildrenSize() === 0) return true;
    const only = root.getChildrenSize() === 1 && root.getFirstChild();
    return !!only && only.getType() === 'paragraph' && only.getChildrenSize() === 0;
  });
}

// Seed only after the first sync, so an existing document loads through
// the Yjs->Lexical observer and is never overwritten. A still-empty
// document receives the captured Action Text body, or a fresh paragraph.
// Two clients opening a new document together can both seed; Lexical's
// CollaborationPlugin has the same check-then-act race, and its docs
// recommend seeding server-side, which needs HTML-to-Yjs conversion on
// the server. Local input before the first sync (typed text, an upload
// placeholder) also suppresses the captured seed.
// Repro: test/headless/bootstrap_race_repro.mjs.
//
// The returned canceller stops the fallback poll and makes a late
// whenSynced resolution a no-op.
export function bootstrapWhenSynced(editor, provider, binding, initialEditorState) {
  let done = false;
  const seed = () => {
    if (done || !provider.synced) return;
    done = true;
    if (timer) clearInterval(timer);
    if (binding.root.getSharedType().length === 0) {
      if (initialEditorState && !emptyEditorState(initialEditorState)) {
        // Restore the captured content. The binding diffs against the cleared
        // (empty) state, so every restored node registers as new and flows
        // into the collab tree -- seeding the document.
        editor.setEditorState(initialEditorState, { tag: HISTORY_MERGE_TAG });
        return;
      }
      // New (empty) document. Lexical won't keep the root empty, so the
      // paragraph Lexxy seeded shares the same node key in prev/next and the
      // binding never treats it as "new". Replace it with a fresh-keyed
      // paragraph in one transaction so the binding creates it in the collab
      // tree, aligning Lexical with Yjs. (Existing docs are loaded by the
      // Yjs->Lexical observer, so this only runs for a brand-new document.)
      editor.update(
        () => {
          const root = $getRoot();
          root.clear();
          root.append($createParagraphNode());
        },
        { tag: HISTORY_MERGE_TAG }
      );
    }
  };
  // Event-driven on providers that expose whenSynced (YrbyProvider); the
  // poll is the fallback for foreign providers, which only promise a
  // `synced` getter.
  let timer;
  const check = () => {
    seed();
    if (!done && !timer) {
      timer = setInterval(seed, 50);
      timer.unref?.();
    }
  };
  if (provider.whenSynced?.then) {
    provider.whenSynced.then(check, () => {});
  } else {
    check();
  }
  return () => {
    done = true;
    clearInterval(timer);
  };
}
