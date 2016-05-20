"use strict";
var Stack = function() {
  this._arr = [];
  this.top = null;
  this.size = this._arr.length;
};

Stack.prototype.push = function(data) {
  this._arr[this.size] = data;
  this.size += 1;
  this.top = this._arr[this.size - 1];
};

Stack.prototype.pop = function() {
  let temp = this.top || null;  //deal with empty stack

  this.size = this.size === 0 ? 0 : --this.size;
  this.top = this.size === 0 ? null : this._arr[this.size - 1];

  return temp;
};

Stack.prototype.peek = function() {
  if (this.top) return this.top
  else return null;
}


let stack = new Stack();
stack.push(1);
stack.push(2);
console.log("arr",stack._arr); //not really hidden
console.log("top",stack.top);
console.log("peek",stack.peek());
console.log("pop",stack.pop());
console.log("peek after pop", stack.pop());
