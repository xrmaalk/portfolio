import { Tilt } from "react-tilt"
import { motion } from "framer-motion"
import { fadeIn } from "../utils/motion"

import { turteeSeated } from "../assets"

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
    <Tilt className="xs:w-[250px] w-full h-full ">
      <motion.div
        variants={fadeIn("up", "spring", 0.5 * index, 0.75)}
        className="flex justify-center items-center  rounded-[25px] sm:w-[300px] shadow-card w-[auto] h-full gap-6  ">
        <div
          options={{
            max: 45,
            scale: 1,
            speed: 450,
          }}
          onClick={onClick}
          className="bg-tertiary rounded-[20px], py-5 min-h-[280px] flex flex-col items-center justify-between w-full rounded-2xl object-contain">
          <div className="relative w-full h-[250px] p-[1rem]">
            <img
              src={image}
              alt="name"
              className="w-full h-[15rem] object-cover rounded-2xl mb-[1rem]  "
            />
            <div className="absolute inset-0 flex justify-end m-3 card-img_hover p-5">
              <div
                className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
                onClick={() => window.open(source_code_link, "_blank")}>
                <img src={turteeSeated} alt="demo" className="w-1/2 h-1/2" />
              </div>
            </div>
          </div>
          <div className="mt-[4rem]">
            <h3 className="text-white text-2xl font-bold text-center">
              {name}
            </h3>
          </div>
          <div>
            <p className="mt-[2rem] blue-text-gradient text-1xl font-bold text-center px-[1rem]">
              {description}
            </p>
          </div>

          <div className="mt-[.25rem] flex flex-wrap gap-2 text-2xl">
            {tags.map((tag) => (
              <p key={tag.name} className={`text-[14px] ${tag.color}`}>
                #{tag.name}{" "}
              </p>
            ))}
          </div>
        </div>
      </motion.div>
    </Tilt>
  )
}

export { CompletedProjectCard }
