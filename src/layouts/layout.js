import React from 'react'

import SideMenuNinja from '../components/sidemenus/SideMenuNinja'

const Layout = ({children}) => {
  return (
    <div className="min-h-screen flex flex-col">
      <div className="flex flex-col md:flex-row flex-1">
        <aside className="w-full md:w-60">
          <SideMenuNinja />
        </aside>
        <main className="flex-1">{children}</main>
      </div>
    </div>
  )
}

export default Layout
