import React from 'react'
import { Link } from 'react-router-dom'

const PageEgg = () => {
  return (
    <div className='bg-white h-screen flex flex-col justify-center items-center'>
      <h1 className='lg:text-9xl mg:text-7xl  sm:text-5xl text-3xl font-black mb-14'>EggCellent</h1>
      <div className='py6 px-10 bg-yellow-500 rounded-full text-3xl hover:bg-yellow-300 transition duration-300 ease-in-out flex items-center animate-bounce'>
        Order Now
      </div>
    </div>
  )
}

export default PageEgg
