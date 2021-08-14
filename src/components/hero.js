import { Link } from "gatsby"
import React, { useState } from "react"

import { convertToBgImage } from "gbimage-bridge"
import BackgroundImage from "gatsby-background-image"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faInstagram } from "@fortawesome/free-brands-svg-icons"

const Hero = ({ heroImage, pageTitle, isLarge, pageSubTitle }) => {
  const bgImage = convertToBgImage(heroImage)

  const [mobileMenuActive, setMobileMenuActive] = useState(false)

  const toggleNavBar = () => {
    setMobileMenuActive(prevCheck => !prevCheck)
  }

  return (
    <>
      <BackgroundImage
        Tag="section"
        className={isLarge ? "hero is-fullheight" : "hero is-halfheight"}
        {...bgImage}
        preserveStackingContext
      >
        <div className="hero-head">
          <nav className="navbar">
            <div className="container">
              <div className="navbar-brand">
                <span
                  className={
                    mobileMenuActive
                      ? "navbar-burger is-active"
                      : "navbar-burger"
                  }
                  data-target="navbarMenuHeroB"
                  onClick={() => toggleNavBar()}
                >
                  <span aria-hidden="true"></span>
                  <span aria-hidden="true"></span>
                  <span aria-hidden="true"></span>
                </span>
              </div>
              <div
                id="navbarMenuHeroB"
                className={
                  mobileMenuActive
                    ? "navbar-menu is-active animate__animated animate__fadeInDown "
                    : "navbar-menu"
                }
              >
                <div className="navbar-end">
                  <Link className="navbar-item" to="/about">
                    About
                  </Link>
                  <Link className="navbar-item" to="/contact">
                    Contact
                  </Link>
                  <a
                    className="navbar-item"
                    href="https://www.instagram.com/sshell.of.light"
                  >
                    <span className="icon is-large">
                      <FontAwesomeIcon icon={faInstagram} size="lg" />
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </nav>
        </div>
        <div className="hero-body">
          <div className="container has-text-centered">
            <h1 className="title has-text-white is-size-1-desktop is-uppercase is-family-sans-serif">
              {pageTitle}
            </h1>
            <p className="subtitle has-text-white">
              {pageSubTitle ? pageSubTitle : ""}
            </p>
          </div>
        </div>
        <div className="hero-foot"></div>
      </BackgroundImage>
    </>
  )
}

export default Hero
