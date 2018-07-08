// nomor 1.

var x = 22
var c = 0
var num = '- I love coding'
var num1 = '- I will become fullstack developer'
console.log('LOOPING PERTAMA');
while (c<x){c+=2
console.log(c+num);
}
console.log('LOOPING KEDUA');
while (x>2) {x-=2
  console.log(x+num1);
}

// nomor 2.
var r = 0
var t = 21
console.log('LOOPING PERTAMA');
for (r = 1;r < t; r++) {
  console.log(r+num);
}
console.log('LOOPING KEDUA');
for (var t = 21; t > 0; t--) {
  console.log(t+num1);
}

// nomor 3.
for (var i = 1; i < 100; i++) {
  if (i % 2) {
    console.log('GANJIL');
  }
  else {
    console.log('GENAP');
  }
}

for (var i = 1; i <=   100; i+=2) {
  if (i % 3){
    console.log('');
  }
  else {
    console.log('3 kelipatan 3');
  }
}

for (var i = 1; i < 100; i+=5) {
  if (i % 6) {
    console.log('');
  }
  else {
    console.log('6 kelipatan 6');
  }
}

for (var i = 1; i < 100; i+=9) {
  console.log('');
}
