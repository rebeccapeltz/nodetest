# Code for Reversing a String

```
//http://eddmann.com/posts/ten-ways-to-reverse-a-string-in-javascript/

var testfn = function() {
  console.log("in reverse");
}

//O(3n)
var withFunctions = function(str) {
  if (str.length < 2) return str;
  return str.split('').reverse().join('');
}

//O(3n)
var withSplitIter = function(str) {
  if (str.length < 2) return str;
  var result = [];
  str.split('').forEach(function(item, idx, array) {
    result[array.length - 1 - idx] = item;
  });
  return result.join('');
}

//O(3n)
var withSplitHalf = function(str){
  if (str.length < 2) return str;
  var result = [];
  var strArr = str.split('');
  for (var i=0; i< strArr.length/2; i++){
    result[i] = strArr[strArr.length - 1 - i];
    result[strArr.length - 1 - i] = strArr[i];
  }
  return result.join('');
}

//O(n)
var withNoReturn = function(str) {
  if (str.length < 2) return str;
  for (var i = 0; i < str.length; i++) {
    process.stdout.write(str[str.length - 1 - i]);
  }
  process.stdout.write('\n');
}

//O(n)
var withCharIter = function(str) {
  if (str.length < 2) return str;
  var result = '';
  for (var i = 0; i < str.length; i++) {
    result += str.charAt(str.length - 1 - i);
  }
  return result;
}

//strings are immutable: can't set a character in place

module.exports = {
  test: testfn,
  withFunctions: withFunctions,
  withSplitIter: withSplitIter,
  withNoReturn: withNoReturn,
  withCharIter: withCharIter,
  withSplitHalf: withSplitHalf
}
```
