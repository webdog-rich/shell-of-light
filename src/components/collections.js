import React from "react"
import Collection from "./collection"

const Collections = ({ collectionData }) => {
  const collections = collectionData.map(node => {
    return (
      <div key={node.node.title} className="column is-multiline is-centered">
        <Collection
          key={node.node.heroImage.title}
          title={node.node.title}
          image={node.node.heroImage.gatsbyImageData}
        />
      </div>
    )
  })
  return <div className="columns">{collections}</div>
}

export default Collections
