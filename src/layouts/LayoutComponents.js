import React from 'react'
import {Routes, Route} from 'react-router-dom'

import SideMenuGray from '../components/sidebars/SideMenuGray'
import {menuItems} from '../data/components-menu'

// views
import PageButton from '../pages/components/button'
import PageCard from '../pages/components/card'
import PageInput from '../pages/components/input'
import PageCombo from '../pages/components/combo'
import PageForm from '../pages/components/form'
import PageRadio from '../pages/components/radio'
import PageCheck from '../pages/components/check'

import PageTable from '../pages/components/table'

/**
 * Components Layout
 *
 * sub routes
 */
export default function LayoutComponents() {
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
        <main className="h-full  flex-1 px-16 py-6 bg-gray-100">
          <Routes>
            <Route path="button" element={<PageButton />} />
            <Route path="card" element={<PageCard />} />
            <Route path="input" element={<PageInput />} />
            <Route path="combo" element={<PageCombo />} />
            <Route path="form" element={<PageForm />} />
            <Route path="radio" element={<PageRadio />} />
            <Route path="check" element={<PageCheck />} />
            <Route path="table" element={<PageTable />} />

            <Route path="/" element={<PageCard />} />
          </Routes>
        </main>
      </div>
    </div>
  )
}
