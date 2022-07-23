import React from 'react'

const Toggle = ({month, year}) => {
  return (
    <div className='flex justify-center font-medium text-md md:text-lg text-lemon gap-4 align-center'>
        <p>Monthly</p>
        <label 
        id='toggle' 
        className="inline-flex relative items-center cursor-pointer"
        >
        <input 
        type ='checkbox' 
        id='toggle'
        className='sr-only peer' 
        checked = {month}
        onClick={()=> year(!month)} 
        />
        <div className="w-10 h-4 md:w-14 md:h-5 rounded-full bg-toggleColor peer
        peer-checked:after:translate-x-5
        md:peer-checked:after:translate-x-8
        peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-0  after:bg-white after:rounded-full after:h-5 after:w-5 md:after:h-6 md:after:w-6 after:transition-all
        peer-checked:bg-toggleColor "></div>
        </label>
        <p>Yearly</p>

    </div>
  )
}

export default Toggle