import React from 'react'

import ButtonBadge from '../../components/buttons/ButtonBadge'

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
        <ButtonBadge />
      </div>
    </>
  )
}
