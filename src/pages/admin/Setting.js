import React from 'react'
import UserInfo from '../../components/forms/UserInfo'
import UserProfileCard from '../../components/cards/UserProfileCard'

export default function Setting() {
  return (
    <>
      <div className="flex flex-wrap">
        <div className="w-full lg:w-8/12 px-4">
          <UserInfo />
        </div>
        <div className="w-full lg:w-4/12 px-4">
          <UserProfileCard />
        </div>
      </div>
    </>
  )
}
