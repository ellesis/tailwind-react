import React from 'react'
import UserTable from '../../components/tables/UserTable'

export default function Tables() {
  return (
    <>
      <div className="flex flex-wrap mt-4">
        <div className="w-full mb-12 px-4">
          <UserTable />
        </div>
        <div className="w-full mb-12 px-4">
          <UserTable color="dark" />
        </div>
      </div>
    </>
  )
}
