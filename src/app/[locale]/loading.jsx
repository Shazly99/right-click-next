import { Spin } from 'antd'
import React from 'react'

const loading = () => {
  return (
    <div className='fixed top-0 bottom-0 right-0 left-0 ' style={{background:'red'}}> 
      <Spin />
    </div>
  )
}

export default loading
