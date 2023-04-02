import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import app from './App.module.css'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className={`${app.App}`}>
      <h1>Contador</h1>
      <div className={app.card}>
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
    </div>
  )
}

export default App
