import { graphql, Link } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import * as React from "react"
import BackButton from "../components/backButton"
import Layout from "../components/layout"

const Blank2 = ({ data }) => {
  return (
    <>
      <Layout>
        Blur 2<Link to="/blank">Link</Link>"
      </Layout>
    </>
  )
}

export default Blank2
