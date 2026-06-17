// Stub for @rails/activestorage. The collaboration tests don't exercise file
// uploads, so DirectUpload is a no-op to keep the test bundle self-contained.
export class DirectUpload {
  constructor() {}
  create(cb) {
    if (cb) cb(new Error("activestorage disabled in test bundle"));
  }
}
