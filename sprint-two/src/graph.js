// Instantiate a new graph
var Graph = function() {};

Graph.prototype.nodes = {};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  // Create a variable capturing new node instance w/ node passed
  // Place node on nodes object
  // debugger;
  var obj = {
    edges: []
  };
  this.nodes[node] = obj;
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
  var status = false;
  // debugger;
  for (var key in this.nodes) {
    if (parseInt(key) === node) {
      status = true;
    }
  }
  return status;
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
  // Delete from nodes object by using node value
  // Get a variable to capture all edges of current node
  var nodes = this.nodes;
  var arr = nodes[node].edges;
  // For each edge we want to remove our current node in it's edge list
  arr.forEach(item => {
    var attachedNode = nodes[item].edges;
    var index = attachedNode.indexOf(node);
    attachedNode.splice(index, 1);
  });
  delete this.nodes[node];
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
  // Lookup fromNode on nodes object check edges array for  toNode
  // find fromNode
  //iterate over fromNode.edges
  // if item === toNode
  //return true
  return this.nodes[fromNode].edges.includes(toNode);
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  // Find fromNode in nodes and push toNode to it's edges array
  this.nodes[fromNode].edges.push(toNode);
  // Find toNode in nodes and push fromNode to it's edges array
  this.nodes[toNode].edges.push(fromNode);
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
  //lookup fromNode on this.nodes and iterate over the edges array
  var arr1 = this.nodes[fromNode].edges;
  var arr2 = this.nodes[toNode].edges;
  // debugger;
  arr1.forEach(function(item, index, array) {
    if (item === toNode) {
      arr1.splice(index, 1);
    }
  });
  arr2.forEach(function(item, index, array) {
    if (item === fromNode) {
      arr2.splice(index, 1);
    }
  });
  //if item === toNode
  //splice operation
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
  for (var key in this.nodes) {
    cb(key);
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
