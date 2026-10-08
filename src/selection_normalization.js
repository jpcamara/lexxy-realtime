import { $getSelection, $isRangeSelection, $isTextNode, $normalizeSelection__EXPERIMENTAL,
  CONTROLLED_TEXT_INSERTION_COMMAND, COMMAND_PRIORITY_HIGH } from 'lexical';

// A caret restored from Yjs, or the DOM selection in an empty paragraph,
// can still point at the paragraph element after a peer inserts text
// there. Lexical's controlled insertion then creates a new TextNode before
// that text, merges the old text into it, and replaces all of the old
// characters in the shared document. When two peers do this at once, the
// existing text is duplicated.
//
// This handler moves a collapsed element caret onto the text node beside
// it, so typing extends that node and it keeps its identity. It only does
// this for simple, mergeable text. A caret beside unmergeable or special
// text is an intentional boundary and stays where it is. The handler
// returns false, so the editor's own handler still inserts the text.
export function registerSelectionNormalization(editor) {
  return editor.registerCommand(CONTROLLED_TEXT_INSERTION_COMMAND, () => {
    const selection = $getSelection();
    if ($isRangeSelection(selection) && selection.isCollapsed() && selection.anchor.type === 'element') {
      const element = selection.anchor.getNode();
      const offset = selection.anchor.offset;
      const child = element.getChildAtIndex(offset === element.getChildrenSize() ? offset - 1 : offset);
      if ($isTextNode(child) && child.isSimpleText() && !child.isUnmergeable()) {
        $normalizeSelection__EXPERIMENTAL(selection);
      }
    }
    return false;
  }, COMMAND_PRIORITY_HIGH);
}
