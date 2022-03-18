import React, {useState} from 'react'
import SideMenuBetter from '../components/sidebars/SideMenuBetter'

export default function LayoutBetter({children}) {
  const [isMobile, setIsMobile] = useState(false)

  const handleMenuBtnClick = () => {
    setIsMobile(!isMobile)
  }

  return (
    <div className="relative min-h-screen md:flex">
      {/* mobile menu bar */}
      <div className="bg-gray-800 text-gray-100 flex justify-between md:hidden">
        {/* logo */}
        <a href="/" className="block text-xl p-4 text-white font-bold">
          Better Dev
        </a>
        {/* mobile menu button */}
        <button onClick={handleMenuBtnClick} className="mobile-menu-button p-4 focus:outline-none focus:bg-gray-700">
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

      {/* side Menu */}
      <div
        className={`${
          isMobile ? 'top-0 right-0 translate-x-0' : 'md:relative md:translate-x-0'
        } w-64 bg-blue-800 text-blue-100 space-y-6 py-7 px-2 absolute inset-y-0 left-0 transform -translate-x-full  transition duration-200 ease-in-ou`}
      >
        {/* logo */}
        <a href="#" className="text-white flex items-center space-x-2 px-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M8 13v-1m4 1v-3m4 3V8M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z"
            />
          </svg>
          <span className="text-2xl font-extrabold">Better Dev</span>
        </a>

        {/* nav */}
        <SideMenuBetter show={isMobile} />
      </div>
      {/* content */}
      <div className="flex-1 p-10 text-2xl">{children}</div>
    </div>
  )
}
