var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var storage = {};

  extend(storage, stackMethods);

  return storage;
};

var extend = function (to, from) {
  for (var key in from) {
    return to[key] = from[key];
  }
};

var stackMethods = {};

stackMethods.push = function (value) {
  //Push the value onto storage with a numerical key
  var num = parseInt(this.size()) + 1;
  return this[num] = value;
};

stackMethods.pop = function () {
  //Find the last numerical
  var num = this.size();
  var val = this[num];
  delete this[num];
  return val;
};


stackMethods.size = function() {
  return Object.keys(this).map(o => {
    return isNaN(parseInt(o)) ? o : parseInt(o);
  }).filter(o=>typeof o === 'number')
    .length;
};

