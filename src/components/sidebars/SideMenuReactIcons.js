import React from 'react'
import {NavLink} from 'react-router-dom'

import {menuItems} from '../../data/menu-react-icons'

export default function SideMenuReactIcons() {
  return (
    <nav>
      <ul>
        {menuItems.map(({href, title, iconTag}) => {
          return (
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
                {iconTag}
              </NavLink>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}
