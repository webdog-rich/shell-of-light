import * as React from "react"
import Footer from "./footer"
import Hero from "./hero"

import { Helmet } from "react-helmet"

const Layout = ({
  children,
  heroImage,
  pageTitle,
  largeHero,
  pageSubTitle,
}) => {
  return (
    <>
      <Helmet>
        <html lang="en" />
        <meta charSet="utf-8" />
        <title>{`Shell of Light - ${
          pageTitle === "Shell of Light" ? "Home" : pageTitle
        }`}</title>
        <link rel="canonical" href="https://shelloflight.com/" />
        <meta name="description" content="Photogrpahy by Laurelle Jones" />
        <meta name="theme-color" content="#FFFFFF" />
      </Helmet>
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
