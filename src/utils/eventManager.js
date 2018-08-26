const eventManager = {
  list: new Map(),

  on(event, callback) {
    if (!this.list.has(event)) this.list.set(event, []);

    this.list.get(event).push(callback);

    return this;
  },

  off(event = null) {
    this.list.delete(event);
    return this;
  },

  emit(event, ...args) {
    if (!this.list.has(event)) return false;

    this.list.get(event).foreach((callback) => {
      setTimeout(() => callback.call(this, ...args), 0);
    });
    // for (const callback of this.list.get(event)) {
    // }

    return true;
  },
};

export default eventManager;
