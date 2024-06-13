import { projectIntro } from "../constants"
import { useRef } from "react"
import TypeWriterEffect from "react-typewriter-effect"

export default function ProjectStoryComponent() {
  const myStoryRef = useRef(null)

  return (
    <div className="space-y-4 mt-[2rem]" ref={myStoryRef}>
      <TypeWriterEffect
        textStyle={{
          fontFamily: "Red Hat Display",
          color: "#43d44A",
          fontFace: "extraBold",
        }}
        startDelay={2000}
        cursorColor="#42d44A"
        scrollArea={myStoryRef.current}
        multiTextLoop={true}
        multiText={projectIntro}
        multiTextDelay={2000}
        typeSpeed={35}
      />

      <br />
      <br />
    </div>
  )
}
