// The yrb-lite Yjs provider for ActionCable / AnyCable now lives in the
// `yrb-lite-reliable` package (as `ActionCableProvider`). We re-export it here
// under its long-standing name so existing imports keep working, and so the
// provider, sync engine, and reliable-delivery core all ship from one place.
//
// `<lexxy-collaboration>` accepts any provider with the same surface
// (`connect()` / `disconnect()` / `synced`), so apps can supply their own
// instead of this one.
export { ActionCableProvider as YrbLiteProvider } from "yrb-lite-reliable";
