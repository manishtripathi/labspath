import React from 'react'
import { useState } from 'react';

const Accordian =({title, children}) => {
    const [isOpen, setIsOpen] = useState (true);
  return (
    <>
        <div className="rounded-lg mb-2">
            <button
            onClick={() => setIsOpen(!isOpen)}
            className='w-full text-left flex justify-between items-center px-4 py-2 border-b'
            >
                <span className='font-semibold'> {title}</span>
                <span>{isOpen ? "collapse" : "expand"}</span>
            </button>
            {isOpen && <div className='p-4 bg-white'>{children} </div>}

        </div>
    </>
  )
}

export default Accordian