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
Tree.prototype.traverse = function(node) {
  var testNode = node || this.root;

  //no inorder n-ary

  function heirarchy(node) {
    if (!node) return;
    console.log(node.value); //preorder
    for (var i = 0; i < node.children.length; i++) {
      heirarchy(node.children[i]);
    }
    //console.log(node.value); //postorder
  }
  heirarchy(testNode);

};

Tree.prototype.indent = function(node) {
  var testNode = node || this.root;

  function indentHelper(node, indent) {
    if (!node) return;  //base
    console.log(indent + node.value); //location of operation
    for (var i = 0; i < node.children.length; i++) {
      indentHelper(node.children[i], indent + ' ');  //recur
    }

  }
  indentHelper(testNode, ' ');

};

var tree = new Tree();
//tree.traverse();
tree.indent();
