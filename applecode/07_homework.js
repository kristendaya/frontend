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

      <button onClick={()=>{
        let copy = [...글제목];
        copy.sort();
        console.log(copy.sort())
        글제목변경(copy);
      }}>가다다순정렬</button>

      <button onClick={()=>{
          let copy = [...글제목]; 
          copy[0] = "호주교통";
                                                                                                                                                                                    
          글제목변경(copy);
      }}>글수정</button> 


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
