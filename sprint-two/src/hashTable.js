var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  // Build a variable to hold tuples
  var tuple = [k, v];
  var bucket = this._storage.get(index);

  // If bucket exists then update bucket to be returned
  if (Array.isArray(bucket) === true) {
    // Iterate over current tuples in bucket
    var shouldReplace = true;
    bucket.forEach(function(item, ind, arr) {
      var currentK = item[0];
      // If tuple key matches k then update tuple property to v
      if (currentK === k) {
        item[1] = v;
        shouldReplace = false;
      }
      // If no values were replaced then push tuple to bucket
      if (ind === bucket.length - 1 && shouldReplace) {
        arr.push(tuple);
      }
    });
    // Add modified bucket to replace storage index
    this._storage.set(index, bucket);
  } else if (bucket === undefined) {
    // Else build first bucket on current index and push tuple
    this._storage.set(index, [tuple]);
  }
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  // Access bucket if it exists
  var tupleHolder = this._storage.get(index);
  // Create variable called returnValue set to undefined
  var result = undefined;
  // Iterate over tupleHolder
  // Iterate over each tuple at index 0 for the k
  tupleHolder.forEach((item, ind, arr) => {
    // If the value matches k then set returnValue to === tuple[1]
    if (item[0] === k) {
      result = item[1];
    }
  });
  return result;
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  // Access bucket if it exists
  var tupleHolder = this._storage.get(index);
  // Iterate over each tuple at index 0 for the k
  tupleHolder.forEach((item, ind, arr) => {
    // If key is matches k then we want to splice the whole tuple
    if (item[0] === k) {
      arr.splice(ind, 1);
    }
  });
  this._storage.set(index, tupleHolder);
};

/*
 * Complexity: What is the time complexity of the above functions?
  Insert - O(1) - Constant
  Retrieve - O(1) - Constant
  Remove - O(1) - Constant
 */
