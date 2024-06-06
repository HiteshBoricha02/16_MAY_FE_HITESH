import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h2> React Web</h2>
      <div className="card">
        <h1> count is {count}</h1>
        <button onClick={() => setCount((count) => count + 1)}>Increment </button>
        <button onClick={() => setCount((count) => count = 0)}>Reset </button>
        <button onClick={() => setCount((count) => count -1)}>Decrement </button>
      </div>
    </>
  )
}

export default App
