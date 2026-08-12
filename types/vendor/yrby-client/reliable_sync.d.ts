/** An opaque timer handle (number in browsers, Timeout in Node). */
export type TimerHandle = unknown;
export interface ReliableSyncOptions {
    /**
     * Transmit one update. `update` is the raw merged update bytes; `id` is the
     * cumulative sequence to ack against.
     */
    send: (update: Uint8Array, id: number) => void;
    /** Merge an array of update byte-arrays into one (typically Y.mergeUpdates). */
    merge: (updates: Uint8Array[]) => Uint8Array;
    /** Milliseconds between retransmits of the unacked tail (default 1000). */
    resendInterval?: number;
    /** Injectable timer hooks (default to globals); handy for tests. */
    setInterval?: (handler: () => void, ms: number) => TimerHandle;
    clearInterval?: (handle: TimerHandle) => void;
}
interface Pending {
    seq: number;
    update: Uint8Array;
}
export declare class ReliableSync {
    #private;
    /** Unacked local updates, in order. */
    pending: Pending[];
    constructor(opts: ReliableSyncOptions);
    /** True while there are unacknowledged local updates. */
    get hasPending(): boolean;
    /**
     * Record a local document update. It is queued and the unacked tail is
     * flushed; the update remains retained until the server acknowledges it.
     */
    enqueue(update: Uint8Array): void;
    /**
     * Send the whole unacked tail as one merged delta. The id is the highest seq
     * in the batch, so a single { ack } cumulatively confirms everything up to it.
     * No-op while disconnected (the tail is replayed on the next onConnect).
     */
    flush(): void;
    /**
     * Confirm delivery up to `id`: prune every queued update with seq <= id.
     * Acks arrive over the wire, so validate before pruning. A malformed value
     * (NaN/string/negative) or an impossible future id must not silently drop the
     * queue; invalid acks are ignored.
     */
    onAck(id: number): void;
    /** Transport (re)connected: replay the unacked tail and resume retransmits. */
    onConnect(): void;
    /** Transport dropped: keep the queue (for reconnect replay), pause the timer. */
    onDisconnect(): void;
    /**
     * One retransmit tick. Exposed for deterministic testing; normally driven by
     * the internal timer.
     */
    onTick(): void;
    /** Stop timers and drop references. Call when the provider is destroyed. */
    destroy(): void;
}
export {};
