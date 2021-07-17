import React from "react"
import Collection from "./collection"

const Collections = ({ collectionData }) => {
  const collections = collectionData.map(node => {
    return (
      <div class="column is-multiline is-centered">
        <Collection
          key={node.node.heroImage.title}
          title={node.node.title}
          image={node.node.heroImage.gatsbyImageData}
        />
      </div>
    )
  })
  return <div class="columns">{collections}</div>
}

export default Collections
