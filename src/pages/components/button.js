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

        <button className="btn-rounded-full-hover-bigger bg-amber-500">Button-5</button>
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
        <span class="relative inline-block ml-8">
          <svg class="w-6 h-6 text-gray-700 fill-current" viewBox="0 0 20 20">
            <path
              d="M18 5v8a2 2 0 01-2 2h-5l-5 4v-4H4a2 2 0 01-2-2V5a2 2 0 012-2h12a2 2 0 012 2zM7 8H5v2h2V8zm2 0h2v2H9V8zm6 0h-2v2h2V8z"
              clip-rule="evenodd"
              fill-rule="evenodd"
            ></path>
          </svg>
          <span class="absolute top-0 right-0 inline-block w-2 h-2 transform translate-x-1/2 -translate-y-1/2 bg-red-600 rounded-full"></span>
        </span>
      </div>
      {/* badge type */}
      <div>
        {/* new-01 */}
        <span class="inline-flex items-center justify-center px-2 py-1 mr-2 text-xs font-bold leading-none text-red-100 bg-red-600 rounded-full">
          NEW
        </span>

        {/* new-02 */}
        <span class="inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-indigo-100 bg-indigo-700 rounded">
          NEW
        </span>

        {/* dot */}
        <span class="inline-block w-2 h-2 mr-2 bg-red-600 rounded-full"></span>
        <span class="inline-flex items-center justify-center px-2 py-1 mr-2 text-xs font-bold leading-none text-red-100 bg-red-600 rounded-full">
          9
        </span>
        <span class="inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-red-100 bg-red-600 rounded-full">
          99+
        </span>
      </div>
    </>
  )
}
