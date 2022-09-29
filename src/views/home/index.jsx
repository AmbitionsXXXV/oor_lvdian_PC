import React, { memo, useEffect } from "react"
import EtcRequest from "@/services"

const Home = memo(() => {
  useEffect(() => {
    EtcRequest.get({ url: "/home/highscore" }).then((res) => {
      console.log(res)
    })
  }, [])

  return <div>Home</div>
})

export default Home
