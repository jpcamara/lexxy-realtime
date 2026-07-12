// Browser test entry. Renders a real Lexxy editor wired to the yrby test
// server through the YrbyProvider, mirroring how a Rails host wires it:
// create the provider, set it on <lexxy-collaboration>, append, then connect().
//
// Reads `room`, `name`, `color` from the query string so two agent-browser
// sessions can join the same document as different users. Exposes window.__test
// for assertions.
import "@37signals/lexxy";
import { YrbyProvider } from "../../src/index.js"; // also registers <lexxy-collaboration>
import * as Y from "yjs";
import { createConsumer } from "@rails/actioncable";
import { $getRoot } from "lexical";

// Collaboration errors are logged, not thrown (a bad remote update must not
// kill the page), so the e2e reads them from here.
window.__errors = [];
const originalConsoleError = console.error;
console.error = (...args) => {
  window.__errors.push(args.map(String).join(" ").slice(0, 300));
  originalConsoleError(...args);
};

const params = new URLSearchParams(location.search);
const room = params.get("room") || "browser-demo";
const name = params.get("name") || "User";
const color = params.get("color") || "#3b82f6";

const consumer = createConsumer(`ws://${location.host}/cable`);
const editor = document.getElementById("editor");

function start() {
  const doc = new Y.Doc();
  const provider = new YrbyProvider(doc, consumer, "DocumentChannel", { id: room });
  const awareness = provider.awareness; // the provider owns awareness; read it back

  const collab = document.createElement("lexxy-collaboration");
  collab.setAttribute("doc-id", room);
  collab.setAttribute("name", name);
  collab.setAttribute("color", color);
  collab.setAttribute("channel-name", "DocumentChannel");
  collab.setAttribute("channel-params", JSON.stringify({ id: room }));
  collab.consumer = consumer;
  collab.doc = doc;
  collab.provider = provider;

  editor.appendChild(collab);
  provider.connect();

  // Test hooks.
  window.__test = {
    doc,
    provider,
    awareness,
    room,
    // What the user actually sees: the editor's contenteditable text.
    text: () => {
      const ce = editor.querySelector('[contenteditable="true"]') || editor.querySelector("[contenteditable]");
      return ce ? ce.innerText : "";
    },
    synced: () => provider.synced,
    errors: () => window.__errors,
    // Insert an attachment the way a finished upload does: a real
    // action_text_attachment node with an sgid, appended to the root. Uses
    // the class registered on the editor so the test exercises whatever the
    // guard registered.
    insertAttachment: (sgid) => {
      const lexical = editor.editor;
      let klass;
      lexical._nodes.forEach((info) => {
        try {
          if (info.klass.getType() === "action_text_attachment") klass = info.klass;
        } catch { /* builtin without getType */ }
      });
      lexical.update(() => {
        const node = new klass({
          sgid,
          src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8z8BQDwAEhQGAhKmMIQAAAABJRU5ErkJggg==",
          contentType: "image/png",
          fileName: "collab-test.png",
          previewable: true,
        });
        $getRoot().append(node);
      });
    },
    // The attachment sgids present in the editor's own state.
    attachmentSgids: () => {
      const json = JSON.stringify(editor.editor.getEditorState().toJSON());
      return [...json.matchAll(/"sgid":"([^"]+)"/g)].map((m) => m[1]);
    },
    // The shared doc's root as XML, for asserting what actually synced.
    docRoot: () => (doc.share.get("root") ? doc.share.get("root").toString() : ""),
    // Insert a PROVISIONAL upload node carrying a real File — the
    // unsyncable property. No uploadUrl, so no DirectUpload starts; this
    // exists to prove the excluded properties survive a re-bind.
    insertUploadNode: (name) => {
      const lexical = editor.editor;
      let klass;
      lexical._nodes.forEach((info) => {
        try {
          if (info.klass.getType() === "action_text_attachment_upload") klass = info.klass;
        } catch { /* builtin without getType */ }
      });
      try {
        lexical.update(() => {
          const node = new klass({
            file: new File([new Uint8Array(16)], name, { type: "image/png" }),
            fileName: name,
            contentType: "image/png",
          });
          $getRoot().append(node);
        }, { discrete: true });
        return "ok";
      } catch (e) {
        // A discrete update throws synchronously (yjs "Unexpected content
        // type" when an excluded property leaks); record it where the e2e
        // reads errors, since it never reaches console.error.
        window.__errors.push("insertUploadNode: " + e.message);
        return "ERR: " + e.message;
      }
    },
    // Detach and re-attach the collaboration element: unbind + re-bind.
    remountCollab: () => {
      const c = document.querySelector("lexxy-collaboration");
      const parent = c.parentElement;
      c.remove();
      parent.appendChild(c);
      return "remounted";
    },
    // A second, non-collaborative editor on the same page. Its registry
    // holds the original attachment class; creating an attachment there
    // exercises Lexical's class-identity assertion outside collaboration.
    plainEditorAttachment: () => new Promise((resolve) => {
      const el = document.createElement("lexxy-editor");
      document.body.appendChild(el);
      const run = () => {
        try {
          const lexical = el.editor;
          let klass;
          lexical._nodes.forEach((info) => {
            try {
              if (info.klass.getType() === "action_text_attachment") klass = info.klass;
            } catch { /* builtin without getType */ }
          });
          lexical.update(() => {
            const node = new klass({ sgid: "PLAIN-1", src: "", contentType: "image/png", fileName: "plain.png" });
            $getRoot().append(node);
          }, { discrete: true });
          resolve("ok");
        } catch (e) {
          resolve("ERR: " + e.message);
        }
      };
      if (el.editor) run();
      else el.addEventListener("lexxy:initialize", run, { once: true });
    }),
    peers: () =>
      // @lexical/yjs stores presence identity at the top level (s.name), not s.user.
      [...awareness.getStates().values()].map((s) => s.name).filter(Boolean),
    // Inspect the remote-cursor overlay @lexical/yjs renders: the names of peers
    // with a visible caret, and the widest selection rect (a caret is ~0px wide;
    // a real range selection is wider).
    cursors: () => {
      const c = document.querySelector(".lexxy-collab-cursors");
      if (!c) return { names: [], maxRectWidth: 0 };
      const names = [
        ...new Set(
          [...c.querySelectorAll("span")]
            .filter((s) => s.childElementCount === 0 && s.textContent.trim())
            .map((s) => s.textContent.trim())
        ),
      ];
      const maxRectWidth = Math.max(0, ...[...c.children].map((el) => el.getBoundingClientRect().width));
      return { names, maxRectWidth };
    },
  };
  document.body.dataset.collabReady = "true";
}

// Lexxy initializes <lexxy-editor> on its own connectedCallback; wait for it.
if (editor.editor) {
  start();
} else {
  editor.addEventListener("lexxy:initialize", start, { once: true });
}
