import { useState, useRef } from "react"
import { EarthCanvas } from "./canvas"
import { motion } from "framer-motion"
import emailjs from "@emailjs/browser"
import { styles } from "../styles"
import { slideIn } from "../utils/motion"

import { SectionWrapper } from "../hoc/SectionWrapper"

const Contact = () => {
  const formRef = useRef()
  const [loader, setLoader] = useState(false)
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  })

  const handleChange = (e) => {}
  const handleSubmit = (e) => {}

  return <div>Contact</div>
}

export default SectionWrapper(Contact)
