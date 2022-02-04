import React from 'react'
import Navbar from '../components/navbar'

const Layout = ({ children }) => {
  return (
    <React.Fragment>
      <div className='grid md:grid-cols-3'>
        <div className='md:col-span-1 md:flex md:justify-end '>
          <Navbar />
        </div>
        <main className='px-16 py-6 bg-gray-100 md:col-span-2'>{children}</main>
      </div>
    </React.Fragment>
  )
}

export default Layout
