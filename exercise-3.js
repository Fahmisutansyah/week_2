var nama = "Fahmi"
var peran = 'Ksatria'

if (nama !== ''){
  console.log('Selamat datang di dunia Proxytia,', nama);
}
if (nama && peran === 'Ksatria'){
  console.log('Halo Ksatria', nama + ',','kamu dapat menyerang dengan senjatamu!');
}else if (nama && peran === 'Tabib'){
  console.log('Halo Tabib', nama + ',','kamu akan membantu temanmu yang terluka.');
}else if (nama && peran === 'Penyihir'){
  console.log('Halo Penyihir', nama +',','ciptakan keajaiban yang membantu kemenanganmu!')
}else if (nama && peran === ''){
  console.log('Halo', nama + ',','pilih peranmu untuk memulai game!')
}else if (nama && peran){
  console.log('Pilih peranmu! Pilihannya adalah Ksatria, Tabib, atau Penyihir.')
}else {
  console.log('Nama harus diisi!')
}
