// Compile-only consumer. Exercises every public export against the shipped
// declarations, so a missing or wrong declaration fails `tsc`.
import { Collaboration, setConsumer, YrbyProvider } from "lexxy-realtime";
import type { CableConsumer, ProviderStatus, StatusEvent } from "lexxy-realtime";
import * as Y from "yjs";

const consumer: CableConsumer = {
  subscriptions: {
    create: (_channel: string | object, mixin?: object) => ({
      send: (_data: unknown) => true,
      unsubscribe: () => void mixin,
    }),
  },
};

setConsumer(consumer);
setConsumer(() => consumer);

const provider = new YrbyProvider(
  new Y.Doc(),
  consumer,
  "SyncChannel",
  { id: "doc-1" },
  { resendInterval: 500, onError: (error, context) => void [error, context] },
);
const status: ProviderStatus = provider.status;
const synced: boolean = provider.synced;
const settle: Promise<void> = provider.whenSynced;
const off = provider.onStatusChange((event: StatusEvent) => void event.status);
off();
provider.applyRemoteUpdate(new Uint8Array());
provider.connect();
provider.disconnect();
provider.destroy();

const element: HTMLElement = new Collaboration();

// @anycable/web works through its ActionCable-compat consumer.
import { createCable, createConsumer } from "@anycable/web";

const anycable: CableConsumer = createConsumer("ws://localhost:8080/cable");
setConsumer(anycable);
setConsumer(() => createConsumer());
void new YrbyProvider(new Y.Doc(), anycable, "SyncChannel");

// createCable() returns AnyCable's native Cable, which has no
// `subscriptions`; the compat createConsumer() is the supported shape.
// @ts-expect-error
const notAConsumer: CableConsumer = createCable("ws://localhost:8080/cable");
void notAConsumer;

export { element, settle, status, synced };
