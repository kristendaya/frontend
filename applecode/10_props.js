/*eslint-disable*/

import './App.css';
import {useState} from 'react';

function App() {

  let post = '호주맛집';
  let [글제목,글제목변경]= useState(['호주날씨','가주여행지','호주명소']);
  let [하트, 하트변경] = useState(0);
  // let [하트1, 하트변경1] = useState(0);
  // let [하트2, 하트변경2] = useState(0);
  // 얘는 세번쨰따봉개수를 저장할 공간이다. 라고 생각하면됨

  let [modal, setModal] = useState(false);

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
      modal==true ? <Modal 글제목변경={글제목변경} 글제목={글제목}/>:null
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
    <h4>{props.글제목[0]}</h4>
    <p>날짜</p>
    <p>상세내용</p>
    <button onClick={()=>{props.글제목변경(['여자코트추천','호주여행지','호주명소']) }} >글수정</button>
  </div>
  )
}


export default App;
