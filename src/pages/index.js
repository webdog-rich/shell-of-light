import * as React from "react"
import Layout from "../components/layout"

import Collections from "../components/collections"

import { graphql } from "gatsby"

import "./mystyles.scss"

const IndexPage = ({ data }) => {
  return (
    <Layout
      pageTitle={data.page.title}
      heroImage={data.page.heroImage.gatsbyImageData}
      pageSubTitle={data.page.subTitle}
      largeHero
    >
      <Collections collectionData={data.collections.nodes} />
    </Layout>
  )
}

export default IndexPage

export const pageQuery = graphql`
  query {
    page: contentfulPage(slug: { eq: "shell-of-light" }) {
      id
      title
      subTitle
      heroImage {
        gatsbyImageData(placeholder: BLURRED)
      }
    }
    collections: allContentfulCollections {
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
