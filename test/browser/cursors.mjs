// Intensive browser tests for the @lexical/yjs-rendered remote cursors, driven
// with agent-browser against real Chrome + the yrb-lite server. Covers the edge
// cases the old hand-rolled manager was fragile around: multiple named carets,
// real range-selection highlights, removal when a peer disconnects, and caret
// survival across concurrent edits.
import { execFileSync } from "node:child_process";

const PORT = process.env.PORT || 4111;
const ROOM = `cursors-${process.pid}`;
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

const open = (session, name) => ab(session, "open", `http://localhost:${PORT}/?room=${ROOM}&name=${name}`);

// Evaluate a boolean expression on a page (agent-browser prints the result; we
// match a standalone `true`). Strings stringify with escaping over the wire, so
// everything is asserted as a boolean rather than parsed JSON.
const evalBool = (session, js) => /\btrue\b/.test(ab(session, "eval", `!!(${js})`));

async function waitBool(session, js, label, ms = 12000) {
  const end = Date.now() + ms;
  while (Date.now() < end) {
    if (evalBool(session, js)) return true;
    await sleep(250);
  }
  console.log(`  TIMEOUT: ${label}`);
  return false;
}

const synced = (session) => waitBool(session, "window.__test && window.__test.synced()", `${session} synced`);
const overlayHas = (name) => `window.__test.cursors().names.includes(${JSON.stringify(name)})`;

let failures = 0;
const check = (label, ok) => {
  console.log(`${ok ? "ok" : "FAIL"}: ${label}`);
  if (!ok) failures++;
};

execFileSync("curl", ["-s", "-X", "POST", `http://localhost:${PORT}/reset/${ROOM}`]);

// Three users join and each plants a caret.
open("alice", "Alice");
check("Alice synced", await synced("alice"));
open("bob", "Bob");
check("Bob synced", await synced("bob"));
open("carol", "Carol");
check("Carol synced", await synced("carol"));

ab("alice", "click", "#editor [contenteditable]");
ab("alice", "keyboard", "type", "AAAA");
ab("carol", "click", "#editor [contenteditable]");
ab("carol", "keyboard", "type", "CCCC");

// 1) Multiple distinct named carets render for the right peers.
check("Bob sees Alice's named caret", await waitBool("bob", overlayHas("Alice"), "bob sees Alice"));
check("Bob sees Carol's named caret", await waitBool("bob", overlayHas("Carol"), "bob sees Carol"));
check("Bob does NOT render its own caret", !evalBool("bob", overlayHas("Bob")));

// 2) A real range selection renders a wide highlight (not a ~0px caret).
// Extend a selection leftward from Alice's caret over the text she just typed
// (Lexical reliably handles Shift+Arrow; Control+a doesn't select-all here).
for (let i = 0; i < 4; i++) ab("alice", "press", "Shift+ArrowLeft");
check(
  "Bob renders Alice's selection highlight (not just a caret)",
  await waitBool("bob", "window.__test.cursors().maxRectWidth > 3", "bob sees Alice's selection")
);

// 3) Caret survives a concurrent edit by another peer (relative positions).
ab("bob", "click", "#editor [contenteditable]");
ab("bob", "keyboard", "type", "BBBB");
await sleep(500);
check("Alice's caret still present after Bob's concurrent edit", evalBool("bob", overlayHas("Alice")));

// 4) Blur hides a peer's caret (focusing=false); refocus restores it.
ab("alice", "eval", "document.querySelector('#editor [contenteditable]').blur()");
check("Alice's caret hides on Bob when Alice blurs", await waitBool("bob", `!(${overlayHas("Alice")})`, "alice blurred"));
ab("alice", "click", "#editor [contenteditable]");
check("Alice's caret returns on Bob when Alice refocuses", await waitBool("bob", overlayHas("Alice"), "alice refocused"));

// 5) Disconnect removes the peer's caret, leaving the others intact.
ab("alice", "close");
check("Alice's caret is removed after she disconnects", await waitBool("bob", `!(${overlayHas("Alice")})`, "alice removed"));
check("Carol's caret still present after Alice left", evalBool("bob", overlayHas("Carol")));

ab("bob", "close");
ab("carol", "close");

console.log("");
if (failures > 0) {
  console.log(`FAILED: ${failures} check(s) failed`);
  process.exit(1);
}
console.log(`PASS: cursor edge cases (room ${ROOM})`);
process.exit(0);
