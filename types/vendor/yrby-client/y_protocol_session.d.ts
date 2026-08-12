import { Doc } from "yjs";
import { type Awareness } from "y-protocols/awareness";
import { type TimerHandle } from "./reliable_sync.js";
export declare const MessageType: {
    readonly Sync: 0;
    readonly Awareness: 1;
};
export interface YProtocolSessionOptions {
    /**
     * Transmit one raw protocol frame. `id` is set only for reliable document
     * updates (tag it onto your envelope so the server can ack). Awareness frames
     * are identifiable by their first byte (`MessageType.Awareness`) if a transport
     * needs to route them separately.
     */
    send: (frame: Uint8Array, id: number | undefined) => void;
    /** Optional awareness/presence. When omitted, awareness frames are ignored. */
    awareness?: Awareness | null;
    /** Forwarded to ReliableSync. */
    resendInterval?: number;
    /**
     * Called when an incoming frame can't be decoded/applied (malformed bytes,
     * truncated message, unexpected structure). The frame is dropped and the
     * session keeps running. `context` names where it happened (e.g. "receive").
     * Defaults to a `console.warn`.
     */
    onError?: (error: unknown, context: string) => void;
    /** Injectable timer hooks (forwarded to ReliableSync); handy for tests. */
    setInterval?: (handler: () => void, ms: number) => TimerHandle;
    clearInterval?: (handle: TimerHandle) => void;
}
export declare class YProtocolSession {
    #private;
    readonly doc: Doc;
    readonly awareness: Awareness | null;
    constructor(doc: Doc, opts: YProtocolSessionOptions);
    /** True once we've received the server's SyncStep2 (the document is caught up). */
    get synced(): boolean;
    /** True while there are unacknowledged local document updates in flight. */
    get hasPending(): boolean;
    /** Transport connected: send the opening handshake and replay the unacked tail. */
    onConnect(): void;
    /** Transport dropped: pause retransmits (queue kept) and clear remote presence. */
    onDisconnect(): void;
    /**
     * Broadcast that our local presence is gone (sets local state to null, which
     * emits a removal awareness frame through `send`). Call this while the
     * transport is still live so peers drop our cursor immediately instead of
     * waiting for the awareness timeout. A no-op when there's no local state.
     */
    removeLocalAwareness(): void;
    /** A reliable-delivery `{ ack: id }` envelope arrived. */
    ack(id: number): void;
    /**
     * Apply an update without treating it as a local edit, so it isn't queued for
     * re-delivery to the server. Use it for bootstrap/restore: initial state loaded
     * over HTTP, a server snapshot, an import. These are bytes the server already
     * has.
     *
     * The session re-sends any doc update whose origin isn't itself (that's how a
     * keystroke becomes an outbound frame), so a bare `Y.applyUpdate(doc, update)`
     * would look like a local edit and get echoed back on the next connect. Going
     * through here applies under the session's own origin, which the outbound
     * filter skips. Safe to call before `onConnect()`: the state folds into the
     * SyncStep1 handshake instead of being re-sent.
     */
    applyRemoteUpdate(update: Uint8Array): void;
    /**
     * Decode and apply one incoming binary protocol frame (document sync or
     * awareness). Returns a reply frame to transmit (e.g. SyncStep2 answering a
     * SyncStep1), or null if there's nothing to send.
     */
    receive(frame: Uint8Array): Uint8Array | null;
    /** Detach doc/awareness listeners and stop retransmits. */
    destroy(): void;
}
