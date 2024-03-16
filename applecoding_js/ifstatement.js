// function checkHeight(height){
//    if (height > 140) {
//       console.log("탑승이 가능합니다.")
//    }  else {
//       console.log ("탑승이 불가합니다.")
//    }
// }

// checkHeight(140);
// checkHeight(135);
// checkHeight(170);

// 이걸 다른버전으로 바꾸면

function checkHeight(height){
   const LIMIT = 140;
   let passMessage = '탑승이 가능'
   let failMessage = "탑승이 불가"

   if (height> LIMIT) {
      console.log(passMessage);
   } else {
      console.log(failMessage);
   }
}
checkHeight(140);
checkHeight(135);
checkHeight(170);
