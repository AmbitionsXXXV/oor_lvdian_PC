import etcRequest from ".."

export function getEntireRoomList(offset = 0, size = 20) {
  return etcRequest.get({
    url: "entire/list",
    params: {
      offset,
      size,
    },
  })
}
