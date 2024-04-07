import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './Components/Card'

function App() {
  const [count, setCount] = useState(0)

  let obj = {
    username : 'hitesh',
    age : 21
  }

  return (
    <>
      <h1 className='bg-green-400 text-black p-4 rounded-xl mb-4'>Tailwind Test</h1>
      <Card username = "Rajdeep" btnText = "Click me"/>
      <Card username = "Krina" btnText = "Click me"/>
      
    </>
  )
}

export default App
