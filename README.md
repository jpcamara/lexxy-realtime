# lexxy-realtime

> Tracks pre-1.0 peers (`@37signals/lexxy` `^0.9`, `@lexical/yjs` `^0.44`), so
> minor peer bumps may require a release here. See [`CHANGELOG.md`](CHANGELOG.md).

Realtime collaborative editing for [Lexxy](https://github.com/basecamp/lexxy)
(the Lexical-based editor) over [Yjs](https://github.com/yjs/yjs) and
ActionCable / AnyCable. Ships a `<lexxy-collaboration>` custom element plus a
**reliable provider** (`YrbLiteProvider`) that speaks the y-websocket protocol
to a [`yrb-lite`](https://github.com/jpcamara/yrb-lite) server and adds
ack-based delivery (an acknowledged edit can't be silently lost on a flaky
connection).

## Install

```bash
npm install lexxy-realtime
```

Peer libraries you provide (collaboration needs a single, shared copy of each):
`@37signals/lexxy` `^0.9`, `lexical` / `@lexical/yjs` `^0.44`, `yjs`,
`y-protocols`, and an ActionCable/AnyCable consumer (`@rails/actioncable` or
`@anycable/web`).

No `patch-package` or vendor patches required — install the peers and go.
lexxy-realtime applies two small, well-scoped shims to `@lexical/yjs` and
`@37signals/lexxy` *at runtime, from inside its own bind path*, so the upstream
packages are never modified on disk:

- `@37signals/lexxy` — its three ActionText attachment-node constructors
  destructure their first parameter and so throw when `@lexical/yjs`'s
  `createBinding` snapshots node defaults by constructing every node with no
  args. For the duration of the bind only, those classes are swapped for
  identity-preserving subclasses that default the missing argument to `{}`.
- `@lexical/yjs` — `CollabElementNode.splice` is made a no-op when there's
  nothing to remove (instead of throwing / appending `undefined`), so the
  binding bootstrap can populate an empty collab tree.

Both are temporary measures pending upstream fixes; see
[`CONTRIBUTING.md`](CONTRIBUTING.md) for the details and the tracking PRs.

> A duplicate `yjs` (or `@lexical/yjs`) in your bundle breaks Yjs constructor
> checks. If your bundler pulls two copies, dedupe them — e.g. esbuild
> `--alias:yjs=./node_modules/yjs`.

## Usage

The host creates the Yjs doc, awareness, an ActionCable/AnyCable consumer, and a
provider, then mounts `<lexxy-collaboration>` inside a `<lexxy-editor>` and calls
`connect()`:

```js
import "lexxy-realtime"; // registers <lexxy-collaboration>
import { YrbLiteProvider } from "lexxy-realtime";
import * as Y from "yjs";
import { Awareness } from "y-protocols/awareness";
import { createConsumer } from "@anycable/web";

const doc = new Y.Doc();
const awareness = new Awareness(doc);
const consumer = createConsumer();
const provider = new YrbLiteProvider(doc, consumer, "DocumentChannel", { id: docId }, { awareness });

const collab = document.createElement("lexxy-collaboration");
collab.setAttribute("name", userName);
collab.consumer = consumer;
collab.doc = doc;
collab.awareness = awareness;
collab.provider = provider;

document.querySelector("lexxy-editor").appendChild(collab);
provider.connect(); // YrbLiteProvider does not auto-connect
```

On the server, include `YrbLite::Sync` in an ActionCable channel named
`DocumentChannel` (see [`yrb-lite`](https://github.com/jpcamara/yrb-lite)). The
provider is self-gating: against a server without ack support it falls back to
plain delivery, and `reliable: false` opts out entirely.

## License

MIT
