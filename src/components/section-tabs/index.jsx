// im
import ScrollView from '@/base-ui/scroll-view/scroll-view'
import classNames from 'classnames'
import PropTypes from 'prop-types'
import React, { memo, useState } from 'react'
import { TabsWrapper } from './style'

const SectionTabs = memo((props) => {
  const { tabNames = [], tabClick } = props
  const [currentIndex, setCurrentIndex] = useState(0)
  // const className = classNames('item', {
  //   acitve: index === currentIndex
  // })

  const itemClickHandle = (index, item) => {
    setCurrentIndex(index)
    tabClick(index, item)
  }
  return (
    <TabsWrapper>
      <ScrollView>
        {
          tabNames.map((item, index) => {
            return (<div
              key={item}
              className={classNames('item', {
                'active': index === currentIndex
              })}
              onClick={e => itemClickHandle(index, item)}
            >
              {item}
            </div>)
          })
        }
      </ScrollView>
    </TabsWrapper >
  )
})

SectionTabs.propTypes = {
  tabNames: PropTypes.array
}

export default SectionTabs
