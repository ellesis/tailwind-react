import React from 'react'

import UserDropdown from '../dropdowns/UserDropdown'

export default function AdminNavbar() {
  return (
    <>
      <nav className="bg-sky-600 p-4">
        <div className="flex justify-between items-center flex-wrap md:flex-nowrap md:px-10 px-4">
          {/* Brand */}
          <a
            className="text-white text-sm uppercase hidden lg:inline-block font-semibold"
            href="/"
            onClick={(e) => e.preventDefault()}
          >
            Admin Dashboard
          </a>
          {/* Search Form */}
          <form className="md:flex hidden flex-row flex-wrap items-center lg:ml-auto mr-3">
            <div className="relative flex w-full flex-wrap items-stretch">
              <span className="z-10 h-full leading-snug font-normal absolute text-center text-slate-300 bg-transparent rounded text-base items-center justify-center w-8 pl-3 py-3">
                <i className="fas fa-search"></i>
              </span>
              <input
                type="text"
                placeholder="Search here..."
                className="border-0 px-2 py-3 placeholder-slate-300 text-slate-600 relative bg-white rounded text-sm shadow outline-none focus:outline-none focus:ring w-full pl-4"
              />
            </div>
          </form>
          {/* User */}
          <ul className="flex-col md:flex-row list-none items-center hidden md:flex">
            <UserDropdown />
          </ul>
        </div>
      </nav>
    </>
  )
}
