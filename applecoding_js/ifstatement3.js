// 나의 나이와, 나의 성별을 저장하는 변수
let myAge = 26;
let myGender = 'male';

// 호칭을 담은 변수
let callOlderBrother = '형';
let callOlderSister = '누나';
let callFriend = '친구';
let callYoungerSister = '여동생';
let callYoungerBrother = '남동생';

// 상대방의 나이와 성별에 따른 호칭을 리턴하는 함수 whatShouldICall를 완성하세요
function whatShouldICallYou(yourAge, yourGender) {
   if (myAge==yourAge){
      return callFriend
      }else if(myAge < yourAge){
      if (yourGender === 'male'){
         return callOlderBrother;
      } else if (yourGender === 'female'){
         return callYoungerSister}
      
   } else { //나이가 적은경우가 되는거지
      if (yourGender === 'male'){
         return callYoungerBrother
      }else if (yourGender === 'female'){
         return callYoungerSister
      }
   }
}

//내가짠코드

// function whatShouldICallYou(yourAge, yourGender) {
//    if (myAge == yourAge){console.log(callFriend)}
//    else if (myAge < yourAge && myGender!==yourGender)
//    {console.log(callOlderSister)}
//    else if (myAge < yourAge && myGender== yourGender)
//    {console.log(callOlderBrother)}
//    else if (myAge > yourAge && myGender!== yourGender)
//    {console.log(callYoungerSister)}
//    else {console.log(callYoungerBrother)
//  }
//  }



   // 테스트 코드
let result1 = whatShouldICallYou(25, 'female');
let result2 = whatShouldICallYou(20, 'male');
let result3 = whatShouldICallYou(26, 'female');
let result4 = whatShouldICallYou(30, 'male');
let result5 = whatShouldICallYou(31, 'female');

console.log(result1);
console.log(result2);
console.log(result3);
console.log(result4);
console.log(result5);

