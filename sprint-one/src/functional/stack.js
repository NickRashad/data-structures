var Stack = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below
  someInstance.push = function(value) {
    //Get the size of the object and add 1
    var num = someInstance.size() + 1 ;
    //Place the value on the object as a property and use a # as a key
    return storage[num] = value;
  };

  someInstance.pop = function() {
    //Get the size of the object to determine what key:value needs to be removed
    var num = someInstance.size();
    //Delete object at num
    var val = storage[num];
    delete storage[num];
    return val;
  };

  someInstance.size = function() {
    return Object.keys(storage).length;
  };

  return someInstance;
};


/*

*/