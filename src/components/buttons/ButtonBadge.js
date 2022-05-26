import React from 'react'

export default function ButtonBadge({label, num}) {
  return (
    <>
      <button class="h-10 px-5 text-indigo-100 transition-colors duration-150 bg-indigo-700 rounded-lg focus:shadow-outline hover:bg-indigo-800">
        <span class="mr-2">{label}</span>
        <span class="inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-red-100 bg-red-600 rounded-full">
          {num}
        </span>
      </button>
    </>
  )
}
