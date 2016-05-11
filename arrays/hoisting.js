//javascript will "hoist" declaration to the top of the function
//if you don't declare everying this

//hoisted
var f = function(){
  if (true) {var v1= 1;}
  if(true) {var v2 =2;}
  console.log("hoisting",v1, this.v1);
  return v1+v2;
}

//global
var f1 = function(){
  if (true) {w1= 1;}
  if(true) {w2 =2;}
  console.log("global",w1, this.w1);
  return w1+w2;
}

console.log(f());
console.log(f1());
debugger;
module.exports = {
  hoisted: f,
  global: f1
}
