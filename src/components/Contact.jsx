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

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm({ ...form, [name]: value })
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    setLoader(true)
    emailjs
      .send(
        "service_bsdvhkq",
        "template_5axkpwt",
        {
          from_name: from.name,
          to_name: "Maalkum",
          from_email: form.email,
          to_email: "xinra.inc@gmail.com",
          message: form.message,
        },
        "ZU-WWPTrXKvjYTRRG"
      )
      .then(() => {
        setLoader(false)
        alert(
          "Message Sent. Thank You. I will get back to you at my earliest convenience."
        )

        setForm({
          name: "",
          email: "",
          message: "",
        })
      })
  }

  return (
    <div className="xl:mt-12  xl:flew-row flex-col-reverse flex gap-10 overflow-hidden">
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="flex-[0.75 bg-black-100 p-8 rounded-2xl]">
        <p className={styles.sectionSubText}>Get in Touch</p>
        <h3 className={styles.sectionHeadText}>Contact</h3>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="mt-12 flex flex-col gap-8">
          <label className="flex flex-col" />
          <span className="text-white font-medium mb-4">Name:</span>
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="What's your name?"
            className="bg-tertiary py-4 px-6 placeholer:text-secondary text-white rounded-lg outlined-none border-none font-medium"
          />
          <label className="flex flex-col" />
          <span className="text-white font-medium mb-4">Email:</span>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="What's your email?"
            className="bg-tertiary py-4 px-6 placeholer:text-secondary text-white rounded-lg outlined-none border-none font-medium"
          />
          <label className="flex flex-col" />
          <span className="text-white font-medium mb-4">Message:</span>
          <textarea
            rows={9}
            name="message"
            value={form.message}
            onChange={handleChange}
            placeholder="What brought you here today?"
            className="bg-tertiary py-4 px-6 placeholer:text-secondary text-white rounded-lg outlined-none border-none font-medium"
          />
          <button
            type="submit"
            className="bg-tertiary py-3 px-8 outline-none w-fit text-white font-bold shadow-md shadow-primary">
            {loader ? "Sending....." : "Send"}
          </button>
        </form>
      </motion.div>
      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]">
        <EarthCanvas />
      </motion.div>
    </div>
  )
}

export default SectionWrapper(Contact, "contact")
