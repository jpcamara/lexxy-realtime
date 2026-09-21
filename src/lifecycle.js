// Internal transition guard, shared by the three lifecycle owners. It owns
// phase changes only; subscriptions, timers, and cleanup stay with their owner.
export class Lifecycle {
  #name;
  #transitions;
  #current;

  constructor(name, initial, transitions) {
    if (!Object.hasOwn(transitions, initial)) throw new Error(`${name}: unknown initial phase ${initial}`);
    this.#name = name;
    this.#transitions = transitions;
    this.#current = Object.freeze({ phase: initial });
  }

  get current() { return this.#current; }
  get phase() { return this.#current.phase; }

  transition(event, details = {}) {
    const events = this.#transitions[this.phase];
    const next = Object.hasOwn(events, event) ? events[event] : undefined;
    if (next === undefined || !Object.hasOwn(this.#transitions, next)) {
      throw new Error(`${this.#name}: cannot ${event} while ${this.phase}`);
    }
    // Validate before replacing anything. Every transition gets a new identity
    // so deferred work cannot mistake a later visit for its original state.
    // Shallow freezing protects the snapshot, not the resources it references.
    this.#current = Object.freeze({ ...details, phase: next });
    return this.#current;
  }
}
