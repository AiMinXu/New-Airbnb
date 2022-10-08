import React, { memo, useEffect } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'

import { fetchHomeDataAction } from '@/store/modules/home'
import { changeHeaderConfigAction } from '@/store/modules/main'
import HomeBanner from './c-cpns/home-banner'
import HomeSectionV1 from './c-cpns/home-section-v1'
import HomeSectionV2 from './c-cpns/home-section-v2'
import HomeSectionV3 from './c-cpns/home-section-v3'
import HomeLongfor from './c-cpns/home-longfor'
import { isEmptyObject } from '@/utils'
import { HomeWrapper } from './style'

const Home = memo((props) => {

  const { goodPriceInfo, highScoreInfo, discountInfo, recommendInfo, longforInfo, plusInfo } = useSelector((state) => ({
    goodPriceInfo: state.home.goodPriceInfo,
    highScoreInfo: state.home.highScoreInfo,
    discountInfo: state.home.discountInfo,
    recommendInfo: state.home.recommendInfo,
    longforInfo: state.home.longforInfo,
    plusInfo: state.home.plusInfo,
  }), shallowEqual)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchHomeDataAction('xxxxxx'))//派发网络请求
    dispatch(changeHeaderConfigAction({ isFixed: true, topAlpha: true }))
  }, [dispatch])

  return (
    <HomeWrapper>
      <HomeBanner />
      <div className="content">
        {isEmptyObject(discountInfo) && <HomeSectionV2 infoData={discountInfo} />}
        {isEmptyObject(recommendInfo) && <HomeSectionV2 infoData={recommendInfo} />}

        {isEmptyObject(longforInfo) && <HomeLongfor infoData={longforInfo} />}

        {isEmptyObject(goodPriceInfo) && <HomeSectionV1 infoData={goodPriceInfo} />}
        {isEmptyObject(highScoreInfo) && <HomeSectionV1 infoData={highScoreInfo} />}
        {isEmptyObject(plusInfo) && <HomeSectionV3 infoData={plusInfo} />}
      </div>
    </HomeWrapper>
  )
})

export default Home
