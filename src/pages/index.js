import * as React from "react"
import Layout from "../components/layout"
import Hero from "../components/hero"
import Collections from "../components/collections"
import Footer from "../components/footer"
import { graphql } from "gatsby"

import "./mystyles.scss"

const IndexPage = ({ data }) => {
  return (
    <Layout pageTitle="Home Page">
      <Hero
        heroImage={
          data.allContentfulCollections.nodes[0].heroImage.gatsbyImageData
        }
      />
      <Collections collectionData={data.allContentfulCollections.nodes} />
      <Footer />
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

        heroImage {
          gatsbyImageData(placeholder: BLURRED)
          title
        }
      }
    }
  }
`
