// Register each cleanup as its resource is acquired, including during setup.
// Closing commits first: reentry and a throwing callback cannot strand the rest.
export class Cleanup {
  #callbacks = [];

  add(callback) {
    if (this.#callbacks) this.#callbacks.push(callback);
    else this.#run(callback);
  }

  close() {
    const callbacks = this.#callbacks;
    this.#callbacks = null;
    for (const callback of callbacks?.reverse() || []) this.#run(callback);
  }

  #run(callback) {
    try { callback(); }
    catch (error) { console.error('lexxy-realtime: cleanup failed.', error); }
  }
}
