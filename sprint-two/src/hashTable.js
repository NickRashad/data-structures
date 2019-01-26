var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  // Build the tuple var
  var tuple = [k, v];
  debugger;
  var bucket = this._storage.get(index);
  //var storageArr = _storage.bind(HashTable);
  // var experiment = HashTable.bind(this, this._storage);

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
    //this._storage.set(valueToBeChanged, v);
    //} else {
    this._storage.set(index, bucket); // [["Steven","Seagal"]],["Manners", "Batman"]
    //}
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
