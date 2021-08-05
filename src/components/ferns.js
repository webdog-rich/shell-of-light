import React from "react"

import { StaticImage } from "gatsby-plugin-image"

export default function Ferns() {
  return (
    <div style={{ position: "absolute", width: "100%" }}>
      <StaticImage
        src="../images/ferns-design-v2-left.png"
        alt="Beautiful Fern"
        style={{ left: "0px", top: "0px", position: "absolute" }}
        className="left-fern fern"
        objectFit="contain"
        placeholder="none"
      />
      <StaticImage
        src="../images/ferns-design-v2-right.png"
        alt="Beautiful Fern"
        style={{ right: "-15px", top: "0px", position: "absolute" }}
        className="right-fern fern"
        objectFit="contain"
        placeholder="none"
      />
    </div>
  )
}
