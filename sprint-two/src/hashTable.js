var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
  //new Array(this.limit);
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  // Build the tuple var
  var tuple = [k, v];
  // If bucket exists
  // Iterate over current tuples in bucket
  // If tuple at 0 matches k then
  // Update tuple at 1 to v
  // Else
  // Push the tuple into bucket

  // Else build bucket then push tuple
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
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
