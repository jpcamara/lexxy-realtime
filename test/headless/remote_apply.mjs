// createRemoteApplier reports a throw from the Yjs-to-Lexical apply instead
// of letting y-protocols swallow it. It reports once per binding and stops
// applying after the first failure. No server needed.
import { createRemoteApplier } from "../../src/editor_collaboration.js";
import { reconciliationOrigin } from "../../src/text_reconciliation.js";
import { check, done } from "./support.mjs";

const binding = { root: { getSharedType: () => ({}) } };
const provider = {};
const remote = { origin: "someone-else" };
const local = { origin: binding };
const fail = () => { throw new Error("apply blew up"); };

{
  const calls = [];
  const applier = createRemoteApplier(provider, binding, { sync: (...args) => calls.push(args) });
  applier(["events"], remote);
  const [call] = calls;
  check(
    "applies remote events through the sync function",
    calls.length === 1 && call[0] === binding && call[1] === provider && call[2][0] === "events"
  );
}

{
  const calls = [];
  const applier = createRemoteApplier(provider, binding, { sync: (...args) => calls.push(args) });
  applier(["events"], local);
  check("skips events from this binding", calls.length === 0);
}

{
  const calls = [];
  const applier = createRemoteApplier(provider, binding, { sync: (...args) => calls.push(args) });
  applier(["events"], { origin: reconciliationOrigin });
  check("skips events from text reconciliation", calls.length === 0);
}

{
  const reports = [];
  let attempts = 0;
  const applier = createRemoteApplier(provider, binding, {
    sync: () => { attempts += 1; fail(); },
    onDesync: (error) => reports.push(error),
  });
  applier(["a"], remote);
  applier(["b"], remote);
  applier(["c"], remote);
  check("reports a failed apply once", reports.length === 1 && reports[0].message === "apply blew up");
  check("stops applying after the first failure", attempts === 1);
}

{
  const applier = createRemoteApplier(provider, binding, { sync: fail });
  let threw = false;
  try { applier(["a"], remote); } catch { threw = true; }
  check("works without an onDesync callback", !threw);
}

done("remote_apply");
