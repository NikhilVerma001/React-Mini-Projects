import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Yes from './Components/Yes'
import Nav from './Components/Nav'



function App() {
  const [count, setCount] = useState(0)

  return (
    
    <>
      <Nav/>
      <Yes/>
    </>
    
  )
}

export default App
