var tanggal = 2
var bulan = 12
var tahun = 2019

switch(true){
  case (tanggal >= 1 && tanggal <= 31 && tahun >= 1900 && tahun <= 2200 && bulan === 1):
    bulan = 'Januari';
    console.log(tanggal, bulan, tahun)
    break
  case (tanggal >= 1 && tanggal <= 31 && tahun >= 1900 && tahun <= 2200 && bulan === 2) :
    bulan = 'Februari';
    console.log(tanggal, bulan, tahun)
    break
  case (tanggal >= 1 && tanggal <= 31 && tahun >= 1900 && tahun <= 2200 && bulan === 3):
    bulan = 'Maret';
    console.log(tanggal, bulan, tahun)
    break
  case (tanggal >= 1 && tanggal <= 31 && tahun >= 1900 && tahun <= 2200 && bulan === 4):
    bulan = 'April';
    console.log(tanggal, bulan, tahun)
    break
  case (tanggal >= 1 && tanggal <= 31 && tahun >= 1900 && tahun <= 2200 && bulan === 5):
    bulan = 'Mei';
    console.log(tanggal, bulan, tahun)
    break
  case (tanggal >= 1 && tanggal <= 31 && tahun >= 1900 && tahun <= 2200 && bulan === 6):
    bulan = 'Juni';
    console.log(tanggal, bulan, tahun)
    break
  case (tanggal >= 1 && tanggal <= 31 && tahun >= 1900 && tahun <= 2200 && bulan === 7):
    bulan = 'Juli';
    console.log(tanggal, bulan, tahun)
    break
  case (tanggal >= 1 && tanggal <= 31 && tahun >= 1900 && tahun <= 2200 && bulan === 8):
    bulan = 'Agustus';
    console.log(tanggal, bulan, tahun)
    break
  case (tanggal >= 1 && tanggal <= 31 && tahun >= 1900 && tahun <= 2200 && bulan === 9):
    bulan = 'September';
    break
  case (tanggal >= 1 && tanggal <= 31 && tahun >= 1900 && tahun <= 2200 && bulan === 10):
    bulan = 'Oktober';
    console.log(tanggal, bulan, tahun)
    break
  case (tanggal >= 1 && tanggal <= 31 && tahun >= 1900 && tahun <= 2200 && bulan === 11):
    bulan = 'November';
    console.log(tanggal, bulan, tahun)
    break
  case (tanggal >= 1 && tanggal <= 31 && tahun >= 1900 && tahun <= 2200 && bulan === 12):
    bulan = 'Desember';
    console.log(tanggal, bulan, tahun)
    break
  default:
    console.log('Data salah!')
}