var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below

  someInstance.enqueue = function(value) {
    //Find last number value and add the next number for key
    if (someInstance.size() > 0) {
      var numbers = Object.keys(storage);
      var num = parseInt(numbers.pop()) + 1;
    } else { // Return 1 if the object is empty
      var num = 1;
    }
    return storage[num] = value;
  };

  someInstance.dequeue = function() {
    //Find the first occupied
    var firstNum = Object.keys(storage)[0];
    var val = storage[firstNum];
    delete storage[firstNum];
    return val;
  };

  someInstance.size = function() {
    return Object.keys(storage).length;
  };

  return someInstance;
};
