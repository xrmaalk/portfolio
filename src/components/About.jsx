import React from "react"
import ReactCardFlip from "react-card-flip"
import { Tilt } from "react-tilt"
import { motion } from "framer-motion"
import { styles } from "../styles"
import { services } from "../constants"
import { fadeIn, textVariant } from "../utils/motion"
import { ServiceCard } from "./ServiceCard"
import { SectionWrapper } from "../hoc/SectionWrapper"

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>INTRODUCING</p>
        <h2 className={styles.sectionHeadText}>
          The Story&nbsp;:&nbsp;Maalkum Frater
        </h2>
      </motion.div>
      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-amber-400 text-[17px] max-w-3xl leading-[30px] flex-1 items-center justify-center ">
        This section walks you through the rich history behind Maalkum the
        Software Developer...
        <br />
        He started programming in the early 90&apos;s with Java.
        <br />
        <br />
        In 2010, he begun learning PHP, later moving on to PYTHON.
        <br />
        Back then, He sharped his skills by providing customize business
        websites via wordpress.
        <br />
        <br />
        After landing a role as a Teritory Manager, he took an hiatus from
        programming, focusing on a career as a Sales Professional.
        <br />
        <br /> Maalkum would always say: <br />
        <br />
        <b>
          <i>
            &quot;My passion is in making unique experiences for users and
            clients alike.&quot;
          </i>
        </b>{" "}
        &nbsp;
        <br />
        <br />
        It is within this spirit that he stumbbled came across a social media
        challenge....
        <br />
        <b>
          <i>&quot;the 100 Day of Code Challenege....&quot;</i>
        </b>{" "}
        , late August 2020.
        <br /> <br /> While working fulltime as a Senior Solutions Sales
        Executive and handling the streamline of a promotional item he
        developed, Maalkum was able to complete the 100 days of code Challenge.
        <br />
        <br /> He completed the challenege using Python which at the time he
        recalls:
        <br />{" "}
        <i>&quot;the move away from the Java syntax was a nice change.&quot;</i>
        <br />
        <br />
        Fast-forward to May 2023, Maalkum found himself back in the job market.
        His employer at that time made the business decision to departure from
        the Canadian Auction Market.
        <br />
        <br />
        When one door closes another surely opens.
        <br />
        Maalkum was presented with the opprotunity to get formal training into
        Sotware Development through InceptionU. He pounced jumped at the
        opprotunity. <br />
        <br />
        Which leads us to why you&apos;ve stopped by....
        <br />
        <br />
        <h1>
          <b>
            Explore Projects&apos; or submit a the contact form to get in touch.
          </b>
        </h1>
        <br />
        <h2>Have a Blessed Day and Enjoy!</h2>
      </motion.p>
      <div className="mt-20 flex-wrap gap-10 flex justify-evenly px-5">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  )
}

export default SectionWrapper(About, "about")
