import { BrowserRouter } from "react-router-dom"
import {
  About,
  StarsCanvas,
  Contact,
  Experience,
  Hero,
  NavBar,
  Tech,
  Works,
} from "./components"
import "./index.css"
export default function App() {
  return (
    <BrowserRouter>
      <div className="relative z-0 br-primary">
        <div className="bg-hero-pattern bg-cover bg-no-repeat w-[100vw] bg-center overflow-x-hidden">
          <NavBar />
          <Hero />
        </div>
        <About />
        <Experience />
        <Tech />
        <Works />

        <div className="relative z-0">
          <Contact />
          <StarsCanvas />
        </div>
      </div>
    </BrowserRouter>
  )
}
