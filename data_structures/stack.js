class Stack {
  constructor() {
    this._size = 0;
    this._storage = {};
  }

  size() {
    return this._size;
  }

  push(val) {
    this._storage[this._size] = val;
    this._size++;
  }

  pop() {
    let val = this._storage[--this._size];
    delete this._storage[this._size];
  }
}

let stack = new Stack();

stack.push(1);
stack.push(2);
stack.push(3);
stack.pop();
stack.pop();
stack.pop();
stack.push(1);
stack.push(2);
stack.push(3);

console.log(
  'stack', stack
);
