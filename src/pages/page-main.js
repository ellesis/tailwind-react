import React from 'react'
import NavMenuBlue from '../components/navbars/NavMenuBlue'

const PageMain = () => {
  return (
    <main>
      <div className="bg-indigo-800 shadow-xl m-6 rounded">
        <NavMenuBlue />
      </div>

      <div className="text-center">
        <p className="pt-5">
          Show me some love on{' '}
          <a className="text-indigo-800 font-bold" href="https://twitter.com/fabio_runci">
            Twitter
          </a>{' '}
          if this has helped you
        </p>
      </div>
    </main>
  )
}

export default PageMain
