/*eslint-disable*/

import './App.css';
import {useState} from 'react';

function App() {

  let post = '호주맛집';
  let [글제목,글제목변경]= useState(['호주날씨','가주여행지','호주명소']);
  let [따봉, 따봉변경] = useState(0);

  return (
    <div className="App">
      <div className= "black-nav"> 
        <h4> Kristendaya's blog</h4>
      </div>

      <div className ="list">
          <h4>{글제목[0]} <span onClick={()=>{따봉변경(따봉+1)}}>❤︎</span> {따봉}</h4>
          <p>9월 26일 발행</p>
      </div>

      <div className ="list"> 
          <h4>{글제목[1]}</h4>
          <p>9월 27일 발행</p>
      </div>

      <div className ="list">
          <h4>{글제목[2]}</h4>
          <p>9월 28일 발행</p>
      </div>
      <Modal></Modal>
      <Modal></Modal>
    </div>
  );
}

//the second way to make component 
// let Modal = () => {}
// 그런데 이때는 const 를 많이씀.

// let Modal = () => {
//   return(
//     <div></div>
//   )
// }

// 다른 function 밖에 만들어야되고 영어 대문자로 시작해야함
// funtion 작명(){}
//  return (여기에 html ekasmsrjdla)
function Modal(){
  return(
  <>
    <div className='modal'>
    <h4>제목</h4>
    <p>날짜</p>
    <p>상세내용</p>
    
    <div>
      <h4>다른거</h4>
    </div>
  </div>
</>

// 여기서 주의할점은 div를 병렬적으로 넣을수없음. 근데 꼭 넣고싶다하면 그 밖에 div 하나 더 넣어주면됨.
// 근데 그 div는 약간 의미없는 div임 그래서 그거대신 <> </>사용
  )
}

export default App;
