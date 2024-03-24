let groups = [
	['영준', '캡틴'], 
	['태순', '우재'],
	['재훈', '지웅'],
	['윤형', '동욱'],
	['규식', '소원'],
];

let teams = [
	[],
	[],
];

// 여기에 코드를 작성하세요
// for (let i=0; i< groups.length; i++){
  // console.log(groups[i][0])
  // let winners = groups[i][0]
  // let losers = groups [i][1]
  
// for (let i = 0; i < groups.length; i++) {
//   teams[0].push(groups[i][0]); // 이긴 사람은 teams 배열의 첫 번째 요소에 추가
// }

// // 진 사람끼리 팀을 구성
// for (let i = 0; i < groups.length; i++) {
//   teams[1].push(groups[i][1]); // 진 사람은 teams 배열의 두 번째 요소에 추가
// }

for(let i = 0; i < groups.length; i++) {
   for(let j = 0; j < groups[i].length; j++) {
     teams[j][i] = groups[i][j];
   }
 }


// 테스트 코드
console.log(teams[0]);
console.log(teams[1]);


