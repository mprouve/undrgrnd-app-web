import { Routes, Route } from "react-router-dom"
import Landing from "./components/landing/landing"
import PageNotFound from "./components/page-not-found/page-not-found"

const Main = () => {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  )
}

export default Main
