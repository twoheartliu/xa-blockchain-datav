import React, { useState, useEffect } from 'react'

import { DigitalFlop, Decoration10 } from '@jiaminghi/data-view-react'

import './Flop.less'
// import './DigitalFlop.less'

function getData(data) {
  return [
    {
      title: '最新出块时间',
      number: {
        number: [],
        content: '2020-08-15',
        textAlign: 'center',
        style: {
          fill: '#4d99fc',
          fontWeight: 'bold',
          fontSize: 20,
        },
      },
      unit: '',
    },
    {
      title: '最新Epoch',
      number: {
        number: [data.epoch],
        content: '{nt}',
        textAlign: 'center',
        style: {
          fill: '#f46827',
          fontWeight: 'bold',
        },
      },
      unit: '',
    },
    {
      title: '最新区块数量',
      number: {
        number: [data.blockNum],
        content: '{nt}',
        textAlign: 'center',
        style: {
          fill: '#4d99fc',
          fontWeight: 'bold',
        },
      },
      unit: '',
    },
    {
      title: '总交易数',
      number: {
        number: [randomExtend(5, 10)],
        content: '{nt}',
        textAlign: 'center',
        style: {
          fill: '#f46827',
          fontWeight: 'bold',
        },
      },
      unit: '',
    },
    {
      title: '最新区块交易数量',
      number: {
        number: [data.tradeNum],
        content: '{nt}',
        textAlign: 'center',
        style: {
          fill: '#40faee',
          fontWeight: 'bold',
        },
      },
      unit: '',
    },
    {
      title: '区块高度',
      number: {
        number: [randomExtend(5, 10)],
        content: '{nt}',
        textAlign: 'center',
        style: {
          fill: '#4d99fc',
          fontWeight: 'bold',
          fontSize: '30',
        },
      },
      unit: '',
    },
  ]
}

function randomExtend(minNum, maxNum) {
  if (arguments.length === 1) {
    return parseInt(Math.random() * minNum + 1, 10)
  } else {
    return parseInt(Math.random() * (maxNum - minNum + 1) + minNum, 10)
  }
}

export default props => {
  const [digitalFlopData, setData] = useState([])
  useEffect(() => {
    setData(getData(props.num))
    // const timer = setInterval(createData, 30000)

    // return () => clearInterval(timer)
  }, [props.num])

  // function createData() {
  //   setData(getData())
  // }

  return (
    <div id="flop">
      {digitalFlopData.map(item => (
        <div className="digital-flop-item" key={item.title}>
          <div className="digital-flop-title">{item.title}</div>
          <div className="digital-flop">
            <DigitalFlop config={item.number} />
            <div className="unit">{item.unit}</div>
          </div>
        </div>
      ))}

      <Decoration10 />
    </div>
  )
}
