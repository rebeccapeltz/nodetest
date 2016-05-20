# General  Bind, Call, Apply
```
"use strict";

let fun = function(param1, param2) {
  console.log("this:", this);
  if (this && this.val) {
    console.log("val: ", this.val, "param1:", param1, "param2:", param2);
    this.val && console.log("fun:", param1 + param2 + this.val);
  } else {
    console.log("this is undefined");
  }
}

console.log("call fun");
fun(5, 7);

console.log("bind to fun and call:fun.bind({val: 3}, 5, 7)();");
fun.bind({
  val: 3
}, 5, 7)();

console.log("call fun: fun.call({val:3}, 5, 7);");
fun.call({val:3}, 5, 7);

console.log("apply fun: fun.apply({val:3}, [5,7]);");
fun.apply({val:3}, [5,7]);

```
# Borrowing Functions
```
"use strict";
var anotherUser = {
  data : [{
    name: "Samantha",
    age: 12
  }, {
    name: "Alexis",
    age: 14
  }]
}

var user = {
  // local data variable​
  data: [{
    name: "T. Woods",
    age: 37
  }, {
    name: "P. Mickelson",
    age: 43
  }],

  reportData: function(){
    this.data.forEach((item)=>{
      console.log(item);
    });
  }
}

user.reportData();
user.reportData.call(anotherUser);
```
# Borrowing from arrays
```
//http://javascriptissexy.com/javascript-apply-call-and-bind-methods-are-essential-for-javascript-professionals/
var anArrayLikeObj = {
  0: "Martin",
  1: 78,
  2: 67,
  3: ["Letta", "Marieta", "Pauline"],
  length: 4
};
console.log("object", anArrayLikeObj);

var newArray = Array.prototype.slice.call(anArrayLikeObj, 0);
console.log(newArray);

console.log("indexOf");
console.log(Array.prototype.indexOf.call(anArrayLikeObj, "Martin") === -1 ? false : true); // true​

console.log("reverse");
console.log(Array.prototype.reverse.call(anArrayLikeObj));

console.log("pop");
console.log(Array.prototype.pop.call(anArrayLikeObj));
console.log(anArrayLikeObj);

console.log("push");
console.log(Array.prototype.push.call(anArrayLikeObj, "Jackie"));
console.log(anArrayLikeObj);
```
