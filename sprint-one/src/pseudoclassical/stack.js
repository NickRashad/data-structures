var Stack = function() {
  this.storage = {};
};

Stack.prototype.push = function (value) {
  var num = this.size() + 1;
  return this.storage[num] = value;
};

Stack.prototype.pop = function () {
  var num = this.size();
  var val = this.storage[num];
  delete this.storage[num];
  return val;
};

Stack.prototype.size = function () {
  return Object.keys(this.storage).length;
};

var stack = new Stack();