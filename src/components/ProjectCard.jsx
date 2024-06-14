import { Tilt } from "react-tilt"
import { motion } from "framer-motion"
import { fadeIn } from "../utils/motion"

const ProjectCard = ({ index, name, icon, onClick }) => {
  return (
    <Tilt className="xs:w-[250px] w-full ">
      <motion.div
        variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
        className="frontCard flex justify-center  w-[auto] green-pink-gradient p-[9px] rounded-[25px] shadow-card">
        <div
          options={{
            max: 45,
            scale: 1,
            speed: 450,
          }}
          onClick={onClick}
          className="bg-tertiary rounded-[20px], py-5 min-h-[280px] flex flex-col items-center justify-around w-full rounded-2xl">
          <img src={icon} className="w-16 h-16 object-contain " />

          <h3 className="text-white text-[20px] font-bold text-center">
            {name}
          </h3>
        </div>
      </motion.div>
    </Tilt>
  )
}

export { ProjectCard }
