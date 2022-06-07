import React from 'react'

import ButtonBadge from '../../components/buttons/ButtonBadge'
import BadgeNums from '../../components/buttons/BadgeNums'

/**
 * BtnPrimary Component
 */
const BtnPrimary = (props) => {
  return (
    <button className="bg-blue-500 text-white font-medium px-4 py-2 rounded hover:bg-blue-600">{props.children}</button>
  )
}

/**
 * Buttons sample page
 */
export default function PageButton() {
  return (
    <>
      <div className="subtitle">TailwindCss buttons</div>
      <div>
        <button className="btn-purple-outlined-rounded-full">Save changes</button>

        <button className="w-80  btn-green-rounded" type="submit">
          Submit
        </button>

        <button className="btn-gray-outlined">Sign In</button>

        <button className="h-10 px-5 text-indigo-700 transition-colors duration-150 border border-indigo-500 rounded-lg focus:shadow-outline hover:bg-indigo-500 hover:text-indigo-100">
          Outline
        </button>

        <button className="btn-rounded-full-hover-bigger bg-amber-500">Button-5</button>
      </div>

      <div className="subtitle">Buttons Colors</div>
      <div>
        <button className="h-10 px-5 m-2 text-red-100 transition-colors duration-150 bg-red-700 rounded-lg focus:shadow-outline hover:bg-red-800">
          Danger
        </button>
        <button className="h-10 px-5 m-2 text-green-100 transition-colors duration-150 bg-green-700 rounded-lg focus:shadow-outline hover:bg-green-800">
          Success
        </button>
        <button className="h-10 px-5 m-2 text-blue-100 transition-colors duration-150 bg-blue-600 rounded-lg focus:shadow-outline hover:bg-blue-700">
          Info
        </button>
        <button className="h-10 px-5 m-2 text-gray-100 transition-colors duration-150 bg-gray-700 rounded-lg focus:shadow-outline hover:bg-gray-800">
          Secondary
        </button>
        <button className="h-10 px-5 m-2 text-pink-100 transition-colors duration-150 bg-pink-600 rounded-lg focus:shadow-outline hover:bg-pink-700">
          Pink
        </button>
        <button className="h-10 px-5 m-2 text-purple-100 transition-colors duration-150 bg-purple-600 rounded-lg focus:shadow-outline hover:bg-purple-700">
          Purple
        </button>
        <button className="h-10 px-5 text-gray-800 transition-colors duration-150 bg-white rounded-lg focus:shadow-outline hover:bg-gray-200">
          White
        </button>
      </div>

      <div className="subtitle">Button Components</div>
      <div>
        <BtnPrimary>Primary Button</BtnPrimary>
      </div>

      <div className="subtitle">Badge Button Components</div>
      <div>
        <ButtonBadge label={'Button'} num={'9'} />
        <BadgeNums num={'99'} />

        {/* no number */}
        <span className="relative inline-block ml-8">
          <svg className="w-6 h-6 text-gray-700 fill-current" viewBox="0 0 20 20">
            <path
              d="M18 5v8a2 2 0 01-2 2h-5l-5 4v-4H4a2 2 0 01-2-2V5a2 2 0 012-2h12a2 2 0 012 2zM7 8H5v2h2V8zm2 0h2v2H9V8zm6 0h-2v2h2V8z"
              clipRule="evenodd"
              fillRule="evenodd"
            ></path>
          </svg>
          <span className="absolute top-0 right-0 inline-block w-2 h-2 transform translate-x-1/2 -translate-y-1/2 bg-red-600 rounded-full"></span>
        </span>
      </div>
      {/* badge type */}
      <div>
        {/* new-01 */}
        <span className="inline-flex items-center justify-center px-2 py-1 mr-2 text-xs font-bold leading-none text-red-100 bg-red-600 rounded-full">
          NEW
        </span>

        {/* new-02 */}
        <span className="inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-indigo-100 bg-indigo-700 rounded">
          NEW
        </span>

        {/* dot */}
        <span className="inline-block w-2 h-2 mr-2 bg-red-600 rounded-full"></span>
        <span className="inline-flex items-center justify-center px-2 py-1 mr-2 text-xs font-bold leading-none text-red-100 bg-red-600 rounded-full">
          9
        </span>
        <span className="inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-red-100 bg-red-600 rounded-full">
          99+
        </span>
      </div>

      <div className="subtitle">Icon Buttons</div>
      <div>
        {/* Button with icon left */}
        <button className="inline-flex items-center h-10 px-5 text-indigo-100 transition-colors duration-150 bg-indigo-700 rounded-lg focus:shadow-outline hover:bg-indigo-800">
          <svg className="w-4 h-4 mr-3 fill-current" viewBox="0 0 20 20">
            <path
              d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
              clipRule="evenodd"
              fillRule="evenodd"
            ></path>
          </svg>
          <span>With icon</span>
        </button>

        {/* Icon button */}
        <button className="inline-flex items-center justify-center w-10 h-10 mr-2 text-indigo-100 transition-colors duration-150 bg-indigo-700 rounded-full focus:shadow-outline hover:bg-indigo-800">
          <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20">
            <path
              d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
              clipRule="evenodd"
              fillRule="evenodd"
            ></path>
          </svg>
        </button>
        <button className="inline-flex items-center justify-center w-10 h-10 mr-2 text-indigo-100 transition-colors duration-150 bg-indigo-700 rounded-lg focus:shadow-outline hover:bg-indigo-800">
          <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20">
            <path
              d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
              clipRule="evenodd"
              fillRule="evenodd"
            ></path>
          </svg>
        </button>
        <button className="inline-flex items-center justify-center w-10 h-10 mr-2 text-gray-700 transition-colors duration-150 bg-white rounded-full focus:shadow-outline hover:bg-gray-200">
          <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20">
            <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z"></path>
          </svg>
        </button>
      </div>

      <div className="subtitle">Button Group</div>
      <div>
        {/* Button group */}
        <div className="inline-flex" role="group" aria-label="Button group">
          <button className="h-10 px-5 text-indigo-100 transition-colors duration-150 bg-indigo-700 rounded-l-lg focus:shadow-outline hover:bg-indigo-800">
            Left
          </button>
          <button className="h-10 px-5 text-indigo-100 transition-colors duration-150 bg-indigo-700 focus:shadow-outline hover:bg-indigo-800">
            Middle
          </button>
          <button className="h-10 px-5 text-indigo-100 transition-colors duration-150 bg-indigo-700 rounded-r-lg focus:shadow-outline hover:bg-indigo-800">
            Right
          </button>
        </div>
      </div>
    </>
  )
}
