import React from "react"

import { convertToBgImage } from "gbimage-bridge"
import BackgroundImage from "gatsby-background-image"

const Footer = ({ heroImage }) => {
  const bgImage = convertToBgImage(heroImage)

  return (
    <footer>
      <div className="content has-text-centered">
        <strong>
          Built by <a href="https://www.webdog.co.nz">Webdog</a>
        </strong>
      </div>
    </footer>
  )
}

export default Footer
