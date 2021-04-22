module.exports = {
  siteMetadata: {
    title: `Rhode Island CEO`,
    description: `The Rhode Island Center for Employee Ownership develops technical, financial assistance, and regulatory support to advance employee ownership in the State of Rhode Island. Our long-term mission is to cultivate an environment for the growth of a worker cooperative business sector.`,
    author: `@RhodeIslandCEO`,
  },
  plugins: [
    `gatsby-plugin-postcss`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/pages`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `settings`,
        path: `${__dirname}/src/settings`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `markdown`,
        path: `${__dirname}/src/markdown`,
      },
    },
    `gatsby-plugin-netlify-cms`,
    `gatsby-transformer-remark`,
    `gatsby-transformer-sharp`,
    `gatsby-transformer-json`,
    `gatsby-plugin-sharp`,
    `gatsby-background-image`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Rhode Island Center for Employee Ownership`,
        short_name: `Rhode Island CEO`,
        start_url: `/`,
        background_color: `#2a2a2a`,
        theme_color: `#10798F`,
        display: `minimal-ui`,
        icon: `src/images/logo-compact.png`, // This path is relative to the root of the site.
      },
    },
  ],
}
