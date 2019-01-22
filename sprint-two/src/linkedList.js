var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;
  var count = 0;

  list.addToTail = function(value) {
    // take in value
    // create new key in list and
    count++;
    list[count] = Node(value); // create new Node and pass in value
    // check to see if this is first item
    if (list.head === null) {
      // update head
      list.head = count;
    } else {
      // else
      // set node.next to equal current tail (list.tail)
      // list[value].next
      list[count - 1].next = count;
    }
    // update current tail (list.tail) to equal
    list.tail = count;
  };

  list.removeHead = function() {
    // create var to hold head val
    var currentHead = list.head; // get the current head value
    // update current head by looking at the node.next value of current head

    // return head value var
  };

  list.contains = function(target) {
    // Start with node (First node value is Head)
    //wrapped in function take in target and head
    //Check if value is equal to target and
    //return true
    //->Else if valus is not equal to targer and is not null
    //--->recurssion call: pass the next node
    //->Else if Null
    //--->return false
    // end function
  };
  // console.log(list);
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
linkedList.head;
linkedList.tail;
linkedList.removeHead();
console.log(linkedList.head.value, linkedList);
