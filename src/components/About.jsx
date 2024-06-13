import React, { useState } from "react"

import { Tilt } from "react-tilt"
import { motion } from "framer-motion"
import { styles } from "../styles"
import { FlipCard } from "./FlipCard"
import { fadeIn, textVariant } from "../utils/motion"

import { SectionWrapper } from "../hoc/SectionWrapper"

import StoryComponent from "./StoryComponent"

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>INTRODUCING</p>
        <h2 className={styles.sectionHeadText}>
          The Ballad of &nbsp;
          <span className="text-[#45B440]">Maalkum Frater</span>
        </h2>
      </motion.div>
      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-amber-300
         text-[25px] max-w-3xl leading-[30px] flex-1 items-center justify-center ">
        <span className="text-4xl">
          <StoryComponent />
        </span>

        <h1 className="mt-4 text-amber-200">
          <b>
            Explore Projects&apos; or submit a contact form to get in touch.
          </b>
        </h1>
        <FlipCard />
      </motion.p>
    </>
  )
}

export default SectionWrapper(About, "about")
