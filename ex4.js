var tanggal = '1';
var bulan = '12';
var tahun = '1995';

if (tanggal > 31 || tanggal < 1 || tanggal === '') {
    console.log('Masukkan tanggal antara 1 - 31');
}

switch (bulan) {
  case (bulan = '1'):
    console.log(tanggal + ' Januari ' + tahun);
    break;
  case (bulan = '2'):
    console.log(tanggal + ' Februari ' + tahun);
    break;
  case (bulan = '3'):
    console.log(tanggal + ' Maret ' + tahun);
    break;
  case (bulan = '4'):
    console.log(tanggal + ' April ' + tahun);
    break;
  case (bulan = '5'):
    console.log(tanggal + ' Mei ' + tahun);
    break;
  case (bulan = '6'):
    console.log(tanggal + ' Juni ' + tahun);
    break;
  case (bulan = '7'):
    console.log(tanggal + ' Juli ' + tahun);
    break;
  case (bulan = '8'):
    console.log(tanggal + ' Agustus ' + tahun);
    break;
  case (bulan = '9'):
    console.log(tanggal + ' September ' + tahun);
    break;
  case (bulan = '10'):
    console.log(tanggal + ' Oktober ' + tahun);
    break;
  case (bulan = '11'):
    console.log(tanggal + ' November ' + tahun);
    break;
  case (bulan = '12'):
    console.log(tanggal + ' Desember ' + tahun);
    break;
  default:
    console.log('Masukkan bulan antara 1 - 12');
}

if (tahun > 2200 || tahun < 1900 || tahun === '') {
    console.log('Masukkan tahun antara 1900 - 2020');
}
