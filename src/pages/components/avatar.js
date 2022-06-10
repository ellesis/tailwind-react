import React from 'react'

export default function PageAvatar() {
  return (
    <>
      <div className="subtitle">Avatar Components</div>

      {/* Avatar sizes */}
      <img
        className="inline object-cover w-16 h-16 mr-2 rounded-full"
        src="https://images.pexels.com/photos/2589653/pexels-photo-2589653.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
        alt="Profile image"
      />
      <img
        className="inline object-cover w-12 h-12 mr-2 rounded-full"
        src="https://images.pexels.com/photos/2589653/pexels-photo-2589653.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
        alt="Profile image"
      />
      <img
        className="inline object-cover w-8 h-8 rounded-full"
        src="https://images.pexels.com/photos/2589653/pexels-photo-2589653.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
        alt="Profile image"
      />

      {/* Avatar group */}
      <div className="-space-x-4">
        <img
          className="relative z-30 inline object-cover w-12 h-12 border-2 border-white rounded-full"
          src="https://images.pexels.com/photos/2589653/pexels-photo-2589653.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
          alt="Profile image"
        />
        <img
          className="relative z-20 inline object-cover w-12 h-12 border-2 border-white rounded-full"
          src={require('../../assets/img/avatar/girl.png')}
          alt="Profile image"
        />
        <img
          className="relative z-10 inline object-cover w-12 h-12 border-2 border-white rounded-full"
          src="https://images.pexels.com/photos/2589653/pexels-photo-2589653.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
          alt="Profile image"
        />
      </div>

      {/* Avatar with badge */}
      <div className="relative inline-block">
        <img
          className="inline-block object-cover w-12 h-12 rounded-full"
          src={require('../../assets/img/avatar/girl.png')}
          alt="Profile image"
        />
        <span className="absolute bottom-0 right-0 inline-block w-3 h-3 bg-green-600 border-2 border-white rounded-full"></span>
      </div>
    </>
  )
}
