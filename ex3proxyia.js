var nama = 'Kirito';
var peran = 'Tabib';

if (nama === '') {
    console.log('Nama harus diisi!');
}
else{
switch (peran) {
    case 'Ksatria':
        console.log('Selamat datang di Dunia Proxytia, ' + nama);
        console.log('Halo ' + peran + ' ' + nama + ', kamu dapat menyerang dengan senjatamu!');
        break;
    case 'Tabib':
        console.log('Selamat datang di Dunia Proxytia, ' + nama);
        console.log('Halo ' + peran + ' ' + nama + ', kamu akan membantu temanmu yang terluka.');
        break;
    case 'Penyihir':
        console.log('Selamat datang di Dunia Proxytia, ' + nama);
        console.log('Halo ' + peran + ' ' + nama + ', kamu ciptakan keajaiban yang membantu kemenanganmu');
        break;
    default:
        console.log('Halo ' + nama + ', Pilih peranmu untuk memulai game!');
}
}
