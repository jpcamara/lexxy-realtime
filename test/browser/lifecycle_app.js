// Lifecycle harness. Mounts, moves, and removes real <yrby-document> and
// <lexxy-collaboration> elements against the yrby test server and reports
// what happened, so lifecycle.mjs can assert on it. Exposes window.__lc.
import "@37signals/lexxy";
import { YrbyProvider, setConsumer } from "../../src/index.js"; // registers <lexxy-collaboration> and <yrby-document>
import { YrbyDocumentElement } from "yrby-client/element";
import * as Y from "yjs";
import { createConsumer } from "@rails/actioncable";
import { $getRoot, $createParagraphNode, $createTextNode, UNDO_COMMAND } from "lexical";

// Counts the bootstrap poll, the only 50ms interval in the stack (the
// awareness check runs every 3000ms and ReliableSync resends every
// 1000ms). editor_collaboration.js calls the bare globals, so wrapping
// window.* before any scenario runs catches them.
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

// Collaboration errors are logged with console.error, so record them.
const logged = [];
const originalConsoleError = console.error;
console.error = (...args) => {
  logged.push(args.map(String).join(" ").slice(0, 300));
  originalConsoleError(...args);
};

const consumer = createConsumer(`ws://${location.host}/cable`);

// Holds acknowledgements at the cable boundary while other messages keep
// flowing, so a test can keep edits pending for as long as it needs.
function acknowledgementGate(inner) {
  let holding = false;
  const held = [];
  return {
    consumer: {
      subscriptions: {
        create(params, callbacks) {
          return inner.subscriptions.create(params, {
            ...callbacks,
            received(message) {
              const deliver = () => callbacks.received.call(this, message);
              if (holding && message?.ack !== undefined) held.push(deliver);
              else deliver();
            },
          });
        },
      },
    },
    hold() {
      holding = true;
    },
    release() {
      holding = false;
      for (const deliver of held.splice(0)) deliver();
    },
  };
}

const gate = acknowledgementGate(consumer);
YrbyDocumentElement.consumer = gate.consumer;

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
async function until(condition, label, ms = 10000) {
  const deadline = Date.now() + ms;
  while (!condition()) {
    if (Date.now() > deadline) throw new Error(`timed out: ${label}`);
    await sleep(25);
  }
}
// Like until, but reports a timeout as false so a scenario can still
// return its other results.
async function settled(condition, ms = 5000) {
  try {
    await until(condition, "settled", ms);
    return true;
  } catch {
    return false;
  }
}
const uid = (prefix) => `${prefix}-${Date.now()}-${Math.floor(Math.random() * 1e6)}`;

function text(editor) {
  return editor.editor.getEditorState().read(() => $getRoot().getTextContent());
}

function write(editor, value) {
  editor.editor.update(
    () => $getRoot().clear().append($createParagraphNode().append($createTextNode(value))),
    { discrete: true }
  );
}

// Makes the next remote apply throw inside Lexical, the way a real
// @lexical/yjs failure does.
function fault(editor, doc) {
  const original = editor.editor.update;
  editor.editor.update = function (fn, options) {
    if (options?.tag === "collaboration") throw new Error("injected remote apply fault");
    return original.call(this, fn, options);
  };
  try {
    doc.transact(() => doc.get("root", Y.XmlText).setAttribute("testFault", Date.now()), "remote");
  } finally {
    editor.editor.update = original;
  }
}

// The durable server state for a document key, as the shared root's XML.
async function serverRoot(key) {
  const res = await fetch(`/content/${encodeURIComponent(key)}`);
  const { state } = await res.json();
  if (!state) return "";
  const doc = new Y.Doc();
  Y.applyUpdate(doc, Uint8Array.from(atob(state), (c) => c.charCodeAt(0)));
  return doc.get("root", Y.XmlText).toString();
}

// The markup the Rails helper renders: <yrby-document> around the editor,
// <lexxy-collaboration> inside it.
function build({ grant, refresh, value, collab = true }) {
  const yrbyDocument = document.createElement("yrby-document");
  yrbyDocument.setAttribute("grant", grant);
  yrbyDocument.setAttribute("name", "body");
  yrbyDocument.setAttribute("channel", "DocumentChannel");
  if (refresh) yrbyDocument.setAttribute("refresh", refresh);
  const editor = document.createElement("lexxy-editor");
  if (value) editor.setAttribute("value", value);
  const element = document.createElement("lexxy-collaboration");
  element.setAttribute("doc-id", grant);
  element.setAttribute("name", "LC");
  if (collab) editor.appendChild(element);
  yrbyDocument.appendChild(editor);
  return { yrbyDocument, editor, element };
}

