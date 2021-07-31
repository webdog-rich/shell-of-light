import * as React from "react"

import LightboxReact from "lightbox-react"

import { GatsbyImage } from "gatsby-plugin-image"

import "lightbox-react/style.css"

const LightBox = ({
  images,
  selectedImage,
  handleClose,
  handlePrevRequest,
  handleNextRequest,
}) => {
  const array = []

  images.forEach(image => {
    console.log(image)
    array.push(<GatsbyImage image={image.gatsbyImageData} alt={image.title} />)
  })

  return (
    <LightboxReact
      enableZoom={false}
      clickOutsideToClose={true}
      mainSrc={array[selectedImage]}
      nextSrc={array[(selectedImage + 1) % array.length]}
      prevSrc={array[(selectedImage + array.length - 1) % images.length]}
      onCloseRequest={handleClose}
      onMovePrevRequest={handlePrevRequest(selectedImage, array.length)}
      onMoveNextRequest={handleNextRequest(selectedImage, array.length)}
    />
  )
}

export default LightBox
