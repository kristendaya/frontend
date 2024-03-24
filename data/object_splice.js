let fruits = ['레몬', '토마토', '딸기', '바나나'];
let ages = [20, 24, 25, 29, 30, 33];
let numbers = [];

// fruits 배열에 '토마토'를 삭제하고 그 자리에 '사과', '청포도' 를 추가해 주세요

fruits.splice(1,1,'사과','청포도')

// fruits 배열의 첫 번째 요소를 삭제해 주세요

fruits.splice(0,1)

// ages 배열에 마지막 요소를 삭제해 주세요

ages.splice(-1, 1)

// ages 배열의 2번, 3번 인덱스를 26, 28로 변경해 주세요

ages.splice(2,0,'26','28')

// numbers 배열에 1, 2, 3, 5, 8, 9를 순서대로 추가해 주세요

numbers.splice(1,0,1,2,3,5,8,9)

// 반복문을 활용해서 numbers 배열의 요소들 중 홀수를 모두 삭제해 주세요
// for (let i=0; i<numbers.length; i++){
//   if ( numbers[i]%2 !== 0) {
//     numbers.splice(i,1);
//     i --;
//   }
// }

let i = 0;
while(i<numbers.length){
   if(numbers[i]%2!==0) {
      numbers.splice(i,1);
   } else{ i ++;}
}




// 테스트 코드
console.log(fruits[1]);
console.log(fruits[0]);
console.log(ages[ages.length - 1]);
console.log(ages[3]);
console.log(numbers[3]);
numbers.splice(0, 0, 1, 2, 3, 5, 8, 9);

// for (let i =0; i<numbers.length; i++) {
//    if (numbers[i]%2 !==0){numbers.splice(i,1)
//    i--}

// }



console.log(numbers);


let members = ['프링글스','책','김치']

// 배열의 첫요소를 삭제
members.splice(0,1);
//배열의 마지막요소를 삭제
members.splice(members.length -1,1);
//배열의 첫 요소로 값 추가
members.splice(0,0,'딸기');

//배열의 마지막요소로 값추가
members.splice(members.length, 0, '수박')

