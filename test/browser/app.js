// Browser test entry. Renders a real Lexxy editor wired to the yrby test
// server through the YrbyProvider, mirroring how a Rails host wires it:
// create the provider, set it on <lexxy-collaboration>, append, then connect().
//
// Reads `room`, `name`, `color` from the query string so two agent-browser
// sessions can join the same document as different users. `mode=zero` skips
// all host wiring: attributes only, no consumer/doc/provider assignment,
// exercising the element's self-initializing path (auto-created shared
// consumer). Exposes window.__test for assertions.
import "@37signals/lexxy";
import { YrbyProvider, setConsumer } from "../../src/index.js"; // also registers <lexxy-collaboration>
import * as Y from "yjs";
import { createConsumer } from "@rails/actioncable";
import { createConsumer as createAnycableConsumer } from "@anycable/web";
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
const zeroConfig = params.get("mode") === "zero";
const setConsumerMode = params.get("mode") === "setconsumer";

// `cable` points every consumer path at a different gateway (the AnyCable
// leg passes the anycable-go ws URL). The meta tag is what a Rails layout
// renders, so zero-config elements ride it exactly the way an app's would.
const cableUrl = params.get("cable");
if (cableUrl) {
  const meta = document.createElement("meta");
  meta.name = "action-cable-url";
  meta.content = cableUrl;
  document.head.appendChild(meta);
}

const editor = document.getElementById("editor");

function buildCollaborationElement() {
  const collab = document.createElement("lexxy-collaboration");
  collab.setAttribute("doc-id", room);
  collab.setAttribute("name", name);
  collab.setAttribute("color", color);
  collab.setAttribute("channel-name", "DocumentChannel");
  collab.setAttribute("channel-params", JSON.stringify({ id: room }));
  return collab;
}

function installTestHooks(collab) {
  // Zero-config never holds doc/provider; read them back off the element,
  // lazily, since the element assigns them during its own init.
  window.__test = {
    get doc() { return collab.doc; },
    get provider() { return collab.provider; },
    get awareness() { return collab.awareness; },
    room,
    // What the user actually sees: the editor's contenteditable text.
    text: () => {
      const ce = editor.querySelector('[contenteditable="true"]') || editor.querySelector("[contenteditable]");
      return ce ? ce.innerText : "";
    },
    synced: () => !!collab.provider?.synced,
    usesConfiguredConsumer: () => !!window.__configuredConsumer && collab.provider?.consumer === window.__configuredConsumer,
    errors: () => window.__errors,
    // Insert an attachment the way a finished upload does: a real
    // action_text_attachment node with an sgid, appended to the root. Uses
    // the class registered on the editor so the test exercises whatever
    // class the editor actually holds.
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
    // A real upload through Lexxy's own pipeline: build a PNG File and hand
    // it to contents.uploadFiles, the same entry the drop handler uses.
    // DirectUpload posts to the server's ActiveStorage endpoint for real.
    uploadPng: (name) => {
      const b64 = "iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8z8BQDwAEhQGAhKmMIQAAAABJRU5ErkJggg==";
      const bytes = Uint8Array.from(atob(b64), (c) => c.charCodeAt(0));
      const file = new File([bytes], name, { type: "image/png" });
      editor.contents.uploadFiles([file], { selectLast: true });
      return "uploading";
    },
    // The rendered image on the page for an uploaded attachment: its served
    // src and whether the browser actually decoded pixels from it.
    renderedImage: () => {
      const img = editor.querySelector("[contenteditable] img, action-text-attachment img, img");
      if (!img) return null;
      return { src: img.getAttribute("src") || img.src, naturalWidth: img.naturalWidth, complete: img.complete };
    },
    // The attachment sgids present in the editor's own state.
    attachmentSgids: () => {
      const json = JSON.stringify(editor.editor.getEditorState().toJSON());
      return [...json.matchAll(/"sgid":"([^"]+)"/g)].map((m) => m[1]);
    },
    // The shared doc's root as XML, for asserting what actually synced.
    docRoot: () => (collab.doc?.share.get("root") ? collab.doc.share.get("root").toString() : ""),
    // Insert a provisional upload node without starting DirectUpload (no
    // uploadUrl). The default File exercises the Yjs exclusions across a
    // re-bind. opts.orphan omits the File, staging the shared state a
    // crashed uploader leaves behind.
    insertUploadNode: (name, opts = {}) => {
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
            file: opts.orphan ? null : new File([new Uint8Array(16)], name, { type: "image/png" }),
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
    // Lexxy's upload mutation listener flags the editor invalid while an
    // upload node exists ("Please wait for all files to upload"). If the
    // klass swap orphans that listener, the editor stays valid. The element
    // is form-associated but doesn't proxy validationMessage, so ask
    // checkValidity().
    editorInvalidWhileUploading: () => {
      const el = document.querySelector("lexxy-editor");
      return !!el && typeof el.checkValidity === "function" && !el.checkValidity();
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
      [...(collab.awareness?.getStates().values() ?? [])].map((s) => s.name).filter(Boolean),
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

function start() {
  const collab = buildCollaborationElement();

  if (setConsumerMode) {
    // The app-wide default (the @anycable/web path): one boot-time call,
    // attribute-only element. It must ride exactly this consumer. With a
    // cable URL this is the real @anycable/web client, not the compat
    // default, so the documented setConsumer(() => createConsumer())
    // pairing runs against a live gateway.
    window.__configuredConsumer = cableUrl
      ? createAnycableConsumer(cableUrl)
      : createConsumer(`ws://${location.host}/cable`);
    setConsumer(() => window.__configuredConsumer);
    editor.appendChild(collab);
  } else if (!zeroConfig) {
    const consumer = createConsumer(cableUrl || `ws://${location.host}/cable`);
    const doc = new Y.Doc();
    const provider = new YrbyProvider(doc, consumer, "DocumentChannel", { id: room });
    collab.consumer = consumer;
    collab.doc = doc;
    collab.provider = provider;
    editor.appendChild(collab);
    provider.connect();
  } else {
    // The element creates its own shared consumer (action-cable-url meta or
    // /cable) and its own doc + provider, and connects itself.
    editor.appendChild(collab);
  }

  installTestHooks(collab);
}

// Lexxy initializes <lexxy-editor> on its own connectedCallback; wait for it.
if (editor.editor) {
  start();
} else {
  editor.addEventListener("lexxy:initialize", start, { once: true });
}
