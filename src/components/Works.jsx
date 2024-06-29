import { Tilt } from "react-tilt"
import { motion } from "framer-motion"
import { styles } from "../styles"
import { useMediaQuery } from "react-responsive"

import { projects } from "../constants"

import ProjectStoryComponent from "./ProjectStoryComponent"
import { fadeIn, textVariant } from "../utils/motion"

import { SectionWrapper } from "../hoc/SectionWrapper"
import { CompletedProjectCard } from "./CompletedProjectCard"

const Works = () => {
  return (
    <>
      <div>
        <p className={styles.sectionSubText}>My Project Contributions</p>
        <motion.h2 variants={textVariant} className={styles.sectionHeadText}>
          Completed Projects
        </motion.h2>
      </div>
      <div className="w-full flex flex-row px-[2rem] ">
        <div
          variants={fadeIn(0, 0, 0.5, 1)}
          className="text-[2rem] max-w-3xl leading-[2.5rem]  ">
          <ProjectStoryComponent />
        </div>
      </div>
      <div className="mt-[0] flex flex-wrap gap-10 px-[1rem] ml-[2rem]">
        {projects.map((project, index) => (
          <CompletedProjectCard
            key={`project-${index}`}
            index={index}
            {...project}
          />
        ))}
      </div>
    </>
  )
}

export default SectionWrapper(Works, "projects")
