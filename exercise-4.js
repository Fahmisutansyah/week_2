var tanggal = 2
var bulan = 12
var tahun = 2019

switch(bulan){
  case 1:
    bulan = 'Januari';
    break
  case 2:
    bulan = 'Februari';
  case 3:
    bulan = 'Maret';
  case 4:
    bulan = 'April';
  case 5:
    bulan = 'Mei';
  case 6:
    bulan = 'Juni';
  case 7:
    bulan = 'Juli';
  case 8:
    bulan = 'Agustus';
  case 9:
    bulan = 'September';
  case 10:
    bulan = 'Oktober';
  case 11:
    bulan = 'November';
  case 12:
    bulan = 'Desember';
    break
  default:
    bulan = '';
}

console.log(tanggal, bulan, tahun)