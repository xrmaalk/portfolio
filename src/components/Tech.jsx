// import { BallCanvas } from "./canvas" Remove ThreeJs resource intensity
import { SectionWrapper } from "../hoc/SectionWrapper"

import { styles } from "../styles"
import TechIcons from "./TechIcons"
import { technologies } from "../constants"

const Tech = () => {
  return (
    <>
      <h1 className={styles.sectionHeadText}>Tech Stack</h1>

      <div className="flex flex-row flex-wrap justify-center gap-5">
        {technologies.map((technology) => (
          <div key={technology.name} className="w-28">
            <TechIcons icon={technology.icon} alt={technology.alt} />
          </div>
        ))}
      </div>
    </>
  )
}

export default SectionWrapper(Tech, "tech")
