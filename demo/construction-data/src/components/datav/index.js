import React, { useState, useEffect } from 'react'
import { FullScreenContainer } from '@jiaminghi/data-view-react'
import TopHeader from './TopHeader'
import DigitalFlop from './DigitalFlop'
import RankingBoard from './RankingBoard'
import RoseChart from './RoseChart'
import WaterLevelChart from './WaterLevelChart'
import ScrollBoard from './ScrollBoard'
import Cards from './Cards'
import TopRightCmp from './TopRightCmp'
import quanpingImg from '../../assets/quanping.svg'
import FullScrenn from '../../utils/fullScreen'
import dayjs from 'dayjs'

import './index.less'


const ScrollBoards = {
  header: ['出块时间', '数据索引', '区块高度', '区块哈希'],
  data: [
    [
      `${dayjs().format('YYYY-MM-DD')}`,
      '公告名称',
      '438',
      '34717505f7c4c140e154df9ee0e2b45deae16f2b7240f3a93810452145add992',
    ],
    [
      `${dayjs().subtract(1, 'day').format('YYYY-MM-DD')}`,
      '验证最高限价及公告',
      '430',
      '634de7a1e61f3de98e4b0ac99de929d45d38850baf95fe68d8eb05b92ec0937f',
    ],
    [
      `${dayjs().subtract(2, 'day').format('YYYY-MM-DD')}`,
      '后审变更公告',
      '425',
      '63d7e8de7f8b073749e67336faf56474064377bb50cb208199f249ee8b584eb7',
    ],
    [
      `${dayjs().subtract(3, 'day').format('YYYY-MM-DD')}`,
      '政府采购',
      '418',
      '4dfc4764d7b7dbeced6d5847861f126d38e35aef338a07e9bba3d6cc59b9f391',
    ],
    [
      `${dayjs().subtract(4, 'day').format('YYYY-MM-DD')}`,
      '公告名称',
      '409',
      '34717505f7c4c140e154df9ee0e2b45deae16f2b7240f3a93810452145add992',
    ],
    [
      `${dayjs().subtract(5, 'day').format('YYYY-MM-DD')}`,
      '验证最高限价及公告',
      '401',
      '634de7a1e61f3de98e4b0ac99de929d45d38850baf95fe68d8eb05b92ec0937f',
    ],
    [
      `${dayjs().subtract(6, 'day').format('YYYY-MM-DD')}`,
      '后审变更公告',
      '389',
      '63d7e8de7f8b073749e67336faf56474064377bb50cb208199f249ee8b584eb7',
    ],
    [
      `${dayjs().subtract(7, 'day').format('YYYY-MM-DD')}`,
      '政府采购',
      '377',
      '4dfc4764d7b7dbeced6d5847861f126d38e35aef338a07e9bba3d6cc59b9f391',
    ],
    [
      `${dayjs().subtract(8, 'day').format('YYYY-MM-DD')}`,
      '后审变更公告',
      '365',
      '4dfc4764d7b7dbeced6d5847861f126d38e35aef338a07e9bba3d6cc59b9f391',
    ],
  ],
}
const RankingBoards = {
  header: ['日期', '城市节点', '流量总计'],
  data: [
    ['2020-08-17', '公共记账节点1', '0.001'],
    ['2020-08-17', '公共排序节点城市', '0.001'],
    ['2020-08-18', '公共记账节点1', '0.001'],
    ['2020-08-18', '公共排序节点城市', '0.003'],
    ['2020-08-19', '公共记账节点1', '0.001'],
    ['2020-08-19', '公共排序节点城市', '0.002'],
    ['2020-08-20', '公共排序节点城市', '0.002'],
    ['2020-08-20', '公共记账节点1', '0.001'],
    ['2020-08-21', '公共记账节点1', '0.001'],
    ['2020-08-24', '公共排序节点城市', '0.001'],
    ['2020-08-24', '公共记账节点1', '0.001'],
    ['2020-08-25', '公共排序节点城市', '0.001'],
    ['2020-08-25', '公共记账节点1', '0.001'],
    ['2020-08-26', '公共排序节点城市', '0.001'],
    ['2020-08-26', '公共记账节点1', '0.002'],
    ['2020-08-27', '公共排序节点城市', '0.001'],
    ['2020-08-27', '公共记账节点1', '0.001'],
  ],
}
export default () => {
  const [value, setValue] = useState('01')
  const [full, setFull] = useState(false)
  const [settings, setSettings] = useState({
    TopHeader: {},
    DigitalFlop: {
      time: `${dayjs().format('YYYY-MM-DD')}`,
      blockNum: null,
      tradeNum: null,
      nodes: null,
      codeNum: null,
    },
    ScrollBoard: {
      header: [],
      data: [],
    },
    RankingBoard: {
      header: [],
      data: []
    }
  })


  useEffect(() => {
    switch (value) {
      case '01':
        setSettings({
          TopHeader: {
            title: '工程监理项目',
          },
          DigitalFlop: {
            time: `${dayjs().format('YYYY-MM-DD')}`,
            blockNum: 82124,
            tradeNum: 217556,
            nodes: 3,
            codeNum: 1,
          },
          ScrollBoard: ScrollBoards,
          RankingBoard: RankingBoards
        })
        break
      case '02':
        setSettings({
          TopHeader: {
            title: '招采项目',
          },
          DigitalFlop: {
            time: `${dayjs().format('YYYY-MM-DD')}`,
            blockNum: 77,
            tradeNum: 111,
            nodes: 3,
            codeNum: 1,
          },
          ScrollBoard: ScrollBoards,
          RankingBoard: RankingBoards
        })
        break
      case '03':
        setSettings({
          TopHeader: {
            title: '全域旅游项目',
          },
          DigitalFlop: {
            time: `${dayjs().format('YYYY-MM-DD')}`,
            blockNum: 82124,
            tradeNum: 217556,
            nodes: 3,
            codeNum: 1,
          },
          ScrollBoard: ScrollBoards,
          RankingBoard: RankingBoards
        })
        break
      default:
        break
    }
  }, [value])

  const changeFull = () => {
    // FullScrenn.enterFullScreen()
    setFull(!full)
    if (full) {
      //退出全屏
      FullScrenn.exitFullScreen()
    } else {
      //进入全屏
      FullScrenn.enterFullScreen()
    }
    // setFull(true)
  }

  return (
    <div id="data-view">
      <FullScreenContainer>
        <TopHeader setValue={setValue} value={value} settings={settings.TopHeader} />
        <div className="main-content">
          <DigitalFlop settings={settings.DigitalFlop} />
          <div className="block-left-right-content">
            {/* 记账节点流量使用情况 */}
            <RankingBoard settings={settings.RankingBoard} />
            <div className="block-top-bottom-content">
              <div className="block-top-content">
                {/* 区块列表 */}
                <ScrollBoard settings={settings.ScrollBoard} />
                {/* 负载比例 */}
                <WaterLevelChart />
                {/* <WaterLevelChart /> */}
              </div>
              <div className="block-top-content">
                {/* charts */}
                <TopRightCmp />
              </div>
            </div>
          </div>
        </div>
        <div className={`img ${full ? 'full' : null}`} onClick={changeFull}>
          <img src={quanpingImg} alt="" />
        </div>
      </FullScreenContainer>
    </div>
  )
}
