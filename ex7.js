// nomor 1.

var rows1 = 0;

while (rows1 < 5) {
  rows1++;
  console.log('*');
}

for (rows1 = 1; rows1 <= 5; rows1++) {
  console.log('*');
}

// nomor 2.

var baris = 5;
var awal = 0;
var rows1 = '';
var rows2 = '';

while (awal<baris) {
  var rows1 = '*';
  var awalRows = 1;
  while (awalRows<baris) {
    rows1 = rows1 + '*';
    awalRows++;
  }
  console.log(rows1);
  awal++;
}

var rows1, rows2;

for (rows1 = 1; rows1 <= 5; rows1++) {
  rows2 = '*';
  awalRows = 1;
  baris = 5;
  for (awalRows < baris; awalRows < 5; awalRows++){
    rows2 = rows2 + '*';
  }
    console.log(rows2);
}
while (awal < baris) {
  var rows1 = '*';
  rows1 = rows1 + '*' + '*' + '*' + '*';
  awal++;
  console.log(rows1);
}

for (awal = 0; awal < baris; awal++) {
  var rows1 = '*';
  rows1 = rows1 + '*' + '*' + '*' + '*';
  console.log(rows1);
}

// nomor 3.

var baris = 5;
var awal = 0;
var botOne = '';
var botTwo = '';

//nested loop
while (awal < baris) {
  var botOne = '*';
  var awalBot = 0;
  while (awalBot < awal) {
    botOne = botOne + '*';
    awalBot++;
  }
  console.log(botOne);
  awal++;
}

for (botOne = 1; botOne <= 5; botOne++) {
  botTwo = '*';
  awalBot = 1;
  baris = 5;
  for (awalBot = 1; awalBot < botOne; awalBot++){
    botTwo = botTwo + '*';
  }
  console.log(botTwo);
}

//loop biasa
while (awal < baris) {
  botOne = botOne + '*';
  awalBot++;
  console.log(botOne);
}

for (awalBot = 0; awalBot < baris; awalBot++) {
  botOne = botOne + '*';
  console.log(botOne);
}
