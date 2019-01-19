var Queue = function() {
  this.storage = {};
};

Queue.prototype.enqueue = function (value) {
  if (this.size()) {
    var num = Math.max(...Object.keys(this.storage)
      .map(Number)
    ) + 1;
  } else {
    var num = 1;
  }
  return this.storage[num] = value;
};

Queue.prototype.dequeue = function () {
  var num = Math.min(...Object.keys(this.storage).map(Number));
  var val = this.storage[num];
  delete this.storage[num];
  return val;
};

Queue.prototype.size = function () {
  return Object.keys(this.storage).length;
};

var NewQueue = new Queue;