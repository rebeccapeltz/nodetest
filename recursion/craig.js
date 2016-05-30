// example to show the call stack
function recursion(input, max) {
  //debugger;
  console.log('before', input);
  input++;
  //base case: when am  I done calling this?
  if (input <= max) {
    console.log(recursion(input, max));
  }
  input--;
  //debugger;
  return ('after' + input);
}
console.log(recursion(0, 5));
