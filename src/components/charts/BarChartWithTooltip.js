// https://codesandbox.io/s/xenodochial-leftpad-z3q5f?file=/src/singlebarchart.js:24-937

import React from 'react'
import ReactEcharts from 'echarts-for-react'

export default function BarChartWithTooltip({ title }) {
  const option = {
    tooltip: {
      trigger: 'axis'
    },
    toolbox: {
      feature: {
        saveAsImage: {}
      }
    },
    xAxis: {
      type: 'category',
      data: ['Low', 'Medium', 'High', 'Urgent']
    },
    yAxis: {
      type: 'value'
    },
    series: [
      {
        name: 'Ticket Priority',
        type: 'bar',
        radius: ['40%', '70%'],
        avoidLabelOverlap: false,
        itemStyle: {
          borderRadius: 10,
          borderColor: '#fff',
          borderWidth: 2
        },
        label: {
          show: false,
          position: 'center'
        },
        emphasis: {
          label: {
            show: true,
            fontSize: '40',
            fontWeight: 'bold'
          }
        },
        labelLine: {
          show: false
        },
        data: [120, 200, 150, 80]
      }
    ]
  }

  return (
    <div className="py-5 col-6 card mt-2 mb-2 rounded-3 shadow-sm">
      <h4>{title}</h4>
      <ReactEcharts option={option} />
    </div>
  )
}
