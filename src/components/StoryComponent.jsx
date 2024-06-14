import { textBlocks } from "../constants"
import { useRef } from "react"
import TypeWriterEffect from "react-typewriter-effect"

export default function StoryComponent() {
  const myStoryRef = useRef(null)

  return (
    <div className="space-y-4 mt-[2rem]" ref={myStoryRef}>
      <TypeWriterEffect
        textStyle={{
          fontFamily: "Red Hat Display",
          color: "#44d45d",
        }}
        startDelay={2000}
        cursorColor="#44d45d"
        scrollArea={myStoryRef.current}
        multiTextLoop={true}
        multiText={textBlocks}
        multiTextDelay={2000}
        typeSpeed={100}
      />

      <br />
      <br />
    </div>
  )
}
