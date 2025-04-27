import { lazy, Suspense } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import { DotLoader } from 'react-spinners'
import CenterList from './Pages/CenterList'

// Lazy load components
const Login = lazy(() => import('./Pages/useraccount/Login'))
const Dashboard = lazy(() => import('./libs/Dashboard/dashboard'))
const Tablepagination = lazy(() => import('./Component/Tablepagination/Tablepagination'))
const TableList = lazy(() => import('./libs/TableList'))
const TestfoematTable = lazy(() => import('./Component/testformat/TestfoematTable'))
const CaseDetailForm = lazy(() => import('./Component/Forms/caseDetailForm'))

function App() {
  return (
    <>
      <Suspense fallback={<div className='loading-route'><DotLoader
        color="#30cdac"
        size={100}
      /></div>}>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='/table' element={<Tablepagination />} />
          <Route path='/list/:listName' element={<TableList />} />
          <Route path='/centers' element={<CenterList />} />
          <Route path='/test-table' element={<TestfoematTable />} />
          <Route path='/case-details/:id' element={<CaseDetailForm />} />
        </Routes>
      </Suspense>
    </>
  )
}

export default App