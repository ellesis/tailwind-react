import React, { useRef } from 'react'
import ReactEcharts from 'echarts-for-react'

export default function FunnelChart({ title }) {
  const option = {
    title: {
      text: 'FunnelChart',
      subtext: 'FunnelChart-sub title'
    },
    tooltip: {
      trigger: 'item',
      formatter: '{a} <br/>{b} : {c}%'
    },
    toolbox: {
      feature: {
        dataView: { readOnly: false },
        restore: { show: true, title: 'Reload' },
        saveAsImage: {}
      }
    },
    series: [
      {
        name: 'expected',
        type: 'funnel',
        left: '10%',
        width: '80%',
        label: {
          formatter: '{b}expected'
        },
        labelLine: {
          show: false
        },
        itemStyle: {
          opacity: 0.7
        },
        emphasis: {
          label: {
            position: 'inside',
            formatter: '{b}expected: {c}%'
          }
        },
        data: [
          { value: 60, name: 'Visit' },
          { value: 40, name: 'Consulting' },
          { value: 20, name: 'Order' },
          { value: 80, name: 'Click' },
          { value: 100, name: 'Show' }
        ]
      },
      {
        name: 'actual',
        type: 'funnel',
        left: '10%',
        width: '80%',
        maxSize: '80%',
        label: {
          position: 'inside',
          formatter: '{c}%',
          color: '#fff'
        },
        itemStyle: {
          opacity: 0.5,
          borderColor: '#fff',
          borderWidth: 2
        },
        emphasis: {
          label: {
            position: 'inside',
            formatter: '{b}Actual: {c}%'
          }
        },
        data: [
          { value: 30, name: 'Visit' },
          { value: 10, name: 'Consulting' },
          { value: 5, name: 'Order' },
          { value: 50, name: 'Click' },
          { value: 80, name: 'Show' }
        ],
        // Ensure outer shape will not be over inner shape when hover.
        z: 100
      }
    ]
  }

  const instance = useRef(null)

  function clickBtn() {
    const base64 = instance.current.getEchartsInstance().getDataURL()
    const img = new Image()
    img.src = base64
    const newWin = window.open('', '_blank')
    newWin.document.write(img.outerHTML)
  }

  return (
    <div className="py-5 col-6 card mt-2 mb-2 rounded-3 shadow-sm">
      <h4>{title}</h4>
      <ReactEcharts ref={instance} option={option} style={{ height: 400 }} />
      <div>
        <button onClick={clickBtn}>click here to get the DataURL of chart.</button>
      </div>
    </div>
  )
}
