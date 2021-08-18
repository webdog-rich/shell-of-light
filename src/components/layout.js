import * as React from "react"
import Footer from "./footer"
import Hero from "./hero"

const Layout = ({
  children,
  heroImage,
  pageTitle,
  largeHero,
  pageSubTitle,
}) => {
  return (
    <>
      <Hero
        heroImage={heroImage}
        pageTitle={pageTitle}
        isLarge={largeHero ? true : false}
        pageSubTitle={pageSubTitle}
      />
      {children}

      <Footer />
    </>
  )
}

export default Layout
