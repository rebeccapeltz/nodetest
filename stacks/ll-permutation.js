"use strict";
var Stack = function() {
  this.top = null;
  this.size = 0;
};

var Node = function(data) {
  this.data = data;
  this.previous = null;
};

Stack.prototype.push = function(data) {
  var node = new Node(data);

  node.previous = this.top;
  this.top = node;
  this.size += 1;
  return this.top;
};

Stack.prototype.pop = function() {
  let temp = this.top;
  this.top = this.top.previous;
  this.size -= 1;
  return temp;
};

Stack.prototype.peek = function() {
  if (this.top) return this.top.data
  else return false;
}
Stack.prototype.empty = function() {
  return this.size === 0;
}




let str = "leaf";
let permutations = [];
let TAG = "+";
let stack = new Stack();
console.log("1st push", TAG + str);
stack.push(TAG + str);
console.log(stack.empty());
while (!stack.empty()) {
  //console.log("in loop");
  let s = stack.pop().data;

  let tagLocation = s.indexOf(TAG);
  let lastChr = s.charAt(s.length - 1);
  if (lastChr === TAG) {
    permutations.push(s.substring(0, s.length - 2));
  } else {
    let endOfTag = s.substring(TAG + 1);
    let beginOfTag = s.substring(0, TAG)
      //abc+d =>abcd+   a+bcd => ad+bc => adc+b => adcb+
    s = beginOfTag + endOfTag.split('').reverse().join('') + TAG;
    console.log("next push", s);
    stack.push(s);
  }
}
//http://stackoverflow.com/questions/1590247/how-do-you-implement-a-stack-and-a-queue-in-javascript
