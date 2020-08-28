import React from 'react'

import { WaterLevelPond } from '@jiaminghi/data-view-react'

import './WaterLevelChart.less'

const config = {
  data: [20],
  shape: 'round',
  waveHeight: 25,
  waveNum: 2,
}

const config2 = {
  data: [18],
  shape: 'round',
  waveHeight: 25,
  waveNum: 2,
}

export default () => {
  return (
    <>
      <div id="water-level-chart">
        <div className="water-level-chart-title">TPS</div>
        <div className="water-level-chart-details">
          运行参数<span>10</span>GB
        </div>
        <div className="water-level-chart-details">
          负载状态<span>低</span>
        </div>
        <div className="chart-container">
          <WaterLevelPond config={config} />
        </div>
      </div>
      <div id="water-level-chart">
        <div className="water-level-chart-title">容量</div>
        <div className="water-level-chart-details">
          运行参数<span>10</span>GB
        </div>
        <div className="water-level-chart-details">
          负载状态<span>低</span>
        </div>
        <div className="chart-container">
          <WaterLevelPond config={config2} />
        </div>
      </div>
    </>
  )
}
