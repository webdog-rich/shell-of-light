import React, { useState } from "react"
import Layout from "../components/layout"
import Collections from "../components/collections"

import { graphql } from "gatsby"

export default function CollectionPage({ data }) {
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
