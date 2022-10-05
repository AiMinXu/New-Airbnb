import React, { memo } from 'react'
import { SpinWrapper } from './style'
import { Spin } from 'antd';
const Loading = memo(() => {

  return (
    <SpinWrapper >
      <Spin size="large" />
    </SpinWrapper>
  )
})

export default Loading
