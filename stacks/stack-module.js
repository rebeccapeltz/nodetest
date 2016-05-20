"use strict";
var Stack = function() {
  var module = {};
  var arr = [];
  module.top = null;
  module.size = arr.length;

  module.push = function (data){
    arr[module.size] = data;
    module.size  += 1;
    module.top = arr[module.size - 1];
    return data;
  };
  module.pop = function(){
    let temp = module.top || null;  //deal with empty stack
    module.size = module.size === 0 ? 0 : --module.size;
    module.top = module.size === 0 ? null : arr[module.size - 1];
    return temp;
  }
  module.peek = function(){
    if (module.top) return module.top
    else return null;
  }
  return module;
};


let stack = new Stack();
stack.push(1);
stack.push(2);

console.log("peek",stack.peek());
console.log("pop",stack.pop());
console.log("peek after pop", stack.pop());
console.log("pop",stack.pop());
console.log("pop",stack.pop());

console.log("arr",this.arr);
