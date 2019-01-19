var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
};

Stack.prototype.push = function (value) {
  var num = this.size() + 1;
  return this[num] = value;
};

Stack.prototype.pop = function () {
  var num = this.size();
  var val = this[num];
  delete this[num];
  return val;
};

Stack.prototype.size = function () {
  return Object.keys(this).length;
};

var stack = new Stack();