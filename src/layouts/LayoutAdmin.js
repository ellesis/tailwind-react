import React from 'react'

import SideMenuAdmin from '../components/sidebars/SideMenuAdmin'

export default function LayoutAdmin() {
  return (
    <>
      <SideMenuAdmin />
      <div className="relative md:ml-64 bg-blueGray-100">
        {/* <AdminNavbar /> */}
        {/* Header */}
        {/* <HeaderStats /> */}
        <div className="px-4 md:px-10 mx-auto w-full -m-24">
          {/* main */}
          {/* <Switch>
            <Route path="/admin/dashboard" exact component={Dashboard} />
            <Route path="/admin/maps" exact component={Maps} />
            <Route path="/admin/settings" exact component={Settings} />
            <Route path="/admin/tables" exact component={Tables} />
            <Redirect from="/admin" to="/admin/dashboard" />
          </Switch>
          <FooterAdmin /> */}
        </div>
      </div>
    </>
  )
}
