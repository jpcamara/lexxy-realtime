// Lifecycle reproduction harness. Mounts/unmounts/moves a REAL
// <lexxy-collaboration> against the yrby test server and measures teardown
// leaks + sync state, so the lifecycle claims can be verified (and regression-
// tested) in a real browser. Exposes window.__lc; driven by lifecycle.mjs.
import "@37signals/lexxy";
import { YrbyProvider } from "../../src/index.js"; // registers <lexxy-collaboration>
import * as Y from "yjs";
import { createConsumer } from "@rails/actioncable";

// Track the bootstrap poll (the only 50ms interval in the stack: the awareness
// reaper is 3000ms, ReliableSync resend is 1000ms). `setInterval`/`clearInterval`
// in editor_collaboration.js are the bare globals, so wrapping window.* here --
// before any scenario runs -- intercepts them.
const short = new Set();
const _set = window.setInterval.bind(window);
const _clear = window.clearInterval.bind(window);
window.setInterval = function (fn, delay, ...rest) {
  const id = _set(fn, delay, ...rest);
  if (delay === 50) short.add(id);
  return id;
};
window.clearInterval = function (id) {
  short.delete(id);
  return _clear(id);
};

const consumer = createConsumer(`ws://${location.host}/cable`);
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

async function makeEditor() {
  const editor = document.createElement("lexxy-editor");
  document.body.appendChild(editor);
  if (!editor.editor) {
    await new Promise((res) => editor.addEventListener("lexxy:initialize", res, { once: true }));
  }
  return editor;
}

function makeCollab(room, provider) {
  const doc = new Y.Doc();
  const p = provider || new YrbyProvider(doc, consumer, "DocumentChannel", { id: room });
  const collab = document.createElement("lexxy-collaboration");
  collab.setAttribute("id", room);
  collab.setAttribute("name", "LC");
  collab.setAttribute("channel-name", "DocumentChannel");
  collab.setAttribute("channel-params", JSON.stringify({ id: room }));
  collab.consumer = consumer;
  collab.doc = doc;
  collab.provider = p;
  return { collab, doc, provider: p };
}

const results = {};

const scenarios = {
  // #1: unmounting before the first sync must clear the bootstrap poll interval.
  async bootstrapLeak() {
    const editor = await makeEditor();
    const before = short.size;
    const { collab } = makeCollab(`lc-leak-${Date.now()}`); // never connected => never synced
    editor.appendChild(collab);
    await sleep(300); // bind + bootstrap interval starts
    const during = short.size;
    collab.remove(); // teardown should clear it
    await sleep(300);
    const after = short.size;
    editor.remove();
    return { before, during, after, started: during > before, leaked: after > before };
  },

  // #3: a DOM move (disconnect+reconnect) must not kill a host-owned provider.
  async domMove() {
    const room = `lc-move-${Date.now()}`;
    const { collab, provider } = makeCollab(room);
    const editor = await makeEditor();
    editor.appendChild(collab);
    provider.connect();
    for (let i = 0; i < 80 && !provider.synced; i++) await sleep(100);
    const syncedBefore = provider.synced;
    collab.remove(); // disconnect
    await sleep(50);
    editor.appendChild(collab); // reconnect (same editor)
    await sleep(500);
    const syncedAfter = !!collab.provider?.synced;
    collab.remove();
    editor.remove();
    provider.disconnect();
    return { syncedBefore, syncedAfter, brokeOnMove: syncedBefore && !syncedAfter };
  },

  // #2: if the editor initializes after the element was disconnected, #init must
  // not run on the detached element.
  async initRace() {
    const editor = document.createElement("lexxy-editor");
    const { collab } = makeCollab(`lc-race-${Date.now()}`);
    editor.appendChild(collab); // editor is detached, so neither connectedCallback has fired
    document.body.appendChild(editor); // both connect; editor begins async init
    const tookListenerPath = !editor.editor; // collab saw an uninitialized editor => registered the once-listener
    collab.remove(); // remove before the editor finishes initializing
    if (!editor.editor) {
      await new Promise((res) => editor.addEventListener("lexxy:initialize", res, { once: true }));
    }
    await sleep(150);
    const ranOnDetached = !collab.isConnected && collab.provider !== undefined;
    editor.remove();
    return { tookListenerPath, ranOnDetached };
  },
};

window.__lc = {
  results,
  active50: () => short.size,
  errors: () => window.__err || [],
  run(name) {
    results[name] = undefined;
    Promise.resolve()
      .then(() => scenarios[name]())
      .then((r) => (results[name] = r))
      .catch((e) => (results[name] = { error: String((e && e.stack) || e) }));
  },
};
document.body.dataset.lcReady = "true";
