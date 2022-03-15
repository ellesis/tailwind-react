import React from 'react'
import SideMenuBetter from '../components/sidebars/SideMenuBetter'

export default function LayoutBetter({children}) {
  return (
    <div className="relative min-h-screen md:flex">
      {/* mobile menu bar */}
      <div class="bg-gray-800 text-gray-100 flex justify-between md:hidden">
        {/* logo */}
        <a href="#" class="block p-4 text-white font-bold">
          Better Dev
        </a>
        {/* mobile menu button */}
        <button class="mobile-menu-button p-4 focus:outline-none focus:bg-gray-700">
          <svg class="h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

      {/* side Menu */}
      <div className="sidebar bg-blue-800 text-blue-100 w-64 space-y-6 py-7 px-2 absolute inset-y-0 left-0 transform -translate-x-full md:relative md:translate-x-0 transition duration-200 ease-in-ou">
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
        <SideMenuBetter />
        {/*
        <nav>
          <a href="#" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-blue-700 hover:text-white">
            Home
          </a>
          <a href="" className="block py-2.5 px-4">
            About
          </a>
          <a href="" className="block py-2.5 px-4"></a>
          <a href="" className="block py-2.5 px-4"></a>
        </nav> */}
      </div>

      {/* content */}
      <div className="flex-1 p-10 text-2xl">{children}</div>
    </div>
  )
}
