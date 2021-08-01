import * as React from "react"
import Layout from "../components/layout"

import Collections from "../components/collections"

import { graphql } from "gatsby"

import "./mystyles.scss"
import "lightbox-react/style.css"

const IndexPage = ({ data }) => {
  return (
    <Layout
      pageTitle="Shell of Light"
      heroImage={data.allContentfulCollections.nodes[0].image.gatsbyImageData}
    >
      <Collections collectionData={data.allContentfulCollections.nodes} />
    </Layout>
  )
}

export default IndexPage

export const pageQuery = graphql`
  query query {
    allContentfulCollections {
      nodes {
        id
        title
        slug

        image {
          gatsbyImageData(placeholder: BLURRED)
          title
        }
      }
    }
  }
`
