import React from 'react'
import {NavLink} from 'react-router-dom'

import {menuItems} from '../../data/menu'

export default function SideMenuBetter() {
  return (
    <nav>
      <ul>
        {menuItems.map(({href, title}) => (
          <NavLink to={href} className={({isActive}) => (isActive ? 'flex bg-blue-700' : 'flex')}>
            <li key={title} className="block w-full py-2.5 px-4 font-extrabold hover:bg-blue-600">
              <span>{title}</span>
            </li>
          </NavLink>
        ))}
      </ul>
    </nav>
  )
}
