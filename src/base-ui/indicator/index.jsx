import PropTypes from 'prop-types'
import React, { memo, useEffect, useRef } from 'react'
import { IndicatorWrapper } from './style'


//核心难点代码
const Indicator = memo((props) => {
  const { selectIndex = 0 } = props//初始
  const contentRef = useRef()//获取元素

  useEffect(() => {
    //1.获取selcetI你的心对应的item
    const selectItemElement = contentRef.current.children[selectIndex]//根据索引获取元素
    const itemLeft = selectItemElement.offsetLeft//获取元素左侧偏移量
    const itemWidth = selectItemElement.clientWidth//获取元素的视口宽度

    //2.content宽度
    const contentWidth = contentRef.current.clientWidth//区域视口宽度
    const contentScroll = contentRef.current.scrollWidth//区域滚动宽度

    //3.获取selectIndex要滚动的距离
    let distance = itemLeft + itemWidth * 0.5 - contentWidth * 0.5
    //4.特殊情况处理
    if (distance < 0) distance = 0//左边特殊情况
    const totalDistance = contentScroll - contentWidth
    if (distance > totalDistance) distance = totalDistance//右边特殊情况

    //5.改变位置
    contentRef.current.style.transform = `translate(${-distance}px)`//进行负偏移
  }, [selectIndex])
  return (
    <IndicatorWrapper>
      <div className="i-content" ref={contentRef}>
        {
          props.children
        }
      </div>
    </IndicatorWrapper>
  )
})

Indicator.propTypes = {
  slectIndex: PropTypes.number
}

export default Indicator
