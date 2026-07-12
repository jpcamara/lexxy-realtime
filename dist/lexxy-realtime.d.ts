// Hand-maintained type declarations for lexxy-realtime (the source is plain
// JavaScript). Keep in sync with src/editor_collaboration.js.
import type { Doc } from "yjs";
import type { Awareness } from "y-protocols/awareness";
import type { ActionCableProvider } from "yrby-client";

/**
 * The provider surface `<lexxy-collaboration>` requires. `YrbyProvider`
 * satisfies it; so do y-websocket, Hocuspocus, and y-webrtc providers.
 */
export interface CollaborationProvider {
  awareness: Awareness;
  synced: boolean;
  disconnect(): void;
  connect?(): void;
}

/**
 * The `<lexxy-collaboration>` element. Mount it inside a `<lexxy-editor>`.
 *
 * Two wirings:
 *
 * 1. Element-managed (simplest): set `consumer` and the attributes; the
 *    element builds a `Y.Doc` and a `YrbyProvider`, connects it, and
 *    disconnects it on teardown.
 * 2. Host-managed: set `doc` and a connected `provider`; the element never
 *    disconnects a provider it didn't create.
 *
 * Attributes: `doc-id` (Yjs document id, default "main"), `name` (cursor
 * label), `color` (cursor color), `channel-name` (default "SyncChannel"),
 * `channel-params` (JSON).
 */
export declare class Collaboration extends HTMLElement {
  /** The shared document. Optional; the element creates one if absent. */
  doc?: Doc;
  /** A connected Yjs provider (host-managed wiring). */
  provider?: CollaborationProvider | null;
  /** An ActionCable/AnyCable consumer (element-managed wiring). */
  consumer?: unknown;
  /** The provider-owned Awareness, exposed after binding. */
  awareness?: Awareness;
}

/**
 * The yrby provider for ActionCable / AnyCable: `yrby-client`'s
 * `ActionCableProvider` re-exported under a friendly name. Reliable
 * ack-tracked delivery, reconnect replay, `whenSynced`, and presence.
 */
export { ActionCableProvider as YrbyProvider } from "yrby-client";

declare global {
  interface HTMLElementTagNameMap {
    "lexxy-collaboration": Collaboration;
  }
}
