import { BallCanvas } from "./canvas"
import { SectionWrapper } from "../hoc/SectionWrapper"
import { technologies } from "../constants"
import { styles } from "../styles"

const Tech = () => {
  return (
    <>
      <h1 className={styles.sectionHeadText}>Tech Stack</h1>
      <div className="flex flex-row flex-wrap justify-center gap-10">
        {technologies.map((technology) => (
          <div key={technology.name} className="w-28 h-28">
            <BallCanvas icon={technology.icon} alt={technology.alt} />
          </div>
        ))}
      </div>
    </>
  )
}

export default SectionWrapper(Tech, "tech")
