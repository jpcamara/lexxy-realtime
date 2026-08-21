// Ecosystem Lexical nodes, wired into every Lexxy editor on the page.
//
// Lexxy's extension API: subclass its Extension, return a Lexical extension
// (lexical's defineExtension) from `lexicalExtension`, and register the
// class with configure(). Lexxy passes the Lexical extension into
// buildEditorFromExtensions, so its nodes join the editor's node list --
// which is also where the collaboration binding (@lexical/yjs) picks them
// up. Lexxy defers defining its custom elements until after the current
// task, so calling configure() at module scope is early enough.
//
// The server does not run this JavaScript. Y::Lexxy renders the stored
// document to HTML knowing only core Lexical and Lexxy's nodes, so each
// custom node type needs a render rule on the model (see Post) or it
// degrades in the saved body. See "Custom nodes" in the demo README for
// how each of these two degrades.
import { Extension, configure } from "@37signals/lexxy"
import { defineExtension, $getSelection, $isRangeSelection } from "lexical"
import { HashtagExtension } from "@lexical/hashtag"
import { MarkExtension, $wrapSelectionInMarkNode } from "@lexical/mark"

// @lexical/hashtag: typing #word creates a HashtagNode (a TextNode
// subclass). The package ships a ready-made Lexical extension; the theme
// key gives the node its editor class.
class HashtagsExtension extends Extension {
  get lexicalExtension() {
    return defineExtension({
      name: "demo/hashtags",
      dependencies: [ HashtagExtension ],
      theme: { hashtag: "hashtag" }
    })
  }
}

// @lexical/mark: MarkNode (an ElementNode) wraps text in <mark>, the
// building block for comment threads. The toolbar button wraps the current
// selection. MarkNode reads its classes from the theme's mark keys.
class CommentMarksExtension extends Extension {
  get lexicalExtension() {
    return defineExtension({
      name: "demo/comment-marks",
      dependencies: [ MarkExtension ],
      theme: { mark: "comment-mark", markOverlap: "comment-mark--overlap" }
    })
  }

  get allowedElements() {
    return [ "mark" ]
  }

  initializeToolbar(toolbar) {
    const button = document.createElement("button")
    button.type = "button"
    button.name = "comment-mark"
    button.title = "Mark for comment"
    button.className = "lexxy-editor__toolbar-button"
    button.innerHTML = `
      <svg viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
        <path d="M3 2.5h12A1.5 1.5 0 0 1 16.5 4v7a1.5 1.5 0 0 1-1.5 1.5H9.5L5.5 16v-3.5H3A1.5 1.5 0 0 1 1.5 11V4A1.5 1.5 0 0 1 3 2.5Z"/>
      </svg>`
    // Keep focus (and the selection) in the editor while clicking.
    button.addEventListener("mousedown", (event) => event.preventDefault())
    button.addEventListener("click", () => this.markSelection())
    toolbar.appendChild(button)
  }

  markSelection() {
    this.editorElement.editor.update(() => {
      const selection = $getSelection()
      if (!$isRangeSelection(selection) || selection.isCollapsed()) return
      $wrapSelectionInMarkNode(selection, selection.isBackward(), crypto.randomUUID())
    })
  }
}

configure({ global: { extensions: [ HashtagsExtension, CommentMarksExtension ] } })
