import React, { memo, useCallback, useState } from 'react'
import SectionFooter from '@/components/section-footer'
import SectionHeader from '@/components/section-header'
import SectionRooms from '@/components/section-rooms'
import SectionTabs from '@/components/section-tabs'
import { SectionV2Wrapper } from './style'

const HomeSectionV2 = memo((props) => {
  const { infoData } = props
  //数据转换
  const initialName = Object.keys(infoData.dest_list)[0]
  const [name, setName] = useState(initialName)
  const tabNames = infoData.dest_address?.map(item => item.name)

  const tabClickHandle = useCallback((index, name) => {
    setName(name)
  }, [])

  return (
    <SectionV2Wrapper>
      <SectionHeader title={infoData.title} subtitle={infoData.subtitle} />
      <SectionTabs tabNames={tabNames} tabClick={tabClickHandle} />
      <SectionRooms itemWidth='33.3333%' roomList={infoData.dest_list?.[name]} />
      <SectionFooter name={name} />
    </SectionV2Wrapper>
  )
})

export default HomeSectionV2
