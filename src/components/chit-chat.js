import React from 'react'

const ChitChat = () => {
  return (
    <div className='p-6 max-w-sm mx-auto bg-white rounded-xl shadow-lg flex items-center space-x-4'>
      <div className='shrink-0'>
        {/* <img className='h-12 w-12' src='/img/logo.svg' alt='ChitChat Logo' /> */}
        <svg
          xmlns='http://www.w3.org/2000/svg'
          className='h-6 w-6'
          fill='none'
          viewBox='0 0 24 24'
          stroke='currentColor'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth={2}
            d='M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z'
          />
        </svg>
      </div>
      <div>
        <div className='text-xl font-medium text-black'>ChitChat</div>
        <p className='text-slate-500'>You have a new message!</p>
      </div>
    </div>
  )
}

export default ChitChat
