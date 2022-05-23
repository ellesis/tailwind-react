import React from 'react'
import ReactEcharts from 'echarts-for-react'

export default function GaugeChart({title}) {
  const option = {
    series: [
      {
        type: 'gauge',
        detail: {formatter: '{value}%'},
        data: [{value: 50}],
        min: 0,
        max: 100,
        startAngle: 0,
        endAngle: 180,
        clockwise: false //anit-clockwise
        // clockwise: true
      }
    ]
  }

  return (
    <>
      <h4>{title}</h4>
      <div className="h-[300px] overflow-y-hidden py-5 my-2">
        <ReactEcharts option={option} style={{height: 400}} />
      </div>
    </>
  )
}
