import React from 'react'

import LayoutOrange from '../layouts/LayoutOrange'

import LineChart from '../components/charts/LineChart'
import BarChart from '../components/charts/BarChart'

/**
 * echart components sample
 */
export default function PageChart() {
  return (
    <LayoutOrange>
      <h2 className="mb-4">eChart Samples</h2>
      <LineChart />
      <BarChart />
    </LayoutOrange>
  )
}
