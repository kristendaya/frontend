/*eslint-disable*/

import './App.css';
import {useState} from 'react';

function App() {

  let post = '호주맛집';
  let [글제목,글제목변경]= useState(['호주날씨','가주여행지','호주명소']);
  let [하트, 하트변경] = useState(0);
  let [modal, setModal] = useState(false);
  let [title,settitle] = useState(1);
// 모달창안에 제목이 세가지임. 그러므로 상태가 3가지 있어야 될듯. 0번째 제목이 보이거나,1번째.. 0이면 0번째제목이 보이게. 그래서 0 넣음
// state에 따라 ui 가 어떻게 보일지 작성.

  return (
    <div className="App">
      <div className= "black-nav"> 
        <h4> Kristendaya's blog</h4>
      </div>

  {/* 중괄호 안에서는 for문 돌릴수없음. Map함수써야함  */}
    
{/* 파라미터안에는 두개들어갈숭맀는데 i넣으면 0부터 1씩 증가하는정수 */}
{
      글제목.map(function(a,i){
        return (
          <div className ="list" key={i}>
            <h4 onClick={()=>{setModal(true)}}>{글제목[i]}
              <span onClick={()=>{ 하트변경(하트+1)}}>❤︎</span> {하트}</h4>
            <p>9월 27일 발행</p>
    </div>)
      })
    }

    {
      modal==true ? <Modal title={title} 글제목={글제목}/>:null
    }
    
    </div>
  );
}
// 부모->자식 state전송하는법
// 1.<자식컴포넌트 작명={state이름}>
// 2.props ㅠㅏ라미터 등록후 props.작명 사용

function Modal(props){
  return(
    <div className='modal'>
    <h4>{props.글제목[props.title]}</h4>
    {/* 저 titlestate가 0dlaus props.rmfwpahr[0] */}
    <p>날짜</p>
    <p>상세내용</p>
    <button>글수정</button>
  </div>
  )
}


export default App;
