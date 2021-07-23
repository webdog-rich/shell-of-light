import React from "react"
import Collection from "./collection"

const Collections = ({ collectionData }) => {
  const collections = collectionData.map((item, i) => {
    if (item.heroImage) {
      return (
        <div key={item.title + "div" + i} className="column is-3">
          <Collection
            key={item.title + i}
            title={item.title}
            image={item.heroImage.gatsbyImageData}
            slug={item.slug}
          />
        </div>
      )
    } else {
      return (
        <div
          key={item.title + "div" + i}
          className="column is-3"
          onClick={() => console.log("clicked")}
          onKeyDown={e => {
            if (e.code === "Enter") {
              console.log("clicked")
            }
          }}
          role="button"
          tabIndex="0"
        >
          <Collection
            key={item.title + i}
            title={item.title}
            image={item.image.gatsbyImageData}
          />
        </div>
      )
    }
  })
  return (
    <div className="columns is-multiline is-centered is-gapless">
      {collections}
    </div>
  )
}

export default Collections
