import React from 'react'
import CollapseMenu from '../components/sidebars/CollapseMenu'

function LayoutCollapseMenu({ children }) {
  return (
    <div className="min-h-screen flex flex-col">
      <div className="flex flex-col md:flex-row flex-1">
        {/* left side */}
        <aside className="w-full md:w-60 ">
          <CollapseMenu />
        </aside>
        {/* Main */}
        <main className="h-screen  flex-1 px-16 py-6 bg-gray-100">{children}</main>
      </div>
    </div>
  )
}

export default LayoutCollapseMenu
