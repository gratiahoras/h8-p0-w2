// nomor 1.

var loopOne = 0;
var loopTwo = 22;

console.log('LOOPING PERTAMA');
while (loopOne < 20) {
  loopOne += 2;
  console.log(loopOne + ' - I love coding');
}

console.log('LOOPING KEDUA');
while (loopTwo > 2) {
  loopTwo -= 2;
  console.log(loopTwo + ' - I will become fullstack developer');
}

// nomor 2.

var loopOne = 1;
var loopTwo = 20;

console.log('LOOPING PERTAMA');
for (loopOne = 1; loopOne < 21; loopOne++) {
  console.log(loopOne + ' - I love coding');
}

console.log('LOOPING KEDUA');
for (loopTwo = 20; loopTwo > 0; loopTwo--) {
  console.log(loopTwo + ' - I will become fullstack developer');
}

// nomor 3.

var loopOne = 1;

for (loopOne = 1; loopOne <= 100; loopOne++) {
  if (loopOne % 2) {
    console.log('GANJIL');
  } else {
    console.log('GENAP');
  }
}

for (loopOne = 1; loopOne <= 100; loopOne+=2) {
  if (loopOne % 3) {
    console.log();
  } else {
    console.log('3 KELIPATAN 3');
  }
}

for (loopOne = 1; loopOne <= 100; loopOne+=5) {
  if (loopOne % 6) {
    console.log();
  } else {
    console.log('6 KELIPATAN 6');
  }
}

for (loopOne = 1; loopOne <= 100; loopOne+=9) {
  if (loopOne % 10) {
    console.log();
  } else {
    console.log('10 KELIPATAN 10');
  }
}
