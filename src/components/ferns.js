import React from "react"

import { StaticImage } from "gatsby-plugin-image"

export default function Ferns() {
  return (
    <div style={{ position: "absolute", width: "100%" }}>
      <StaticImage
        src="../images/top-left-02-web.png"
        alt="Beautiful Fern"
        style={{ left: "0px", top: "0px", position: "absolute" }}
        className="left-fern fern animate__rotateInDownLeft animate__animated animate__delay-2s"
        objectFit="contain"
        placeholder="none"
      />
      <StaticImage
        src="../images/top-right-01-web.png"
        alt="Beautiful Fern"
        style={{ right: "-15px", top: "0px", position: "absolute" }}
        className="right-fern fern animate__rotateInDownRight animate__animated animate__delay-1s"
        objectFit="contain"
        placeholder="none"
      />
    </div>
  )
}
