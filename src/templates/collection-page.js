import React from "react"
import Layout from "../components/layout"

import Hero from "../components/hero"
import Collections from "../components/collections"
import Footer from "../components/footer"

import { graphql } from "gatsby"

export default function BlogPost({ data }) {
  return (
    <Layout pageTitle={data.contentfulCollections.title}>
      <Hero heroImage={data.contentfulCollections.heroImage.gatsbyImageData} />
      <Collections collectionData={data.contentfulCollections.images} />
      <Footer />
    </Layout>
  )
}

export const query = graphql`
  query ($slug: String!) {
    contentfulCollections(slug: { eq: $slug }) {
      id
      title
      heroImage {
        gatsbyImageData
        title
      }
      images {
        image {
          gatsbyImageData(placeholder: BLURRED)
          title
        }
      }
    }
  }
`
