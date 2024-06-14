import { useState, useRef } from "react"
import { EarthCanvas } from "./canvas"
import { motion } from "framer-motion"
import { emailjs } from "@emailjs/browser"
import { styles } from "../styles"
import { slideIn } from "../utils/motion"

import { SectionWrapper } from "../hoc/SectionWrapper"

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  })

  return <div>Contact</div>
}

export default SectionWrapper(Contact)
