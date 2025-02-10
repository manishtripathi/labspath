import { useState } from 'react'
import './App.css'

import CommonPage from './Common'
import Myroute from './Route/MyRoute'
import { Route, Routes } from 'react-router-dom'
import Login from './Pages/useraccount/Login'
import Dashboard from './libs/Dashboard/dashboard'
import Tablepagination from './Component/Tablepagination/Tablepagination'
import TableList from './libs/TableList'
import TestfoematTable from './Component/testformat/TestfoematTable'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <Myroute/> */}
      <Routes>
        <Route path='/' element= {<Login/>}></Route>
        <Route path='/dashboard' element= {<Dashboard/>}></Route>
        <Route path='/table' element= {<Tablepagination/>}></Route>
        <Route path ='/list/:listName' element={<TableList/>}/>
        <Route path ='/test-table' element={<TestfoematTable/>}/>
      </Routes>
    </>
  )
}

export default App
