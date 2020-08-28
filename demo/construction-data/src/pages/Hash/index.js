import React, { useEffect, useState } from 'react'
import { FullScreenContainer, BorderBox13, BorderBox2 } from '@jiaminghi/data-view-react'
import '../../components/datav/index.less'
import './index.less'
import { useParams, useHistory } from 'react-router-dom'
import TopHeader from './TopHeader'
import DigitalFlop from './DigitalFlop'
import qs from 'qs'

export default () => {
  const { hash, project } = useParams()
  const [title, setTitle] = useState(null)
  const [data, setData] = useState({})
  const [num, setNum] = useState({
    time: 0,
    epoch: 0,
    blockNum: 0,
    tradeNum: 0,
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
    if (project === 'supervision') {
      setTitle('工程监理项目')
      setNum({
        time: 100,
        epoch: 10,
        blockNum: 21638,
        tradeNum: 10,
      })
    } else if (project === 'recruit') {
      setTitle('招采项目')
      setNum({
        time: '2020-02-20',
        epoch: 10,
        blockNum: 21638,
        tradeNum: 10,
      })
    } else if (project === 'travel') {
      setTitle('全域旅游项目')
      setNum({
        time: 10,
        epoch: 10,
        blockNum: 21638,
        tradeNum: 10,
      })
    } else {
      setTitle('')
      setNum({
        time: 10,
        epoch: 0,
        blockNum: 0,
        tradeNum: 0,
      })
    }
  }, [])

  const style2 = {
    width: '120px',
    height: '50px',
    lineHeight: '50px',
    textAlign: 'center',
    marginLeft: '20px',
    marginTop: '20px',
  }

  const backHome = () => {
    console.log('home')
    history.push('/')
  }

  useEffect(() => {
    console.log(hash)
    const params = qs.stringify({ chainTxId: hash })
    fetch(`/api/tx?${params}`, {
      method: 'GET',
      mode: 'cors',
    })
      .then(res => {
        console.log(res)
        return res.json()
      })
      .then(
        result => {
          console.log(result)
          if (result.info) {
            setData(result.info)
          }
          // if (result.status.code === '000000') {
          //   setData(result.body)
          // }
        },
        error => {
          throw error
        }
      )
  }, [])

  function timestampToTime(timestamp) {
    var date = new Date(timestamp * 1000) //时间戳为10位需*1000，时间戳为13位的话不需乘1000

    var Y = date.getFullYear() + '-'

    var M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) + '-'

    var D = date.getDate() + ' '

    var h = date.getHours() + ':'

    var m = date.getMinutes() + ':'

    var s = date.getSeconds()

    return Y + M + D + h + m + s
  }

  return (
    <div id="data-view" className="hash">
      <FullScreenContainer>
        <TopHeader title={title} />
        {/* <div className="main-content"> */}
        <DigitalFlop num={num} />
        {/* </div> */}
        <BorderBox13>
          <BorderBox2 style={style2} className="backButton">
            <span onClick={backHome}>返回首页</span>
          </BorderBox2>
          <header>区块详情</header>
          <content>
            <table>
              <tbody>
                <tr>
                  <td>区块高度</td>
                  <td>216023</td>
                </tr>
                <tr>
                  <td>出块时间 </td>
                  <td>{timestampToTime(data.timeSpanSec)}</td>
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
