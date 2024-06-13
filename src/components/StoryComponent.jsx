import { textBlocks } from "../constants"
import { useState, useEffect, useRef } from "react"
import TypeWriterEffect from "react-typewriter-effect"

export default function StoryComponent() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const myStoryRef = useRef(null)
  const IntervalId = useRef(null)

  //   const nextStorySector = () => {
  //     setCurrentIndex(currentIndex + 1)
  //     return currentIndex
  //   }

  function processWords() {
    const intervalId = setInterval(() => {
      setCurrentIndex((currentIndex) => (currentIndex + 1) % textBlocks.length)
    }, 100)

    return () => clearInterval(intervalId)
  }
  useEffect(() => {
    processWords()
  }, [])

  return (
    <div className="space-y-4 mt-[2rem]" ref={myStoryRef}>
      <TypeWriterEffect
        textStyle={{ fontFamily: "Red Hat Display" }}
        startDelay={100}
        cursorColor="#44d45d"
        text={textBlocks[currentIndex]}
        typeSpeed={25}
        scrollArea={myStoryRef.current}
      />
      {/* <Typewriter
        text={textBlocks[currentIndex]}
        cursor
        cursorStyle="_"
        typeSpeed={25}
        deleteSpeed={50}
        delaySpeed={100}
      /> */}
      <br />
      <br />
      {/* <button className="text-5xl" onClick={nextStorySector}>
        👉
      </button> */}
    </div>
  )
}
