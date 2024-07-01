import React, { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { styles } from "../styles"
import { navLinks } from "../constants"
import { logo } from "../assets"

import "../index.css"

const Footer = () => {
  const [active, setActive] = useState("")
  const [toggle, setToggle] = useState(false)
  return (
    <>
      <footer
        className={`${styles.paddingX} w-full flex items-center py-5 fixed bottom-0 z-20 bg-primary`}>
        <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
          <a href={"#Home"} className="flex items-center gap-2">
            <img
              className="w-22 h-20 object-contain rounded-full"
              src={logo}
              alt="logo"
            />
          </a>

          <div
            className={`flex p-6 blue-gradient absolute top-5 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}>
            <a href={"#Home"}>Back-to-top</a>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer
