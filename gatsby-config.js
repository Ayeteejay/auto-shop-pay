module.exports = {
  siteMetadata: {
    title: `Auto Shop Pay | We make getting paid, simple.`,
    description: `Let us show you how our flat rate pricing will help you grow your auto shop.`,
    author: `Adam Jones`,
  },
  plugins: [
    "gatsby-plugin-styled-components",
    "gatsby-plugin-image",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-offline",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",

    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
        icon: `src/images/gatsby-icon.png`,
      },
      __key: "images",
    },
  ],
};
