import * as React from "react"
import Footer from "./footer"
import Hero from "./hero"

const Layout = ({ children, heroImage, pageTitle }) => {
  return (
    <>
      <Hero heroImage={heroImage} pageTitle={pageTitle} />

      {children}
      <Footer />
    </>
  )
}

export default Layout
