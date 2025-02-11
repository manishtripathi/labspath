import React from 'react'
import Sidebar from "../Dashboard/components/Sidebar"

const MainLayout = ({children}) => {
  return (
    <div className='flex justify-start w-100'>
      <Sidebar/>
      <div className='main-container'>
      {children}
      </div>
    </div>
  )
}

export default MainLayout
