import React from 'react'
import {NavLink} from 'react-router-dom'

import {menuItems} from '../data/menu'

export default function SideMenuBetter() {
  return (
    <nav>
      <ul>
        {menuItems.map(({href, title}) => (
          <li key={title} className="text-gray-700 font-bold py-1">
            <NavLink
              to={href}
              className={({isActive}) =>
                isActive
                  ? 'px-4 flex justify-end border-r-4 border-primary'
                  : 'px-4 flex justify-end border-r-4 border-white'
              }
            >
              <span>{title}</span>
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
        ))}
      </ul>
    </nav>
  )
}