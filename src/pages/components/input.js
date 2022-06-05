import React from 'react'

export default function PageInput() {
  return (
    <>
      <div className="title">Input Form</div>

      {/* Input with icon right-01 */}
      <div class="relative text-gray-700">
        <input
          class="w-full h-10 pl-3 pr-8 text-base placeholder-gray-600 border rounded-lg focus:shadow-outline"
          type="text"
          placeholder="Regular input"
        />
        <div class="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
          <svg class="w-4 h-4 fill-current" viewBox="0 0 20 20">
            <path
              d="M14.243 5.757a6 6 0 10-.986 9.284 1 1 0 111.087 1.678A8 8 0 1118 10a3 3 0 01-4.8 2.401A4 4 0 1114 10a1 1 0 102 0c0-1.537-.586-3.07-1.757-4.243zM12 10a2 2 0 10-4 0 2 2 0 004 0z"
              clipRule="evenodd"
              fillRule="evenodd"
            ></path>
          </svg>
        </div>
      </div>

      {/* Input with icon left */}
      <div class="relative text-gray-700">
        <input
          class="w-full h-10 pl-8 pr-3 text-base placeholder-gray-600 border rounded-lg focus:shadow-outline"
          type="text"
          placeholder="Regular input"
        />
        <div class="absolute inset-y-0 left-0 flex items-center px-2 pointer-events-none">
          <svg class="w-4 h-4 fill-current" viewBox="0 0 20 20">
            <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
            <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
          </svg>
        </div>
      </div>

      {/* Input with button right */}
      <div class="relative text-gray-700">
        <input
          class="w-full h-10 pl-3 pr-8 text-base placeholder-gray-600 border rounded-lg focus:shadow-outline"
          type="text"
          placeholder="Regular input"
        />
        <button class="absolute inset-y-0 right-0 flex items-center px-4 font-bold text-white bg-indigo-600 rounded-r-lg hover:bg-indigo-500 focus:bg-indigo-700">
          Click
        </button>
      </div>

      {/* Input with validation */}
      <div class="mb-4 text-gray-700">
        <label class="block mb-1" for="forms-validationInputCode_error">
          Password
        </label>
        <input
          class="w-full h-10 px-3 text-base placeholder-gray-600 border border-red-700 rounded-lg focus:shadow-outline"
          type="password"
          id="forms-validationInputCode_error"
          aria-describedby="passwordHelp"
        />
        <span class="text-xs text-red-700" id="passwordHelp">
          Your password is too short.
        </span>
      </div>
      <div class="text-gray-700">
        <label class="block mb-1" for="forms-validationInputCode_success">
          Password
        </label>
        <input
          class="w-full h-10 px-3 text-base placeholder-gray-600 border border-green-500 rounded-lg focus:shadow-outline"
          type="password"
          id="forms-validationInputCode_success"
          aria-describedby="passwordHelp"
        />
        <span class="text-xs text-green-700" id="passwordHelp">
          Your password is strong.
        </span>
      </div>
    </>
  )
}
