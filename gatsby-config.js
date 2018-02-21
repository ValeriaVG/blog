module.exports = {
  siteMetadata: {
    title: "ValeriaVG"
  },
  plugins: [
    "gatsby-plugin-react-helmet",
    {
      resolve: "gatsby-plugin-typography",
      options: {
        pathToConfigModule: "src/utils/typography.js"
      }
    },
    "gatsby-plugin-resolve-src",
    "gatsby-plugin-styled-components"
  ]
};
