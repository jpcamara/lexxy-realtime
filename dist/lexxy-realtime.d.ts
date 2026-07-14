// Hand-maintained type declarations for lexxy-realtime (the source is plain
// JavaScript). Keep in sync with src/editor_collaboration.js — and keep
// YrbyProvider in sync with yrby-client's ActionCableProvider, which is
// compiled into the bundle rather than installed, so these declarations
// must not import from it.
import type { Doc } from "yjs";
import type { Awareness } from "y-protocols/awareness";

export type ProviderStatus = "connecting" | "connected" | "synced" | "disconnected";

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
 * `ActionCableProvider`, compiled into this package's bundle. Reliable
 * ack-tracked delivery, reconnect replay, `whenSynced`, and presence.
 */
export declare class YrbyProvider implements CollaborationProvider {
  constructor(
    doc: Doc,
    consumer: unknown,
    channelName: string,
    channelParams?: object,
    opts?: {
      resendInterval?: number;
      onError?: (error: unknown, context: string) => void;
    }
  );
  readonly doc: Doc;
  readonly awareness: Awareness;
  /** True once the document has caught up with the server. */
  readonly synced: boolean;
  /** Resolves on the first catch-up; immediately if it already happened. */
  readonly whenSynced: Promise<void>;
  readonly status: ProviderStatus;
  /** True while unacknowledged local edits are in flight. */
  readonly hasPending: boolean;
  onStatusChange(listener: (event: { status: ProviderStatus }) => void): () => void;
  /** Apply already-durable state without re-sending it as a local edit. */
  applyRemoteUpdate(update: Uint8Array): void;
  connect(): void;
  disconnect(): void;
  destroy(): void;
}

declare global {
  interface HTMLElementTagNameMap {
    "lexxy-collaboration": Collaboration;
  }
}
