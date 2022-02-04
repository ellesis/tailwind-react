import React from 'react'
import ChitChat from '../components/chit-chat'
import AvatarCard from '../components/avatar-card'

const PageComponents = () => {
  return (
    <>
      <div className='title'>Components Sample</div>
      <div className='pt-4'>
        <ChitChat />
      </div>
      <div className='pt-4'>
        <AvatarCard />
      </div>

      <div className='title'>Buttons Sample</div>
      <div>
        <button className='px-4 py-1 text-sm text-purple-600 font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2'>
          Save changes
        </button>

        <BtnPrimary>Primary Button</BtnPrimary>
      </div>

      <div className='title'>Form Sample</div>
      <div></div>
    </>
  )
}

function BtnPrimary(props) {
  return (
    <button className='bg-blue-500 text-white font-medium px-4 py-2 rounded hover:bg-blue-600'>{props.children}</button>
  )
}

export default PageComponents
