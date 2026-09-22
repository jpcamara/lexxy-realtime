import { $getSelection, $isRangeSelection, $normalizeSelection__EXPERIMENTAL,
  CONTROLLED_TEXT_INSERTION_COMMAND, COMMAND_PRIORITY_HIGH } from 'lexical';

// A caret restored from Yjs (or an empty paragraph's DOM selection) can
// remain an element point after a peer inserts text there. Lexical's
// controlled insertion would create a NEW TextNode before that text, merge
// the old text into it, then replace the old CRDT characters wholesale.
// Two peers doing that concurrently duplicate the pre-existing text.
// Resolve the same caret to its existing text node before inserting.
export function registerSelectionNormalization(editor) {
  return editor.registerCommand(CONTROLLED_TEXT_INSERTION_COMMAND, () => {
    const selection = $getSelection();
    if ($isRangeSelection(selection) && selection.isCollapsed()) {
      $normalizeSelection__EXPERIMENTAL(selection);
    }
    return false;
  }, COMMAND_PRIORITY_HIGH);
}
