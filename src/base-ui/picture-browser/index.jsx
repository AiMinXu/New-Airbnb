import React, { memo, useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { CSSTransition, SwitchTransition } from "react-transition-group"

import IconArrowLeft from '@/assets/svg/icon-arrow-left'
import IconArrowRight from '@/assets/svg/icon-arrow-right'
import IconClose from '@/assets/svg/icon-close'
import IconTriangleArrowBottom from '@/assets/svg/icon-triangle-arrow-bottom'
import IconTriangleArrowTop from '@/assets/svg/icon-triangle-arrow-top'
import Indicator from '../indicator'
import { BrowserWrapper } from './style'
import classNames from 'classnames'

const PictureBrowser = memo((props) => {
  const { detailInfo, closeClick } = props
  const { picture_urls, name } = detailInfo
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isNext, setIsNext] = useState(true)
  const [showList, setShowList] = useState(true)

  //当图片浏览器展示出来时，滚动功能消失
  useEffect(() => {
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = 'auto'
    }
  }, [])

  const closeBtnClickHandle = () => {
    if (closeClick) closeClick()
  }

  const contorlClickHandle = (isNext = true) => {
    let newIndex = isNext ? currentIndex + 1 : currentIndex - 1
    if (newIndex > picture_urls.length - 1) newIndex = 0
    if (newIndex < 0) newIndex = picture_urls.length - 1

    setCurrentIndex(newIndex)
    setIsNext(isNext)
  }

  const bottomClickHandle = (index) => {
    setIsNext(index > currentIndex)
    setCurrentIndex(index)
  }

  return (
    <BrowserWrapper isNext={isNext} showList={showList}>
      <div className="top">
        <div className="close-btn" onClick={closeBtnClickHandle}>
          <IconClose />
        </div>
      </div>
      <div className="slider">
        <div className="control">
          <div className="btn left" onClick={e => contorlClickHandle(false)}>
            <IconArrowLeft width={77} height={77} />
          </div>
          <div className="btn right" onClick={e => contorlClickHandle(true)}>
            <IconArrowRight width={77} height={77} />
          </div>
        </div>
        <div className='picture' >
          <SwitchTransition mode='in-out' >
            <CSSTransition
              key={picture_urls[currentIndex]}
              classNames="pic"
              timeout={200}
            >
              <img src={picture_urls[currentIndex]} alt="" />
            </CSSTransition>
          </SwitchTransition>
        </div>
      </div>
      <div className="preview">
        <div className="info">
          <div className="desc">
            <div className="count">
              <span>{currentIndex + 1}/{picture_urls.length}: </span>
              <span>{name}*图片{currentIndex + 1}</span>
            </div>
            <div className="toggle" onClick={e => setShowList(!showList)}>
              <span>{showList ? '隐藏' : '显示'}照片列表</span>
              {showList ? <IconTriangleArrowBottom /> : <IconTriangleArrowTop />}
            </div>
          </div>
          <div className="list">
            <Indicator selectIndex={currentIndex}>
              {
                picture_urls?.map((item, index) => {
                  return (
                    <div
                      className={classNames('item', { active: currentIndex === index })}
                      key={item}
                      onClick={e => bottomClickHandle(index)}
                    >
                      <img src={item} alt="" />
                    </div>
                  )
                })
              }

            </Indicator>
          </div>
        </div>
      </div>
    </BrowserWrapper>
  )
})

PictureBrowser.propTypes = {
  pictureUrls: PropTypes.array
}

export default PictureBrowser
