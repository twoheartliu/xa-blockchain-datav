import React, { useState, useEffect } from 'react'

import { ScrollBoard } from '@jiaminghi/data-view-react'

import './RankingBoard.less'

const getConfig = settings => {
  return {
    ...settings,
    // header: ['日期', '城市节点', '流量总计'],
    // data: [
    //   ['行1列1', '行1列2', '行1列3'],
    //   ['行2列1', '行2列2', '行2列3'],
    //   ['行3列1', '行3列2', '行3列3'],
    //   ['行4列1', '行4列2', '行4列3'],
    //   ['行5列1', '行5列2', '行5列3'],
    //   ['行6列1', '行6列2', '行6列3'],
    //   ['行7列1', '行7列2', '行7列3'],
    //   ['行8列1', '行8列2', '行8列3'],
    //   ['行9列1', '行9列2', '行9列3'],
    //   ['行10列1', '行10列2', '行10列3'],
    // ],
    // index: true,
    columnWidth: [150, 200, 100],
    align: ['center'],
    rowNum: 10,
    headerBGC: '#1981f6',
    headerHeight: 45,
  }
}

export default props => {
  const [config, setConfig] = useState({})
  useEffect(() => {
    setConfig(getConfig(props.settings))
  }, [props.settings])

  return (
    <div id="ranking-board">
      <div className="ranking-board-title">记账节点流量使用情况</div>
      <ScrollBoard config={config} />
    </div>
  )
}
