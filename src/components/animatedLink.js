import React from "react"

import TransitionLink from "gatsby-plugin-transition-link"

import anime from "animejs"

export default function AnimatedLink({ to, className, children }) {
  const exitDuration = 1000

  const entryDuration = 500

  const pause = 500

  const entryTransition = e => {
    //only run when page has fully loaded
    const growTo = Math.max(window.innerWidth, window.innerHeight) * 2
    console.log("entry")
    anime({
      targets: ".animate-fern",
      width: [growTo, 0],
      height: [growTo, 0],

      duration: entryDuration,
      delay: pause,
      easing: "easeOutQuart",
    })
  }

  const exitTransition = e => {
    const growTo = Math.max(window.innerWidth, window.innerHeight) * 2
    console.log(growTo)

    const xTransform = e.clientX - e.view.window.innerWidth / 2

    const yTransform = e.clientY - e.view.window.innerHeight / 2

    anime.set(".animate-fern", {
      translateX: xTransform,
      translateY: yTransform,
    })
    anime({
      targets: ".animate-fern",
      width: [0, growTo],
      height: [0, growTo],

      duration: exitDuration,
      easing: "easeInQuart",
    })
    console.log("exit")
  }

  return (
    <>
      <TransitionLink
        className={className}
        to={to}
        exit={{
          trigger: ({ exit, e, node }) => exitTransition(e),
          length: exitDuration / 1000,
        }}
        entry={{
          trigger: ({ exit, e, node }) => entryTransition(e),
          delay: (exitDuration + 200) / 1000,
        }}
      >
        {children}
      </TransitionLink>
    </>
  )
}
