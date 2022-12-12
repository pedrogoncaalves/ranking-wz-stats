import { useState } from 'react'
import './App.css'
import { RankingTable } from './components/RankingTable'
import { TableContainer } from './components/TableContainer'
function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <TableContainer/>
      <RankingTable/>
    </div>
  )
}

export default App
