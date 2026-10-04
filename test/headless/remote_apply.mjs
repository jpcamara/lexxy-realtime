// createRemoteApplier: a throw inside the Yjs->Lexical apply must not be
// silently swallowed (y-protocols catches observer exceptions after the doc
// already integrated the update). The applier surfaces it exactly once per
// binding via onDesync and stops applying — the recovery replaces the
// binding, so a persistent fault reports once per rebuild, not per frame.
import assert from "node:assert/strict";
import { createRemoteApplier } from "../../src/editor_collaboration.js";

const binding = { root: { getSharedType: () => ({}) } };
const provider = {};
const remote = { origin: "someone-else" };
const local = { origin: binding };

let failures = 0;
const check = (label, fn) => {
  try {
    fn();
    console.log(`ok: ${label}`);
  } catch (e) {
    console.log(`FAIL: ${label}: ${e.message}`);
    failures += 1;
  }
};

check("applies remote events through the sync function", () => {
  const calls = [];
  const applier = createRemoteApplier(provider, binding, { sync: (...args) => calls.push(args) });
  applier(["events"], remote);

  assert.equal(calls.length, 1);
  assert.equal(calls[0][0], binding);
  assert.equal(calls[0][1], provider);
  assert.deepEqual(calls[0][2], ["events"]);
});

check("skips events originating from this binding", () => {
  const calls = [];
  const applier = createRemoteApplier(provider, binding, { sync: (...args) => calls.push(args) });
  applier(["events"], local);

  assert.equal(calls.length, 0);
});

check("a throw surfaces through onDesync exactly once", () => {
  const desyncs = [];
  let syncCalls = 0;
  const applier = createRemoteApplier(provider, binding, {
    sync: () => {
      syncCalls += 1;
      throw new Error("apply blew up");
    },
    onDesync: (error) => desyncs.push(error),
  });

  applier(["a"], remote); // throws inside, caught, reported
  applier(["b"], remote); // latched: no further applies, no further reports
  applier(["c"], remote);

  assert.equal(desyncs.length, 1, "one desync report per binding");
  assert.equal(desyncs[0].message, "apply blew up");
  assert.equal(syncCalls, 1, "no further apply attempts after the fault");
});

check("a missing onDesync does not itself throw", () => {
  const applier = createRemoteApplier(provider, binding, {
    sync: () => {
      throw new Error("apply blew up");
    },
  });
  applier(["a"], remote);
});

if (failures > 0) {
  console.log(`FAILED: ${failures}`);
  process.exit(1);
}
console.log("remote_apply: all checks passed");
