import React from 'react'
import {NavLink} from 'react-router-dom'

import {menuItems} from '../../data/menu-react-icons'

export default function SideMenuReactIcons() {
  return (
    <nav>
      <ul>
        {menuItems.map(({href, title, iconTag}) => {
          return (
            <li key={title} className="h-12 bg-tints-800 text-white font-bold ">
              <NavLink
                to={href}
                className={({isActive}) =>
                  isActive
                    ? 'px-4 flex justify-end border-r-4 border-green-500'
                    : 'px-4 flex justify-end border-r-4 border-white'
                }
              >
                <div className="px-2">{iconTag}</div>
                <div>{title}</div>
              </NavLink>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}
