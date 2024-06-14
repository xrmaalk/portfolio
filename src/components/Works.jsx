import { Tilt } from "react-tilt"
import { motion } from "framer-motion"
import { styles } from "../styles"
import { github } from "../assets"
import { projects } from "../constants"

import ProjectStoryComponent from "./ProjectStoryComponent"
import { fadeIn, textVariant } from "../utils/motion"

import { SectionWrapper } from "../hoc/SectionWrapper"
import { CompletedProjectCard } from "./CompletedProjectCard"

const Works = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>My Project Contributions</p>
        <h2 className={styles.sectionHeadText}>Completed Projects</h2>
      </motion.div>
      <div className="w-full flex">
        <motion.p
          variants={fadeIn("", "", 0.5, 1)}
          className=" text-[2rem] max-w-3xl leading-[2.5rem] ">
          <ProjectStoryComponent />
        </motion.p>
      </div>
      <div className="mt-2 flex flex-wrap gap-10 ">
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

export default SectionWrapper(Works, "")
