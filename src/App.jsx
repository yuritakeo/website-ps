import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  function handleEventoBotao(){
    alert('hello')
  }

  return (
    <>
      <h1>Hello World</h1>
    </>
  )
}

export default App
