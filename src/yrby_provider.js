// yrby-client's ActionCableProvider, re-exported under this package's
// name. `<lexxy-collaboration>` accepts any provider exposing `awareness`
// and `synced` (`whenSynced` and `doc` are optional), so apps can supply
// their own instead.
export { ActionCableProvider as YrbyProvider } from "yrby-client";
