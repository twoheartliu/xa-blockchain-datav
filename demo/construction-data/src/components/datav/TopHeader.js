import React, { useState } from 'react'

import { Decoration5, Decoration8 } from '@jiaminghi/data-view-react'

import './TopHeader.less'

export default props => {
  const [value, setValue] = useState('01')

  const selectOnchange = e => {
    setValue(e.target.value)
    props.setValue(e.target.value)
  }

  console.log(props.value)
  return (
    <div id="top-header">
      <Decoration8 className="header-left-decoration" />
      <Decoration5 className="header-center-decoration" />
      <Decoration8 className="header-right-decoration" reverse={true} />
      <div className="center-title">
        {props.settings.title}
        <span>雄安区块链</span>
      </div>
      {props.value ?
        <div className="select">
          <label htmlFor="subject">选择项目</label>
          <select name="subject" id="subject" value={value} onChange={selectOnchange}>
            <option value="01">工程监理项目</option>
            <option value="02">招采项目</option>
            <option value="03">全域旅游项目</option>
          </select>
        </div>
        : null
      }
    </div>
  )
}
