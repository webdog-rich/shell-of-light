import * as React from "react"
import Layout from "../components/layout"
import Hero from "../components/hero"
import Collections from "../components/collections"
import { graphql } from "gatsby"

import "./mystyles.scss"

const IndexPage = ({ data }) => {
  return (
    <Layout pageTitle="Home Page">
      <Hero
        heroImage={
          data.allContentfulCollections.edges[0].node.heroImage.gatsbyImageData
        }
      />
      <Collections collectionData={data.allContentfulCollections.edges} />
    </Layout>
  )
}

export default IndexPage

export const pageQuery = graphql`
  query {
    allContentfulCollections {
      edges {
        node {
          id
          heroImage {
            gatsbyImageData(placeholder: BLURRED)
            title
          }
          title
        }
      }
    }
  }
`
