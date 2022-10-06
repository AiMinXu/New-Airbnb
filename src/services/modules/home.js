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
