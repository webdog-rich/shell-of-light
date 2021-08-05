import * as React from "react"
import Ferns from "./ferns"
import Footer from "./footer"
import Hero from "./hero"

const Layout = ({ children, heroImage, pageTitle, largeHero }) => {
  return (
    <>
      <Ferns />
      <Hero
        heroImage={heroImage}
        pageTitle={pageTitle}
        isLarge={largeHero ? true : false}
      />

      {children}
      <Footer />
    </>
  )
}

export default Layout
