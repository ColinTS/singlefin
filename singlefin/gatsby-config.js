let env = process.env.NODE_ENV || 'development'
require('dotenv').config({ path: `./.env.${env}` })

const theme = {
  logo: {
    fontSize: 36,
    fontFamily: 'Roboto',
    fontColor: 'green',
  },
}

module.exports = {
  siteMetadata: {
    title: 'Singlefin',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/images/gatsby-icon.png', // This path is relative to the root of the site.
      },
    },
    {
      resolve: 'gatsby-plugin-react-svg',
      rule: {
        include: /images/,
      },
    },
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `${process.env.CONTENTFUL_ID}`,
        accessToken: `${process.env.CONTENTFUL_TOKEN}`,
      },
    },
    {
      resolve: `gatsby-plugin-jss`,
      options: { theme },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.app/offline
    // 'gatsby-plugin-offline',
  ],
}
