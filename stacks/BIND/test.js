var fun = function(){
  console.log(this.name)
}

fun.prototype.shout = function(){
  console.log(this.name.toUpperCase())
}

console.log("not defined")
fun();

console.log("call")
fun.call({name:'a'})
console.log("bind")
fun.bind({name:'a'})()
console.log("apply")
fun.apply({name:'a'})

console.log("call new => access prototype => shout name");
var obj = new fun();
obj.shout.apply({name:'becky'});
