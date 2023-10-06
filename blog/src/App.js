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
              <button onClick={() => {
                let copy = [...글제목];
                // 여기서 원하는 자료 삭제
                copy.splice(0, 1);
                // 0번쨰 항목은  (0,1) -> 지금 이러면 모든 0번째가 다 삭제가 됨. 뭘 누르던지간에
                // 첫번째는(0,1) (1,1) (2,1)
                글제목변경(copy)

              }}>삭제</button>
            </div>)
        })
      }

      <input onChange={(e) => {
        입력값변경(e.target.value);
      }} />
      <button onClick={() => {
        let copy = [...글제목];
        copy.unshift(입력값)
        // copy 맨 처음에 유저가 입력한 글 추가 -> 어레이 자료에 끼어넣는법을 알아야함.copy.unshift('sdf')하면 추가가 됨
        // 근데!! 유저가 입력한 글을 넣고싶음. state에 보관을 했었음.그래서 입력값을 넣는다.
        // 새로고침시 html js파일 다시 읽기 때문에, 없어짐.
        // 싫으면 DB에 넣으면 됨.

        글제목변경(copy)
      }}>글발행</button>



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
