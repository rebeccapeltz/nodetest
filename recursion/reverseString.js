function reverse(str){
  if (str.length === 0) return '';
  return reverse(str.substr(1)) + str.charAt(0); // move first char to end
}


console.log(reverse('abcd'));
