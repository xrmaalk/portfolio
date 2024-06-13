import { textBlocks } from "../constants"
import { useRef } from "react"
import TypeWriterEffect from "react-typewriter-effect"

export default function StoryComponent() {
  const myStoryRef = useRef(null)

  return (
    <div className="space-y-4 mt-[2rem]" ref={myStoryRef}>
      <TypeWriterEffect
        textStyle={{ fontFamily: "Red Hat Display" }}
        startDelay={100}
        cursorColor="#44d45d"
        typeSpeed={500}
        scrollArea={myStoryRef.current}
        multiTextLoop={true}
        multiText={textBlocks}
      />

      <br />
      <br />
    </div>
  )
}
