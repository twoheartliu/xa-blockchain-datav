import React, { useEffect, useState } from 'react'
import { FullScreenContainer, BorderBox13, BorderBox2 } from '@jiaminghi/data-view-react'
import '../../components/datav/index.less'
import './index.less'
import { useParams, useHistory, Link } from 'react-router-dom'
import TopHeader from '../../components/datav/TopHeader'
import DigitalFlop from '../../components/datav/DigitalFlop'
import qs from 'qs'
import dayjs from 'dayjs'

export default () => {
  const { hash, project } = useParams()
  const [data, setData] = useState({
    timeSpanSec: null,
    createName: null,
    blockNumber: null,
    blockHash: null,
    dataHash: null,
    txId: null,
  })
  const [settings, setSettings] = useState({
    TopHeader: {},
    DigitalFlop: {
      time: `${dayjs().format('YYYY-MM-DD')}`,
      blockNum: null,
      tradeNum: null,
      nodes: null,
      codeNum: null,
    },
  })
  // supervision, recruit, travel

  // DigitalFlop: {
  //   time: '2020-02-20',
  //   epoch: 10,
  //   blockNum: 21638,
  //   tradeNum: 10,
  // },
  let history = useHistory()
  useEffect(() => {
    switch (project) {
      case 'supervise':
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
        })
        break
      case 'bidding':
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
        })
        break
      case 'travel':
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
        })
        break
      default:
        break
    }
  }, [project])

  const style2 = {
    width: '120px',
    height: '50px',
    lineHeight: '50px',
    textAlign: 'center',
    marginLeft: '20px',
    marginTop: '20px',
  }

  const backHome = () => {
    history.push({
      pathname: `/hash/${project}`,
      params: project,
    })
  }

  useEffect(() => {
    console.log(hash)
    const params = qs.stringify({ chainTxId: hash })
    fetch(`/api/query/${project}/tx?${params}`, {
      method: 'GET',
      mode: 'cors',
    })
      .then(res => {
        return res.json()
      })
      .then(
        result => {
          if (result.info) {
            setData(result.info)
          }
        },
        error => {
          throw error
        }
      )
  }, [hash])

  return (
    <div id="data-view" className="hash">
      <FullScreenContainer>
        <TopHeader settings={settings.TopHeader} />
        {/* <div className="main-content"> */}
        <DigitalFlop settings={settings.DigitalFlop} />
        {/* </div> */}
        <BorderBox13>
          <BorderBox2 style={style2} className="backButton">
            <span onClick={backHome}>返回首页</span>
            {/*<Link to={{*/}
            {/*  pathname: '/',*/}
            {/*  state: {project}*/}
            {/*}}>返回首页</Link>*/}
          </BorderBox2>
          <header>区块详情</header>
          <content>
            <table>
              <tbody>
                <tr>
                  <td>出块时间</td>
                  <td>{dayjs.unix(data.timeSpanSec).format('YYYY-MM-DD hh:mm:ss')}</td>
                </tr>
                <tr>
                  <td>上链节点</td>
                  <td>{data.createName || '--'}</td>
                </tr>
                <tr>
                  <td>区块数量</td>
                  <td>{data.blockNumber || '--'}</td>
                </tr>
                <tr>
                  <td>区块哈希 </td>
                  <td>{data.blockHash || '--'}</td>
                </tr>
                <tr>
                  <td>上链数据哈希</td>
                  <td>{data.dataHash || '--'}</td>
                </tr>
                <tr>
                  <td>交易ID</td>
                  <td>{data.txId || '--'}</td>
                </tr>
              </tbody>
            </table>
          </content>
        </BorderBox13>
      </FullScreenContainer>
    </div>
  )
}
