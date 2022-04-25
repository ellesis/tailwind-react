import React from 'react'

import SideMenuGray from '../components/sidebars/SideMenuGray'
import { menuItems } from '../data/components-menu'

export default function LayoutComponents({ children }) {
  return (
    <div className="min-h-screen flex flex-col">
      <div className="flex flex-col md:flex-row flex-1">
        <aside className="w-full md:w-60 ">
          {/* Title */}
          <div className={`flex justify-between text-left text-2xl font-bold uppercase p-4 border-b border-gray-100`}>
            <a href="/" className={`hover:text-gray-700`}>
              Components Sample
            </a>
          </div>

          <SideMenuGray menuItems={menuItems} />
        </aside>
        <main className="h-screen  flex-1 px-16 py-6 bg-gray-100">{children}</main>
      </div>
    </div>
  )
}
