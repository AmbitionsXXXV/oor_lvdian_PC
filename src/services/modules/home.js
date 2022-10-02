import etcRequest from ".."

export function getHomeGoodPriceData() {
  return etcRequest.get({
    url: "/home/goodprice",
  })
}

export function getHomeHighScoreData() {
  return etcRequest.get({
    url: "/home/highscore",
  })
}

export function getHomeDiscountData() {
  return etcRequest.get({
    url: "/home/discount",
  })
}

export function getHomeHotRecommendData() {
  return etcRequest.get({
    url: "/home/hotrecommenddest",
  })
}

export function getHomeLongforData() {
  return etcRequest.get({
    url: "/home/longfor",
  })
}

export function getHomePlusData() {
  return etcRequest.get({
    url: "/home/plus",
  })
}
