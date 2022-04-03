import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import {NavLink} from 'react-router-dom'

import {menuItems} from '../../data/menu'
import {adminMenuItems} from '../../data/admin-menu'

export default function AdminSideMenu() {
  const [collapseShow, setCollapseShow] = useState('hidden')

  return (
    <>
      <nav className="hidden md:left-0 md:block md:fixed md:top-0 md:bottom-0 md:overflow-y-auto md:flex-row md:flex-nowrap md:overflow-hidden shadow-xl bg-white items-center relative md:w-64 z-10 py-4 px-6">
        <div className="md:flex-col md:items-stretch md:min-h-full md:flex-nowrap px-0 flex flex-wrap items-center  w-full mx-auto">
          {/* Hamburger menu button */}
          <button
            className="outline-1 cursor-pointer text-black opacity-50 md:hidden px-3 py-1 text-xl leading-none bg-transparent rounded border-2 border-solid border-transparent"
            type="button"
            onClick={() => setCollapseShow('bg-white m-2 py-3 px-6')}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>

          {/* Site Title */}
          <Link
            className="md:block text-left md:pb-2 mr-0 inline-block whitespace-nowrap text-sm uppercase font-bold p-4 px-0"
            to="/"
          >
            Admin Dashboard
          </Link>

          {/* Admin Menu */}
          <hr className="my-4 md:min-w-full" />
          <h6 className="md:min-w-full text-gray-500 text-xs uppercase font-bold block pt-1 pb-4 no-underline">
            Admin Menu
          </h6>
          <ul className=" md:min-w-full flex flex-col list-none">
            {adminMenuItems.map(({href, title, iconTag}) => (
              <li key={title} className="items-center">
                <NavLink
                  end
                  to={href}
                  className={({isActive}) =>
                    isActive
                      ? 'text-xs uppercase py-3 font-bold flex text-sky-500 hover:text-sky-300'
                      : 'text-xs uppercase py-3 font-bold flex text-gray-700 hover:text-gray-400'
                  }
                >
                  <div className="text-lg pr-3 text-gray-400">{iconTag}</div>
                  <div>{title}</div>
                </NavLink>
              </li>
            ))}
          </ul>

          {/* Menu */}
          <hr className="my-4 md:min-w-full" />
          <h6 className="md:min-w-full text-gray-500 text-xs uppercase font-bold block pt-1 pb-4 no-underline">
            User Menu
          </h6>
          <ul className=" md:min-w-full flex flex-col list-none">
            {menuItems.map(({href, title, icon}) => (
              <li key={title} className="items-center">
                <NavLink
                  end
                  to={href}
                  className={({isActive}) =>
                    isActive
                      ? 'text-xs uppercase py-3 font-bold flex text-sky-500 hover:text-sky-300'
                      : 'text-xs uppercase py-3 font-bold flex text-gray-700 hover:text-gray-400'
                  }
                >
                  <div className="text-lg pr-3 text-gray-400">{icon}</div>
                  {title}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </>
  )
}
