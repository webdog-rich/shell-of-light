import React, { useEffect } from "react"

import { GatsbyImage } from "gatsby-plugin-image"

const LightBox = ({
  images,
  selectedImage,
  handleClose,
  handlePrevRequest,
  handleNextRequest,
}) => {
  const array = []

  //   useEffect(() => {
  //     console.log("mounted")
  //     document.documentElement.style.overflow = "hidden"
  //     return () => (document.documentElement.style.overflow = "unset")
  //   }, [])

  images.forEach(image => {
    console.log(image.image.gatsbyImageData)
    console.log("updated")
    array.push(
      <GatsbyImage
        image={image.image.gatsbyImageData}
        alt={image.image.title}
      />
    )
  })

  return <div>Modal Please</div>
}

export default LightBox
