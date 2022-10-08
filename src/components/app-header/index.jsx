import React, { memo, useRef, useState } from 'react'
import { shallowEqual, useSelector } from 'react-redux'
import classNames from 'classnames'
import { ThemeProvider } from 'styled-components'
import useScrollPosition from '@/hooks/useScrollPosition'
import HeaderCenter from './c-cpns/header-center'
import HeaderLeft from './c-cpns/header-left'
import HeaderRight from './c-cpns/header-right'
import { HeaderWrapper, SearchAreaWrapper } from './style'

const AppHeader = memo(() => {
  //定义组件内部状态
  const [isSearch, setIsSearch] = useState(false)
  //redux中获取数据
  const { headerConfig } = useSelector((state) => ({
    headerConfig: state.main.headerConfig
  }), shallowEqual)
  // console.log(headerConfig);
  const { isFixed, topAlpha } = headerConfig

  //监听滚动
  const { scrollY } = useScrollPosition()
  const prevY = useRef(0)//记录上一次的值
  //正常情况下（搜索框没有弹出来），不断记录值
  if (!isSearch) prevY.current = scrollY
  //弹出搜索框功能后，滚动距离大于之前记录的距离的30，将状态设置为false
  if (isSearch && Math.abs(scrollY - prevY.current) > 30) setIsSearch(false)
  /** 透明度的逻辑 */
  // console.log(scrollY);
  const isAlpha = topAlpha && scrollY === 0
  // console.log(topAlpha);
  return (
    <ThemeProvider theme={{ isAlpha }}>
      <HeaderWrapper className={classNames({ fixed: isFixed })}>
        <div className="content">
          <div className="top">
            <HeaderLeft />
            <HeaderCenter isSearch={isAlpha || isSearch} searchBarClick={e => setIsSearch(true)} />
            <HeaderRight />
          </div>
          <SearchAreaWrapper isSearch={isAlpha || isSearch} />
        </div>
        {isSearch && <div className='cover' onClick={e => setIsSearch(false)}></div>}
      </HeaderWrapper>
    </ThemeProvider>
  )
})

export default AppHeader
