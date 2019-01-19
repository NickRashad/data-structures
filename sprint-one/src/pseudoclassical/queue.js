var Queue = function() {
  this.storage;
  return this.storage;
};

Queue.prototype.enqueue = function (value) {
  if (this.size()) {
    var num = Math.max(...Object.keys(this)
      .map(Number)
    ) + 1;
  } else {
    var num = 1;
  }
  return this[num] = value;
};

Queue.prototype.dequeue = function () {
  var num = Math.min(...Object.keys(this).map(Number));
  var val = this[num];
  delete this[num];
  return val;
};

Queue.prototype.size = function () {
  return Object.keys(this).length;
};

var NewQueue = new Queue;

