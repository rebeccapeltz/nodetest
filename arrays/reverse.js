//http://eddmann.com/posts/ten-ways-to-reverse-a-string-in-javascript/

var testfn = function() {
  console.log("in reverse");
}

var withFunctions = function(str) {
  return str.split('').reverse().join('');
}


var withSplitIterAndSpace = function(str) {
  var result = [];
  var strArray = str.split('');
  strArray.forEach(function(item, idx, array) {
    result[array.length - 1 - idx] = item;
  });
  return result.join('');
}

var withNoReturn = function(str){
  for (var i=0; i< str.length; i++){
    process.stdout.write(str[str.length - 1 - i]);
  }
  process.stdout.write('\n');
}

var withCharIter = function(str) {
  var result = '';
  for (var i=0; i< str.length; i++){
    result += str.charAt(str.length - 1 - i);
  }
  return result;
}

module.exports = {
  test: testfn,
  withFunctions: withFunctions,
  withSplitIterAndSpace: withSplitIterAndSpace,
  withNoReturn: withNoReturn,
  withCharIter: withCharIter
}
