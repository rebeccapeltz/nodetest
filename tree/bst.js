'use strict';
//https://gist.github.com/alexhawkins/f993569424789f3be5db
//http: //stackoverflow.com/questions/1331289/javascript-binary-search-tree-implementation


function BinarySearchTree(value) {
  this.value = value;
  this.left = null;
  this.right = null;
}



BinarySearchTree.prototype.add = function(node) {
  this.insert(node);
  return this;
};

BinarySearchTree.prototype.insert = function(newNode) {
  var value = newNode.value;
  var traverse = function(node) {
    if (value > node.value) {
      if (!node.right) {
        node.right = newNode;
        return;
      } else traverse(node.right);
    } else if (value < node.value) {
      if (!node.left) {
        node.left = newNode;
        return;
      } else traverse(node.left);
    }
  };
  traverse(this);
};

// BinarySearchTree.prototype.remove = function(node) {
//
// }

BinarySearchTree.prototype.contains = function(value) {
  var traverse = function(node) {
    if (!node) return false;
    if (value === node.value) {
      return true;
    } else if (value > node.value) {
      return traverse(node.right);
    } else if (value < node.value) {
      return traverse(node.left);
    }
  };
  return traverse(this);
};

/* BREADTH FIRST TREE TRAVERSAL */

/* Breadth First Search finds all the siblings at each level
   in order from left to right or from right to left. */

BinarySearchTree.prototype.breadthFirstLTR = function() {
  var node = this;
  var queue = [node];
  var result = [];
  node = queue.shift();
  while (node) {
    result.push(node.value);
    node.left && queue.push(node.left);
    node.right && queue.push(node.right);
    node = queue.shift();
  }
  return result;
};


BinarySearchTree.prototype.breadthFirstRTL = function() {
  var node = this;
  var queue = [node];
  var result = [];
  node = queue.shift();
  while (node) {
    result.push(node.value);
    node.right && queue.push(node.right);
    node.left && queue.push(node.left);
    node = queue.shift();
  }
  return result;
};

/*DEPTH FIRST TRAVERSALS*/

/*  preOrder is a type of depth-first traversal that tries
    togo deeper in the tree before exploring siblings. It
    returns the shallowest descendants first.

    1) Display the data part of root element (or current element)
    2) Traverse the left subtree by recursively calling the pre-order function.
    3) Traverse the right subtree by recursively calling the pre-order function. */

BinarySearchTree.prototype.preOrder = function() {
  var result = [];
  var node = this;
  var traverse = function(node) {
    result.push(node.value);
    node.left && traverse(node.left);
    node.right && traverse(node.right);
  };
  traverse(node);
  return result;
};

/*  inOrder traversal is a type of depth-first traversal
    that also tries to go deeper in the tree before exploring siblings.
    however, it returns the deepest descendents first

    1) Traverse the left subtree by recursively calling the pre-order function.
    2) Display the data part of root element (or current element)
    3) Traverse the right subtree by recursively calling the pre-order function. */

BinarySearchTree.prototype.inOrder = function() {
  var result = [];
  var node = this;
  var traverse = function(node) {
    node.left && traverse(node.left);
    result.push(node.value);
    node.right && traverse(node.right);
  };
  traverse(node);
  return result;
};

/*  postOrder traversal is a type of depth-first traversal
    that also tries to go deeper in the tree before exploring siblings.
    however, it returns the deepest descendents first

    1) Traverse the left subtree by recursively calling the pre-order function.
    2) Display the data part of root element (or current element)
    3) Traverse the right subtree by recursively calling the pre-order function. */


BinarySearchTree.prototype.postOrder = function() {
  var result = [];
  var node = this;
  var traverse = function(node) {
    node.left && traverse(node.left);
    node.right && traverse(node.right);
    result.push(node.value);
  };
  traverse(node);
  return result;
};

//find the left most node to find the min value of a binary tree;
BinarySearchTree.prototype.findMin = function() {
  var node = this;
  var traverse = function(node) {
    return !node.left ? node.value : traverse(node.left);
  };
  return traverse(node);
};

//find the right most node to find the max value of a binary tree;
BinarySearchTree.prototype.findMax = function() {
  var node = this;
  var traverse = function(node) {
    return !node.right ? node.value : traverse(node.right);
  };
  return traverse(node);
};


BinarySearchTree.prototype.getDepth = function() {
  var node = this;
  var maxDepth = 0;
  var traverse = function(node, depth) {
    if (!node) return null;
    if (node) {
      maxDepth = depth > maxDepth ? depth : maxDepth;
      traverse(node.left, depth + 1);
      traverse(node.right, depth + 1);
    }
  };
  traverse(node, 0);
  return maxDepth;
};

BinarySearchTree.prototype.countLeaves = function() {
  var count = 0;
  var node = this;
  var traverse = function(node) {
    if (!node) return null;
    if (!node.left && !node.right) count++;
    else traverse(node.left) + traverse(node.right);
  };
  traverse(node);
  return count;
};

//Can you write me a function that returns all the averages of the nodes
//at each level (or depth)?? with breadth-first traversal

