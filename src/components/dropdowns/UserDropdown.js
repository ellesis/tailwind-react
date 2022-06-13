import React, {createRef, useState} from 'react'
import {createPopper} from '@popperjs/core'

export default function UserDropdown() {
  const [dropdownPopoverShow, setDropdownPopoverShow] = useState(false)

  const btnDropdownRef = createRef()
  const popoverDropdownRef = createRef()

  const closeDropdownPopover = () => {
    setDropdownPopoverShow(false)
  }

  const openDropdownPopover = () => {
    createPopper(btnDropdownRef.current, popoverDropdownRef.current, {
      placement: 'bottom'
    })
    setDropdownPopoverShow(true)
  }

  return (
    <>
      <div className="items-center flex flex-col">
        <a
          className="text-slate-500 block"
          href="#"
          ref={btnDropdownRef}
          onClick={(e) => {
            e.preventDefault()
            dropdownPopoverShow ? closeDropdownPopover() : openDropdownPopover()
          }}
        >
          <span className="w-12 h-12 text-sm text-white bg-slate-200 inline-flex items-center justify-center rounded-full">
            <img
              alt="User Avatar"
              className="w-full rounded-full align-middle border-none shadow-lg"
              src={require('../../assets/img/avatar/boy.png')}
            />
          </span>
        </a>

        {/* Dropdown User Menu */}
        <div
          ref={popoverDropdownRef}
          className={
            (dropdownPopoverShow ? 'block ' : 'hidden ') +
            'bg-white text-base z-50 float-left py-2 list-none text-left rounded shadow-lg min-w-48'
          }
        >
          <a
            href="#"
            className={'text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-slate-700'}
            onClick={(e) => e.preventDefault()}
          >
            User Profile
          </a>
          <a
            href="#"
            className={'text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-slate-700'}
            onClick={(e) => e.preventDefault()}
          >
            Setting
          </a>
          <a
            href="#"
            className={'text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-slate-700'}
            onClick={(e) => e.preventDefault()}
          >
            help
          </a>
          <div className="h-0 my-2 border border-solid border-slate-100" />
          <a
            href="#"
            className={'text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-slate-700'}
            onClick={(e) => e.preventDefault()}
          >
            Sign Out
          </a>
        </div>
      </div>
    </>
  )
}
