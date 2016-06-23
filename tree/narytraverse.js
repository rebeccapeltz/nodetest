'use strict';

function Tree() {
  this.root = null;

  function Node(val) {
    this.value = val;
    this.children = [];
  }
  //kickstart a tree
  var a = new Node('a');
  var b = new Node('b');
  var c = new Node('c');
  var d = new Node('d');
  var e = new Node('e');
  this.root = a;
  a.children.push(b);
  a.children.push(c);
  a.children.push(e);
  b.children.push(d);
  console.log(JSON.stringify(a));
}
//n-ary
//traverse and log
Tree.prototype.traverse = function() {

  function heirarchy(node) {
    if (!node) return;
    console.log(node.value); //preorder
    for (var i = 0; i < node.children.length; i++) {
      heirarchy(node.children[i]);
    }
  }
  heirarchy(this.root);

};

//a traversal with a helper so I can include
//indent to reveal heirarchy
Tree.prototype.indent = function() {
  var testNode = this.root;
  function indentHelper(node, indent) {
    if (!node) return; //base
    console.log(indent + node.value); //location of operation
    for (var i = 0; i < node.children.length; i++) {
      indentHelper(node.children[i], indent + ' '); //recur
    }
  }
  indentHelper(testNode, ' ');
};

//a traversal that can run a process on a node
//can only do this in a language with 1st order functions

Tree.prototype.traverseAndProcess = function(process) {
  function heirarchy(node) {
    if (node) {
      process(node);
      for (var i = 0; i < node.children.length; i++) {
        heirarchy(node.children[i]);
      }
    }
  }
  heirarchy(this.root);
};


// get the number of nodes in the tree
Tree.prototype.size = function() {
  var length = 0;

  this.traverseAndProcess(function(node) { // jshint ignore:node
    //console.log(node);
    length++;
  });

  return length;
};

//does a value already exist in the tree?
Tree.prototype.exists = function(val) {
  var exists = false;
  this.traverseAndProcess(function(node) { // jshint ignore:node
    if (node.value === val) exists = true;
  });
  return exists;
};

//Test my tree functions
var tree = new Tree();
tree.traverse();
tree.indent();
console.log('size of tree:', tree.size(null, 0));

console.log('exists a', tree.exists('a'));
console.log('exists z', tree.exists('z'));
