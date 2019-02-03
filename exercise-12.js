function konversiMenit(menit){
    var hour = Math.floor(menit / 60);
    var minute = (menit % 60);
    var hasil = ''
    
    if(minute.toString().length === 1) {
        hasil = '0' + Math.floor(menit % 60);
    } else {
        hasil = Math.floor(menit % 60);
    }

    return hour + ':' + hasil;
  }

  console.log(konversiMenit(99));