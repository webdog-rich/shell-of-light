import React from "react"

import { GatsbyImage } from "gatsby-plugin-image"

const LightBoxImage = ({ image }) => {
  console.log(image.image.GatsbyImageData)
  return <GatsbyImage image={image.GatsbyImageData} alt={image.title} />
}
export default LightBoxImage
