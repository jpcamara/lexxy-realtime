// Runs YrbyProvider with an AnyCable consumer against a real anycable-go
// gateway, as the README's AnyCable section describes. The RPC server stores
// each document update and then broadcasts it. Presence goes out as AnyCable
// whispers, which anycable-go relays between clients without calling the Ruby
// server. createConsumer comes from @anycable/core. @anycable/web re-exports
// it for browsers, but this test has no DOM, so it imports the core package.
import * as Y from "yjs";
import { createConsumer } from "@anycable/core";
import { YrbyProvider } from "../../src/yrby_provider.js";
import { waitFor, sleep, resetDoc, check, done } from "./support.mjs";

const WS = process.env.CABLE_URL;
if (!WS) {
  console.error("FAILED: anycable_client.mjs needs CABLE_URL set to the anycable-go WebSocket URL");
  process.exit(1);
}

const ROOM = `anyc-${process.pid}`;
await resetDoc(ROOM);

function client(name) {
  const doc = new Y.Doc();
  const provider = new YrbyProvider(doc, createConsumer(WS), "DocumentChannel", { id: ROOM });
  provider.awareness.setLocalStateField("name", name);
  provider.connect();
  return { doc, provider, text: () => doc.getText("body").toString() };
}

const a = client("Ana");
const b = client("Ben");

await waitFor("both synced", () => a.provider.synced && b.provider.synced);
check("both AnyCable consumers synced through anycable-go", a.provider.synced && b.provider.synced);

a.doc.getText("body").insert(0, "over anycable");
await waitFor("b converges", () => b.text() === "over anycable");
check("the document update was stored and relayed through the gateway", b.text() === "over anycable");

await waitFor(
  "b sees Ana's presence",
  () => [...b.provider.awareness.getStates().values()].some((s) => s.name === "Ana")
);
check(
  "presence reached the other client as an AnyCable whisper",
  [...b.provider.awareness.getStates().values()].some((s) => s.name === "Ana")
);

a.provider.destroy();
await sleep(300);
const benSeesAna = [...b.provider.awareness.getStates().values()].some((s) => s.name === "Ana");
check("destroying a provider removes its presence from the other client", !benSeesAna);

b.provider.destroy();
done(`anycable client (room ${ROOM})`);
process.exit(0);
