import { motion } from "framer-motion"
import { styles } from "../styles"
import { FlipCard } from "./FlipCard"
import { fadeIn, textVariant } from "../utils/motion"

import { SectionWrapper } from "../hoc/SectionWrapper"

import StoryComponent from "./StoryComponent"
import { profilePic } from "../assets"

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>INTRODUCING</p>
        <h2 className={styles.sectionHeadText}>
          The Ballad of &nbsp;
          <span className="green-text-gradient">Maalkum Frater</span>
        </h2>
      </motion.div>
      <motion.div
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4
         text-[30px] max-w-4xl leading-[30px] flex-1 items-center justify-center ">
        <span className="text-4xl">
          <StoryComponent />
        </span>

        <div className="rounded-full p-3 violet-gradient object-contain flex justify-center items-center m-auto w-[25rem]">
          <img src={profilePic} className="rounded-full w-[39rem] " />
        </div>

        <h1 className="m-auto p-[2rem] xs:p-[5rem]  text-[1.6rem] font-extrabold orange-text-gradient">
          Explore Recent Projects&apos; or
          <br /> Submit a Contact Form to get in touch.
        </h1>
        <FlipCard />
      </motion.div>
    </>
  )
}

export default SectionWrapper(About, "about")
