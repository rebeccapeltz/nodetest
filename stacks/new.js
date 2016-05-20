"use strict";

var obj = {
  a: 1,
  b: 2
};

var createdObj = Object.create(obj);

var fun = function() {
  return {
    a: 1,
    b: 2
  };
};

var execFun = fun();

var newFun = new fun();
