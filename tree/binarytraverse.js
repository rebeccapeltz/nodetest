function node(val) {
  this.val = val;
  this.left = null;
  this.right = null;
}

var a = new node('a'),
  b = new node('b'),
  c = new node('c'),
  d = new node('d');
a.left = b;
a.right = c;
c.right = d;
console.log(JSON.stringify(a));

function print(node, indent) {
  if (node === null) return;
  console.log('' + indent + '' + node.val);
  print(node.left, indent + '  ');
  print(node.right, indent + '  ');
}
print(a, '');
