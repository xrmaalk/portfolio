import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  xrmedia,
  inceptionU,
  pendolu,
  maaltech,
  carrent,
  jobit,
  tripguide,
  threejs,
} from "../assets"

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
]

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Code Reviews",
    icon: creator,
  },
]

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
]
const textBlocks = [
  "This section walks you through the rich history behind Maalkum, the Software Developer's journey...",
  "He started programming in the early 2000's with Java.",
  "In 2010, he began learning PHP, later moving on to PYTHON.",
  "Back then, He sharped his skills by providing customize business websites via wordpress.",
  "After landing a role as a Teritory Manager, he took an hiatus from programming, focusing on a career as a Sales Professional.",
  " Maalkum would often say....",
  '"My passion is in making unique experiences for users and clients alike."',
  "It is within this spirit that he stumbbled came across a social media challenge....",
  "the 100 Day of Code Challenege....",
  "....late August 2020.",
  "While working fulltime as a Senior Solutions Sales Executive and handling the streamline of a promotional item he developed, Maalkum was able to complete the 100 days of code Challenge.",
  "He's been consistently coding ever since!",
  "He completed the challenege using Python which at the time he recalls:",
  '"the move away from the Java syntax was a nice change."',
  "A syntax he would come to appreciate as he develed deeper into other coding languages.",
  "Fast-forward to April 2023, Maalkum found himself lost in the job market when his employer at the time made the business decision to departure from the Canadian Auction Market.",
  "When one door closes another surely opens....",
  "Maalkum was presented with the opprotunity to get formal training into Sotware Development through InceptionU.",
  "He pounced at the opprotunity!",
  "Which leads us to why you've stopped by....",
  "( the story's only beginning....continue below! )",
  "Have a Blessed Day and Enjoy!",
]

const experiences = [
  {
    title: "Web Developer",
    company_name: "XR Media - Freelance",
    icon: xrmedia,
    iconBg: "#000",
    date: "June 2009 - Jan 2015",
    points: [
      "Developing and maintaining web applications using PHP, HTML and CSS.",
      "Collaborating with business owners, vendors, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
    ],
  },
  {
    title: "Full Stack Developer",
    company_name: "InceptionU",
    icon: inceptionU,
    iconBg: "#000",
    date: "Feb 2024 - April 2024",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "React Native Developer",
    company_name: "Pendulo Inc",
    icon: pendolu,
    iconBg: "#450758",
    date: "April 2024 - July 2024",
    points: [
      "Developing and maintaining IOS and Android applications using React-Native expo.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },

  {
    title: "Software Developer",
    company_name: "MAALTECH - Freelance",
    icon: maaltech,
    iconBg: "#000",
    date: "March 2024 - Present",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
]

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
]

const projects = [
  {
    name: "Studymate",
    description:
      "Web-based platform that allows users learn and practice web development concepts.",
    icon: web,
    tags: [
      {
        name: "js",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://maaltech.pro",
  },
  {
    name: "AI Promptopia",
    description:
      "Web application that enables users to share AI prompts and search other users prompt.",
    icon: web,
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/xrmaalk/ai_promptopia",
  },
  {
    name: "Eh - Traveller",
    description:
      "A itenerary web application which allows travellers to immmerse in Calgary's, providing recommendations to cultrual attractions and historic sites ",
    icon: web,
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "expressjs",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/xrmaalk/eh_traveller",
  },
  {
    name: "OrganicEmperor.com",
    description: "An Ecommerce platform for unisex beauty cosmetics.",
    icon: web,
    tags: [
      {
        name: "wordpress",
        color: "blue-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://organicemperor.com",
  },
]

export {
  services,
  technologies,
  textBlocks,
  experiences,
  testimonials,
  projects,
}
