import React from 'react'

import LineChart from '../../components/charts/LineChart'
import BarChart from '../../components/charts/BarChart'
import SocialTrafficCard from '../../components/cards/SocialTrafficCard'

export default function Dashboard() {
  return (
    <>
      <div className="flex flex-wrap h-full">
        <div className="w-full xl:w-8/12 mb-12 xl:mb-0 px-4">
          <BarChart />
        </div>
        <div className="w-full xl:w-4/12 px-4">
          <LineChart />
        </div>
      </div>
      <div className="flex flex-wrap h-full">
        <div className="w-full xl:w-8/12 mb-12 xl:mb-0 px-4">
          <SocialTrafficCard />
        </div>
        <div className="w-full xl:w-4/12 px-4"></div>
      </div>
    </>
  )
}
