// Undo and redo in a collaborative editor. Follows the steps from issue #33:
// write a few lines, select all, delete, undo twice, then type. With
// Lexxy's own history doing the undo, the editor and the document disagree
// afterwards, and each keystroke copies the restored lines into the
// document again. The element routes undo through a Yjs UndoManager, so
// every client and the stored document end with one copy.
//
// Assumes the test server is running on PORT and the browser bundle is
// built (run.mjs handles both).
import { execFileSync } from "node:child_process";

const PORT = process.env.PORT || 4111;
const ROOM = `undo-${process.pid}`;
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

const ab = (session, ...args) => {
  try {
    return execFileSync("npx", ["agent-browser", ...args], {
      env: { ...process.env, AGENT_BROWSER_SESSION: session },
      encoding: "utf8",
      stdio: ["ignore", "pipe", "pipe"],
    });
  } catch (e) {
    return `${e.stdout || ""}${e.stderr || ""}`;
  }
};

const CABLE = process.env.CABLE_WS_URL ? `&cable=${encodeURIComponent(process.env.CABLE_WS_URL)}` : "";
const open = (session, name) => ab(session, "open", `http://localhost:${PORT}/?room=${ROOM}&name=${name}${CABLE}`);
const ready = (session) => waitEval(session, "!!(window.__test && window.__test.synced())", "ready and synced");
const text = (session) => JSON.parse(ab(session, "eval", "window.__test.text()").trim() || '""');

async function waitEval(session, js, label, ms = 10000) {
  const end = Date.now() + ms;
  while (Date.now() < end) {
    if (/\btrue\b/.test(ab(session, "eval", js))) return true;
    await sleep(250);
  }
  console.log(`  TIMEOUT: ${label} (${session})`);
  return false;
}

async function settle(sessions, ms = 10000) {
  const end = Date.now() + ms;
  while (Date.now() < end) {
    const texts = sessions.map(text);
    if (texts.every((t) => t === texts[0])) return texts[0];
    await sleep(250);
  }
  return null;
}

let failures = 0;
const check = (label, ok) => {
  console.log(`${ok ? "ok" : "FAIL"}: ${label}`);
  if (!ok) failures++;
};
const count = (haystack, needle) => haystack.split(needle).length - 1;

// Lexxy's toolbar buttons dispatch UNDO_COMMAND and REDO_COMMAND, the same
// commands its keyboard shortcuts send.
const toolbar = (session, command) => ab(session, "eval", `(() => {
  const button = document.querySelector('#editor [data-command="${command}"]');
  const state = button ? button.getAttribute("aria-disabled") : "missing";
  button?.click();
  return state;
})()`).trim();
const undo = (session) => toolbar(session, "undo");
const redo = (session) => toolbar(session, "redo");

// The keyboard select-all shortcut doesn't reach Lexical in this harness, so
// select the editor's contents with a DOM range. Lexical reads it on
// selectionchange.
const selectAll = (session) => ab(session, "eval", `(() => {
  const editable = document.querySelector("#editor [contenteditable]");
  editable.focus();
  const range = document.createRange();
  range.selectNodeContents(editable);
  const selection = getSelection();
  selection.removeAllRanges();
  selection.addRange(range);
})()`);

execFileSync("curl", ["-s", "-X", "POST", `http://localhost:${PORT}/reset/${ROOM}:body`]);

open("alice", "Alice");
check("Alice synced", await ready("alice"));
open("bob", "Bob");
check("Bob synced", await ready("bob"));

// Alice writes five lines.
ab("alice", "click", "#editor [contenteditable]");
for (let i = 1; i <= 5; i++) {
  ab("alice", "keyboard", "type", `line-${i}`);
  if (i < 5) ab("alice", "press", "Enter");
}
check("Bob sees Alice's five lines", await waitEval("bob", 'window.__test.text().includes("line-5")', "bob sees line-5"));
// Yjs merges changes made within 500ms into one undo step. Pause so the
// typing and the deletion are separate steps, as they are for a real user.
await sleep(700);

// Select everything and delete it, then undo twice to bring the lines back.
selectAll("alice");
ab("alice", "press", "Backspace");
ab("alice", "press", "Backspace");
check("the editor is empty after deleting", await waitEval("alice", '!window.__test.text().includes("line-")', "alice empty"));
await sleep(700);
undo("alice");
check("undo restores the lines locally", await waitEval("alice", 'window.__test.text().includes("line-5")', "alice undo"));
check("undo restores the lines for Bob", await waitEval("bob", 'window.__test.text().includes("line-5")', "bob sees undo"));

// Type after the undo. Each keystroke used to copy the lines again.
ab("alice", "keyboard", "type", "XYZWV");
await waitEval("bob", 'window.__test.text().includes("XYZWV")', "bob sees typing");

const shared = await settle(["alice", "bob"]);
check("Alice and Bob show the same text", shared !== null);
check("each line appears once", shared !== null && [1, 2, 3, 4, 5].every((i) => count(shared, `line-${i}`) === 1));
check("the typed text appears once", shared !== null && count(shared, "XYZWV") === 1);

// Undo only reverts this user's own changes.
await sleep(700);
ab("bob", "click", "#editor [contenteditable]");
ab("bob", "keyboard", "type", "BOBTEXT");
await waitEval("alice", 'window.__test.text().includes("BOBTEXT")', "alice sees Bob");
await sleep(700); // let Bob's change close its own undo step
undo("alice");
check("Alice's undo removes her typing", await waitEval("bob", '!window.__test.text().includes("XYZWV")', "bob loses XYZWV"));
check("Alice's undo keeps Bob's text", (await settle(["alice", "bob"]))?.includes("BOBTEXT") === true);
redo("alice");
check("redo brings Alice's typing back", await waitEval("bob", 'window.__test.text().includes("XYZWV")', "bob sees redo"));

// A client that joins later loads the stored document and sees one copy.
const final = await settle(["alice", "bob"]);
open("carol", "Carol");
check("Carol synced", await ready("carol"));
check("Carol loads the same text from the server", await waitEval("carol", `window.__test.text() === ${JSON.stringify(final)}`, "carol matches"));
const stored = text("carol");
check("the stored document has each line once", [1, 2, 3, 4, 5].every((i) => count(stored, `line-${i}`) === 1));

for (const session of ["alice", "bob", "carol"]) ab(session, "close");

if (failures > 0) {
  console.log(`\nFAILED: ${failures} check(s) failed`);
  process.exit(1);
}
console.log(`\nPASS: undo (room ${ROOM})`);
