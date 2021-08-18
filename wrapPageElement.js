import React from "react"

// Pass all props (hence the ...props) to the layout component so it has access to things like pageContext or location
const wrapPageElement = ({ element, props }) => (
  <div className="top-wrapper">
    <div className="animated-fern-wrapper">
      <div className="animate-fern"></div>
    </div>
    {element}
  </div>
)

export default wrapPageElement
