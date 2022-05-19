import React from 'react'

import LayoutOrange from '../layouts/LayoutOrange'

// Chart components
import LineChart from '../components/charts/LineChart'
import LineAreaChart from '../components/charts/LineAreaChart'

import BarChart from '../components/charts/BarChart'
import BarChartWithTooltip from '../components/charts/BarChartWithTooltip'
import DynamicBarChart from '../components/charts/DynamicBarChart'

import PieChart from '../components/charts/PieChart'

import FunnelChart from '../components/charts/FunnelChart'

import HeatMap from '../components/charts/HeatMap'

import GraphChart from '../components/charts/GraphChart'

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
      <BarChartWithTooltip title="Bar Chart With Tooltip" />
      <DynamicBarChart title="Dynamic Bar Chart" />

      <PieChart title="Pie Chart"></PieChart>

      <FunnelChart title="Funnel Chart"></FunnelChart>

      <HeatMap title="HeatMap Chart"></HeatMap>

      <GraphChart title="Graph Chart"></GraphChart>
    </LayoutOrange>
  )
}
