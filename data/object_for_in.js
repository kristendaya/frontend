let hyesoonScore = {
	'데이터 모델링의 이해': 10,
	'데이터 모델과 성능': 8,
	'SQL 기본': 22,
	'SQL 활용': 18,
	'SQL 최적화 기본 원리': 20,
};

let minsoonScore = {
	'데이터 모델링의 이해': 14,
	'데이터 모델과 성능': 8,
	'SQL 기본': 12,
	'SQL 활용': 4,
	'SQL 최적화 기본 원리': 16,
};

function passChecker(scoreObject) {
  let totalScore=0;
  for (let k in scoreObject){
    totalScore+=scoreObject[k];
  }
   if (totalScore>60){
     console.log("축하합니다! 합격입니다!")}
   else { console.log("아쉽지만 불합격입니다..")}
   }


passChecker(hyesoonScore);
passChecker(minsoonScore);