var Tree = function(value) {
  var newTree = {};
  newTree.value = value;

  extend(treeMethods, newTree);
  newTree.children = []; // fix me

  return newTree;
};

var extend = function(from, to) {
  for (var key in from) {
    to[key] = from[key];
  }
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  // var newNode = newTree;
  // newNode.value = value;
  // For every new addchild we attach a .value and .children
  var node = {
    children: [],
    value: value,
    addChild: treeMethods.addChild,
    contains: treeMethods.contains
  };

  return this.children.push(node);
};

treeMethods.contains = function(target) {
  // children[i].value ? target
  var status = false;
  var recursion = function(currChild) {
    for (var i = 0; i < currChild.length; i++) {
      if (currChild[i].value === target) {
        status = true;
      } else {
        recursion(currChild[i].children);
      }
    }
  };
  recursion(this.children);
  return status;
};

/*
 * Complexity: What is the time complexity of the above functions?
  extend: O(n) - Linear
  addChild: O(1) - Constant
  contains: either O(n^2) quadratic or linear O(n)
 */
