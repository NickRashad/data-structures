var Set = function() {
  var set = Object.create(setPrototype);
  set._storage = {}; // fix me
  return set;
};

var setPrototype = {};

setPrototype.add = function(item) {
  if (!this._storage[item]) {
    this._storage[item] = item;
  }
};

setPrototype.contains = function(item) {
  if (!this._storage[item]) {
    return false;
  } else {
    return true;
  }
};

setPrototype.remove = function(item) {
  delete this._storage[item];
};

/*
 * Complexity: What is the time complexity of the above functions?
  add: O(1) - Constant
  contains: O(1) - Constant
  remove: O(1) - Constant
 */
