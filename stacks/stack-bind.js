"use strict";
function Stack() {
  this.push = Array.prototype.push;
  this.pop = Array.prototype.pop;
  this.peek = () => {return this[this.length - 1];}
}

let stack = new Stack();
stack.push(1);
stack.push(2);
console.log("peek",stack.peek());
console.log("pop",stack.pop());
console.log("peek after pop", stack.pop());
