import { useState } from 'react'
import './App.css'

import CommonPage from './Common'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <CommonPage/>
    </>
  )
}

export default App
