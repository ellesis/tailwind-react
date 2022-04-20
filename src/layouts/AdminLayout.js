import React from 'react'
import { Routes, Route } from 'react-router-dom'

// components
import AdminSideMenu from '../components/sidebars/AdminSideMenu'
import AdminNavbar from '../components/navbars/AdminNavbar'
import HeaderStats from '../components/headers/HeaderStats'
import FooterAdmin from '../components/footers/FooterAdmin'

// views
import Dashboard from '../pages/admin/Dashboard'
import Setting from '../pages/admin/Setting'
import Tables from '../pages/admin/Tables'
import Maps from '../pages/admin/Maps'

export default function AdminLayout() {
  return (
    <>
      <div className="flex flex-col md:flex-row min-h-screen">
        <AdminSideMenu />
        <main className="flex-1 flex-col h-screen md:ml-64 bg-blue-300">
          {/* Header */}
          <AdminNavbar />
          <HeaderStats />
          <div className="h-full px-4 md:px-10 mx-auto w-full -m-16 bg-gray-100">
            {/* main */}
            <div className="z-100">
              <Routes>
                <Route path="dashboard" element={<Dashboard />} />
                <Route path="setting" element={<Setting />} />
                <Route path="tables" element={<Tables />} />
                <Route path="maps" element={<Maps />} />
                <Route path="/" element={<Dashboard />} />
              </Routes>
            </div>
            <FooterAdmin />
          </div>
        </main>
      </div>
    </>
  )
}
