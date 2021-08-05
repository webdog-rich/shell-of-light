import React from "react"
import { navigate } from "gatsby"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faChevronCircleLeft } from "@fortawesome/free-solid-svg-icons"

export default function BackButton() {
  return (
    <span className="back-button" onClick={() => navigate(-1)}>
      <span className="icon is-large">
        <FontAwesomeIcon icon={faChevronCircleLeft} />
      </span>
    </span>
  )
}
