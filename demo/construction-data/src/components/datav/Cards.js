import React, { useState, useEffect } from 'react'

import { WaterLevelPond } from '@jiaminghi/data-view-react'

import './Cards.less'

export default () => {
  const config = {
    data: [55],
    shape: 'round',
  }
  return (
    <div id="cards">
      <WaterLevelPond config={config} style={{ width: '150px', height: '150px' }} />
    </div>
  )
}
