// function three(num){
//    if (num % 9 == 0) {
//       console.log("박수*2");
//    } else if (num%3 == 0 ) {
//       console.log("박수")
//    } else {
//       console.log('pass')
//    }
// }

// three(20);
// three(18);
// three(9);
// three(3);

//var num =12345;
// function samyukku (numbers){
//    const num = numbers.toString();
//    if (num.length-1 ===3 || num.length-1==='6' || num.length-1==='9'){

//    console.log('clap');
// } 
//      else {
//    console.log('pass')
//    }
// }

// samyukku(9);
// samyukku(12);
// samyukku(33);
// samyukku(23);

function samyukku (num){
   const strNum = num.toString()
   const lastNum = strNum.charAt(strNum.length-1);
   if(lastNum == 3 || lastNum == 6 || lastNum==9){
      console.log("박수")
   } else {console.log("pass")
   }
}


samyukku(23)
samyukku(35)
samyukku(43)
samyukku(12)