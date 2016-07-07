function BinarySearchTree(value) {
  this.value = value;
  this.left = null;
  this.right = null;
}
BinarySearchTree.prototype.add = function(node) {
  this.insert(node, this);
  return this;
};

BinarySearchTree.prototype.insert = function(node) {
  var currentNode;
  var inserted = false;

  currentNode = this;
  while (!inserted) {
    if (node.value < currentNode.value) {
      if (currentNode.left === null) {
        currentNode.left = node;
        inserted = true;
        break;
      } else {
        currentNode = currentNode.left;
      }
    } else if (node.value > currentNode.value) {
      if (currentNode.right === null) {
        currentNode.right = node;
        inserted = true;
        break;
      } else {
        currentNode = currentNode.right;
      }
    } else {
      break;
    }

  }
};
BinarySearchTree.prototype.search = function(value) {
  if (value == this.value)
    return true;
  else if (value < this.value) {
    if (this.left == null)
      return false;
    else
      return this.left.search(value);
  } else if (value > this.value) {
    if (this.right == null)
      return false;
    else
      return this.right.search(value);
  }
  return false;
};


var root = new BinarySearchTree(10);
root.add(new BinarySearchTree(20)).add(new BinarySearchTree(30)).add(new BinarySearchTree(5)).add(new BinarySearchTree(8)).add(new BinarySearchTree(3)).add(new BinarySearchTree(9));
console.log('SEARCH 30', root.search(30));
console.log('SEARCH 1000', root.search(1000));
