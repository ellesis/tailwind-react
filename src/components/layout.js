import React from 'react'
import Navbar from '../components/navbar'

const Layout = ({ children }) => {
  return (
    <React.Fragment>
      <Navbar />
      <main>{children}</main>
    </React.Fragment>
  )
}

export default Layout
