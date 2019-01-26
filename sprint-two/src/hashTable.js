var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  // Build the tuple var
  var tuple = [k, v];
  // this._storage.set(index, tuple); //index value
  // var tupleHolder = this._storage.get(index);

  // If bucket exists
  // console.log(this._storage.get(index));
  var bucket = this._storage.get(index);
  if (Array.isArray(bucket) === true) {
    // Iterate over current tuples in bucket
    var status = true;
    bucket.forEach(function(item, ind) {
      var currentK = bucket[item][0];
      var currentV = bucket[item][1];
      // If tuple at 0 matches k then
      if (currentK === k) {
        // Update tuple at 1 to v
        currentV = v;
        status = false;
      }
      // Otherwise
      if (ind === bucket.length - 1 && status) {
        // Push the tuple into bucket
        this._storage.set(bucket, tuple);
      }
    });
  } else if (bucket === undefined) {
    // Else build bucket then push tuple
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
  // return tupleHolder[1];
  // Access bucket if it exists
  // if( storage[index][0] )
  // Create variable called returnValue set to undefined
  // Iterate over each tuple at index 0 for the k
  // If the value matches k then set returnValue to === tuple[1]
  // return returnValue
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  // Access bucket if it exists
  // if( storage[index][0] )
  // Iterate over each tuple at index 0 for the k
  // If the value matches k then we want to splice the whole tuple
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
