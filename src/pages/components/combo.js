import React from 'react'
import UserDropdown from '../../components/dropdowns/UserDropdown'

export default function PageCombo() {
  return (
    <>
      <div className="subtitle">Dropdown Button - popper.js</div>
      <div className="flex">
        <UserDropdown />
      </div>

      <div className="subtitle">Dropdown Button UI</div>
      <div className="p-10">
        <div className="dropdown inline-block relative">
          <button className="bg-gray-300 text-gray-700 font-semibold py-2 px-4 rounded inline-flex items-center">
            <span className="mr-1">Dropdown</span>
            <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
              <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />{' '}
            </svg>
          </button>
          <ul className="dropdown-menu absolute hidden text-gray-700 pt-1">
            <li className="">
              <a className="rounded-t bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap" href="#">
                One
              </a>
            </li>
            <li className="">
              <a className="bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap" href="#">
                Two
              </a>
            </li>
            <li className="">
              <a className="rounded-b bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap" href="#">
                Three is the magic number
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div>
        {/* Dropdown Button-01 */}
        <div className="relative mb-32">
          <button className="inline-flex items-center h-10 px-5 text-indigo-100 transition-colors duration-150 bg-indigo-700 rounded-lg focus:shadow-outline hover:bg-indigo-800">
            <span>Dropdown</span>
            <svg className="w-4 h-4 ml-3 fill-current" viewBox="0 0 20 20">
              <path
                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                clipRule="evenodd"
                fillRule="evenodd"
              ></path>
            </svg>
          </button>
          <div className="absolute flex flex-col py-2 mt-1 text-gray-700 bg-white border rounded-lg">
            <a className="px-3 py-1 hover:text-gray-800 focus:bg-indigo-700 focus:text-white" href="#">
              One item
            </a>
            <a className="px-3 py-1 hover:text-gray-800 focus:bg-indigo-700 focus:text-white" href="#">
              Another longer item
            </a>
            <a className="px-3 py-1 hover:text-gray-800 focus:bg-indigo-700 focus:text-white" href="#">
              A medium item
            </a>
          </div>
        </div>

        {/*  */}
      </div>

      <div className="subtitle">Select Option</div>
      {/* select-01 */}
      <div className="inline-block relative w-64">
        <select
          defaultValue={'DEFAULT'}
          className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
        >
          <option value="DEFAULT" disabled>
            Really long option that will likely overlap the chevron
          </option>
          <option>Option 1</option>
          <option>Option 2</option>
        </select>
        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
          <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
            <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
          </svg>
        </div>
      </div>

      {/* select-02 */}
      <div className="relative inline-block w-full text-gray-700">
        <select
          className="w-full h-10 pl-3 pr-6 text-base placeholder-gray-600 border rounded-lg appearance-none focus:shadow-outline"
          placeholder="Regular input"
        >
          <option>A regular sized select input</option>
          <option>Another option</option>
          <option>And one more</option>
        </select>
        <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
          <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20">
            <path
              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
              clipRule="evenodd"
              fillRule="evenodd"
            ></path>
          </svg>
        </div>
      </div>

      {/* select-03 */}
      <select id="ddlViewBy" defaultValue={'1'}>
        <option value="1">Hard Accelerator</option>
        <option value="2">Hard Break</option>
        <option value="3">Sharp Turn</option>
      </select>
    </>
  )
}
