import { motion } from "framer-motion"
import { styles } from "../styles"

import { maaltechGuru } from "../assets"

const Hero = () => {
  return (
    <section className="relative w-full h-screen  my-auto mx-auto xs:w-full md:w-[full] md:mt-[10rem] xs:mt-[5rem] overflow-hidden">
      <div
        className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5 mt-[5rem]`}>
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915eff]" />
          <div className="w-1 h-40 sm:h-80  violet-gradient" />
        </div>
        <div className="relative">
          <h1 className={`${styles.heroHeadText} text-[#45B440]`}>
            Greetings and Welcome,
            <br />
            <span className="blue-text-gradient">I am Maalkum</span>
          </h1>
          <p
            className={`${styles.heroSubText} mt-2 green-text-gradient mb-[3rem]`}>
            an intermediate Software Developer. <br />I develop 3D models,
            visuals, unique user experiences, web and native applications.
          </p>
        </div>
        <div>
          <img
            src={maaltechGuru}
            alt="hero image"
            className="flex items-stretch m-auto object-cover rounded-full"
          />
        </div>
      </div>

      <div className="absolute md:bottom-[15rem] xs:bottom-[10rem] md:ml-[5rem] bottom-50 w-full flex justify-center items-center">
        <a href="#about">
          <div className="flex justify-center items-start p-2 w-[35px] h-[64px] rounded-3xl border-4 border-secondary ">
            <motion.div
              animate={{
                y: [0, 20, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  )
}

export default Hero
