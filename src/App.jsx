import { BrowserRouter } from "react-router-dom"
import {
  About,
  StarsCanvas,
  Contact,
  Experience,
  Feedbacks,
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
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <NavBar />
          <Hero />
        </div>
        <About />
        <Experience />
        <Tech />
        <Works />
        <Feedbacks />
        <div className="relative z-0">
          <Contact />
          <StarsCanvas />
        </div>
      </div>
    </BrowserRouter>
  )
}
