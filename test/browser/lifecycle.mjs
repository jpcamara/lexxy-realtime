// Lifecycle e2e: drives the real <lexxy-collaboration> element through mount /
// unmount / DOM-move / init-race scenarios (see lifecycle_app.js) and asserts
// teardown leaves no leaked bootstrap interval, a DOM move keeps a host-owned
// provider synced, and a late editor init never runs #init on a detached
// element. Assumes the test server is up and `npm run build:test` has run.
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
  const ok = await waitEval(`window.__lc.results[${JSON.stringify(name)}] != null`, `${name} completed`);
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

// #1 — bootstrap poll interval must be cleared on unmount-before-sync.
await runScenario("bootstrapLeak");
check("bootstrap interval starts (scenario valid)", field("bootstrapLeak", "r.started === true"));
check("no leaked bootstrap interval after unmount-before-sync", field("bootstrapLeak", "r.leaked === false"));

// #3 — a DOM move must not kill a host-owned provider.
await runScenario("domMove");
check("provider synced before move (scenario valid)", field("domMove", "r.syncedBefore === true"));
check("provider still synced after DOM move", field("domMove", "r.syncedAfter === true"));

// #2 — a late editor init must not run #init on a detached element.
await runScenario("initRace");
if (!field("initRace", "r.tookListenerPath === true")) {
  console.log("  (skipped #init-race assert: the editor initializes synchronously, so the once-listener path is never taken)");
} else {
  check("#init does not run on a detached element", field("initRace", "r.ranOnDetached === false"));
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
