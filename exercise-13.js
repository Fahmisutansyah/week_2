function xo(str) {
    var counterX = 0;
    var counterO = 0;

    for(var i = 0; i < str.length; i++) {
        if(str[i] === 'x') { 
            counterX += 1;   
        }
        else if(str[i]==='o') {
            counterO += 1;
        }
   
    } if(counterX === counterO) {
        return true;
    } else {
        return false;
    } 
  }

  console.log(xo('xoxoxo')); 
  console.log(xo('oxooxo'));
  console.log(xo('oxo')); 
  console.log(xo('xxxooo')); 
  console.log(xo('xoxooxxo'));