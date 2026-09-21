# Collaboration lifecycle

The element is the public boundary. Configuration is separate from the current
binding, and runtime views are derived from that binding. Do not expose its
Lexical caches as a second writable source of state.

| Owner | States / responsibility |
| --- | --- |
| `Collaboration` | `detached → waiting → starting → active`; failures go to `failed` or `recovering`; removal always returns to `detached`. Waiting is optional when Lexxy is already initialized. |
| `EditorBinding` | `new → active → failed/closed`; `closed` is terminal. Owns observers, bootstrap, upload cleanup, cursor rendering, and the Lexical binding. |
| Connection | `open → draining → closed`, or directly `closed`; remount can reclaim `draining → open`. Owns only the provider/document it creates. Host resources are borrowed. |
| `Cleanup` | Open or closed. Closing commits before callbacks, runs in reverse acquisition order, and continues after exceptions. |

Each deferred initialization, restart, and recovery is tied to the state object
that scheduled it. A newer state invalidates that continuation. DOM callbacks
reconcile in a microtask so a same-turn move in one editor does not detach.
Restarts have a separate microtask boundary because yrby defers unsubscribe;
subscribing again too early can leave a replacement waiting for confirmation.

Validate configuration and claim the editor/document before clearing content.
Register cleanup immediately after acquiring each resource. Start the provider
only after observers and presence are ready. Failed setup closes its partial
binding and restores the captured editor state.

`@lexical/yjs` attaches `_collabNode` caches to Yjs shared types. There must be
one active binding per local document. Detach removes those caches, and a new
binding hydrates existing shared content explicitly: Yjs does not re-emit old
updates just because a new editor starts observing. `releaseBinding` is the
single compatibility boundary for those caches.

A remote apply failure freezes editing and stops both sync directions before
notifying the host. Fully owned bindings may rebuild against server state;
host-owned bindings require explicit retry. Removal or replacement during the
event cancels the queued recovery. Preserve the editor's prior editable state
when releasing that failure state.

Owned providers include the document client ID in their subscription params so
multiple local editors in one room can share a consumer without sharing a
subscription confirmation. Draining connections are indexed by consumer and
channel configuration; a compatible remount reclaims them and cancels disposal.

Normal removal stops the binding immediately but keeps an owned transport alive
until its queued changes are acknowledged. A poisoned binding discards that
queue during recovery. Neither path destroys a borrowed provider or document.
A tab close still needs host-level durable offline storage if unacknowledged
edits must survive it. This package does not add that persistence.

Run `npm test` for public contracts, type declarations, headless protocol tests,
actual Lexxy editors/uploads/cursors, lifecycle fault cases, import-map assets,
and Turbo/Turbolinks navigation with concurrent keyboard input. Navigation
fixtures follow the documented no-cache rule for live Lexical DOM.
