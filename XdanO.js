function xdano(ggg) {
  var lengthO = (ggg.match(/o/g)).length;
  var lengthX = (ggg.match(/x/g)).length;
  if (lengthO < lengthX) {
    return false;
  } else if (lengthO > lengthX) {
    return false;
  } else {
    return true;
  }
}

  //TEST CASES
  console.log(xdano('xoxoxo')); // true
  console.log(xdano('oxooxo')); // false
  console.log(xdano('oxo')); // false
  console.log(xdano('xxxooo')); // true
  console.log(xdano('xoxooxxo')); // true
