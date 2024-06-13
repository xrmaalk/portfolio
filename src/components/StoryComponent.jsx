import { textBlocks } from "../constants"
import { useState, useEffect } from "react"
import Typewriter from "react-typewriter-effect"

export default function StoryComponent() {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((currentIndex) => (currentIndex + 1) % textBlocks.length)
    }, 100)

    return () => clearInterval(intervalId)
  }, [])
  return (
    <div className="space-y-4">
      <Typewriter
        text={textBlocks[currentIndex]}
        cursor
        cursorStyle="_"
        typeSpeed={25}
        deleteSpeed={50}
        delaySpeed={100}
      />
      <br />
      <br />
    </div>
  )
}
