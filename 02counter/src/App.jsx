import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [counter,Setcounter] = useState(15)
  // let counter = 5;
  
  let Addvalue = () =>{
    if(counter<20){
      Setcounter(counter+1)
    }
    else{
      alert("no upto 20")
    }
    
    
  }
  let Removevalue = () =>{
    if(counter>0){
      Setcounter(counter-1)
    }
    else{
      alert("no negative numbers")
      Setcounter(0)
    }
    
    console.log(counter)

  }

  return (
    <>
    <h1>Chai or code</h1>
    <h2>Counter value : {counter}</h2>
    <button onClick={Addvalue}>Add value {counter}</button>
    <br />
    <button onClick={Removevalue}>Remove value {counter}</button>
    <p>value is {counter}</p>
    </>
  )
}

export default App
