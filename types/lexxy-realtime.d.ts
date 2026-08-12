// Hand-maintained declarations for lexxy-realtime. The package source is
// plain JavaScript and the build emits no .d.ts, so this file is the type
// surface. YrbyProvider is yrby-client's ActionCableProvider bundled into
// the package, which is why its declarations are inlined here instead of
// imported from yrby-client.

import type { Doc } from "yjs";
import type { Awareness } from "y-protocols/awareness";

/**
 * Connection lifecycle, folded into one signal: connecting (subscription
 * created, transport not up yet), connected (transport up, exchanging sync
 * steps), synced (caught up), and disconnected (torn down via
 * disconnect()/destroy()). A dropped transport that ActionCable will retry
 * shows as "connecting", not "disconnected".
 */
export type ProviderStatus = "connecting" | "connected" | "synced" | "disconnected";

/** Payload passed to onStatusChange listeners. */
export interface StatusEvent {
  status: ProviderStatus;
}

/** The minimal slice of an ActionCable/AnyCable subscription the provider uses. */
export interface CableSubscription {
  send(data: unknown): unknown;
  /** AnyCable client-to-client broadcast; absent on plain ActionCable. */
  whisper?(data: unknown): unknown;
  /** Teardown. Present on both @rails/actioncable and @anycable/web. */
  unsubscribe?(): void;
}

/**
 * The minimal slice of an ActionCable/AnyCable consumer the provider uses.
 * Deliberately loose so the consumers from both @rails/actioncable and
 * @anycable/web are directly assignable.
 */
export interface CableConsumer {
  subscriptions: {
    create(channel: string | object, mixin?: object): CableSubscription;
  };
}

export interface YrbyProviderOptions {
  resendInterval?: number;
  onError?: (error: unknown, context: string) => void;
}

/**
 * yrby-client's ActionCableProvider under this package's name: syncs a Y.Doc
 * over Action Cable with at-least-once, ack-tracked delivery.
 */
export declare class YrbyProvider {
  readonly doc: Doc;
  readonly consumer: CableConsumer;
  readonly channelName: string;
  readonly channelParams: object;
  readonly awareness: Awareness;
  constructor(
    doc: Doc,
    consumer: CableConsumer,
    channelName: string,
    channelParams?: object,
    opts?: YrbyProviderOptions,
  );
  /** True once the document has caught up with the server. */
  get synced(): boolean;
  /**
   * Resolves once the document has first caught up with the server. Bind the
   * editor after this resolves; binding earlier makes each client seed its
   * own top-level node. Stays resolved across later reconnects.
   */
  get whenSynced(): Promise<void>;
  /** True while there are unacknowledged local document updates in flight. */
  get hasPending(): boolean;
  /**
   * Apply a bootstrap/restore update (initial HTTP state, a server snapshot)
   * without re-sending it to the server as a local edit.
   */
  applyRemoteUpdate(update: Uint8Array): void;
  /** Current connection status. */
  get status(): ProviderStatus;
  /** Subscribe to status changes. Returns an unsubscribe function. */
  onStatusChange(listener: (event: StatusEvent) => void): () => void;
  connect(): void;
  disconnect(): void;
  destroy(): void;
}

/**
 * Register the shared Action Cable consumer for every <lexxy-collaboration>
 * element. Call once at boot, before editors mount. Accepts the consumer or
 * a function returning one, resolved lazily on first use. A consumer
 * assigned directly on an element still wins.
 */
export declare function setConsumer(
  consumerOrFactory: CableConsumer | (() => CableConsumer),
): void;

/**
 * The <lexxy-collaboration> custom element. Place it inside a <lexxy-editor>
 * and it wires the editor's Lexical instance to a YrbyProvider. Attributes:
 * doc-id, name, color, channel-name, channel-params (JSON). Assign
 * `consumer` on the element to override the shared one from setConsumer.
 */
export declare class Collaboration extends HTMLElement {
  consumer?: CableConsumer;
  connectedCallback(): void;
  disconnectedCallback(): void;
}
