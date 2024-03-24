let members = ['프링글스','책','김치']
console.log(members)


// 배열의 첫요소를 삭제
// members.splice(0,1);
members.shift();
console.log(members);


//배열의 마지막요소를 삭제
// members.splice(members.length -1,1);
members.pop();
console.log(members)


//배열의 첫 요소로 값 추가
// members.splice(0,0,'딸기');
members.unshift('돈까스');
console.log(members)


//배열의 마지막요소로 값추가
// members.splice(members.length, 0, '수박')
members.push('잡채');
console.log(members)

