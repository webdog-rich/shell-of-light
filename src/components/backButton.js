import React from "react"
import { Link } from "gatsby"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faChevronCircleLeft } from "@fortawesome/free-solid-svg-icons"

export default function BackButton() {
  return (
    <Link to="/" className="back-button">
      <span className="icon is-large">
        <FontAwesomeIcon icon={faChevronCircleLeft} />
      </span>
    </Link>
  )
}
