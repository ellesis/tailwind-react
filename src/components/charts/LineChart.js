import React from 'react'
import ReactEcharts from 'echarts-for-react'

export default function LineChart() {
  const option1 = {
    toolbox: {
      feature: {
        saveAsImage: {}
      }
    },
    xAxis: {
      type: 'category',
      data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
    },
    yAxis: {
      type: 'value'
    },
    series: [
      {
        type: 'line',
        data: [820, 932, 901, 934, 1290, 1330, 1320]
      }
    ]
  }

  return (
    <>
      <div className="relative flex flex-col w-full min-w-0 break-words bg-white  mb-6 shadow-lg rounded">
        <div className="rounded-t mb-0 px-4 py-3 bg-transparent">
          {/* chart title */}
          <div className="flex flex-wrap items-center">
            <div className="relative w-full max-w-full flex-grow flex-1">
              <h6 className="uppercase text-slate-400 mb-1 text-xs font-semibold">Performance</h6>
              <h2 className="text-slate-700 text-xl font-semibold">Total orders</h2>

              {/* Line Chart */}
              <ReactEcharts option={option1} />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
