import React, { useState } from "react"
import Layout from "../components/layout"
import Collections from "../components/collections"

import { graphql } from "gatsby"
import LightBox from "../components/lightBox"

export default function CollectionPage({ data }) {
  const [showLightbox, setShowLightbox] = useState(false)
  const [selectedImage, setSelectedImage] = useState(null)

  const handleLightBox = i => {
    setSelectedImage(i)
    setShowLightbox(true)
    console.log(i)
  }

  const handleClose = () => {
    setShowLightbox(false)
    setSelectedImage(null)
  }

  const handlePrevRequest = (i, length) => e => {
    console.log("handle")
    setSelectedImage((i - 1 + length) % length)
  }
  const handleNextRequest = (i, length) => e => {
    console.log("handle")
    setSelectedImage((i + 1) % length)
  }

  return (
    <Layout
      pageTitle={data.contentfulCollections.title}
      heroImage={data.contentfulCollections.image.gatsbyImageData}
    >
      <Collections
        collectionData={data.contentfulCollections.images}
        openLightBox={handleLightBox}
        isGallery={true}
      />
      {showLightbox && selectedImage !== null ? (
        <LightBox
          images={data.contentfulCollections.images}
          handleClose={handleClose}
          handleNextRequest={handleNextRequest}
          handlePrevRequest={handlePrevRequest}
          selectedImage={selectedImage}
        />
      ) : (
        ""
      )}
    </Layout>
  )
}

export const query = graphql`
  query ($slug: String!) {
    contentfulCollections(slug: { eq: $slug }) {
      id
      title
      image {
        gatsbyImageData
        title
      }
      images {
        image {
          gatsbyImageData(placeholder: BLURRED)
          title
          id
        }
      }
    }
  }
`
