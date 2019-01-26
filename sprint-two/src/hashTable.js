var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  // Build the tuple var
  var tuple = [k, v];
  var bucket = this._storage.get(index);

  // If bucket exists then
  if (Array.isArray(bucket) === true) {
    // Iterate over current tuples in bucket
    var shouldReplace = true;
    var valueToBeChanged;
    bucket.forEach(function(item, ind, arr) {
      var currentK = item[0];
      var currentV = item[1];
      // If tuple at 0 matches k then
      if (currentK === k) {
        // Update tuple at 1 to v
        item[1] = v;
        valueToBeChanged = ind; //index[ind][1]
        shouldReplace = false;
      }
      // If no values were replaced then add tuple
      if (ind === bucket.length - 1 && shouldReplace) {
        // Push the tuple into bucket
        arr.push(tuple);
      }
    });
    this._storage.set(index, bucket);
  } else if (bucket === undefined) {
    // Else build first bucket on current index and push tuple
    this._storage.set(index, [tuple]);
  }
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var tupleHolder = this._storage.get(index);
  //iterate over tupleHolder
  var result = undefined;
  tupleHolder.forEach((item, ind, arr) => {
    if (item[0] === k) {
      result = item[1];
    }
  });
  return result;
  // Access bucket if it exists
  // Create variable called returnValue set to undefined
  // Iterate over each tuple at index 0 for the k
  // If the value matches k then set returnValue to === tuple[1]
  // return returnValue
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
