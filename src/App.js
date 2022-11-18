import './App.css';
import {useState} from 'react';


function App() {
  const [leftDiceNumber,setLeftDiceNumber]=useState(2);
    const [rightDiceNumber,setRightDiceNumber]=useState(3);

  const onButtonClicked1= () =>{
      console.log("Button clicked");
      setLeftDiceNumber(Math.floor(Math.random()*5)+1);
      console.log(leftDiceNumber);
  }
  const onButtonClicked2 = () =>{
    setRightDiceNumber(Math.floor(Math.random()*5)+1);
    console.log(rightDiceNumber);
  }
  return (
    <div className="App">
      <header>Ball</header>
      <main>
        <button onClick={onButtonClicked1}><img src={require(`./assets/ball${leftDiceNumber}.png`)}/></button>
        <button onClick={onButtonClicked2}><img src={require(`./assets/ball${rightDiceNumber}.png`)}/></button>

      </main>
    </div>
  );
}


export default App;
