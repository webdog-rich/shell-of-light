import React from "react"

import TransitionLink from "gatsby-plugin-transition-link"

import anime from "animejs"

export default function AnimatedLink({ to, className, children }) {
  const entryTransition = () => {
    anime({
      targets: ".animate-fern",
      opacity: 0,
      duration: 5000,
      delay: 1000,
    })
    console.log("entry")
  }

  const exitTransition = () => {
    anime({
      targets: ".animate-fern",
      opacity: 1,
      duration: 2000,
    })
    console.log("exit")
  }

  return (
    <>
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
    </>
  )
}
