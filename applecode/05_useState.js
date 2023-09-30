/*eslint-disable*/

import logo from './logo.svg';
import './App.css';
import {useState} from 'react';

function App() {

  let post = '호주맛집';
  let [글제목,b]= useState(['호주날씨','호주여행지','호주명소']);
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