BinarySearchTree.prototype.nodeAverages = function() {
  var node = this;
  var result = {};
  var depthAverages = [];

  var traverse = function(node, depth) {
    if (!node) return null;
    if (node) {
      if (!result[depth])
        result[depth] = [node.value];
      else
        result[depth].push(node.value);
    }
    //check to see if node is a leaf, depth stays the same if it is
    //otherwise increment depth for possible right and left nodes
    if (node.right || node.left) {
      traverse(node.left, depth + 1);
      traverse(node.right, depth + 1);
    }
  };
  traverse(node, 0);

  //get averages and breadthFirst
  for (var key in result) {
    var len = result[key].length;
    var depthAvg = 0;
    for (var i = 0; i < len; i++) {
      depthAvg += result[key][i];
    }
    depthAverages.push(Number((depthAvg / len).toFixed(2)));
  }
  return depthAverages;
};

//Convert a binary search tree to a linked-list in place.
//In-order depth-first traversal.
function LinkedList() {
  this.head = null;
}

BinarySearchTree.prototype.convertToLinkedList = function() {

  var result = [];
  var node = this;
  if (!node) return null;

  var traverse = function(node) {
    node.left && traverse(node.left);
    result.push(node.value);
    node.right && traverse(node.right);
  };

  traverse(node);

  var makeNode = function(value) {
    var node = {};
    node.value = value;
    node.next = null;
    return node;
  };

  var list = new LinkedList();
  list.head = makeNode(result[0]);
  var current = list.head;

  for (var i = 1; i < result.length; i++) {
    var currentNode = makeNode(result[i]);
    current.next = currentNode;
    current = current.next;
  }
  return list;
};

//TESTS

var bst = new BinarySearchTree(40);
bst.add(new BinarySearchTree(25)).add(new BinarySearchTree(78)).add(new BinarySearchTree(10)).add(new BinarySearchTree(32));
console.log('BS1', bst);

var bst2 = new BinarySearchTree(10);
bst2.add(new BinarySearchTree(20)).add(new BinarySearchTree(30)).add(new BinarySearchTree(5)).add(new BinarySearchTree(8)).add(new BinarySearchTree(3)).add(new BinarySearchTree(9));
console.log('BST2', bst2);
console.log('BREADTHFIRST LTR', bst2.breadthFirstLTR());
console.log('BREADTHFIRST RTL', bst2.breadthFirstRTL());
console.log('PREORDER', bst2.preOrder());
console.log('INORDER', bst2.inOrder());
console.log('POSTORDER', bst2.postOrder());

/*
BREADTHFIRST LTR [ 10, 5, 20, 3, 8, 30, 9 ]
BREADTHFIRST RTL [ 10, 20, 5, 30, 8, 3, 9 ]
PREORDER [ 10, 5, 3, 8, 9, 20, 30 ]
INORDER [ 3, 5, 8, 9, 10, 20, 30 ]
POSTORDER [ 3, 9, 8, 5, 30, 20, 10 ]
*/

var bst3 = new BinarySearchTree('j');
bst3.add(new BinarySearchTree('f')).add(new BinarySearchTree('k')).add(new BinarySearchTree('z')).add(new BinarySearchTree('a')).add(new BinarySearchTree('h')).add(new BinarySearchTree('d'));
console.log(JSON.stringify(bst3));
console.log('BREADTHFIRST LTR', bst3.breadthFirstLTR());
console.log('BREADTHFIRST RTL', bst3.breadthFirstRTL());
console.log('PREORDER', bst3.preOrder());
console.log('INORDER', bst3.inOrder());
console.log('POSTORDER', bst3.postOrder());

/*
BREADTHFIRST LTR [ 'j', 'f', 'k', 'a', 'h', 'z', 'd' ]
BREADTHFIRST RTL [ 'j', 'k', 'f', 'z', 'h', 'a', 'd' ]
PREORDER [ 'j', 'f', 'a', 'd', 'h', 'k', 'z' ]
INORDER [ 'a', 'd', 'f', 'h', 'j', 'k', 'z' ]
POSTORDER [ 'd', 'a', 'h', 'f', 'z', 'k', 'j' ]
 */


console.log(bst2.findMin()); // 3
console.log(bst2.findMax()); // 30
console.log(bst2.contains(15));
bst2.add(new BinarySearchTree(new BinarySearchTree(55)));
bst2.add(new BinarySearchTree(new BinarySearchTree(65)));
bst3.add(new BinarySearchTree(new BinarySearchTree(75)));
console.log(bst2);
console.log(bst2.getDepth()); // 3
console.log(bst2.add(new BinarySearchTree(7)).add(new BinarySearchTree(50)).add(new BinarySearchTree(80)).add(new BinarySearchTree(98)));
console.log(bst2.getDepth()); // 5
console.log(bst2.nodeAverages()); //[ 10, 12.5, 13.67, 22, 80, 98 ]
//
// console.log(bst2.convertToLinkedList());
//[ 3, 5, 7, 8, 9, 10, 20, 30, 50, 80, 98 ]
//{ head: { value: 3, next: { value: 5, next: [Object] } } }
