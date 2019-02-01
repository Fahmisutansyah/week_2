// NOMOR 1
var i = 1
console.log("LOOPING PERTAMA")
while (i <= 20){
  if (i % 2 === 0){
    console.log(i + ' - I love coding')
  } i++
}
console.log('LOOPING KEDUA')
 while (i >= 1){
   if (i % 2 === 0){
     console.log(i + ' - I will become a fullstack developer')
   } i--
 }

// NOMOR 2
console.log('LOOPING PERTAMA')

for (var i = 1; i <= 20; i++){
  console.log(i + ' - I love coding');
}
console.log('LOOPING KEDUA')

for (var o = 20; o >= 1; o--){
  console.log(o + ' - I will become a fullstack developer');
}


// NOMOR 3
  // NOMOR 3.1
  for (var counter = 1; counter <= 100; counter++){
    if (counter % 2 === 0){
      console.log(counter + ' GENAP');
    }else if(counter % 2 ===1){
      console.log(counter + ' GANJIl');
    }
  }
  // NOMOR 3.2, 3.3, 3.4
    //Kelipatan 3
console.log('Kelipatan 3')
for (var counter = 1; counter <= 100; counter += 2){
  if (counter % 3 === 0){
    console.log(counter + ' KELIPATAN 3')
  }
}

   //Kelipatan 6
console.log('Kelipatan 6')
for (var counter = 1; counter <= 100; counter += 5){
  if (counter % 6 === 0){
    console.log(counter + ' KELIPATAN 6')
  }
}

   // Kelipatan 10
console.log('Kelipatan 10')
for (var counter = 1; counter <= 100; counter += 9){
  if ( counter % 10 ===0){
    console.log(counter + ' KELIPATAN 10')
  }
}