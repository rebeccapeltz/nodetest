var reverse = require('./reverse');

reverse.test();

console.log("withFunctions",reverse.withFunctions("abcd"));

console.log("withSplitIter",reverse.withSplitIter("abcd"));

console.log("withNoReturn");
reverse.withNoReturn('abcd')

console.log("withCharIter", reverse.withCharIter("abcd"));

console.log("withSplitHalf", reverse.withSplitHalf("abcd"));
console.log("withSplitHalf", reverse.withSplitHalf("abcde"));

String.prototype.reverse = String.prototype.reverse || function () {
  return this.split('').reverse().join('');
}
console.log("prototype",'abcd'.reverse());
