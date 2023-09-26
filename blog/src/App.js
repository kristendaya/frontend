import logo from './logo.svg';
import './App.css';

function App() {

  let post = '호주맛집'

  return (
    <div className="App">
      <div className= "black-nav"> 
        <h4 style={{color:'white', FontSize :'20px'}}> Krisen Daya's blog</h4>
         </div>
         <h4>{post}</h4>
    </div>
  );
}

export default App;
