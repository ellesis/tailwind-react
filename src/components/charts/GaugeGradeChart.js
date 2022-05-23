import React from 'react'
import ReactEcharts from 'echarts-for-react'

const GaugeGradeChart = ({title}) => {
  const option = {
    series: [
      {
        type: 'gauge',
        // gauge angle setting & value
        startAngle: 180,
        endAngle: 0,
        min: 0,
        max: 1,
        splitNumber: 10,
        axisLine: {
          lineStyle: {
            width: 40,
            //gauge color setting
            color: [
              [0.3, '#43C716'],
              [0.7, '#FFC712'],
              [1, '#CE3201']
            ]
          }
        },
        /*
        // Triangle pointer
        pointer: {
          icon: 'path://M12.8,0.7l12,40.1H0.7L12.8,0.7z',
          length: '12%',
          width: 20,
          offsetCenter: [0, '-45%'],
          itemStyle: {
            color: 'auto'
          }
        },
        */
        pointer: {
          icon: 'path://M2090.36389,615.30999 L2090.36389,615.30999 C2091.48372,615.30999 2092.40383,616.194028 2092.44859,617.312956 L2096.90698,728.755929 C2097.05155,732.369577 2094.2393,735.416212 2090.62566,735.56078 C2090.53845,735.564269 2090.45117,735.566014 2090.36389,735.566014 L2090.36389,735.566014 C2086.74736,735.566014 2083.81557,732.63423 2083.81557,729.017692 C2083.81557,728.930412 2083.81732,728.84314 2083.82081,728.755929 L2088.2792,617.312956 C2088.32396,616.194028 2089.24407,615.30999 2090.36389,615.30999 Z',
          length: '58%',
          width: 16,
          offsetCenter: [0, '5%']
        },
        axisTick: {
          length: 12,
          lineStyle: {
            color: 'auto',
            width: 2
          }
        },
        splitLine: {
          length: 20,
          lineStyle: {
            color: 'auto',
            width: 5
          }
        },
        //value range check and set point
        axisLabel: {
          color: '#464646',
          fontSize: 20,
          distance: -70,
          formatter: function (value) {
            if (value === 0.9) {
              return '  High'
            } else if (value === 0.5) {
              return 'Medium'
            } else if (value === 0.1) {
              return 'Low'
            }
            return ''
          }
        },
        // Risk Value print position
        title: {
          offsetCenter: [0, '15%'],
          fontSize: 30
        },
        // setting Value position & format
        detail: {
          fontSize: 30,
          offsetCenter: [0, '30%'], // value position
          valueAnimation: true,
          formatter: function (value) {
            // return 'Risk' + Math.round(value * 100)
            return Math.round(value * 100)
          },
          color: 'auto'
        },
        // out line box and value
        /*
        detail: {
          backgroundColor: '#fff',
          borderColor: '#999',
          borderWidth: 2,
          width: '60%',
          lineHeight: 40,
          height: 40,
          borderRadius: 8,
          offsetCenter: [0, '35%'],
          valueAnimation: true,
          formatter: function (value) {
            return '{value|' + value.toFixed(0) + '}{unit|km/h}'
          },
          rich: {
            value: {
              fontSize: 50,
              fontWeight: 'bolder',
              color: '#777'
            },
            unit: {
              fontSize: 20,
              color: '#999',
              padding: [0, 0, -20, 10]
            }
          }
        },
        */
        data: [
          {
            name: 'Risk Value',
            value: 0.8
          }
        ]
      }
    ]
  }

  // Set style hidden for gauge below circle part
  return (
    <>
      <h4>{title}</h4>
      <div className="h-[240px] overflow-y-hidden">
        <ReactEcharts
          option={option}
          style={{
            width: '100%',
            height: '350px'
          }}
        />
      </div>
    </>
  )
}

export default GaugeGradeChart
