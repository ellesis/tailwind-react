import React from 'react'
import { NavLink } from 'react-router-dom'

/**
menuItems Sample
export const menuItems = [
  {
    title: 'Home',
    href: '/',
    iconTag: <FaHome />
  }
]
 */
export default function SideMenuGray({ menuItems }) {
  return (
    <nav>
      <ul className="px-4">
        {menuItems.map(({ href, title, iconTag }) => (
          <li key={title} className="items-center">
            <NavLink
              end
              to={href}
              className={({ isActive }) =>
                isActive
                  ? 'text-xs uppercase py-3 font-bold flex text-sky-500 hover:text-sky-300'
                  : 'text-xs uppercase py-3 font-bold flex text-gray-700 hover:text-gray-400'
              }
            >
              <div className="text-lg pr-3 text-gray-400">{iconTag}</div>
              <div>{title}</div>
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  )
}
