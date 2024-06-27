import { BallCanvas } from "./canvas"
import { SectionWrapper } from "../hoc/SectionWrapper"
import { technologies } from "../constants"
import { styles } from "../styles"

const Tech = () => {
  return (
    <>
      <h1 className={styles.sectionHeadText}>Tech Stack</h1>
      <div className="max-xs:flex-row max-sm:flex-row md:flex lg:flex flex-wrap justify-center gap-2 object-contain">
        {technologies.map((technology) => (
          <div key={technology.name} className="w-[auto] h-[auto]">
            <BallCanvas
              icon={technology.icon}
              alt={technology.alt}
              style={{ width: 2, flexDirection: "row" }}
            />
          </div>
        ))}
      </div>
    </>
  )
}

export default SectionWrapper(Tech, "tech")
