var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    // create new node and assign to variable
    var newNode = Node(value);
    // check to see if this is first item
    if (list.head === null) {
      // update head
      list.head = newNode; // create new Node and pass in value
    } else {
      // set node.next to equal current tail (list.tail)
      list.tail.next = newNode;
    }
    list.tail = newNode;
  };

  list.removeHead = function() {
    // create var to hold head val
    // head should become list.head.next
    var returnData = list.head.value;
    // update current head by looking at the node.next value of current head
    list.head = list.head.next; // get the current head value
    // return head value var
    return returnData;
  };

  list.contains = function(target) {
    var find = function(node) {
      // debugger;
      if (node.value === target) {
        return true;
      } else if (node.value !== target && node.next !== null) {
        return find(node.next);
      } else {
        return false;
      }
    };
    return find(list.head);
    // end function
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
 */

var linkedList = LinkedList();

linkedList.addToTail(4);
linkedList.addToTail(5);
linkedList.addToTail(6);
linkedList.addToTail(7);
linkedList.head;
linkedList.tail;
//linkedList.removeHead();
console.log(linkedList.head.value, linkedList);
