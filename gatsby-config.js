/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-config/
 */

/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `Brouillon`,
    description: `SEO Testing`,
    author: `@gatsbyjs`,
    siteUrl: `https://gatsbystarterdefaultsource.gatsbyjs.io/`,
  },
  plugins: [
    `gatsby-plugin-image`,
    "gatsby-plugin-postcss",
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        // This will impact how browsers show your PWA/website
        // https://css-tricks.com/meta-theme-color-and-trickery/
        // theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: "gatsby-plugin-gatsby-cloud",
      options: {
        headers: {
          "/fonts/*": [
            "Cache-Control: public,max-age=31536000,s-maxage=31536000,immutable",
          ],
          "/meta/*": [
            "Cache-Control: public,max-age=31536000,s-maxage=31536000,immutable",
          ],
          "**/*.woff": [
            "Cache-Control: public,max-age=31536000,s-maxage=31536000,immutable",
          ],
          "**/*.woff2": [
            "Cache-Control: public,max-age=31536000,s-maxage=31536000,immutable",
          ],
        },
        allPageHeaders: [
          "Strict-Transport-Security: max-age=31536000; includeSubDomains; preload",
        ],
      },
    },
  ],
};
