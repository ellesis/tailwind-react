import React, { useState } from 'react'

const NavMenuBlue = () => {
  const links = ['link1', 'link2', 'link3']

  const [menuOpen, setMenuOpen] = useState(false)

  const handleMenuClick = () => {
    setMenuOpen(!menuOpen)
  }

  const renderMenuCol = () => {
    return (
      <div className='flex flex-col'>
        {links.map((link, idx) => (
          <a key={idx} className='mr-6 font-bold text-gray-500 hover:text-white text-base md:text-lg lg:text-xl'>
            {link.charAt(0).toUpperCase() + link.slice(1)}
          </a>
        ))}
      </div>
    )
  }

  const renderMenuRow = () => {
    return (
      <div className='hidden sm:flex'>
        {links.map((link, idx) => (
          <a key={idx} className='mr-6 font-bold text-gray-500 hover:text-white text-base md:text-lg lg:text-xl'>
            {link.charAt(0).toUpperCase() + link.slice(1)}
          </a>
        ))}
      </div>
    )
  }

  return (
    <header className='flex items-center'>
      {/* logo */}
      <img
        src='https://placeimg.com/640/640/people?t=1560273369797'
        className='flex-shrink-0 rounded-full h-10 w-10 md:h-16 md:w-16 lg:h-32 lg:w-32 flex items-center justify-center shadow-xl m-3'
      />

      <div className='container pl-8'>
        <div className='flex items-center'>
          <h1 className='font-bold text-white text-3xl'>
            <a>
              <span className='text-indigo-200 hover:text-white text-2xl sm:text-3xl md:text-4xl'>Test Title</span>
            </a>
          </h1>
          {/* Hamburger menu button */}
          <button className='ml-auto sm:hidden mr-2 text-white' onClick={handleMenuClick.bind(this)}>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-6 w-6'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
            >
              <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M4 6h16M4 12h16M4 18h16' />
            </svg>
          </button>
        </div>
        {/* Column Menu */}
        {menuOpen && renderMenuCol()}
        {/* Row Menu */}
        {renderMenuRow()}
      </div>
    </header>
  )
}

export default NavMenuBlue
