import React from "react"

import { StaticImage } from "gatsby-plugin-image"

import TransitionLink from "gatsby-plugin-transition-link"

export default function AnimatedLink({ to, className, children }) {
  const entryTransition = () => {
    console.log("entry")
  }

  const exitTransition = () => {
    console.log("exit")
  }

  return (
    <TransitionLink
      className={className}
      to={to}
      exit={{
        trigger: ({ exit, node }) => exitTransition(exit, node),
        length: 1,
      }}
      entry={{
        trigger: ({ exit, node }) => entryTransition(exit, node),
        delay: 1,
      }}
    >
      {children}
    </TransitionLink>
  )
}
