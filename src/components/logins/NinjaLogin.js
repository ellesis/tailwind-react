import React from 'react'

const NinjaLogin = () => {
  return (
    <div className='flex justify-center md:justify-end'>
      <a
        href='#'
        className='btn text-primary border-primary md:border-2 hover:bg-primary hover:text-white transition ease-out duration-500'
      >
        Log in
      </a>
      <a
        href='#'
        className='btn text-primary border-primary md:border-2 hover:bg-primary hover:text-white ml-2 transition ease-out duration-500'
      >
        Sign up
      </a>
    </div>
  )
}

export default NinjaLogin
