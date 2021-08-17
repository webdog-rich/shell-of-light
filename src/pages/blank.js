import * as React from "react"
import Layout from "../components/layout"
import BackButton from "../components/backButton"

import { GatsbyImage } from "gatsby-plugin-image"

import { graphql, Link } from "gatsby"

const Blank = ({ data }) => {
  return (
    <>
      <Layout>
        Blur<Link to="/blank2">Link</Link>
      </Layout>
    </>
  )
}

export default Blank
