import React from 'react'
import { NavLink } from 'react-router-dom'

// import { menuItems } from '../../data/menu-heroicons'

export default function SideMenuOrange({ menuItems }) {
  return (
    <nav>
      <ul>
        {menuItems.map(({ title, href, iconTag }) => (
          <li key={title} className="text-gray-700 font-bold py-1">
            <NavLink
              to={href}
              className={({ isActive }) =>
                isActive
                  ? 'px-4 flex justify-end border-r-4 border-primary'
                  : 'px-4 flex justify-end border-r-4 border-white'
              }
            >
              <div className="px-2">{title}</div>
              <div>{iconTag}</div>
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  )
}
