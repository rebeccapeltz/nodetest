var fun = function(){
  this.name = 'becky';
  console.log(this.name);
};

fun.prototype.shout = function(){
  console.log(this.name.toUpperCase());
};

// console.log("state not defined")
// fun();

console.log("obj");
var obj = new fun();
obj.shout.call({name:'a'});




// fun.bind({name:'a'})();
// fun.shout.bind({name:'a'})();
//
// console.log("call");
// fun.call({name:'a'});
// //fun.shout.call({name:'a'});
//
//
// console.log("bind");
// fun.bind({name:'a'})();
//
// console.log("apply");
// fun.apply({name:'a'});
