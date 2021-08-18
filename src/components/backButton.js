import React from "react"
import { Link } from "gatsby"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faChevronCircleLeft } from "@fortawesome/free-solid-svg-icons"

import AnimatedLink from "./animatedLink"

export default function BackButton() {
  return (
    <AnimatedLink to="/" className="back-button">
      <span className="icon is-large">
        <FontAwesomeIcon icon={faChevronCircleLeft} />
      </span>
    </AnimatedLink>
  )
}
