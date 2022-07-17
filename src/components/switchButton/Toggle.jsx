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
        <div className="w-20 h-6 md:w-24 md:h-7 rounded-full bg-toggleColor peer
        peer-checked:after:translate-x-14
        md:peer-checked:after:translate-x-16
        peer-checked:after:border-white after:content-[''] after:absolute after:-top-0.5 after:left-0  after:bg-white after:rounded-full after:h-7 after:w-7 md:after:h-8 md:after:w-8 after:transition-all
        peer-checked:bg-toggleColor "></div>
        </label>
        <p>Yearly</p>

    </div>
  )
}

export default Toggle