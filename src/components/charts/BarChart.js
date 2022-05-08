import React from 'react'
import ReactEcharts from 'echarts-for-react'

export default function BarChart() {
  const option = {
    title: {
      text: 'Bar Chart'
    },
    toolbox: {
      feature: {
        saveAsImage: {}
      }
    },
    xAxis: {
      type: 'category',
      data: ['Matcha Latte', 'Milk Tea', 'Cheese Cocoa', 'Walnut Brownie']
    },
    yAxis: {},
    series: [
      {
        type: 'bar',
        name: '2015',
        data: [89.3, 92.1, 94.4, 85.4]
      },
      {
        type: 'bar',
        name: '2016',
        data: [95.8, 89.4, 91.2, 76.9]
      },
      {
        type: 'bar',
        name: '2017',
        data: [97.7, 83.1, 92.5, 78.1]
      }
    ]
  }

  return (
    <>
      <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded">
        <div className="rounded-t mb-0 px-4 py-3 bg-transparent">
          <div className="flex flex-wrap items-center">
            <div className="relative w-full max-w-full flex-grow flex-1">
              <h6 className="uppercase text-slate-400 mb-1 text-xs font-semibold">Tea Order</h6>
              <h2 className="text-slate-700 text-xl font-semibold">Total orders</h2>
            </div>
          </div>
        </div>
        <div className="p-4 flex-auto ">
          {/* Line Chart */}
          <ReactEcharts option={option} />
        </div>
      </div>
    </>
  )
}
