function balikKata(kata) {
  var panjang = kata.length;
  var i = panjang - 1;
  var hasil = '';
  while (i <= panjang - 1 && i >= 0) {
    hasil = hasil + kata[i];
    i--;
  }
  return hasil
}

function balikKata(kata) {
  var panjang = kata.length;
  var i;
  var hasil = '';
  for (i = panjang - 1; i >= 0; i--) {
    hasil = hasil + kata [i];
  }
  return hasil
}

// TEST CASES
console.log(balikKata('Hello World and Coders')); // sredoC dna dlroW olleH
console.log(balikKata('John Doe')); // eoD nhoJ
console.log(balikKata('I am a bookworm')); // mrowkoob a ma I
console.log(balikKata('Coding is my hobby')); // ybboh ym si gnidoC
console.log(balikKata('Super')); // repuS
