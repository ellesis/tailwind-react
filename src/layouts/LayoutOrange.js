import React, { useState, useEffect } from 'react'

import SideMenuOrange from '../components/sidebars/SideMenuOrange'

import { menuItems } from '../data/menu-react-icons'

export default function LayoutOrange({ children }) {
  const layoutTitle = 'Tailwind React'

  const [isSmallWin, setIsSmallWin] = useState(false)

  const handleMenuBtnClick = () => {
    setIsSmallWin(!isSmallWin)
  }

  const handleResize = () => {
    // console.info('resized to: ', window.innerWidth, 'x', window.innerHeight)
    if (window.innerWidth < 800) setIsSmallWin(true)
    else setIsSmallWin(false)
  }

  useEffect(() => {
    window.addEventListener('resize', handleResize)
  })

  return (
    <div className="min-h-screen flex flex-col">
      <div className="flex flex-col md:flex-row flex-1">
        <aside className="w-full md:w-60 ">
          {/* Title */}
          <div className={`flex justify-between text-left text-2xl font-bold uppercase p-4 border-b border-gray-100`}>
            <a href="/" className={`hover:text-gray-700`}>
              {layoutTitle}
            </a>

            {/* mobile hamburger menu button */}
            <button onClick={handleMenuBtnClick} className="md:hidden focus:outline-none focus:bg-gray-700">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
          {/* Left Side Menu */}
          <div className={`${isSmallWin ? 'hidden' : 'block'}`}>
            <SideMenuOrange menuItems={menuItems} />
          </div>
        </aside>
        <main className="h-screen  flex-1 px-16 py-6 bg-gray-100">{children}</main>
      </div>
    </div>
  )
}
