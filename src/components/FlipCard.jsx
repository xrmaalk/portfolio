import React, { useState } from "react"
import ReactCardFlip from "react-card-flip"

const styles = {
  card: { background: "blue", color: "white", borderRadius: 20 },
}

const FlipCard = () => {
  const [isFlipped, setIsFlipped] = useState(false)
  const handleClick = (e) => {
    e.preventDefault()
    setIsFlipped((preState) => ({ isFlipped: !preState.isFlipped }))
  }
  return (
    <ReactCardFlip isFlipped={isFlipped} flipDirection="vertical">
      <div className="bg-red-400">
        <h1>Projects</h1>
        <button onClick={handleClick}></button>
      </div>

      <div className="bg-red-600">
        <h1>Back</h1>
        <button onClick={handleClick}></button>
      </div>
    </ReactCardFlip>
  )
}
export { FlipCard }
