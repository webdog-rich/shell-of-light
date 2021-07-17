/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

require("dotenv").config()

module.exports = {
  siteMetadata: {
    siteUrl: "https://www.yourdomain.tld",
    title: "Shell of Light",
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/images`,
        name: "images",
      },
    },
    `gatsby-plugin-sharp`,
    `gatsby-plugin-image`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sass`,

    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `h8kxaxrg8fna`,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
      },
    },
  ],
}
