import React from "react"
import ReactCardFlip from "react-card-flip"
import { Tilt } from "react-tilt"
import { motion } from "framer-motion"
import { styles } from "../styles"
import { services } from "../constants"
import { fadeIn, textVariant } from "../utils/motion"
import { ServiceCard } from "./ServiceCard"
import { SectionWrapper } from "../hoc/SectionWrapper"

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>INTRODUCING</p>
        <h2 className={styles.sectionHeadText}>The Maalkum Frater's Story</h2>
      </motion.div>
      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-amber-400 text-[17px] max-w-3xl leading-[30px] flex-1 items-center justify-center ">
        This section walks you through the rich history behind Maalkum the
        Software Developer...
        <br />
        I started programming in the early 90&apos;s with Java.
        <br />
        In 2010, I started learning PHP, later moving on to PYTHON.
        <br />
        Back then I would customize business websites using wordpress.
        <br />I took an hiatus from programming as I had a career as a Sales
        Professional.
        <br /> My passion is in making unique experiences for users and clients
        alike. It is within this vain that I came across the 100 Day of Code
        Challenege, back in August of 2020. <br /> While working fulltime as a
        Senior Solutions Sales Executive and handling the streamline of a
        promotional item I developed, I was able to complete the 100 days of
        code Challenge.
        <br /> I completed the challenege using Python which at the time I felt
        the move away from the Java syntax was a nice change.
        <br />
        Fast-forward to May 2023 and I found myself back in the job market
        following the departure of my employer from the Canadian Auction Market.
        <br />
        When one door closes another surely opens.
        <br />I fell into the opprotunity to get formal training into Sotware
        Development through InceptionU. I jumped at the opprotunity. <br />
        Exploer below Projects&apos; I&apos;ve contributed, worked on or
        lead....
        <br />
        <h2>Enjoy</h2>
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
