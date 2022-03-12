import React from 'react'

import SideMenuNinja from '../components/sidebars/SideMenuNinja'

export default function Layout({children}) {
  const layoutTitle = 'Tailwind React'

  return (
    <div className="min-h-screen flex flex-col">
      <div className="flex flex-col md:flex-row flex-1">
        <aside className="w-full md:w-60">
          {/* Title */}
          <h3 className="text-right font-bold uppercase p-4 border-b border-gray-100">
            <a href="/" className="hover:text-gray-700">
              {layoutTitle}
            </a>
          </h3>
          {/* Left Side Menu */}
          <SideMenuNinja />
        </aside>
        <main className="flex-1 px-16 py-6 bg-gray-100">{children}</main>
      </div>
    </div>
  )
}
