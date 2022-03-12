import React from 'react'
import {NavLink} from 'react-router-dom'

export default function SidebarNinjaOrigin() {
  return (
    <nav className="text-right">
      <div className="flex justify-between items-center">
        {/* Title */}
        <h3 className="font-bold uppercase p-4 border-b border-gray-100">
          <a href="/" className="hover:text-gray-700">
            Tailwindcss-React
          </a>
        </h3>

        {/* hambuer Menu */}
        <div className="px-4 cursor-pointer md:hidden" id="burger">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </div>
      </div>

      {/* Left side menu */}
      <ul className="text-sm mt-6 hidden md:block" id="menu">
        <li className="text-gray-700 font-bold py-1">
          <NavLink
            to={'/'}
            className={({isActive}) =>
              isActive
                ? 'px-4 flex justify-end border-r-4 border-primary'
                : 'px-4 flex justify-end border-r-4 border-white'
            }
          >
            <span>Home</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 ml-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
              />
            </svg>
          </NavLink>
        </li>
        <li className="py-1">
          <NavLink
            to={'/food'}
            className={({isActive}) =>
              isActive
                ? 'px-4 flex justify-end border-r-4 border-primary'
                : 'px-4 flex justify-end border-r-4 border-white'
            }
          >
            <span>Food</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 ml-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
              />
            </svg>
          </NavLink>
        </li>
        <li className="py-1">
          <NavLink
            to={'/components'}
            className={({isActive}) =>
              isActive
                ? 'px-4 flex justify-end border-r-4 border-primary'
                : 'px-4 flex justify-end border-r-4 border-white'
            }
          >
            <span>Components</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 14v6m-3-3h6M6 10h2a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v2a2 2 0 002 2zm10 0h2a2 2 0 002-2V6a2 2 0 00-2-2h-2a2 2 0 00-2 2v2a2 2 0 002 2zM6 20h2a2 2 0 002-2v-2a2 2 0 00-2-2H6a2 2 0 00-2 2v2a2 2 0 002 2z"
              />
            </svg>
          </NavLink>
        </li>

        <li className="py-1">
          <NavLink
            to={'/egg'}
            className={({isActive}) =>
              isActive
                ? 'px-4 flex justify-end border-r-4 border-primary'
                : 'px-4 flex justify-end border-r-4 border-white'
            }
          >
            <span>About</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 ml-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </NavLink>
        </li>
        <li className="py-1">
          <NavLink
            to={'/contact'}
            className={({isActive}) =>
              isActive
                ? 'px-4 flex justify-end border-r-4 border-primary'
                : 'px-4 flex justify-end border-r-4 border-white'
            }
          >
            <span>Contact</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 ml-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              />
            </svg>
          </NavLink>
        </li>

        <li className="py-1">
          <NavLink
            to={'/main'}
            className={({isActive}) =>
              isActive
                ? 'px-4 flex justify-end border-r-4 border-primary'
                : 'px-4 flex justify-end border-r-4 border-white'
            }
          >
            <span>Main</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 ml-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              />
            </svg>
          </NavLink>
        </li>
      </ul>
    </nav>
  )
}
