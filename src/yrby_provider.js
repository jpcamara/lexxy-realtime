// The yrby Yjs provider for ActionCable / AnyCable lives in the `@yrby/client`
// package (as `ActionCableProvider`). We re-export it here under a friendly name
// so the provider, sync engine, and reliable-delivery core all ship from one place.
//
// `<lexxy-collaboration>` accepts any provider with the same surface
// (`connect()` / `disconnect()` / `synced`), so apps can supply their own
// instead of this one.
export { ActionCableProvider as YrbyProvider } from "@yrby/client";
