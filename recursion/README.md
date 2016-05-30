
#### Remembering what is known about recursion

##### Recursive functions call them selves -  
 a new call stack holding  params and local variables is created for each call

##### Try this: write 'hello world' 5  times with iteration and 5 times without it using recursion

Did it work?  What did you do?  What worked? What did not worked?

#### Look closer at functions calling functions
What does it mean for one function to call another?  
look at funcalls.js  
when one functions calls another, the first is pushed onto the call stack (address in memory saved) and second registered a new frame on the call stack.

#### Recursion is the same except the its the same function going on the stack with a different return address  
Key to writing recursive functions is to set a base case that is guaranteed to get activated, run a return and stop the recursion
```javascript
function helloRecur(n) {
  if (n === 0) return;   //set base
  console.log(n, 'Hello'); //(A)
  helloRecur(n-1);      //recur: new stack frame
  //console.log(n, 'Hello');  //(B)
}
```
node-debug helloRecur to see the call stack


## Questions

#### Now try this:  write a recursive function 'countdown' that takes an integer n and writes out all the values from n down to 1 but not 0.

Review what worked

#### Whiteboard
find the factorial of a number   
n has to be positive  
0! = 1  
otherwise n = n*(n-1)*(n-2)...  

try to solve with recursion  

#### Tail recursion
