import React from 'react'
import DataV from '../../components/datav'
import './index.less'

export default (props) => {
  console.log(props)
  // const [value, setValue] = useState('01')

  // const selectOnchange = e => {
  //   setValue(e.target.value)
  //   props.setValue(e.target.value)
  // }
  return (
    <>
      <DataV />
    </>
  )
}
