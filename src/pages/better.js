import React from 'react'
import BetterLayout from '../layouts/BetterLayout'

export default function Better() {
  return (
    <BetterLayout>
      <>
        <h1 className="text-center">
          <span className="block text-xl text-gray-600 leading-tight">Welcome to this</span>
          <span className="block text-5xl font-bold leading-none">Awesome Website</span>
        </h1>
      </>
    </BetterLayout>
  )
}
