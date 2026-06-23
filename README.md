# lexxy-realtime

> **Alpha.** APIs and setup may change. Published under the `alpha` dist-tag.

Realtime collaborative editing for [Lexxy](https://github.com/basecamp/lexxy)
(the Lexical-based editor) over [Yjs](https://github.com/yjs/yjs) and
ActionCable / AnyCable. Ships a `<lexxy-collaboration>` custom element plus a
**reliable provider** (`YrbLiteProvider`) that speaks the y-websocket protocol
to a [`yrb-lite`](https://github.com/jpcamara/yrb-lite) server and adds
ack-based delivery (an acknowledged edit can't be silently lost on a flaky
connection).

## Install

```bash
npm install lexxy-realtime@alpha
```

Peer libraries you provide (collaboration needs a single, shared copy of each):
`@37signals/lexxy` `^0.9`, `lexical` / `@lexical/yjs` `^0.44`, `yjs`,
`y-protocols`, and an ActionCable/AnyCable consumer (`@rails/actioncable` or
`@anycable/web`).

### Required patches

This alpha depends on two small upstream patches that the **consuming app** must
apply (they live in `node_modules/lexxy-realtime/patches/`):

- `@37signals/lexxy` — default three ActionText node constructors so
  `@lexical/yjs`'s `createBinding` (which constructs nodes with no args) doesn't
  throw.
- `@lexical/yjs` — make `CollabElementNode.splice` a no-op when there's nothing
  to remove, instead of throwing, so the binding bootstrap can populate an empty
  collab tree.

Set them up with [patch-package](https://www.npmjs.com/package/patch-package):

```bash
npm install --save-dev patch-package
cp node_modules/lexxy-realtime/patches/*.patch patches/
# package.json:  "scripts": { "postinstall": "patch-package" }
```

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
