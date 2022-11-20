// import { useState } from 'react'
import { Outlet } from 'react-router-dom'
import "./index.css"
import Nav from './components/Nav'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Nav />
      <Outlet/>
    </div>
  )
}

export default App
