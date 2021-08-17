import React from "react"

import { StaticImage } from "gatsby-plugin-image"

export default function Ferns() {
  return (
    <div style={{ position: "fixed", top: "0px", zIndex: 9999999 }}>
      <StaticImage src="../images/fern.jpg" alt="A Fern" />
    </div>
  )
}
