import React from 'react'

const TotalCard = ({title, value})=> {
  return (
    <>
        <div className='total-card'>
            <h4>{title}</h4>
            <p> {value}</p>
        </div>
    </>
    
  )
}

export default TotalCard