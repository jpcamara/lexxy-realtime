import { $getSelection, $isRangeSelection, $normalizeSelection__EXPERIMENTAL,
  CONTROLLED_TEXT_INSERTION_COMMAND, COMMAND_PRIORITY_HIGH } from 'lexical';

// A caret restored from Yjs, or the DOM selection in an empty paragraph,
// can still point at the paragraph element after a peer inserts text
// there. Lexical's controlled insertion then creates a new TextNode before
// that text, merges the old text into it, and replaces all of the old
// characters in the shared document. When two peers do this at once, the
// existing text is duplicated. Moving the caret into the existing text node
// before inserting avoids that.
export function registerSelectionNormalization(editor) {
  return editor.registerCommand(CONTROLLED_TEXT_INSERTION_COMMAND, () => {
    const selection = $getSelection();
    if ($isRangeSelection(selection) && selection.isCollapsed()) {
      $normalizeSelection__EXPERIMENTAL(selection);
    }
    return false;
  }, COMMAND_PRIORITY_HIGH);
}
