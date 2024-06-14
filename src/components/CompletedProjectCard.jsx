import { Tilt } from "react-tilt"
import { motion } from "framer-motion"
import { fadeIn } from "../utils/motion"
import { projects } from "../constants"
import { FlipCard } from "./FlipCard"

const CompletedProjectCard = ({
  index,
  name,
  icon,
  onClick,
  description,
  color,
  image,
  tags,
  source_code_link,
}) => {
  return (
    <Tilt className="xs:w-[250px] w-full ">
      <motion.div
        variants={fadeIn("up", "spring", 0.5 * index, 0.75)}
        className="flex justify-center items-center p-[6px] rounded-[25px] sm:w-[300px] shadow-card w-[auto] gap-10">
        <div
          options={{
            max: 45,
            scale: 1,
            speed: 450,
          }}
          onClick={onClick}
          className="bg-tertiary rounded-[20px], py-5 min-h-[280px] flex flex-col items-center justify-between w-full rounded-2xl object-contain">
          <div className="relative w-full h-[230px] p-[1rem]">
            <img
              src={image}
              alt="name"
              className="w-full h-[15rem] object-cover rounded-2xl mb-[1rem]  "
            />
            <div className="absolute inset-0 flex justify-end m-3 card-img_hover p-5">
              <div
                className="black-gradient w-10 h-10 rounded-full"
                onClick={() => window.open(source_code_link, "_blank")}></div>
            </div>

            <h3 className="text-white text-[20px] font-bold text-center">
              {name}
            </h3>
          </div>
        </div>
      </motion.div>
    </Tilt>
  )
}

export { CompletedProjectCard }
