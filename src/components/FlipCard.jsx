import React, { useState } from "react"
import ReactCardFlip from "react-card-flip"
import { services, projects } from "../constants"
import { ProjectCard } from "./ProjectCard"
import { ServiceCard } from "./ServiceCard"

const FlipCard = () => {
  const [isFlipped, setIsFlipped] = useState(false)
  const handleClick = (e) => {
    e.preventDefault()
    setIsFlipped((preState) => !preState)
  }

  return (
    <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
      <div className="frontCard mt-20 flex flex-wrap gap-10 justify-evenly px-5 text-white cursor-pointer">
        {services.map((service, index) => (
          <ServiceCard
            key={service.title}
            index={index}
            {...service}
            onClick={handleClick}
          />
        ))}
      </div>

      <div className="backCard mt-20 flex-wrap gap-10 flex justify-evenly px-5 text-amber-400 cursor-pointer">
        {projects.map((project, index) => (
          <ProjectCard
            key={project.name}
            index={index}
            {...project}
            onClick={handleClick}
          />
        ))}
      </div>
    </ReactCardFlip>
  )
}
export { FlipCard }
