const path = require(`path`)

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const result = await graphql(`
    query {
      allContentfulCollections {
        edges {
          node {
            slug
          }
        }
      }
    }
  `)

  result.data.allContentfulCollections.edges.forEach(({ node }) => {
    createPage({
      path: node.slug,
      component: path.resolve(`./src/templates/collection-page.js`),
      context: {
        slug: node.slug,
      },
    })
  })
}
