import { YProtocolSession, type YProtocolSessionOptions } from "./y_protocol_session.js";
import { Awareness } from "y-protocols/awareness";
import type { Doc } from "yjs";
/**
 * Connection lifecycle, folded into one signal (no separate "sync" event):
 * connecting (subscription created, transport not up yet), connected (transport
 * up, exchanging sync steps; UI: "syncing"), synced (caught up), and disconnected
 * (torn down via disconnect()/destroy()). A dropped transport that ActionCable
 * will retry shows as "connecting", not "disconnected".
 */
export type ProviderStatus = "connecting" | "connected" | "synced" | "disconnected";
/** Payload passed to onStatusChange listeners. */
export interface StatusEvent {
    status: ProviderStatus;
}
/** The minimal slice of an ActionCable/AnyCable subscription this provider uses. */
export interface CableSubscription {
    send(data: unknown): unknown;
    /** AnyCable client-to-client broadcast; absent on plain ActionCable. */
    whisper?(data: unknown): unknown;
    /** Teardown. Present on both @rails/actioncable and @anycable/web. */
    unsubscribe?(): void;
}
/**
 * The minimal slice of an ActionCable/AnyCable consumer this provider uses.
 *
 * Deliberately loose so the consumers from both `@rails/actioncable` and
 * `@anycable/web` are directly assignable -- no adapter or casts. `create` is
 * widened to the channel/params shapes both libs accept, with an optional mixin
 * (the handlers object). There's no `subscriptions.remove`: the provider tears
 * down via `subscription.unsubscribe()` (universal), and @anycable has no such
 * method anyway.
 */
export interface CableConsumer {
    subscriptions: {
        create(channel: string | object, mixin?: object): CableSubscription;
    };
}
export type ActionCableProviderOptions = Pick<YProtocolSessionOptions, "resendInterval" | "onError">;
export declare class ActionCableProvider {
    #private;
    readonly doc: Doc;
    readonly consumer: CableConsumer;
    readonly channelName: string;
    readonly channelParams: object;
    readonly awareness: Awareness;
    readonly session: YProtocolSession;
    constructor(doc: Doc, consumer: CableConsumer, channelName: string, channelParams?: object, opts?: ActionCableProviderOptions);
    /** True once the document has caught up with the server (received a SyncStep2). */
    get synced(): boolean;
    /**
     * Resolves once the document has first caught up with the server. Most
     * editor bindings seed an empty document when they mount, so binding
     * before the server's state arrives makes each client insert its own
     * top-level node. Create the editor after this resolves:
     *
     *   provider.connect();
     *   await provider.whenSynced;
     *   // now hand the doc to the editor binding
     *
     * Resolves immediately if the first catch-up has already happened, even
     * while the transport is down (`synced` is false during a reconnect;
     * whether the doc has ever synced does not change). It stays resolved
     * across later reconnects; use `onStatusChange` to track the live
     * connection. If the provider is destroyed before the first sync, the
     * promise never settles.
     */
    get whenSynced(): Promise<void>;
    /** True while there are unacknowledged local document updates in flight. */
    get hasPending(): boolean;
    /**
     * Apply a bootstrap/restore update (initial HTTP state, a server snapshot, an
     * import) without re-sending it to the server as a local edit. Call it once per
     * chunk of already-durable state when seeding the doc, before `connect()`:
     *
     *   provider.applyRemoteUpdate(fromBase64(initialState));
     *   priorUpdates.forEach((u) => provider.applyRemoteUpdate(fromBase64(u)));
     *   provider.connect();
     *
     * See {@link YProtocolSession.applyRemoteUpdate} for why a bare `Y.applyUpdate`
     * would be re-broadcast as a pending change instead.
     */
    applyRemoteUpdate(update: Uint8Array): void;
    /** Current connection status. See {@link ProviderStatus}. */
    get status(): ProviderStatus;
    /** Subscribe to status changes. Returns an unsubscribe function. */
    onStatusChange(listener: (event: StatusEvent) => void): () => void;
    connect(): void;
    disconnect(): void;
    destroy(): void;
}
