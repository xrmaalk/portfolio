import React from "react"
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component"
import "react-vertical-timeline-component/style.min.css"
import { styles } from "../styles"
import { motion } from "framer-motion"
import { experiences } from "../constants"
import { textVariant } from "../utils/motion"
import { SectionWrapper } from "../hoc/SectionWrapper"
import ExperienceCard from "./ExperienceCard"

const Experience = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>My Roles thus far</p>
        <h2 className={styles.sectionHeadText}>Professional Experience</h2>
      </motion.div>
      <div className="mt-20 flex flex-col">
        <VerticalTimeline>
          {experiences.map((experience, index) => (
            <ExperienceCard key={index} experience={experience} />
          ))}
        </VerticalTimeline>
      </div>
    </>
  )
}

export default SectionWrapper(Experience, "work")
