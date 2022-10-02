import { useEffect } from "react"
import { useLocation } from "react-router-dom"

export default function useScrollTop() {
  const location = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [location.pathname])
}
