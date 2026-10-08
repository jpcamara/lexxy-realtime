// Lifecycle e2e: runs the scenarios in lifecycle_app.js in a real browser
// and checks their results. They cover binding to a <yrby-document>
// session, moves, removal with pending edits, late editor initialization,
// seeding, desync recovery, grant refresh, and host-supplied providers.
// Assumes the test server is up and `npm run build:test` has run.
import { execFileSync } from "node:child_process";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const PORT = process.env.PORT || 4111;
const here = dirname(fileURLToPath(import.meta.url));
// Resolve the local binary directly: `npx` per-call overhead is too slow for the
// polling loops below.
const AB = process.env.AB_BIN || join(here, "..", "..", "node_modules", ".bin", "agent-browser");
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

const ab = (session, ...args) => {
  try {
    return execFileSync(AB, args, {
      env: { ...process.env, AGENT_BROWSER_SESSION: session },
      encoding: "utf8",
      stdio: ["ignore", "pipe", "pipe"],
    });
  } catch (e) {
    return `${e.stdout || ""}${e.stderr || ""}`;
  }
};

const S = "lifecycle";
// agent-browser prints booleans as a bare `true`/`false`; assert on that.
const isTrue = (js) => /\btrue\b/.test(ab(S, "eval", js));

async function waitEval(js, label, ms = 30000) {
  const end = Date.now() + ms;
  while (Date.now() < end) {
    if (isTrue(js)) return true;
    await sleep(250);
  }
  console.log(`  TIMEOUT: ${label}`);
  return false;
}

// Run a scenario and wait for its result object to land (or an error).
async function runScenario(name) {
  ab(S, "eval", `window.__lc.run(${JSON.stringify(name)})`);
  const ok = await waitEval(`window.__lc.results[${JSON.stringify(name)}] != null`, `${name} completed`, 60000);
  // Log the raw result object for visibility (printed by agent-browser, not parsed).
  const raw = ab(S, "eval", `JSON.stringify(window.__lc.results[${JSON.stringify(name)}] ?? null)`).trim();
  console.log(`  ${name}: ${raw.replace(/\\(.)/g, "$1").replace(/^"|"$/g, "")}`);
  if (isTrue(`!!(window.__lc.results[${JSON.stringify(name)}] && window.__lc.results[${JSON.stringify(name)}].error)`)) {
    console.log(`  (${name} threw)`);
  }
  return ok;
}
// Assert a boolean field on a completed scenario result.
const field = (name, expr) =>
  isTrue(`(() => { const r = window.__lc.results[${JSON.stringify(name)}]; return !!r && (${expr}); })()`);

let failures = 0;
const check = (label, ok) => {
  console.log(`${ok ? "ok" : "FAIL"}: ${label}`);
  if (!ok) failures++;
};

ab(S, "open", `http://localhost:${PORT}/lifecycle.html`);
if (!(await waitEval("document.body.dataset.lcReady === 'true'", "lifecycle harness ready"))) {
  console.log("FAILED: harness did not load");
  process.exit(1);
}

