/*eslint-disable*/

import './App.css';
import { useState } from 'react';

function App() {

  let post = '호주맛집';
  let [글제목, 글제목변경] = useState(['호주날씨', '가주여행지', '호주명소']);
  let [하트, 하트변경] = useState(0);
  let [modal, setModal] = useState(false);
  let [title, settitle] = useState(1);
  // 모달창안에 제목이 세가지임. 그러므로 상태가 3가지 있어야 될듯. 0번째 제목이 보이거나,1번째.. 0이면 0번째제목이 보이게. 그래서 0 넣음
  // state에 따라 ui 가 어떻게 보일지 작성.
  let [입력값, 입력값변경] = useState('');

  return (
    <div className="App">
      <div className="black-nav">
        <h4> Kristendaya's blog</h4>
      </div>

      {/* 중괄호 안에서는 for문 돌릴수없음. Map함수써야함  */}

      {/* 파라미터안에는 두개들어갈숭맀는데 i넣으면 0부터 1씩 증가하는정수 */}
      {
        글제목.map(function (a, i) {
          return (
            <div className="list" key={i}>
              <h4 onClick={() => { setModal(true) }}>{글제목[i]}
                <span onClick={(e) => { e.stopPropagation(); 하트변경(하트 + 1) }}>❤︎</span> {하트}</h4>
              {/* 글제목을 눌렀을때 모달이 나와야되는데 하트를 눌러도 모달이 나옴. 이 문제를 해결하기 위해 stopPropagation */}
              <p>9월 27일 발행</p>
            </div>)
        })
      }

      <input onChange={(e) => {
        입력값변경(e.target.value);
        console.log(입력값)
      }} />
      {/* // input 이벤트 핸들러 종류 30가지. 외울필요 x. 찾아서 쓸것.  */}
      {/* <input onChange={(e) => { console.log(e.target) }} /> ->taget: event 발생한 htmL태그 */}
      {/* ->지금 발생하는 이벤트에 관련한 여러기능이 담겨있음 target.value->태그에 입력한값 */}
      {/* (정보) state변경함수는 늦게처리됨.비동기처리임. 입력값 변경이 되기도 전에 consolelog가 실행됨 */}


      {
        modal == true ? <Modal title={title} 글제목={글제목} /> : null
      }

    </div>
  );
}
// 부모->자식 state전송하는법
// 1.<자식컴포넌트 작명={state이름}>
// 2.props ㅠㅏ라미터 등록후 props.작명 사용

function Modal(props) {
  return (
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
