import xamRequest from ".."

export const getHomeGoodPriceData = () => {
  return xamRequest.get({
    url: "home/goodprice"
  })
}

export const getHomeHighScoreData = () => {
  return xamRequest.get({
    url: "home/highscore"
  })
}

export const getHomeDiscountData = () => {
  return xamRequest.get({
    url: "home/discount"
  })
}

export const getHomeHotRecommendData = () => {
  return xamRequest.get({
    url: "home/hotrecommenddest"
  })
}

export const getHomeLongforData = () => {
  return xamRequest.get({
    url: "home/longfor"
  })
}

export const getHomePlusforData = () => {
  return xamRequest.get({
    url: "home/plus"
  })
}
