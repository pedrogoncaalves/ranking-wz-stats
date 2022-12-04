import { useState } from 'react'
import './App.css'
import { Ranking } from './components/Ranking'
function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Ranking/>
    </div>
  )
}

export default App
