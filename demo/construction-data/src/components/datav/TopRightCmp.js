import React from 'react'

import { Decoration3, Charts } from '@jiaminghi/data-view-react'

import './TopRightCmp.less'

const option = {
  legend: {
    data: [
      {
        name: '交易数/s（TPS）',
        color: '#00baff',
      },
      {
        name: '交易数/Min（TPM）',
        color: '#ff5ca9',
      },
      {
        name: '块/Min',
        color: '#3de7c9',
      },
    ],
    textStyle: {
      fill: '#fff',
    },
  },
  xAxis: {
    data: ['20:00', '20: 10', '20: 20', '20: 30', '20: 40', '20: 50', '21: 00'],
    axisLine: {
      style: {
        stroke: '#999',
      },
    },
    axisLabel: {
      style: {
        fill: '#999',
      },
    },
    axisTick: {
      show: false,
    },
  },
  yAxis: {
    data: 'value',
    splitLine: {
      show: false,
    },
    axisLine: {
      style: {
        stroke: '#999',
      },
    },
    axisLabel: {
      style: {
        fill: '#999',
      },
    },
    axisTick: {
      show: false,
    },
    min: 0,
    max: 8,
  },
  series: [
    {
      name: '交易数/s（TPS）',
      data: [2.5, 3.5, 6.5, 6.5, 7.5, 6.5, 2.5],
      type: 'bar',
      barStyle: {
        fill: 'rgba(0, 186, 255, 0.4)',
      },
    },
    {
      name: '交易数/Min（TPM）',
      data: [2.5, 3.5, 6.5, 6.5, 7.5, 6.5, 2.5],
      type: 'line',
      lineStyle: {
        stroke: '#ff5ca9',
      },
      linePoint: {
        radius: 4,
        style: {
          fill: '#ff5ca9',
          stroke: 'transparent',
        },
      },
    },
    {
      name: '块/Min',
      data: [1.3, 2.3, 5.3, 5.3, 6.3, 5.3, 1.3],
      type: 'line',
      smooth: true,
      lineArea: {
        show: true,
        gradient: ['rgba(55, 162, 218, 0.6)', 'rgba(55, 162, 218, 0)'],
      },
      lineStyle: {
        lineDash: [5, 5],
      },
      linePoint: {
        radius: 4,
        style: {
          fill: '#00db95',
        },
      },
    },
    // {
    //   data: [0.2, 1.2, 4.2, 4.2, 5.2, 4.2, 0.2],
    //   type: 'line',
    //   name: '供配电系统',
    //   lineArea: {
    //     show: true,
    //     gradient: ['rgba(245, 217, 79, 0.8)', 'rgba(245, 217, 79, 0.2)'],
    //   },
    //   lineStyle: {
    //     stroke: '#f5d94e',
    //   },
    //   linePoint: {
    //     radius: 4,
    //     style: {
    //       fill: '#f5d94e',
    //       stroke: 'transparent',
    //     },
    //   },
    // },
  ],
}

const style = { width: '200px', height: '20px' }

export default () => (
  <div className="top-right-cmp">
    <div className="chart-name">
      区块产出与交易趋势
      <Decoration3 style={style} />
    </div>
    <Charts option={option} />
  </div>
)
