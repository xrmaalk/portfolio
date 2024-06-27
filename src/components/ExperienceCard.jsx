import { VerticalTimelineElement } from "react-vertical-timeline-component"

const ExperienceCard = ({ experience }) => (
  <VerticalTimelineElement
    contentStyle={{
      background: "#1d1836",
      color: "#fff",
    }}
    date={experience.date}
    contentArrowStyle={{ borderRight: "7px solid #232631" }}
    iconStyle={{ background: experience.iconBg }}
    icon={
      <div className="w-full h-full flex items-center justify-center mt-[10%] ">
        <img
          src={experience.icon}
          alt={experience.company_name}
          className="w-[100%] h-[80%] max-lg:mt-[-.5rem] md:mt-[-.5rem] sm:mt-[-.5rem] xs:mt-[-.5rem] object-contain rounded-full"
        />
      </div>
    }>
    <div>
      <h3 className="text-white text-[25px] font-bold">{experience.title}</h3>
      <p className="text-[18px] text-secondary font-semibold mb-2 mt-2">
        {experience.company_name}
      </p>
    </div>
    <ul className="mt-5 list-disc ml-5 space-y-2">
      {experience.points.map((point, index) => (
        <li
          key={`experience-point-${index}`}
          className="text-[18px] text-white-200 font-semibold pl-1 tracking-wider">
          {point}
        </li>
      ))}
    </ul>
  </VerticalTimelineElement>
)

export default ExperienceCard
