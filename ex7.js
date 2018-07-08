var num1 = 5
var bin = '*'
for (var i = 0; i < num1; i++) {
  console.log(bin);
}

console.log('--------------');

var num3 = 5
for (var x = 0; x < num3; x++) {
    var tam = ''
    for (var y = 0; y < num3; y++) {
      tam += '*'
    }
    console.log(tam);
}

console.log('----------------');

var num2 = 5
for (var i = 0; i < num2; i++) {
  var tampung = ''
  for (var j = 0; j <= i; j++) {
    tampung += '*'
    //console.log(buin);

  }
  console.log(tampung);
}
