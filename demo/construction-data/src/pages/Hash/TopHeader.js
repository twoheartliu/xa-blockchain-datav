import React, { useState } from 'react'

import { Decoration5, Decoration8 } from '@jiaminghi/data-view-react'

import './TopHeader.less'

export default props => {
  const [value, setValue] = useState('01')

  const selectOnchange = e => {
    setValue(e.target.value)
    props.setValue(e.target.value)
  }
  return (
    <div id="top-header">
      <Decoration8 className="header-left-decoration" />
      <Decoration5 className="header-center-decoration" />
      <Decoration8 className="header-right-decoration" reverse={true} />
      <div className="center-title">
        {props.title}
        <span>雄安区块链浏览器大屏</span>
      </div>
    </div>
  )
}
