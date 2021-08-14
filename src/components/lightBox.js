import React, { useEffect } from "react"

import { GatsbyImage } from "gatsby-plugin-image"

const LightBox = ({ images, currentImage }) => {
  const imageArray = []

  useEffect(() => {
    //<link  rel="stylesheet" href="dist/css/modal-fx.min.css" />
  }, [])

  if (!images) {
    return null
  }

  images.forEach(image => {
    imageArray.push(
      <GatsbyImage
        image={image.image.gatsbyImageData}
        alt={image.image.title}
        style={{ maxHeight: "90vh" }}
        objectFit="contain"
      />
    )
  })

  return <figure className="image">{imageArray[currentImage]}</figure>
}

export default LightBox