const scenarios = [
  ["yrbySession", [
    ["binds to the <yrby-document> session's doc and provider", "r.sameResources === true"],
    ["edits reach the server through the session", "r.stored === true"],
    ["removing the <yrby-document> unbinds the editor", "r.unbound === true"],
  ]],
  ["sameTurnMove", [
    ["moving the element within its editor keeps the binding", "r.elementMoveKeptBinding === true"],
    ["moving the <yrby-document> keeps the session and doc", "r.sameSession === true"],
    ["moving the <yrby-document> keeps the content", "r.keptText === true"],
    ["edits after the move reach the doc", "r.editsReachDoc === true"],
  ]],
  ["sameTurnReplace", [
    ["replacing the element in one turn binds the new element", "r.elementReplaced === true"],
    ["the replaced element is unbound", "r.oldUnbound === true"],
    ["replacing the editor in one turn binds the new editor to the doc", "r.editorReplaced === true"],
    ["the new editor shows the document", "r.keptText === true"],
    ["edits after each replacement reach the server", "r.editsSync === true"],
    ["a same-turn replacement logs no refusal", "r.noRefusal === true"],
    ["a second element is refused while the owner is connected", "r.refused === true"],
  ]],
  ["editorRebuild", [
    ["toggling `connected` rebuilds Lexxy's editor", "r.rebuilt === true"],
    ["the element binds the rebuilt editor", "r.rebound === true"],
    ["the rebuilt editor shows the document", "r.keptText === true"],
    ["edits in the rebuilt editor reach the server", "r.stored === true"],
    ["a second rebuild binds again", "r.round2 === true"],
  ]],
  ["removalKeepsPending", [
    ["a removed editor's session keeps its pending edits", "r.keptWhileRemoved === true"],
    ["the pending edit reaches the server after removal", "r.stored === true"],
    ["the session closes and destroys its doc once acknowledged", "r.docDestroyed === true"],
  ]],
  ["remountWhilePending", [
    ["remounting before the acknowledgment reuses the session", "r.sameSession === true"],
    ["remounting before the acknowledgment keeps the content", "r.keptText === true"],
    ["the session stays open for the remounted editor", "r.stillOpen === true"],
  ]],
  ["lateEditor", [
    ["the element waits for Lexxy's editor", "r.waited === true"],
    ["the element binds after yrby:synced already fired", "r.bound === true"],
    ["edits from the late-bound editor reach the doc", "r.editsReachDoc === true"],
  ]],
  ["seedOnce", [
    ["an existing body seeds an empty document", "r.seeded === true"],
    ["binding again does not seed a second time", "r.noDuplicate === true"],
    ["the seeded body reaches the server", "r.stored === true"],
  ]],
  ["desyncRecovery", [
    ["a failed remote apply makes the editor read-only", "r.readOnlyAtFault === true"],
    ["editor changes after the failure are not sent", "r.localStayedLocal === true"],
    ["the first failure reports recovering: true", "r.firstRecovering === true"],
    ["recovery discards the old session's doc", "r.oldDocDestroyed === true"],
    ["recovery loads the server's content into a new session", "r.keptText === true"],
    ["recovery makes the editor editable again", "r.editable === true"],
    ["undo after recovery can't restore the desynced state", "r.undoKeptText === true"],
    ["edits after recovery reach the server, local-only changes don't", "r.editsSync === true"],
    ["a second failure inside 15 seconds reports recovering: true", "r.secondRecovering === true"],
    ["the editor stays read-only on the old doc until the window ends", "r.waitsReadOnly === true"],
    ["the second rebuild runs when the window ends", "r.secondRebuildAfterWindow === true"],
    ["the second rebuild loads the server's content", "r.secondKeptText === true"],
  ]],
  ["desyncThenRemove", [
    ["removing the element in the desync handler unbinds it", "r.unbound === true"],
    ["a removed element doesn't discard the session", "r.sessionKept === true"],
    ["unbinding restores editing", "r.editable === true"],
  ]],
  ["rejectThenRefresh", [
    ["a rejected grant is replaced from the refresh URL", "r.renewedGrant === true"],
    ["edits after the refresh reach the server", "r.stored === true"],
    ["a successful refresh dispatches no yrby:error", "r.noErrors === true"],
  ]],
  ["rejectWithoutRefresh", [
    ["a rejection without a refresh URL blocks the session", "r.reported === true"],
    ["a blocked session leaves the editor unbound", "r.unbound === true"],
    ["a blocked <yrby-document> stays inert", "r.inert === true"],
  ]],
  ["hostMode", [
    ["host mode binds the assigned doc and provider", "r.sameResources === true"],
    ["host mode keeps provider and content across a DOM move", "r.movedKeepsContent === true"],
    ["host mode reports a failed remote apply and keeps the host's doc and provider", "r.reportedOnly === true"],
    ["host mode makes the editor read-only after a failed apply", "r.readOnly === true"],
    ["host mode stops sending editor changes after a failed apply", "r.stoppedSending === true"],
  ]],
  ["bootstrapLeak", [
    ["a provider with whenSynced starts no bootstrap poll", "r.intervalFree === true"],
    ["removal before the first sync leaves no bootstrap poll", "r.leaked === false"],
  ]],
  ["bootstrapLeakFallback", [
    ["a provider without whenSynced starts the bootstrap poll", "r.started === true"],
    ["removal before the first sync clears the poll", "r.leaked === false"],
  ]],
  ["misplaced", [
    ["a misplaced element throws nothing", "r.threw === false"],
    ["an element outside a <lexxy-editor> logs an error", "r.reportedEditor === true"],
    ["an element with no <yrby-document> or host provider logs an error", "r.reportedDocument === true"],
  ]],
];

for (const [name, checks] of scenarios) {
  await runScenario(name);
  for (const [label, expr] of checks) check(label, field(name, expr));
}

await runScenario("initRace");
if (!field("initRace", "r.tookListenerPath === true")) {
  console.log("  (skipped the init-race check: the editor initialized synchronously)");
} else {
  check("an editor that initializes after removal is not bound", field("initRace", "r.boundWhileDetached === false"));
}

const errs = ab(S, "eval", "JSON.stringify(window.__err || [])");
const em = errs.match(/\[.*\]/s);
if (em && em[0] !== "[]") console.log("  page errors:", em[0].slice(0, 400));

ab(S, "close");
console.log("");
if (failures) {
  console.log(`FAILED: ${failures} lifecycle check(s) failed`);
  process.exit(1);
}
console.log("PASS: lifecycle e2e");
process.exit(0);
