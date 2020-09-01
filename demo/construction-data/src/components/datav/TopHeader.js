import React, { useState } from 'react'

import { Decoration5, Decoration8 } from '@jiaminghi/data-view-react'
import { Link } from 'react-router-dom'
import './TopHeader.less'

export default props => {
  // const [value, setValue] = useState('01')

  const selectOnchange = e => {
    props.setValue(e.target.value)
  }

  return (
    <div id="top-header">
      <Decoration8 className="header-left-decoration" />
      <Decoration5 className="header-center-decoration" />
      <Decoration8 className="header-right-decoration" reverse={true} />
      <div className="center-title">
        {props.settings.title}
        {/* <Link to="/hash/bidding/134640e54b7f4088aa4437d7bc70c78e">goto hash</Link> */}
        <span>雄安区块链</span>
      </div>
      {props.value ? (
        <div className="select">
          <label htmlFor="subject">选择项目</label>
          <select name="subject" id="subject" value={props.value} onChange={selectOnchange}>
            <option value="01">招采项目</option>
            <option value="02">工程监理项目</option>
            <option value="03">全域旅游项目</option>
          </select>
        </div>
      ) : null}
    </div>
  )
}
