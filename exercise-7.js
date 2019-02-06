console.log('NOMOR 1')
var rows1 = 5

for (var counter = 1; counter <= rows1; counter++){
  console.log(' *');
}

console.log('NOMOR 2');

var rows2 = 4

for (var rows = 1; rows <= rows2; rows++){
  var stars = ''
  for (var line = 1; line <= rows2; line++){
    stars = stars + ' *'
  
  }
  console.log(stars)
  
}

console.log('NOMOR 3');

var rows3 = 5

for(var baris = 1; baris <= rows3; baris++) {
  var stars1 = '';
  for(var kolom = 1; kolom <= baris; kolom++) {
    stars1 = stars1 + ' *';
    }
    console.log(stars1);
}