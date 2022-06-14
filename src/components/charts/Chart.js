import React, {useRef, useEffect} from 'react'
// import echarts from 'echarts'
import * as echarts from 'echarts'
// https://echarts.apache.org/handbook/en/basics/release-note/v5-upgrade-guide/

export default function Chart({options}) {
  const myChart = useRef(null)

  useEffect(() => {
    const chart = echarts.init(myChart.current)
    chart.setOption(options)
  }, [options, ResizeObserver])

  return (
    <div
      ref={myChart}
      style={{
        width: '100%',
        height: '100%'
      }}
    ></div>
  )
}
