import React from 'react'
import {AiOutlineStock} from 'react-icons/ai'

import SideMenuReactIcons from '../components/sidebars/SideMenuReactIcons'
import {siteTitle} from '../data/menu-react-icons'

export default function LayoutYokose({children}) {
  return (
    <div className="min-h-screen flex flex-col">
      <div className="flex flex-col md:flex-row flex-1">
        <aside className="w-full md:w-60">
          {/* Title */}
          <a href="/" className="hover:text-gray-700">
            <div className="text-right font-bold uppercase p-4 border-b border-gray-100">
              <AiOutlineStock size={50} />
              {siteTitle}
            </div>
          </a>

          {/* Left Side Menu */}
          <SideMenuReactIcons />
        </aside>
        <main className="flex-1 px-16 py-6 bg-gray-100">{children}</main>
      </div>
    </div>
  )
}
