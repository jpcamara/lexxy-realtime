// Browser test entry. Renders a real Lexxy editor wired to the yrby test
// server through the YrbyProvider, mirroring how a Rails host wires it:
// create the provider, set it on <lexxy-collaboration>, append, then connect().
//
// Reads `room`, `name`, `color` from the query string so two agent-browser
// sessions can join the same document as different users. `mode=zero` skips
// all host wiring — attributes only, no consumer/doc/provider assignment —
// exercising the element's self-initializing path (auto-created shared
// consumer). Exposes window.__test for assertions.
import "@37signals/lexxy";
import { YrbyProvider } from "../../src/index.js"; // also registers <lexxy-collaboration>
import * as Y from "yjs";
import { createConsumer } from "@rails/actioncable";

const params = new URLSearchParams(location.search);
const room = params.get("room") || "browser-demo";
const name = params.get("name") || "User";
const color = params.get("color") || "#3b82f6";
const zeroConfig = params.get("mode") === "zero";

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
  // Zero-config never holds doc/provider — read them back off the element,
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

  if (!zeroConfig) {
    const consumer = createConsumer(`ws://${location.host}/cable`);
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
