var BinarySearchTree = function(newValue) {
  var obj = binaryNode(newValue);

  var _extend = function(from, to) {
    for (var key in from) {
      to[key] = from[key];
    }
  };

  _extend(binarySearchTreeMethods, obj);
  return obj;
};

var binaryNode = function(newValue) {
  var binarynode = {};
  binarynode.value = newValue;
  binarynode.left = null;
  binarynode.right = null;
  return binarynode;
};

var binarySearchTreeMethods = {};

binarySearchTreeMethods.insert = function(newValue) {
  var _recurse = function(presentNode) {
    // If newValue < presentVal
    if (newValue < presentNode.value) {
      // If Left null
      if (presentNode.left === null) {
        // Place newValue on left
        presentNode.left = binaryNode(newValue);
      } else {
        // Recurse over left
        _recurse(presentNode.left);
      }
    }
    // If newValue > presentVal
    if (newValue > presentNode.value) {
      // Is Right null -> Assign to Right
      if (presentNode.right === null) {
        // Place newValue on right
        presentNode.right = binaryNode(newValue);
      } else {
        // Recurse over right
        _recurse(presentNode.right);
      }
    }
  };
  _recurse(this);
};

binarySearchTreeMethods.contains = function(target) {
  // Implement a logarithmic lookup time by
  var doesContain = false;
  var _recurse = function(presentNode) {
    // If presentNode's value matches target then update doesContain to true
    if (presentNode.value === target) {
      doesContain = true;
    } else if (target < presentNode.value && presentNode.left !== null) {
      _recurse(presentNode.left);
    } else if (target > presentNode.value && presentNode.right !== null) {
      _recurse(presentNode.right);
    }
  };
  _recurse(this);
  return doesContain;
};

binarySearchTreeMethods.depthFirstLog = function(func) {
  var _recurse = function(presentNode) {
    // If presentNode's value matches target then update doesContain to true
    if (presentNode.value !== null) {
      func(presentNode.value);
    }
    if (presentNode.left !== null) {
      _recurse(presentNode.left);
    }
    if (presentNode.right !== null) {
      _recurse(presentNode.right);
    }
  };
  _recurse(this);
};

/*
 * Complexity: What is the time complexity of the above functions?
 Insert: O(1) - Constant
 Contains: O(log n) - Logarithmic
 depthFirstLog: O(n) - Linear
 */
