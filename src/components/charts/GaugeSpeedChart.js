import React, {useState, useEffect} from 'react'
import ReactEcharts from 'echarts-for-react'

export default function GaugeSpeedChart({title}) {
  const DEFAULT_OPTION = {
    series: [
      {
        type: 'gauge',
        axisLine: {
          lineStyle: {
            width: 30,
            color: [
              [0.3, '#67e0e3'],
              [0.7, '#37a2da'],
              [1, '#fd666d']
            ]
          }
        },
        pointer: {
          itemStyle: {
            // color: 'auto'
          }
        },
        axisTick: {
          distance: -30,
          length: 8,
          lineStyle: {
            color: '#fff',
            width: 2
          }
        },
        splitLine: {
          distance: -30,
          length: 30,
          lineStyle: {
            color: '#fff',
            width: 4
          }
        },
        axisLabel: {
          // color: 'auto',
          distance: 40,
          fontSize: 20
        },
        detail: {
          valueAnimation: true,
          formatter: '{value} km/h'
          // color: 'auto'
        },
        data: [
          {
            value: 70
          }
        ]
      }
    ]
  }

  const [option, setOption] = useState(DEFAULT_OPTION) // option change useState

  useEffect(() => {
    const timer = setInterval(function () {
      setOption({
        series: [
          {
            data: [
              {
                value: +(Math.random() * 100).toFixed(2)
              }
            ]
          }
        ]
      })
    }, 2000)

    return () => clearInterval(timer)
  })

  return (
    <>
      <div className="h-[380px] overflow-y-hidden  py-5 my-2">
        <h4>{title}</h4>

        <ReactEcharts option={option} style={{height: 400}} />
      </div>
    </>
  )
}
