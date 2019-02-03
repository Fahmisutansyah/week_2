//NOMOR 1

function shoutOut() {
    return 'Halo function!'
  }
  
  console.log(shoutOut())
  
  //NOMOR 2
   function calculateMultiply() {
     return num1 * num2
   }
  
  var num1 = 7
  var num2 = 7
  var hasilPerkalian = calculateMultiply(num1,num2);
  
  console.log(hasilPerkalian)
  
  //NOMOR 3
  function processSentence(){
  return 'Nama saya ' + name + ', umur saya ' + age + ' tahun,' + ' alamat saya ' + address + ', dan saya punya hobby yaitu ' + hobby;
  }
  
  var name = 'Fahmi';
  var age = '20'
  var address = 'Rawamangun'
  var hobby = 'Tidur'
  
  var fullSentence = processSentence(name,age,address,hobby);
  
  console.log(fullSentence)