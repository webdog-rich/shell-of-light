import React from "react"

import { GatsbyImage } from "gatsby-plugin-image"

const Collection = ({ title, image }) => {
  return (
    <div key={title}>
      <div>{title}</div>
      <GatsbyImage image={image} alt={title} />
    </div>
  )
}

export default Collection