async function mount(options) {
  const parts = build(options);
  document.body.appendChild(parts.yrbyDocument);
  if (options.collab !== false) await until(() => parts.element.binding, "bound");
  return parts;
}

async function makeEditor() {
  const editor = document.createElement("lexxy-editor");
  document.body.appendChild(editor);
  if (!editor.editor) {
    await new Promise((res) => editor.addEventListener("lexxy:initialize", res, { once: true }));
  }
  return editor;
}

function collabFor(grant) {
  const element = document.createElement("lexxy-collaboration");
  element.setAttribute("doc-id", grant);
  element.setAttribute("name", "LC");
  return element;
}

function hostCollab(room) {
  const doc = new Y.Doc();
  const provider = new YrbyProvider(doc, consumer, "DocumentChannel", { id: room });
  const element = document.createElement("lexxy-collaboration");
  element.setAttribute("doc-id", room);
  element.setAttribute("name", "LC");
  element.doc = doc;
  element.provider = provider;
  return { element, doc, provider };
}

const results = {};

const scenarios = {
  // The default wiring: the element binds to its <yrby-document>'s session.
  async yrbySession() {
    const grant = uid("lc-session");
    const { yrbyDocument, editor, element } = await mount({ grant });
    const sameResources = element.doc === yrbyDocument.doc && element.provider === yrbyDocument.provider;
    write(editor, "FROM YRBY MODE");
    await until(() => !yrbyDocument.session.hasPending, "acknowledged");
    const stored = (await serverRoot(`${grant}:body`)).includes("FROM YRBY MODE");
    const displayContents = getComputedStyle(yrbyDocument).display === "contents";
    yrbyDocument.remove();
    await sleep(50);
    return { sameResources, stored, displayContents, unbound: !element.binding };
  },

  // A move within one turn keeps the session. Moving the whole
  // <yrby-document> rebuilds Lexxy's editor, so the element binds the new
  // editor to the same doc. Moving only the element keeps its binding.
  async sameTurnMove() {
    const grant = uid("lc-move");
    const { yrbyDocument, editor, element } = await mount({ grant });
    write(editor, "MOVE");
    const session = yrbyDocument.session;
    const doc = element.doc;
    const binding = element.binding;

    element.remove();
    editor.appendChild(element);
    await sleep(50);
    const elementMoveKeptBinding = element.binding === binding;

    const container = document.createElement("div");
    document.body.appendChild(container);
    container.appendChild(yrbyDocument);
    await until(() => element.binding && element.binding !== binding, "rebound after move");
    const sameSession = yrbyDocument.session === session && element.doc === doc;
    const keptText = text(editor) === "MOVE";
    write(editor, "MOVED EDIT");
    const editsReachDoc = doc.get("root", Y.XmlText).toString().includes("MOVED EDIT");
    container.remove();
    await sleep(50);
    return { elementMoveKeptBinding, sameSession, keptText, editsReachDoc };
  },

  // Replacing an editor or element in one turn (replaceWith, Turbo
  // Streams) connects the new element before the old one's disconnect
  // microtask runs. The new element takes the doc over from the
  // disconnected one. A second element whose owner is still connected is
  // refused.
  async sameTurnReplace() {
    const loggedBefore = logged.length;

    // Replace only the element, inside the same editor.
    const a = await mount({ grant: uid("lc-replace-element") });
    write(a.editor, "BEFORE REPLACE");
    const replacement = collabFor(a.element.getAttribute("doc-id"));
    a.element.replaceWith(replacement);
    const elementReplaced = await settled(() => replacement.binding && replacement.doc === a.yrbyDocument.doc);
    const oldUnbound = !a.element.binding;
    if (elementReplaced) write(a.editor, "AFTER ELEMENT REPLACE");
    await settled(() => !a.yrbyDocument.session.hasPending);
    const elementEditStored = (await serverRoot(`${a.element.getAttribute("doc-id")}:body`)).includes("AFTER ELEMENT REPLACE");
    a.yrbyDocument.remove();

    // Replace the whole editor, with a new element inside it.
    const grant = uid("lc-replace-editor");
    const b = await mount({ grant });
    write(b.editor, "BEFORE EDITOR REPLACE");
    const replacementEditor = document.createElement("lexxy-editor");
    const second = collabFor(grant);
    replacementEditor.appendChild(second);
    b.editor.replaceWith(replacementEditor);
    const editorReplaced = await settled(() => second.binding && second.doc === b.yrbyDocument.doc);
    const keptText = editorReplaced && text(replacementEditor) === "BEFORE EDITOR REPLACE";
    if (editorReplaced) write(replacementEditor, "AFTER EDITOR REPLACE");
    await settled(() => !b.yrbyDocument.session.hasPending);
    const editorEditStored = (await serverRoot(`${grant}:body`)).includes("AFTER EDITOR REPLACE");

    // A second element while the owner is still connected.
    const refusedBefore = logged.length;
    const otherEditor = document.createElement("lexxy-editor");
    const other = collabFor(grant);
    otherEditor.appendChild(other);
    b.yrbyDocument.appendChild(otherEditor);
    await sleep(300);
    const refused =
      !other.binding &&
      !!second.binding &&
      logged.slice(refusedBefore).some((m) => m.includes("already bound"));

    const result = {
      elementReplaced,
      oldUnbound,
      editorReplaced,
      keptText,
      editsSync: elementEditStored && editorEditStored,
      noRefusal: !logged.slice(loggedBefore, refusedBefore).some((m) => m.includes("already bound")),
      refused,
    };
    b.yrbyDocument.remove();
    await sleep(50);
    return result;
  },

  // Lexxy rebuilds its Lexical editor without disconnecting its children
  // when its `connected` attribute changes, as a Turbo 8 morph does, and
  // dispatches lexxy:initialize again. The element binds the new editor.
  async editorRebuild() {
    const grant = uid("lc-rebuild");
    const { yrbyDocument, editor, element } = await mount({ grant });
    let expected = "BEFORE MORPH";
    write(editor, expected);
    await settled(() => !yrbyDocument.session.hasPending);
    const result = {};
    for (const round of [1, 2]) {
      const lexical = editor.editor;
      const binding = element.binding;
      editor.removeAttribute("connected");
      const rebuilt = await settled(() => editor.editor && editor.editor !== lexical);
      const rebound = await settled(() => element.binding && element.binding !== binding && element.binding.editor === editor.editor);
      const keptText = text(editor) === expected;
      expected = `AFTER MORPH ${round}`;
      write(editor, expected);
      await settled(() => !yrbyDocument.session.hasPending);
      const stored = (await serverRoot(`${grant}:body`)).includes(expected);
      result[`round${round}`] = rebuilt && rebound && keptText && stored;
      if (round === 1) Object.assign(result, { rebuilt, rebound, keptText, stored });
    }
    yrbyDocument.remove();
    await sleep(50);
    return result;
  },

  // An editor the host made read-only stays read-only after a desync,
  // whether the element recovers or is removed.
  async readOnlyKept() {
    const first = await mount({ grant: uid("lc-readonly") });
    first.editor.editor.setEditable(false);
    const doc = first.element.doc;
    fault(first.editor, doc);
    const recovered = await settled(() => first.element.binding && first.element.doc !== doc && first.element.provider.synced, 10000);
    const afterRecovery = recovered && !first.editor.editor.isEditable();
    first.yrbyDocument.remove();
    await sleep(50);

    const second = await mount({ grant: uid("lc-readonly-remove") });
    second.editor.editor.setEditable(false);
    second.element.addEventListener("lexxy-realtime:desync", () => second.element.remove(), { once: true });
    fault(second.editor, second.element.doc);
    await sleep(300);
    const afterRemoval = !second.element.binding && !second.editor.editor.isEditable();
    second.yrbyDocument.remove();
    await sleep(50);
    return { afterRecovery, afterRemoval };
  },

  // setConsumer with a factory calls it when a <yrby-document> first needs
  // a consumer, and only once. Assigning a consumer afterwards replaces it.
  async lazyConsumer() {
    const original = YrbyDocumentElement.consumer;
    let calls = 0;
    try {
      setConsumer(() => {
        calls += 1;
        return gate.consumer;
      });
      await sleep(50);
      const notCalledAtSet = calls === 0;
      const first = await mount({ grant: uid("lc-lazy") });
      const second = await mount({ grant: uid("lc-lazy") });
      const calledOnce = calls === 1;
      first.yrbyDocument.remove();
      second.yrbyDocument.remove();
      await sleep(50);
      YrbyDocumentElement.consumer = original;
      return { notCalledAtSet, calledOnce, assignable: YrbyDocumentElement.consumer === original };
    } finally {
      YrbyDocumentElement.consumer = original;
    }
  },

  // Removing the editor keeps unacknowledged edits delivering. The session
  // closes once the server acknowledges them.
  async removalKeepsPending() {
    const grant = uid("lc-pending");
    const { yrbyDocument, editor, element } = await mount({ grant });
    const session = yrbyDocument.session;
    await until(() => !session.hasPending, "first sync settled");
    gate.hold();
    try {
      write(editor, "WAIT FOR ACK");
      await until(() => session.hasPending, "edit pending");
      yrbyDocument.remove();
      await sleep(100);
      const keptWhileRemoved = session.state === "open" && session.hasPending && !element.binding;
      gate.release();
      await until(() => session.state === "closed", "session closed after ack");
      const stored = (await serverRoot(`${grant}:body`)).includes("WAIT FOR ACK");
      return { keptWhileRemoved, stored, docDestroyed: session.doc.isDestroyed };
    } finally {
      gate.release();
    }
  },

  // Mounting again before the acknowledgment arrives reuses the session.
  async remountWhilePending() {
    const grant = uid("lc-remount");
    const { yrbyDocument, editor, element } = await mount({ grant });
    const session = yrbyDocument.session;
    await until(() => !session.hasPending, "first sync settled");
    gate.hold();
    try {
      write(editor, "REMOUNT BEFORE ACK");
      await until(() => session.hasPending, "edit pending");
      yrbyDocument.remove();
      await sleep(100);
      document.body.appendChild(yrbyDocument);
      await until(() => element.binding, "bound again");
      const sameSession = yrbyDocument.session === session && element.doc === session.doc;
      const keptText = text(editor) === "REMOUNT BEFORE ACK";
      gate.release();
      await until(() => !session.hasPending, "acknowledged");
      const stillOpen = session.state === "open" && !!element.binding;
      yrbyDocument.remove();
      await sleep(50);
      return { sameSession, keptText, stillOpen };
    } finally {
      gate.release();
    }
  },

  // Lexxy's editor initializes after the session synced, and the element
  // connects after yrby:synced already fired.
  async lateEditor() {
    const grant = uid("lc-late");
    const { yrbyDocument, editor, element } = await mount({ grant, collab: false });
    await yrbyDocument.whenSynced;
    const lexical = editor.editor;
    Object.defineProperty(editor, "editor", { configurable: true, value: undefined });
    editor.appendChild(element);
    await sleep(50);
    const waited = !element.binding;
    Object.defineProperty(editor, "editor", { configurable: true, writable: true, value: lexical });
    editor.dispatchEvent(new CustomEvent("lexxy:initialize"));
    const bound = !!element.binding && element.doc === yrbyDocument.doc;
    write(editor, "AFTER LATE INIT");
    const editsReachDoc = yrbyDocument.doc.get("root", Y.XmlText).toString().includes("AFTER LATE INIT");
    yrbyDocument.remove();
    await sleep(50);
    return { waited, bound, editsReachDoc };
  },

  // An existing body seeds an empty document once. Binding again to the
  // same session doesn't seed it a second time.
  async seedOnce() {
    const grant = uid("lc-seed");
    const { yrbyDocument, editor, element } = await mount({ grant, value: "<p>EXISTING BODY</p>" });
    await until(() => text(editor) === "EXISTING BODY", "seeded");
    const root = yrbyDocument.doc.get("root", Y.XmlText);
    const lengthAfterSeed = root.length;
    element.remove();
    await sleep(50);
    editor.appendChild(element);
    await until(() => element.binding, "bound again");
    await sleep(100);
    const result = {
      seeded: lengthAfterSeed > 0,
      noDuplicate: root.length === lengthAfterSeed && text(editor) === "EXISTING BODY",
    };
    await until(() => !yrbyDocument.session.hasPending, "acknowledged");
    result.stored = (await serverRoot(`${grant}:body`)).includes("EXISTING BODY");
    yrbyDocument.remove();
    await sleep(50);
    return result;
  },

  // A failed remote apply makes the editor read-only and replaces the
  // session. A second failure inside the 15-second window waits for the
  // window to end and then rebuilds again.
  async desyncRecovery() {
    const grant = uid("lc-desync");
    const { yrbyDocument, editor, element } = await mount({ grant });
    write(editor, "DURABLE RECOVERY");
    await until(() => !yrbyDocument.session.hasPending, "acknowledged");
    const events = [];
    element.addEventListener("lexxy-realtime:desync", (event) => events.push(event.detail.recovering));
    const doc = element.doc;
    fault(editor, doc);
    const readOnlyAtFault = !editor.editor.isEditable();
    // The binding stops sending editor updates after the fault, so this
    // change is only local.
    write(editor, "LOCAL ONLY");
    const localStayedLocal = !doc.get("root", Y.XmlText).toString().includes("LOCAL ONLY");
    await until(() => element.binding && element.doc !== doc && element.provider.synced, "recovered");
    const result = {
      readOnlyAtFault,
      localStayedLocal,
      firstRecovering: events[0] === true,
      oldDocDestroyed: doc.isDestroyed,
      keptText: text(editor) === "DURABLE RECOVERY",
      editable: editor.editor.isEditable(),
    };
    // Undo history from before the desync is gone, so undo can't bring
    // back the local-only state.
    editor.editor.dispatchCommand(UNDO_COMMAND, undefined);
    await sleep(50);
    result.undoKeptText = text(editor) === "DURABLE RECOVERY";
    write(editor, "AFTER RECOVERY");
    await until(() => !yrbyDocument.session.hasPending, "acknowledged after recovery");
    const stored = await serverRoot(`${grant}:body`);
    result.editsSync = stored.includes("AFTER RECOVERY") && !stored.includes("LOCAL ONLY");

    const recoveredDoc = element.doc;
    const faultedAt = Date.now();
    fault(editor, recoveredDoc);
    await sleep(200);
    result.secondRecovering = events.length === 2 && events[1] === true;
    result.waitsReadOnly = !editor.editor.isEditable() && element.doc === recoveredDoc;
    await until(() => element.binding && element.doc !== recoveredDoc && element.provider.synced, "second rebuild", 25000);
    result.secondRebuildAfterWindow = Date.now() - faultedAt >= 10000;
    result.secondKeptText = text(editor) === "AFTER RECOVERY" && editor.editor.isEditable();
    yrbyDocument.remove();
    await sleep(50);
    return result;
  },

  // A desync on a removed element doesn't rebuild anything.
  async desyncThenRemove() {
    const grant = uid("lc-desync-remove");
    const { yrbyDocument, editor, element } = await mount({ grant });
    const doc = element.doc;
    const session = yrbyDocument.session;
    element.addEventListener("lexxy-realtime:desync", () => element.remove(), { once: true });
    fault(editor, doc);
    await sleep(300);
    const result = {
      unbound: !element.binding,
      sessionKept: session.state === "open" && !doc.isDestroyed,
      editable: editor.editor.isEditable(),
    };
    yrbyDocument.remove();
    await sleep(50);
    return result;
  },

  // A rejected grant with a refresh URL resubscribes with the new grant.
  async rejectThenRefresh() {
    const room = uid("lc-refresh");
    const errors = [];
    const onError = (event) => errors.push(event.detail);
    document.addEventListener("yrby:error", onError);
    try {
      const { yrbyDocument, editor } = await mount({ grant: `reject-${room}`, refresh: `/grant/${room}` });
      const renewedGrant = yrbyDocument.session.provider.channelParams.grant === room;
      write(editor, "AFTER REFRESH");
      await until(() => !yrbyDocument.session.hasPending, "acknowledged");
      const stored = (await serverRoot(`${room}:body`)).includes("AFTER REFRESH");
      yrbyDocument.remove();
      await sleep(50);
      return { renewedGrant, stored, noErrors: errors.length === 0 };
    } finally {
      document.removeEventListener("yrby:error", onError);
    }
  },

  // Without a refresh URL a rejection blocks the session, and the editor
  // never binds.
  async rejectWithoutRefresh() {
    const { yrbyDocument, element } = build({ grant: uid("reject-lc") });
    const reported = new Promise((resolve) =>
      yrbyDocument.addEventListener("yrby:error", (event) => resolve(event.detail), { once: true })
    );
    document.body.appendChild(yrbyDocument);
    const detail = await Promise.race([reported, sleep(8000).then(() => null)]);
    const result = {
      reported: !!detail && detail.session?.state === "blocked",
      unbound: !element.binding,
      inert: yrbyDocument.inert,
    };
    detail?.session?.discard();
    yrbyDocument.remove();
    await sleep(50);
    return result;
  },

  // A host-supplied doc and provider bind directly. A DOM move keeps the
  // provider and its content. A failed remote apply stops the binding,
  // makes the editor read-only, and reports recovering: false.
  async hostMode() {
    const room = uid("lc-host");
    const { element, doc, provider } = hostCollab(room);
    const editor = await makeEditor();
    editor.appendChild(element);
    provider.connect();
    await until(() => provider.synced && element.binding, "host synced");
    const sameResources = element.doc === doc && element.provider === provider;
    write(editor, "HOST CONTENT");
    element.remove();
    await sleep(50);
    editor.appendChild(element);
    await until(() => element.binding, "host rebound");
    const movedKeepsContent = provider.synced && element.provider === provider && text(editor) === "HOST CONTENT";
    let detail;
    element.addEventListener("lexxy-realtime:desync", (event) => (detail = event.detail), { once: true });
    fault(editor, doc);
    await sleep(50);
    const readOnly = !editor.editor.isEditable();
    write(editor, "AFTER HOST FAULT");
    const result = {
      sameResources,
      movedKeepsContent,
      reportedOnly: detail?.recovering === false && !doc.isDestroyed && element.provider === provider,
      readOnly,
      stoppedSending: !doc.get("root", Y.XmlText).toString().includes("AFTER HOST FAULT"),
    };
    element.remove();
    editor.remove();
    provider.destroy();
    return result;
  },

  // A host provider with whenSynced starts no bootstrap poll, and a
  // removal before the first sync leaves nothing behind.
  async bootstrapLeak() {
    const editor = await makeEditor();
    const before = short.size;
    const { element } = hostCollab(uid("lc-leak")); // never connected, so never synced
    editor.appendChild(element);
    await sleep(300);
    const during = short.size;
    element.remove();
    await sleep(300);
    const after = short.size;
    editor.remove();
    return { intervalFree: during === before, leaked: after > before };
  },

  // A provider without whenSynced (only `synced`) gets the poll, and
  // removal clears it.
  async bootstrapLeakFallback() {
    const editor = await makeEditor();
    const before = short.size;
    const { element, provider } = hostCollab(uid("lc-leakfb"));
    Object.defineProperty(provider, "whenSynced", { value: undefined });
    editor.appendChild(element);
    await sleep(300);
    const during = short.size;
    element.remove();
    await sleep(300);
    const after = short.size;
    editor.remove();
    return { started: during > before, leaked: after > before };
  },

  // Mounting outside a <lexxy-editor>, or with neither a <yrby-document>
  // nor a host provider, logs an error and throws nothing.
  async misplaced() {
    const errorsBefore = (window.__err || []).length;
    const loggedBefore = logged.length;
    const outside = document.createElement("lexxy-collaboration");
    document.body.appendChild(outside);
    const editor = await makeEditor();
    const orphan = document.createElement("lexxy-collaboration");
    editor.appendChild(orphan);
    await sleep(150);
    const messages = logged.slice(loggedBefore);
    outside.remove();
    editor.remove();
    return {
      threw: (window.__err || []).length > errorsBefore,
      reportedEditor: messages.some((m) => m.includes("inside a <lexxy-editor>")),
      reportedDocument: messages.some((m) => m.includes("<yrby-document> ancestor")),
    };
  },

  // If the editor initializes after the element was removed, the element
  // doesn't bind.
  async initRace() {
    const editor = document.createElement("lexxy-editor");
    const { element, provider } = hostCollab(uid("lc-race"));
    editor.appendChild(element);
    document.body.appendChild(editor);
    const tookListenerPath = !editor.editor;
    element.remove();
    if (!editor.editor) {
      await new Promise((res) => editor.addEventListener("lexxy:initialize", res, { once: true }));
    }
    await sleep(150);
    const boundWhileDetached = !!element.binding;
    editor.remove();
    provider.destroy();
    return { tookListenerPath, boundWhileDetached };
  },
};

window.__lc = {
  results,
  run(name) {
    results[name] = undefined;
    Promise.resolve()
      .then(() => scenarios[name]())
      .then((r) => (results[name] = r))
      .catch((e) => (results[name] = { error: String((e && e.stack) || e) }));
  },
  errors: () => window.__err || [],
};
document.body.dataset.lcReady = "true";
