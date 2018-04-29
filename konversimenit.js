function konversiMenit(menit) {
  var jam = Math.floor(menit/60);
  var menitSisa = menit % 60;
  if (menit % 60) {
    if ((menit >= 0) && (menit < 10)) {
      return '0' + ':' + '0' + menit;
    } else if ((menit >= 10) && (menit < 60)) {
      return '0' + ':' + menit;
    } else if ((menit > 60) && (menitSisa < 10)) {
      return jam + ':' + '0' + menitSisa;
    } else if ((menit > 60) && (menitSisa >= 10)) {
      return jam + ':' + menitSisa;
    }
  } else {
    return jam + ':' + '00';
  }
}

console.log(konversiMenit(63)); // 1:03
console.log(konversiMenit(124)); // 2:04
console.log(konversiMenit(53)); // 0:53
console.log(konversiMenit(88)); // 1:28
console.log(konversiMenit(120)); // 2:00
