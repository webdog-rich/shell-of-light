import React from "react"
import Collection from "./collection"

const Collections = ({ collectionData, openLightBox, isGallery }) => {
  const handleClick = i => {
    openLightBox(i)
  }

  const collections = collectionData.map((item, i) => {
    if (!isGallery) {
      return (
        <div key={item.id + "div" + i} className="column is-6">
          <Collection
            key={item.id + i}
            title={item.title}
            image={item.image.gatsbyImageData}
            slug={item.slug}
          />
        </div>
      )
    } else {
      return (
        <div
          key={item.id + "div" + i}
          className="column is-3"
          onClick={() => handleClick(i)}
          onKeyDown={e => {
            if (e.code === "Enter") {
              handleClick(i)
            }
          }}
          role="button"
          tabIndex="0"
        >
          <Collection
            key={item.id}
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
