import React from "react"

import TransitionLink from "gatsby-plugin-transition-link"

import anime from "animejs"

export default function AnimatedLink({ to, className, children }) {
  const exitDuration = 500

  const entryDuration = 500

  const pause = 500

  const entryTransition = () => {
    //only run when page has fully loaded
    anime({
      targets: ".animate-fern",
      opacity: [1, 0],
      duration: entryDuration,
      delay: pause,
      easing: "easeOutQuad",
    })
    console.log("entry")
  }

  const exitTransition = () => {
    anime({
      targets: ".animate-fern",
      opacity: [0, 1],
      duration: exitDuration,
      easing: "easeInQuad",
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
          length: exitDuration / 1000,
        }}
        entry={{
          trigger: ({ exit, node }) => entryTransition(exit, node),
          delay: (exitDuration + 200) / 1000,
        }}
      >
        {children}
      </TransitionLink>
    </>
  )
}
