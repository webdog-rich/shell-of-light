import * as React from "react"
import Ferns from "./ferns"
import Footer from "./footer"
import Hero from "./hero"
import { motion } from "framer-motion"

const Layout = ({
  children,
  heroImage,
  pageTitle,
  largeHero,
  pageSubTitle,
}) => {
  return (
    <>
      <motion.div
        initial={{ opacity: 1 }}
        animate={{ opacity: 0 }}
        exit={{ opacity: 1 }}
        transition={{ duration: 5 }}
        style={{ zIndex: 999999 }}
      >
        <Ferns />
      </motion.div>
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
