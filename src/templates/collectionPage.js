import React, { useState } from "react"
import Layout from "../components/layout"
import Collections from "../components/collections"

import { graphql } from "gatsby"
import LightBox from "../components/lightBox"
import Modal from "../components/modal"

export default function CollectionPage({ data }) {
  const [modalActive, setModalActive] = useState(false)
  const [currentImage, setCurrentImage] = useState(null)

  const handleLightBox = imageNum => {
    setCurrentImage(imageNum)
    setModalActive(true)
  }

  const handleClose = () => {
    setModalActive(false)
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

      <Modal
        isActive={modalActive}
        handleClose={handleClose}
        overFlowY="hidden"
      >
        <LightBox
          images={data.contentfulCollections.images}
          currentImage={currentImage}
        />
      </Modal>
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
