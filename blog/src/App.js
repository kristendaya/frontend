import logo from './logo.svg';
import './App.css';
import {useState} from 'react';

function App() {

  let post = '호주맛집';
  let [글제목,b]= useState(['호주날씨','호주여행지','호주favorite']);
// [호주날씨, 함수] 남음 
// state쓰는 이유는 재 렌더링
  

  return (
    <div className="App">
      <div className= "black-nav"> 
        <h4> Kristendaya's blog</h4>
      </div>
      <div className ="list">
          <h4>{글제목}</h4>
          <h4>{글제목}</h4>
          <h4>{글제목}</h4>
          <p>9월 26일 발행</p>
      </div>
      
    </div>
  );
}

export default App;
