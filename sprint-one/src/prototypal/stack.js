var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var storage = Object.create(stackMethods);
  return storage;
};

var stackMethods = {};

stackMethods.push = function (value) {
  var num = this.size() + 1;
  return this[num] = value;
};

stackMethods.pop = function () {
  var num = this.size();
  var val = this[num];
  delete this[num];
  return val;
};

stackMethods.size = function() {
  return Object.keys(this)
    .filter(o => !isNaN(parseInt(o)))
    .length;
};