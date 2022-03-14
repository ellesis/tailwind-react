import React from 'react'
import SideSlideMenu from '../components/sidebars/SideSlideMenu'

export default function LayoutRightSlide({children}) {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <SideSlideMenu />

      <main> {children}</main>
    </div>
  )
}
