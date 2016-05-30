'use strict';

//iterate hello

function helloIter(n) {
  for (let i = 0; i < n; i++) {
    console.log(i, 'Hello');
  }
}

helloIter(5);

function helloRecur(n) {
  if (n === 0) return;   //set base
  console.log(n, 'Hello'); //(A)
  helloRecur(n-1);      //recur: new stack frame
  //console.log(n, 'Hello');  //(B)
}

helloRecur(5);
