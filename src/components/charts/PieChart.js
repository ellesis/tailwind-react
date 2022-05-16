import React, { useState } from 'react'
import ReactEcharts from 'echarts-for-react'

export default function PieChart({ title }) {
  const option = {
    title: {
      text: 'user access source',
      subtext: 'Purely fictional',
      left: 'center'
    },
    tooltip: {
      trigger: 'item'
    },
    legend: {
      orient: 'vertical',
      left: 'left'
    },
    series: [
      {
        name: 'Access source',
        type: 'pie',
        radius: '50%',
        data: [
          { value: 1048, name: 'Search Engine' },
          { value: 735, name: 'Direct access' },
          { value: 580, name: 'email marketing' },
          { value: 484, name: 'affiliate ad' },
          { value: 300, name: 'video ad' }
        ],
        emphasis: {
          itemStyle: {
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowColor: 'rgba(0, 0, 0, 0.5)'
          }
        }
      }
    ]
  }

  const [count, setCount] = useState(0)
  function onChartReady(echarts) {
    console.log('echarts is ready', echarts)
  }
  function onChartClick(param, echarts) {
    console.log(param, echarts)
    setCount(count + 1)
  }
  function onChartLegendselectchanged(param, echarts) {
    console.log(param, echarts)
  }

  return (
    <div className="py-5 my-2">
      <h4>{title}</h4>
      <ReactEcharts
        option={option}
        style={{ height: 400 }}
        onChartReady={onChartReady}
        onEvents={{
          click: onChartClick,
          legendselectchanged: onChartLegendselectchanged
        }}
      />
      <div>Click Count: {count}</div>
      <div>Open console, see the log detail.</div>
    </div>
  )
}
