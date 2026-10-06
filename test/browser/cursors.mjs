// Browser tests for the remote cursors that @lexical/yjs renders, run with
// agent-browser in Chrome against the yrby server. They cover several named
// carets, range selection highlights, removing a caret when its peer leaves,
// and carets that stay in place through concurrent edits.
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

// Evaluates a boolean expression on a page. agent-browser prints the result,
// and we match a standalone `true`. Strings come back escaped, so every check
// is a boolean and nothing is parsed as JSON.
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

execFileSync("curl", ["-s", "-X", "POST", `http://localhost:${PORT}/reset/${ROOM}:body`]);

// Three users join. Alice and Carol type, which places their carets.
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

// Bob sees a named caret for each of the others.
check("Bob sees Alice's named caret", await waitBool("bob", overlayHas("Alice"), "bob sees Alice"));
check("Bob sees Carol's named caret", await waitBool("bob", overlayHas("Carol"), "bob sees Carol"));
check("Bob does not render his own caret", !evalBool("bob", overlayHas("Bob")));

// The cursor theme is registered and its stylesheet applies. The caret has
// our class, which @lexical/yjs's inline-styled default doesn't use, and the
// name label is styled as a pill.
check(
  "remote caret uses the lexxy-collab cursor theme",
  evalBool("bob", '!!document.querySelector(".lexxy-collab-cursors .lexxy-collab-cursor")')
);
check(
  "name label is a pill with rounded corners and the theme font",
  evalBool(
    "bob",
    '(() => { const n = document.querySelector(".lexxy-collab-cursor__name"); if (!n) return false; const cs = getComputedStyle(n); return parseFloat(cs.borderRadius) > 0 && cs.fontFamily !== "Arial"; })()'
  )
);

// A range selection renders as a highlight wider than a caret. Alice extends
// her selection left over the text she typed. Lexical handles Shift+Arrow
// reliably here, and Control+A doesn't select all.
for (let i = 0; i < 4; i++) ab("alice", "press", "Shift+ArrowLeft");
check(
  "Bob renders Alice's selection highlight",
  await waitBool("bob", "window.__test.cursors().maxRectWidth > 3", "bob sees Alice's selection")
);

// Alice's caret stays when Bob edits at the same time, because carets use
// relative positions.
ab("bob", "click", "#editor [contenteditable]");
ab("bob", "keyboard", "type", "BBBB");
await sleep(500);
check("Alice's caret still present after Bob's concurrent edit", evalBool("bob", overlayHas("Alice")));

// A peer's caret stays visible when their editor loses focus, so a
// collaborator who switches to another window or tab still shows at their last
// position. @lexical/react hides carets on blur by default, which makes peers
// disappear all the time. With two windows on one machine, the focused window
// would never see the other one's caret.
ab("alice", "eval", "document.querySelector('#editor [contenteditable]').blur()");
await sleep(750);
check("Alice's caret persists on Bob when Alice blurs", evalBool("bob", overlayHas("Alice")));

// Leaving the page removes that peer's caret and keeps the others. Navigating
// away fires `pagehide`, and the provider then sends a presence removal.
// agent-browser's `close` doesn't fire pagehide, so the test navigates
// instead. When a page is killed without pagehide, its caret goes away after
// the awareness timeout.
ab("alice", "open", "about:blank");
check("Alice's caret is removed after she leaves", await waitBool("bob", `!(${overlayHas("Alice")})`, "alice left"));
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
