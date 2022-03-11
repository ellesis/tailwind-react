import React from 'react'
import Navbar from '../components/navbars/Navbar'

const LayoutNinja = ({children}) => {
  return (
    <React.Fragment>
      <div className="grid md:grid-cols-4">
        <div className="md:col-span-1 md:flex md:justify-end ">
          <Navbar />
        </div>
        <main className="h-screen px-16 py-6 bg-gray-100 md:col-span-3">{children}</main>
      </div>
    </React.Fragment>
  )
}

export default LayoutNinja
