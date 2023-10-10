import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  // let counter = 15;
  const [counter,setCounter] = useState(15);

  const addValue = ()=>{
    setCounter(counter+1);
    setCounter(counter+1);
    setCounter(counter+1);
  }
  const removeValue = ()=>{
    setCounter(counter-1);
  }
  return (
    <div className="App">
     <h1>React learning series</h1>
     <h2>Counter value: {counter} </h2>
     <button onClick={()=>addValue()}>Add value</button>
     <button onClick={removeValue}>Remove value</button>
     <p>Footer: {counter}</p>
    </div>
  );
}

export default App;
