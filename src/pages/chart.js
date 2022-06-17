import React from 'react'

import LayoutOrange from '../layouts/LayoutOrange'

// Chart components
import LineChart from '../components/charts/LineChart'
import LineAreaChart from '../components/charts/LineAreaChart'

import BarChart from '../components/charts/BarChart'
import BarChartWithTooltip from '../components/charts/BarChartWithTooltip'
import DynamicBarChart from '../components/charts/DynamicBarChart'

import GaugeChart from '../components/charts/GaugeChart'
import GaugeGradeChart from '../components/charts/GaugeGradeChart'
import GaugeSpeedChart from '../components/charts/GaugeSpeedChart'

import PieChart from '../components/charts/PieChart'

import FunnelChart from '../components/charts/FunnelChart'

import Calendar from '../components/charts/Calendar'
import HeatMap from '../components/charts/HeatMap'

import GraphChart from '../components/charts/GraphChart'

import Chart from '../components/charts/Chart'
import bars from '../components/charts/chart-data/bars'

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

      <GaugeChart title="Gauge Chart"></GaugeChart>
      <GaugeGradeChart title="Gauge Speed Chart"></GaugeGradeChart>
      <GaugeSpeedChart title="Gauge Speed Chart"></GaugeSpeedChart>

      <PieChart title="Pie Chart"></PieChart>

      <FunnelChart title="Funnel Chart"></FunnelChart>

      <div style={{width: '50%', height: 300}}>
        <Chart options={bars} />
      </div>

      <Calendar title="Calendar"></Calendar>
      <HeatMap title="HeatMap Chart"></HeatMap>

      <GraphChart title="Graph Chart"></GraphChart>
    </LayoutOrange>
  )
}
