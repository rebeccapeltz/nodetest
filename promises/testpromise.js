"use strict";
let val = 1;
let str = "1"
// let promise = new Promise((resolve, reject) => {
//   if (val === 0) reject("not allowed:" + val);
//   if (val > 0) resolve("allowed:" + val)
// });
//
// promise.then((data) => {
//   console.log(data);
// }, (err) => {
//   console.log(err);
// });

let doit =function (val){
  return new Promise((resolve, reject) => {
    if (val === 0) reject("do not allowed:" + val);
    if (val > 0) resolve("do allowed:" + val)
  });
}

doit(0).then((data) =>{
   console.log(data);
}, (err) =>{
   console.log(err);
});

doit(1).then((data) =>{
   console.log(data);
}, (err) =>{
   console.log(err);
});
