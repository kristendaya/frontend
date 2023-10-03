/*eslint-disable*/

import './App.css';
import {useState} from 'react';

function App() {

  let post = '호주맛집';
  let [글제목,글제목변경]= useState(['호주날씨','가주여행지','호주명소']);
  let [하트, 하트변경] = useState([0,0,0]);
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
        return (<div className ="list" key={i}>
        <h4>{글제목[i]}
        <span onClick={()=>{
          let copy = [...하트];
          copy[i]= copy[i]+1;
          하트변경(copy)
        }}>❤︎</span> {하트[i]}
        </h4>
        <p>9월 27일 발행</p>
    </div>)
      })
    }





    </div>
  );
}



export default App;
