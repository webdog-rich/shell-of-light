import { Link } from "gatsby"
import React from "react"

import { getImage, GatsbyImage } from "gatsby-plugin-image"

import { convertToBgImage } from "gbimage-bridge"
import BackgroundImage from "gatsby-background-image"

const Hero = ({ heroImage }) => {
  const bgImage = convertToBgImage(heroImage)
  console.log(bgImage)
  return (
    <BackgroundImage
      Tag="section"
      className="hero is-large"
      {...bgImage}
      preserveStackingContext
    >
      <div className="hero-head">
        <nav className="navbar">
          <div className="container">
            <div className="navbar-brand">
              <a className="navbar-item"></a>
              <span className="navbar-burger" data-target="navbarMenuHeroB">
                <span></span>
                <span></span>
                <span></span>
              </span>
            </div>
            <div id="navbarMenuHeroB" className="navbar-menu">
              <div className="navbar-end">
                <Link className="navbar-item">About</Link>
                <Link className="navbar-item">Contact</Link>
              </div>
            </div>
          </div>
        </nav>
      </div>
      <div className="hero-body">
        <div className="container has-text-centered">
          <p className="title">Title</p>
          <p className="subtitle">Subtitle</p>
        </div>
      </div>
      <div className="hero-foot">
        <nav className="tabs is-boxed is-fullwidth">
          <div className="container">
            <ul>
              <li className="is-active">
                <a>Overview</a>
              </li>
              <li>
                <a>Modifiers</a>
              </li>
              <li>
                <a>Grid</a>
              </li>
              <li>
                <a>Elements</a>
              </li>
              <li>
                <a>Components</a>
              </li>
              <li>
                <a>Layout</a>
              </li>
              <li>
                <a>More</a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </BackgroundImage>
  )
}

export default Hero
