// Browser test entry. index.html renders a real Lexxy editor inside a
// <yrby-document>, the way the Rails helper does, and the element binds to
// the document's session on its own.
//
// Reads `room`, `name`, `color` from the query string so two agent-browser
// sessions can join the same document as different users. `mode=host`
// renders a bare editor and assigns a YrbyProvider to the element, the
// host-supplied provider path. `mode=setconsumer` sets the app-wide
// consumer with setConsumer. Exposes window.__test for assertions.
import "@37signals/lexxy";
import { YrbyProvider, setConsumer } from "../../src/index.js"; // also registers <lexxy-collaboration>
import * as Y from "yjs";
import { createConsumer } from "@rails/actioncable";
import { createConsumer as createAnycableConsumer } from "@anycable/web";
import { $getRoot } from "lexical";

// The element logs collaboration errors with console.error so a bad remote
// update doesn't break the page. The e2e reads them from here.
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
const hostMode = params.get("mode") === "host";
const setConsumerMode = params.get("mode") === "setconsumer";

// `cable` points every consumer at a different gateway (the AnyCable leg
// passes the anycable-go ws URL). A Rails layout renders the meta tag, and
// the default consumer reads it. <yrby-document> creates its consumer after
// this module runs, so the tag is in place by then.
const cableUrl = params.get("cable");
if (cableUrl) {
  const meta = document.createElement("meta");
  meta.name = "action-cable-url";
  meta.content = cableUrl;
  document.head.appendChild(meta);
}

if (setConsumerMode) {
  // The app-wide consumer (the @anycable/web path). With a cable URL this
  // is the real @anycable/web client, so the documented
  // setConsumer(() => createConsumer()) pairing runs against a live gateway.
  window.__configuredConsumer = cableUrl
    ? createAnycableConsumer(cableUrl)
    : createConsumer(`ws://${location.host}/cable`);
  setConsumer(() => window.__configuredConsumer);
}

const editor = document.getElementById("editor");

function installTestHooks(collab) {
  // Read doc and provider from the element lazily, since it binds later.
  window.__test = {
    get doc() { return collab.doc; },
    get provider() { return collab.provider; },
    get awareness() { return collab.awareness; },
    room,
    // The editor's visible text.
    text: () => {
      const ce = editor.querySelector('[contenteditable="true"]') || editor.querySelector("[contenteditable]");
      return ce ? ce.innerText : "";
    },
    synced: () => !!collab.provider?.synced,
    usesConfiguredConsumer: () => !!window.__configuredConsumer && collab.provider?.consumer === window.__configuredConsumer,
    errors: () => window.__errors,
    // Inserts an attachment the way a finished upload does: an
    // action_text_attachment node with an sgid, appended to the root. It uses
    // the class registered on this editor.
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
    // Uploads a PNG through Lexxy's own upload code. It passes a File to
    // contents.uploadFiles, the same call the drop handler makes, and
    // DirectUpload posts it to the server's Active Storage endpoint.
    uploadPng: (name) => {
      const b64 = "iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8z8BQDwAEhQGAhKmMIQAAAABJRU5ErkJggg==";
      const bytes = Uint8Array.from(atob(b64), (c) => c.charCodeAt(0));
      const file = new File([bytes], name, { type: "image/png" });
      editor.contents.uploadFiles([file], { selectLast: true });
      return "uploading";
    },
    // The image rendered for an uploaded attachment: its src and whether the
    // browser decoded it.
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
    // The shared doc's root as XML, for checking what synced.
    docRoot: () => (collab.doc?.share.get("root") ? collab.doc.share.get("root").toString() : ""),
    // Inserts an upload node without starting DirectUpload, since it has no
    // uploadUrl. By default the node has a File, which checks the Yjs
    // exclusions after a rebind. opts.orphan leaves out the File, which matches
    // what a crashed uploader leaves in the shared doc.
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
        // A discrete update throws synchronously, for example with Yjs's
        // "Unexpected content type" when an excluded property gets synced.
        // The error never reaches console.error, so record it where the e2e
        // reads errors.
        window.__errors.push("insertUploadNode: " + e.message);
        return "ERR: " + e.message;
      }
    },
    // Lexxy's upload mutation listener marks the editor invalid while an
    // upload node exists ("Please wait for all files to upload"). If that
    // listener stops firing, the editor stays valid. The element is
    // form-associated but doesn't expose validationMessage, so ask
    // checkValidity().
    editorInvalidWhileUploading: () => {
      const el = document.querySelector("lexxy-editor");
      return !!el && typeof el.checkValidity === "function" && !el.checkValidity();
    },
    // Detach the collaboration element and attach it again after a delay,
    // so it unbinds and binds again to the same document. A move within one
    // turn would keep the binding.
    remountCollab: () => {
      const c = document.querySelector("lexxy-collaboration");
      const parent = c.parentElement;
      c.remove();
      setTimeout(() => parent.appendChild(c), 50);
      return "remounted";
    },
    // A second editor on the same page with no collaboration. Creating an
    // attachment in it runs Lexical's class identity check, which fails if
    // collaboration changed the classes this editor registered.
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
      // @lexical/yjs stores the user's name at the top level of the awareness
      // state, as s.name.
      [...(collab.awareness?.getStates().values() ?? [])].map((s) => s.name).filter(Boolean),
    // Reads the remote cursor overlay @lexical/yjs renders. Returns the names
    // of peers with a visible caret and the width of the widest selection
    // rect. A caret is about 0px wide and a range selection is wider.
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

function startHostMode() {
  const consumer = createConsumer(cableUrl || `ws://${location.host}/cable`);
  // The channel keys <yrby-document> subscriptions as "grant:name", so
  // this provider joins the same document as the other pages in the room.
  const doc = new Y.Doc();
  const provider = new YrbyProvider(doc, consumer, "DocumentChannel", { id: `${room}:body` });
  const collab = document.createElement("lexxy-collaboration");
  collab.setAttribute("doc-id", room);
  collab.setAttribute("name", name);
  collab.setAttribute("color", color);
  collab.doc = doc;
  collab.provider = provider;
  editor.appendChild(collab);
  provider.connect();
  installTestHooks(collab);
}

if (!hostMode) {
  installTestHooks(document.querySelector("lexxy-collaboration"));
} else if (editor.editor) {
  // Lexxy initializes <lexxy-editor> in its own connectedCallback.
  startHostMode();
} else {
  editor.addEventListener("lexxy:initialize", startHostMode, { once: true });
}
