function balikKata(kata) {
    var row = kata.length - 1;
    for (var i = 1; i <= 1;i++) {
          var kosong = '';
          for(var j = row; j >= 0; j--) {
            kosong += kata[j];
          }
    }
    return kosong;
}


// TEST CASES
console.log(balikKata('Hello World and Coders')); // sredoC dna dlroW olleH
console.log(balikKata('John Doe')); // eoD nhoJ
console.log(balikKata('I am a bookworm')); // mrowkoob a ma I
console.log(balikKata('Coding is my hobby')); // ybboh ym si gnidoC
console.log(balikKata('Super')); // repuS
