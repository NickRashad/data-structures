var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var storage = {};
  extend(storage, queueMethods);

  return storage;
};

var extend = function (to, from) {
  for (var key in from) {
    to[key] = from[key];
  }
};
var queueMethods = {};

//Explicitly define or borrow methods
queueMethods.enqueue = function (value) {
  //Of all the numerical keys find the max value and increment by 1
  var last = Math.max(Object.keys(this)
    .filter(o => {
      return !isNaN(parseInt(o));
    })) + 1;
  return this[last] = value;
};
queueMethods.dequeue = function () {
  var first = Math.min(...Object.keys(this)
    .filter(o => {
      return !isNaN(parseInt(o));
    }).map(o => parseInt(o))
  );

  var val = this[first];
  delete this[first];
  return val;
};
queueMethods.size = function () {
  return Object.keys(this)
    .filter(o => {
      return !isNaN(parseInt(o));
    }).length;
};
