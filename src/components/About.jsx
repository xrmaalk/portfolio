import React, { useState } from "react"
import ReactCardFlip from "react-card-flip"
import { Tilt } from "react-tilt"
import { motion } from "framer-motion"
import { styles } from "../styles"
import { textBlocks, services } from "../constants"
import { fadeIn, textVariant } from "../utils/motion"
import { ServiceCard } from "./ServiceCard"
import { SectionWrapper } from "../hoc/SectionWrapper"

const About = () => {
  const [currentIndex, setCurrentIndex] = useState(0)

  const handleNextClick = () => {
    setCurrentIndex((currentIndex + 1) % textBlocks.length)
  }

  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>INTRODUCING</p>
        <h2 className={styles.sectionHeadText}>
          The Story&nbsp;:&nbsp;Maalkum Frater
        </h2>
      </motion.div>
      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-amber-400 text-[25px] max-w-3xl leading-[30px] flex-1 items-center justify-center ">
        {textBlocks[currentIndex]}
        <br />
        <br />
        <button onClick={handleNextClick}>Click to continue Story....</button>

        <br />
        <br />
        <h1>
          <b>
            Explore Projects&apos; or submit a contact form to get in touch.
          </b>
        </h1>
      </motion.p>
      <div className="mt-20 flex-wrap gap-10 flex justify-evenly px-5">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  )
}

export default SectionWrapper(About, "about")
