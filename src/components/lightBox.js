import React, { useEffect } from "react"

import { Helmet } from "react-helmet"

import { GatsbyImage } from "gatsby-plugin-image"

const LightBox = ({
  images,
  currentImage,
  handleClose,
  handlePrevRequest,
  handleNextRequest,
}) => {
  const imageArray = []

  useEffect(() => {
    //<link  rel="stylesheet" href="dist/css/modal-fx.min.css" />
  }, [])

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

  return <p className="image">{imageArray[currentImage]}</p>
}

export default LightBox
