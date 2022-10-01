import React, { memo } from "react"
import EntireFilter from "./c-cpns/entire-filter"
import EntirePagination from "./c-cpns/entire-pagination"
import EntireRooms from "./c-cpns/entire-rooms"
import { EntireWrapper } from "./style"

const Entire = memo(() => {
  return (
    <EntireWrapper>
      <EntireFilter />
      <EntirePagination />
      <EntireRooms />
    </EntireWrapper>
  )
})

export default Entire
