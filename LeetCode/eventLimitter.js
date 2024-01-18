class EventEmitter {
  constructor() {
    this.listeners = {};
  }

  /**
   * @param {string} eventName
   * @param {Function} callback
   * @return {Object}
   */
  subscribe(eventName, callback) {
    if (!this.listeners[eventName]) {
      this.listeners[eventName] = [];
    }

    const listener = { callback };
    this.listeners[eventName].push(listener);

    return {
      unsubscribe: () => {
        this.listeners[eventName] = this.listeners[eventName].filter(
          (l) => l !== listener
        );
      },
    };
  }

  /**
   * @param {string} eventName
   * @param {Array} args
   * @return {Array}
   */
  emit(eventName, args = []) {
    const eventListeners = this.listeners[eventName] || [];
    const results = [];

    for (const listener of eventListeners) {
      results.push(listener.callback(...args));
    }

    return results;
  }
}

// Example usage:

const emitter = new EventEmitter();

// Subscribe to the onClick event with onClickCallback
function onClickCallback() {
  return 99;
}

const sub = emitter.subscribe("onClick", onClickCallback);

console.log(emitter.emit("onClick")); // Output: [99]
sub.unsubscribe();
console.log(emitter.emit("onClick")); // Output: []
