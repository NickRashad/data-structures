var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    // Create new node and assign to variable
    var newNode = Node(value);
    // Check to see if this is first item
    if (list.head === null) {
      // Update head to new Node
      list.head = newNode;
    } else { // Set previous tail.next value to equal current tail
      list.tail.next = newNode;
    } // Always set tail to
    list.tail = newNode;
  };

  list.removeHead = function() {
    // Create var to hold former head value
    var returnData = list.head.value;
    // Update current head by looking at the node.next value of current head
    list.head = list.head.next;
    // Return former head value
    return returnData;
  };

  list.contains = function(target) {
    //Recurse over linked list to find target and return boolean
    var find = function(node) {
      if (node.value === target) {
        return true;
      } else if (node.value !== target && node.next !== null) {
        return find(node.next);
      } else {
        return false;
      }
    };
    return find(list.head);
    // End function
  };
  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?

    addToTail: O(1) - Constant
    removeHead: O(1) - Constant
    contains: O(n) - Linear
 */