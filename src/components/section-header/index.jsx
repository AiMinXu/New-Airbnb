import IconArrowRight from '@/assets/svg/icon-arrow-right'
import React, { memo } from 'react'
import { SectionHeaderWapper } from './style'

const SectionHeader = memo((props) => {
  const { title, subtitle } = props

  return (
    <SectionHeaderWapper>
      <div className='text'>
        <div>
          <h2 className='title'>{title}</h2>
          {subtitle && <div className='subtitle'>{subtitle}</div>}
        </div>
        <div className='right-icon'>
          <IconArrowRight />
        </div>
      </div>
    </SectionHeaderWapper>
  )
})

export default SectionHeader
