import EtcRequest from ".."

export function getHomeGoodPriceData() {
  return EtcRequest.get({
    url: "/home/goodprice",
  })
}
