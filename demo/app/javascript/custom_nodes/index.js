// Lexical's hashtag and mark nodes, added to every Lexxy editor on the page.
//
// Each Lexxy Extension returns a Lexical extension from lexicalExtension.
// Its nodes join the editor's node list, and the collaboration binding
// syncs every node on that list. Lexxy defines its custom elements after
// the current task, so calling configure() at module scope is early enough.
//
// The server doesn't run this file. Y::Lexxy renders the stored document,
// so a custom node needs a render rule on the model (see Post). The demo
// README's "Custom nodes" section covers what happens without one.
import { Extension, configure } from "@37signals/lexxy"
import { defineExtension, $getSelection, $isRangeSelection } from "lexical"
import { HashtagExtension } from "@lexical/hashtag"
import { MarkExtension, $wrapSelectionInMarkNode } from "@lexical/mark"

// Typing #word creates a HashtagNode, a TextNode subclass. The theme key
// sets its class in the editor.
class HashtagsExtension extends Extension {
  get lexicalExtension() {
    return defineExtension({
      name: "demo/hashtags",
      dependencies: [ HashtagExtension ],
      theme: { hashtag: "hashtag" }
    })
  }
}

// A MarkNode is an ElementNode that wraps text in <mark>. Comment threads
// build on it. The toolbar button wraps the current selection, and the
// theme's mark keys set its classes.
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
    // Keep focus and the selection in the editor while clicking.
    button.addEventListener("mousedown", (event) => event.preventDefault())
    button.addEventListener("click", () => this.markSelection())
    toolbar.appendChild(button)
  }

  markSelection() {
    this.editorElement.editor.update(() => {
      const selection = $getSelection()
      if (!$isRangeSelection(selection) || selection.isCollapsed()) return
      // crypto.randomUUID only exists on https and localhost.
      const id = crypto.randomUUID?.() ?? Math.random().toString(36).slice(2)
      $wrapSelectionInMarkNode(selection, selection.isBackward(), id)
    })
  }
}

configure({ global: { extensions: [ HashtagsExtension, CommentMarksExtension ] } })
