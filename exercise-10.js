function bandingkanAngka(x,y){
    if (x < y){
      return true
    }else if (x > y){
      return false
    }else if (x === y){
      return '-1'
    }
  }
  
  var angka1 = 2
  var angka2 = 2
  
  console.log(bandingkanAngka(angka1,angka2))