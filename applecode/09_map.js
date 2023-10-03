/*eslint-disable*/

// map()함수
// 1.왼쪽 array자료만큼 내부코드 실행해줌
// 2.return 오른쪽에 있는걸 array로 담아줌
// 3.유용한 파라미터 2개 사용가능


import './App.css';
import {useState} from 'react';

function App() {

  let post = '호주맛집';
  let [글제목,글제목변경]= useState(['호주날씨','가주여행지','호주명소']);
  let [하트, 하트변경] = useState(0);
  let [하트2, 하트변경2] = useState(0);
  let [하트3, 하트변경3] = useState(0);
  // 얘는 세번쨰따봉개수를 저장할 공간이다. 라고 생각하면됨

  let [modal, setModal] = useState(false);
  // [1,2,3].map(function(a){
  //   // console.log(a)
  //     return '1235213'
  // })


  return (
    <div className="App">
      <div className= "black-nav"> 
        <h4> Kristendaya's blog</h4>
      </div>

      {/* <div className ="list">
          <h4>{글제목[0]} <span onClick={()=>{하트변경(하트+1)}}>❤︎</span> {하트}</h4>
          <p>9월 26일 발행</p>
      </div>

      <div className ="list"> 
          <h4>{글제목[1]}</h4>
          <p>9월 27일 발행</p>
      </div>

      <div className ="list">
          <h4>{글제목[2]}</h4>
          <p>9월 28일 발행</p>
      </div> */}
  {/* 중괄호 안에서는 for문 돌릴수없음. Map함수써야함  */}
    
{/* 파라미터안에는 두개들어갈숭맀는데 i넣으면 0부터 1씩 증가하는정수 */}
    {
      글제목.map(function(a,r){
        return (<div className ="list" key={r}>
           {/*반복문으로 html생성하면 key={html마다 다른숫자}추가해야함  */}
        <h4>{글제목[r]}<span onClick={()=>{하트변경(하트+1)}}>❤︎</span> {하트}</h4>
        <p>9월 27일 발행</p>
    </div>)
      })
    }


{/* map쓰고나면 그자리에[](array자료)가 남음. */}
{/* 그리고 그자리에 [<div>안녕</div>가 3개 담겨있을거임] */}
      {/* {
      [1,2,3].map(function(){
        return (<div className ="list"> 
        <h4>{글제목[1]}</h4>
        <p>9월 27일 발행</p>
    </div>)
      })
    } */}


{
  [<div>안녕</div>,<div>안녕</div>,<div>안녕</div>]
}
{/* 저렇게 넣는것도됨!!!!!!! 알아서 인식해줌  */}
    </div>
  );
}



export default App;
