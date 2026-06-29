// Two clients sync a Yjs document through the yrby server using the
// YrbyProvider: edits propagate both ways and a late joiner is brought up to
// date by the server.
import * as Y from "yjs";
import { Awareness } from "y-protocols/awareness";
import { YrbyProvider } from "../../src/yrby_provider.js";
import { rawConsumer, URL, waitFor, sleep, resetDoc, check, done } from "./support.mjs";

const ROOM = `conv-${process.pid}`;
await resetDoc(ROOM);

function client() {
  const doc = new Y.Doc();
  const awareness = new Awareness(doc);
  const provider = new YrbyProvider(doc, rawConsumer(URL), "DocumentChannel", { id: ROOM }, { awareness });
  provider.connect();
  return { doc, provider, text: () => doc.getText("body").toString() };
}

const a = client();
const b = client();
await waitFor("both synced", () => a.provider.synced && b.provider.synced);
check("both clients synced via the server", a.provider.synced && b.provider.synced);

a.doc.getText("body").insert(0, "hello from A");
await waitFor("b sees a's edit", () => b.text().includes("hello from A"));
check("edit propagated A -> B", b.text().includes("hello from A"));

b.doc.getText("body").insert(b.text().length, " and B");
await waitFor("a sees b's edit", () => a.text().includes("and B"));
check("edit propagated B -> A", a.text().includes("and B"));

// Late joiner: the server (not A or B) brings it up to date.
const c = client();
await waitFor("late joiner caught up", () => c.text().includes("hello from A") && c.text().includes("and B"));
check("late joiner received full doc from the server", c.text().includes("hello from A") && c.text().includes("and B"));

await sleep(200);
const ua = Y.encodeStateAsUpdate(a.doc);
const ub = Y.encodeStateAsUpdate(b.doc);
check("A and B converged byte-for-byte", ua.length === ub.length && ua.every((x, i) => x === ub[i]));

a.provider.destroy();
b.provider.destroy();
c.provider.destroy();
done(`convergence (room ${ROOM})`);
