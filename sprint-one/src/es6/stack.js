class Stack {

  constructor() {
    this.storage = {};
  }

  push(value) {
    var num = this.size() + 1;
    return this.storage[num] = value;
  }

  pop() {
    var num = this.size();
    var val = this.storage[num];
    delete this.storage[num];
    return val;
  }

  size() {
    return Object.keys(this.storage).length;
  }
}

var NewStack = new Stack();