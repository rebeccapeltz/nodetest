"use strict";
console.log("this",this);


let fn = function(){
  console.log("keys");
  for (let key in this){
    console.log("key",key);
  }
}

fn();
fn.call({a:1, b:2});
