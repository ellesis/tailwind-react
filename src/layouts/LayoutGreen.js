import React from 'react'

import NavbarGreen from '../components/navbars/NavbarGreen'
import SideMenuNinja from '../components/sidebars/SideMenuNinja'

export default function LayoutGreen({ children }) {
  const layoutTitle = 'Tailwind React'

  return (
    <div className="min-h-screen flex flex-col">
      <NavbarGreen />
      <div className="flex flex-col md:flex-row flex-1">
        <main className="flex-1 px-16 py-6 bg-gray-100">{children}</main>
      </div>
    </div>
  )
}
