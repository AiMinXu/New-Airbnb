import IconArrowLeft from '@/assets/svg/icon-arrow-left'
import IconArrowRight from '@/assets/svg/icon-arrow-right'
import React, { memo, useEffect, useRef, useState } from 'react'
import { ViewWrapper } from './style'

/* 滚动组件模块  */
//实现封装类似vue插槽效果---难点
const ScrollView = memo((props) => {
  //定义状态
  const [showLeft, setShowLeft] = useState(false)
  const [showRight, setShowRight] = useState(false)
  const [positionIndex, setPositionIndex] = useState(0)
  const totalDistanceRef = useRef()
  const scrollContentRef = useRef()//拿到展示的内容

  //渲染完毕后，判断是否显示右侧按钮
  useEffect(() => {
    const scrollWidth = scrollContentRef.current.scrollWidth//一共可以滚动的宽度
    const clientWidth = scrollContentRef.current.clientWidth//本身占据的宽度
    const totalDistance = scrollWidth - clientWidth
    totalDistanceRef.current = totalDistance//记录总的偏移量
    setShowRight(totalDistance > 0)
  }, [props.children])//传入的内容

  //点击按钮逻辑
  const controlClickHandle = (isRight) => {
    const newIndex = isRight ? positionIndex + 1 : positionIndex - 1
    const newEl = scrollContentRef.current.children[newIndex]
    const newOffsetLeft = newEl.offsetLeft
    scrollContentRef.current.style.transform = `translate(-${newOffsetLeft}px)`
    setPositionIndex(newIndex)
    //是否继续显示右侧按钮
    setShowLeft(newOffsetLeft > 0)
    setShowRight(totalDistanceRef.current > newOffsetLeft)
  }

  return (
    <ViewWrapper>
      {showLeft && (
        <div className='control left' onClick={e => controlClickHandle(false)}>
          <IconArrowLeft />
        </div>
      )}
      {showRight && (
        <div className='control right' onClick={e => controlClickHandle(true)}>
          <IconArrowRight />
        </div>
      )}

      <div className="scroll">
        <div className="scroll-content" ref={scrollContentRef}>
          {props.children}
        </div>
      </div>
    </ViewWrapper>
  )
})

export default ScrollView
