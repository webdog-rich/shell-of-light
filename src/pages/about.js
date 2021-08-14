import * as React from "react"
import Layout from "../components/layout"
import BackButton from "../components/backButton"

import { GatsbyImage } from "gatsby-plugin-image"

import { graphql } from "gatsby"

const AboutPage = ({ data }) => {
  return (
    <>
      <BackButton />
      <Layout
        pageTitle={data.page.title}
        heroImage={data.page.heroImage.gatsbyImageData}
        className="page-wrapper"
      >
        <section className="section">
          <div className="container">
            <div className="columns">
              <div className="column is-half">
                <div
                  className="main-text"
                  dangerouslySetInnerHTML={{
                    __html: data.page.mainText.childMarkdownRemark.html,
                  }}
                />
              </div>
              <div className="column">
                <figure className="image">
                  <GatsbyImage
                    image={data.page.sidebarImage.gatsbyImageData}
                    alt={data.page.sidebarImage.title}
                    objectFit="contain"
                  />
                </figure>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    </>
  )
}

export default AboutPage

export const pageQuery = graphql`
  query {
    page: contentfulPage(slug: { eq: "about" }) {
      id
      title
      subTitle
      heroImage {
        gatsbyImageData
      }
      sidebarImage {
        gatsbyImageData
        title
      }
      mainText {
        childMarkdownRemark {
          html
        }
      }
    }
  }
`
