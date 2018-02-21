module.exports = {
  siteMetadata: {
    title: 'ValeriaVG',
  },
  plugins: [
    'gatsby-plugin-styled-components',
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-plugin-typography',
      options: {
        pathToConfigModule: './src/utils/typography.js',
      },
    },
    'gatsby-plugin-resolve-src',
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: 'UA-114601209-1',
        head: false,
        anonymize: true,
      },
    },
  ],
}
