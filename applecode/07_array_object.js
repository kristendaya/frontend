/*eslint-disable*/

import logo from './logo.svg';
import './App.css';
import {useState} from 'react';

function App() {

  let post = '호주맛집';
  let [글제목,글제목변경]= useState(['호주날씨','호주여행지','호주명소']);
// [호주날씨, 함수] 남음 
// state쓰는 이유는 재 렌더링
  let [따봉, 따봉변경] = useState(0);
  // useState에 0있잖아. 여기서 이제 누르면 10이된다고. 그러면
  // 안녕에서 반가워로 하려면? useState('안녕') 놓고, 따봉변경('반가워') 가 되게하면됨.

  return (
    <div className="App">
      <div className= "black-nav"> 
        <h4> Kristendaya's blog</h4>
      </div>

      <button onClick={()=>{
          // let copy = 글제목;
          let copy = [...글제목]; 
          // ... 는 괄호 벗겨주세요 라는 뜻
          copy[0] = "호주교통";
          // 여기까지는 바뀐게 맞음 근데
          // 만약에 여기에 글제목변경(글제목)을 넣으면 기존과 신규의 이름이 같기때문에 변경안해줌... 
          // 그래서 copy라는 변수를 만들어준거임. 근데 ... 없이는 안됨. 왜냐, array 는 화살표만 저장이됨
          // 그러므로 let copy 하는순간 화살표만 복사된거임. console 찍어서 확인가능
          // console.log(copy == 글제목);                                                                                                                                                                                      
          글제목변경(copy);
      }}>글수정</button> 
{/*state변경함수의 원리 기존state == 신규 state의 경우 변경안해줌. ex 글제목(기존state) 과 글제목변경의 copy(신규state) */}
{/* array/object특징   */}
{/* let arr = [1,2,3]; 어디에있는지 화살표만 저장해주세요. */}

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
      
    </div>
  );
}

export default App;
