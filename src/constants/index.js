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
  studymateProjectIcon,
  turteeSeated,
  ehTraveller,
  pendoluLogo,
  studymateProject,
  organicEmperorLogo,
  organicEmperorLanding,
  qarliProject,
  spotlessDuct,
  qarliBlog,
  noNameYetPage,
  python,
  wordpress,
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
    id: "tech",
    title: "Tech",
  },
  {
    id: "projects",
    title: "Projects",
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

const projects = [
  {
    name: "STUDYMATE",
    description:
      "Web-based applicantion for users  to learn and practice web development concepts.",
    icon: turteeSeated,
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
    image: studymateProject,
    source_code_link: "https://xinra.space",
  },
  {
    name: "MYQARLI.com",
    description: "A product marketing website.",
    icon: qarliProject,
    tags: [
      {
        name: "wordpress",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: qarliProject,
    source_code_link: "https://myqarli.com",
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
    image: noNameYetPage,
    source_code_link: "https://github.com/xrmaalk/ai_promptopia",
  },
  {
    name: "OrganicEmperor.com",
    description: "An Ecommerce platform for unisex beauty cosmetics.",
    icon: organicEmperorLogo,
    tags: [
      {
        name: "wordpress",
        color: "blue-text-gradient",
      },
    ],
    image: organicEmperorLanding,
    source_code_link: "https://organicemperor.com",
  },

  {
    name: "QARLI.ca",
    description: "Product BLOG and FAQ website for SEO.",
    icon: web,
    tags: [
      {
        name: "wordpress",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: qarliBlog,
    source_code_link: "https://qarli.ca",
  },
  {
    name: "Spotless&Duct",
    description:
      "Cleaning and Landscaping Service website for customer bookings.",
    icon: web,
    tags: [
      {
        name: "wordpress",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: spotlessDuct,
    source_code_link: "https://spotlessandductcleaningservices.ca",
  },
  {
    name: "EH - Traveller",
    description:
      "An itenerary web application immmerse  in Calgary's cultrual attractions and historic sites ",
    icon: ehTraveller,
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
    name: "Pendolu Inc",
    description:
      "React native application for Humanitarian Aid Worker to use to manage stress levels and mental health",
    icon: pendoluLogo,
    tags: [
      {
        name: "react-native",
        color: "blue-text-gradient",
      },
      {
        name: "expo",
        color: "green-text-gradient",
      },
      {
        name: "nativewind",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/xrmaalk/pendolu",
  },
]

const technologies = [
  {
    name: "HTML 5",
    icon: html,
    alt: "HTML5",
  },
  {
    name: "CSS 3",
    icon: css,
    alt: "CSS3",
  },
  {
    name: "JavaScript",
    icon: javascript,
    alt: "JavaScript",
  },
  {
    name: "TypeScript",
    icon: typescript,
    alt: "TypeScript",
  },
  {
    name: "React JS",
    icon: reactjs,
    alt: "ReactJS",
  },
  {
    name: "PYTHON",
    icon: python,
    alt: "Python3",
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
    alt: "Tailwind CSS",
  },
  {
    name: "Node JS",
    icon: nodejs,
    alt: "NodeJS",
  },
  {
    name: "MongoDB",
    icon: mongodb,
    alt: "MongoDB",
  },
  {
    name: "Three JS",
    icon: threejs,
    alt: "ThreeJS",
  },
  {
    name: "git",
    icon: git,
    alt: "github",
  },
  {
    name: "figma",
    icon: figma,
    alt: "Figma",
  },
  {
    name: "docker",
    icon: docker,
    alt: "HTML5",
  },
  {
    name: "wordpress",
    icon: wordpress,
    alt: "wordpress",
  },
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

const textBlocks = [
  "This section walks you through the rich history behind Maalkum, the Software Developer's journey...",
  "He started programming in the early 2000's with Java.",
  "In 2010, he began learning PHP, later moving on to PYTHON.",
  "Back then, He sharped his skills by providing customize business websites utilizing the wordpress framework.",
  "After landing a role as a Territory Manager, he took an hiatus from web development, focusing on a career as a Sales Professional.",
  " Maalkum would often say....",
  '"My passion is in making unique experiences for users and clients alike."',
  "Tis within this spirit that he stumbbled came across a social media challenge....",
  "the 100 Day of Code Challenege....",
  "....late August 2020.",
  "While working fulltime as a Senior Solutions Sales Executive and handling the streamline of a promotional item he developed, Maalkum was able to complete the 100 days of code Challenge.",
  "He completed the challenege using Python which at the time he recalls:",
  '"the move away from the Java syntax was a nice change."',
  "A syntax he would come to appreciate as he develed deeper into other coding languages.",
  "Maalkum has been consistently coding ever since!",

  "Fast-forward to April 2023, Maalkum found himself lost in the job market when his employer at the time made the business decision to departure from the Canadian Auction Market.",
  "When one door closes another surely opens....",
  "Maalkum was presented with the opprotunity to get formal training into Full Stack Development through InceptionU.",
  "He pounced at the opprotunity!",
  "Being a learner at InceptionU enstilled much beyond Software Development.......",
  "The soft skills Maalkum adapted through his career transitional journey further fuels his growth.....",
  "Now this leads us to why you've stopped by today....",
  "( the Ballad of Maalkum is just getting started....continue on below...! )",
  "Congratulations.....You not only visited us today, you've reached the end of My introduction 👍",
  "Thank you! Have a Blessed Day and Enjoy!! 🦾🤠✌️",
]

const projectIntro = [
  "You've reached the heart of my portfolio.",
  "Here you can discover recent projects I have completed.",
  "The following projects shall demonstrate the works I have contributed to over the years.",
  "Be sure to return quarterly as I am constantly adding new skills through wrapping up new and exciting projects!",
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

export {
  services,
  technologies,
  textBlocks,
  experiences,
  testimonials,
  projects,
  projectIntro,
}
