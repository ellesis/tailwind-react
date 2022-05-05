import React from 'react'

import LayoutOrange from '../layouts/LayoutOrange'

import LineChart from '../components/charts/LineChart'
import BarChart from '../components/charts/BarChart'
import LineAreaChart from '../components/charts/LineAreaChart'

/**
 * echart components sample
 */
export default function PageChart() {
  return (
    <LayoutOrange>
      <h2 className="mb-4">eChart Samples</h2>
      <LineChart />
      <LineAreaChart title="Line Area Chart" />

      <BarChart />
    </LayoutOrange>
  )
}
