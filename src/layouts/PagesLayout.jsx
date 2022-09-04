import React from "react"
import Navbar from "../components/organism/Navbar"

const PagesLayout = ({ children }) => {
  return (
    <React.Fragment>
      <Navbar />
      {children}
    </React.Fragment>
  )
}

export default PagesLayout