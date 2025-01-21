import { useState } from 'react'
import './App.css'

import CommonPage from './Common'
import Myroute from './Route/MyRoute'
import { Route, Routes } from 'react-router-dom'
import Login from './Pages/useraccount/Login'
import Dashboard from './Pages/useraccount/Dashboard2'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <Myroute/> */}
      <Routes>
        <Route path='/' element= {<Login/>}></Route>
        <Route path='/dashboard' element= {<Dashboard/>}></Route>
      </Routes>
    </>
  )
}

export default App
