import React from "react"

import { Link } from "gatsby"

import { convertToBgImage } from "gbimage-bridge"

import BackgroundImage from "gatsby-background-image"

const Collection = ({ title, image, slug }) => {
  const bgImage = convertToBgImage(image)
  if (slug) {
    return (
      <Link to={slug}>
        <BackgroundImage
          Tag="section"
          className=""
          {...bgImage}
          alt={title}
          preserveStackingContext
        >
          <div className="image is-3by2">
            <h2 className="has-ratio title is-align-items-center is-justify-content-center has-text-centered has-text-white is-flex">
              {title}
            </h2>
          </div>
        </BackgroundImage>
      </Link>
    )
  } else {
    return (
      <BackgroundImage
        Tag="section"
        className="pointer"
        {...bgImage}
        alt={title}
        preserveStackingContext
      >
        <div className="image is-3by2">
          {/* <h2 className="has-ratio title is-align-items-center is-justify-content-center has-text-centered has-text-white is-flex">
            {title}
          </h2> */}
        </div>
      </BackgroundImage>
    )
  }
}

export default Collection
