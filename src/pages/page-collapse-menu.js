import React from 'react'
import LayoutCollapseMenu from '../layouts/LayoutCollapseMenu'

function PageCollapseMenu() {
  return (
    <LayoutCollapseMenu>
      <>
        <h1 className="text-center">
          <span className="block text-xl text-gray-600 leading-tight">Welcome to this</span>
          <span className="block text-5xl font-bold leading-none">
            <div>page-submenu</div>
          </span>
        </h1>
      </>
    </LayoutCollapseMenu>
  )
}

export default PageCollapseMenu
