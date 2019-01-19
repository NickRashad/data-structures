var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var storage = Object.create(queueMethods);
  return storage;
};

var queueMethods = {};

queueMethods.enqueue = function (value) {
  if (this.size()) {
    var num = Math.max(...Object.keys(this)) + 1;
  } else {
    var num = 1;
  }
  return this[num] = value;
};

queueMethods.dequeue = function () {
  var num = Math.min(...Object.keys(this));
  var val = this[num];
  delete this[num];
  return val;
};

queueMethods.size = function () {
  return Object.keys(this).length;
};
