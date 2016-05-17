// reject, resolve : conventional names of functions to deal with success and failure
// fulfilled, resolved, settled

"use strict";
let val = 1;
let str = "1";

//create a promise
let promise = new Promise((resolve, reject) => {
  if (val === 0) reject("not allowed:" + val);
  if (val > 0) resolve("allowed:" + val)
});

//"then it"
promise.then((data) => {
  console.log(data);
}, (err) => {
  console.log(err);
});


//promise returned from a function

let doit =function (val){
  return new Promise((resolve, reject) => {
    if (val === 0) reject("doit not allowed:" + val);
    if (val > 0) resolve("doit allowed:" + val)
  });
}

//error
doit(0).then((data) =>{
   console.log(data);
}, (err) =>{
   console.log(err);
});

//success
doit(1).then((data) =>{
   console.log(data);
}, (err) =>{
   console.log(err);
});

//chain
//returning from a promise yields a new promise with possibly new data
doit(1).then((data) =>{
  console.log("chain 1", data);
  return (data+=1);  //transform
}).then ((data)=>{   //sequence - may settle after calls below
  console.log("chain 2", data);
});

//catch
doit(0).catch((err)=>{   //catch an err
  console.log("catch an error", err);
});
