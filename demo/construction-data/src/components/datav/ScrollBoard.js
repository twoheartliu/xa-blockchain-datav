import React, { useEffect, useState } from 'react'

import { ScrollBoard } from '@jiaminghi/data-view-react'

import './ScrollBoard.less'

export default props => {
  // const config = {
  //   header: ['时间', '数据索引', '区块高度', 'hash'],
  //   data: [
  //     ['2019-07-01 19:25:00', '路面危害-松散', '5', 'xxxxxxx'],
  //     ['2019-07-02 17:25:00', '路面危害-路面油污清理', '13', 'xxxxxxx'],
  //     ['2019-07-03 16:25:00', '交安设施-交通标志牌结构', '6', 'xxxxxxx'],
  //     ['2019-07-04 15:25:00', '路基危害-防尘网', '2', 'xxxxxxx'],
  //     ['2019-07-05 14:25:00', '交安设施-交通标志牌结构', '1', 'xxxxxxx'],
  //     ['2019-07-06 13:25:00', '路面危害-松散', '3', 'xxxxxxx'],
  //     ['2019-07-07 12:25:00', '路基危害-防尘网', '4', 'xxxxxxx'],
  //     ['2019-07-08 11:25:00', '路面危害-路面油污清理', '2', 'xxxxxxx'],
  //     ['2019-07-09 10:25:00', '交安设施-交通标志牌结构', '5', 'xxxxxxx'],
  //     ['2019-07-10 09:25:00', '路基危害-防尘网', '3', 'xxxxxxx'],
  //   ],
  //   index: true,
  //   columnWidth: [50, 170, 300],
  //   align: ['center'],
  //   rowNum: 7,
  //   headerBGC: '#1981f6',
  //   headerHeight: 45,
  //   oddRowBGC: 'rgba(0, 44, 81, 0.8)',
  //   evenRowBGC: 'rgba(10, 29, 50, 0.8)',
  // }

  const getConfig = settings => {
    return {
      // header: ['时间', '数据索引', '区块高度', 'hash'],
      // data: [
      //   ['2019-07-01 19:25:00', '路面危害-松散', '5', 'xxxxxxx'],
      //   ['2019-07-02 17:25:00', '路面危害-路面油污清理', '13', 'xxxxxxx'],
      //   ['2019-07-03 16:25:00', '交安设施-交通标志牌结构', '6', 'xxxxxxx'],
      //   ['2019-07-04 15:25:00', '路基危害-防尘网', '2', 'xxxxxxx'],
      //   ['2019-07-05 14:25:00', '交安设施-交通标志牌结构', '1', 'xxxxxxx'],
      //   ['2019-07-06 13:25:00', '路面危害-松散', '3', 'xxxxxxx'],
      //   ['2019-07-07 12:25:00', '路基危害-防尘网', '4', 'xxxxxxx'],
      //   ['2019-07-08 11:25:00', '路面危害-路面油污清理', '2', 'xxxxxxx'],
      //   ['2019-07-09 10:25:00', '交安设施-交通标志牌结构', '5', 'xxxxxxx'],
      //   ['2019-07-10 09:25:00', '路基危害-防尘网', '3', 'xxxxxxx'],
      // ],
      ...settings,
      index: true,
      columnWidth: [100, 200, 200, 200],
      align: ['center'],
      rowNum: 8,
      headerBGC: '#1981f6',
      headerHeight: 45,
      oddRowBGC: 'rgba(0, 44, 81, 0.8)',
      evenRowBGC: 'rgba(10, 29, 50, 0.8)',
    }
  }
  const [config, setConfig] = useState({})
  useEffect(() => {
    setConfig(getConfig(props.settings))
  }, [props.settings])

  return (
    <div id="scroll-board">
      <ScrollBoard config={config} />
    </div>
  )
}
