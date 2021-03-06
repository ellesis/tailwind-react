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
export default function SideMenuBetter({ menuItems }) {
  return (
    <nav>
      <ul className="w-full h-full">
        {/* react icons sideMenu */}
        {menuItems.map(({ href, title, iconTag }) => (
          <li key={title}>
            <NavLink
              to={href}
              className={({ isActive }) =>
                isActive
                  ? 'flex bg-blue-700 hover:bg-blue-600  py-2 px-4 font-extrabold'
                  : 'flex hover:bg-blue-600  py-2 px-4 font-extrabold'
              }
            >
              <div className="text-lg pr-3">{iconTag}</div>
              <div>{title}</div>
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  )
}
