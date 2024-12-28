import React from "react"
import PropTypes from "prop-types"

const TechIcons = ({ icon, alt = "tech-icon" }) => {
  if (!icon) return null // Guard against missing icon

  return (
    <div
      style={{
        width: "64px",
        height: "64px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: "8px",
        backgroundColor: "#45B440",
      }}>
      <img
        src={icon}
        alt={alt}
        style={{
          width: "48px",
          height: "48px",
          objectFit: "contain",
        }}
      />
    </div>
  )
}

TechIcons.propTypes = {
  icon: PropTypes.string.isRequired,
  alt: PropTypes.string,
}

export default TechIcons
