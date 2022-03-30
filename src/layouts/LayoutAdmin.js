import React from 'react'
import {Routes, Route} from 'react-router-dom'

// components
import AdminSideMenu from '../components/sidebars/AdminSideMenu'
import AdminNavbar from '../components/navbars/AdminNavbar'
import FooterAdmin from '../components/footers/FooterAdmin'

// views
import Dashboard from '../pages/admin/Dashboard'
import Tables from '../pages/admin/Tables'

export default function LayoutAdmin() {
  return (
    <>
      <div className="flex flex-row min-h-screen ">
        <AdminSideMenu />
        <main className="flex-1 flex-col h-screen ml-64  bg-blue-300">
          {/* Header */}
          <AdminNavbar />
          {/* <HeaderStats /> */}
          <div className="px-4 md:px-10 mx-auto">
            {/* main */}
            <div className="z-100">
              <div className="h-1/2 bg-yellow-300">Main</div>
              <Routes>
                <Route path="dashboard" element={<Dashboard />} />
                <Route path="tables" element={<Tables />} />
              </Routes>
            </div>
            <FooterAdmin />
          </div>
        </main>
      </div>
    </>
  )
}
