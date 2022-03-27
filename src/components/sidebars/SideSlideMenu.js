import React, {useState} from 'react'

import SideMenuBetter from './SideMenuBetter'

/**
 * slide right sidebar
 */
export default function SideSlideMenu() {
  const [showSidebar, setShowSidebar] = useState(false)

  return (
    <>
      {/* Hamburger button or close button */}
      {showSidebar ? (
        <button
          className="flex text-4xl text-white items-center cursor-pointer fixed right-8 top-4 z-50"
          onClick={() => setShowSidebar(!showSidebar)}
        >
          x
        </button>
      ) : (
        <svg
          onClick={() => setShowSidebar(!showSidebar)}
          className="fixed z-30 flex items-center cursor-pointer right-8 top-4"
          fill="#2563EB"
          viewBox="0 0 100 80"
          width="26"
          height="26"
        >
          <rect width="100" height="10"></rect>
          <rect y="30" width="100" height="10"></rect>
          <rect y="60" width="100" height="10"></rect>
        </svg>
      )}

      {/* side menu */}
      <div
        className={`fixed top-0 right-0 w-72 h-full p-4 bg-blue-600 text-white z-40 ease-in-out duration-300 ${
          showSidebar ? 'translate-x-0 ' : 'translate-x-full'
        }`}
      >
        <div className="mt-12">
          <SideMenuBetter />
        </div>
      </div>
    </>
  )
}
