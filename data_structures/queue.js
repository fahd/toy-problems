class Queue {
  constructor() {
    this._start = 0;
    this._end = 0;
    this._storage = {};
  }

  size() {
    return this._end - this._start;
  }

  enqueue(val) {
    this._storage[this._end++] = val;
  }

  dequeue() {
    if (this.size()) {
      const val = this._storage[this._start];
      delete this._storage[this._start];
      this._start++;
      return val;
    }
  }
}

const queue = new Queue();
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
console.log(
  'queue size should be three, with three items', queue
);
queue.dequeue();
queue.dequeue();
queue.dequeue();
queue.dequeue();

console.log(
  'queue size should be 0, with no items', queue
);


