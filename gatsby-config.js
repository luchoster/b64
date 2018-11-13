module.exports = {
  siteMetadata: {
    title: 'B64 Translator',
  },
  plugins: [
    `gatsby-plugin-sass`,
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-favicon`,
      options: {
        logo: './src/assets/images/b64_logo.png',

        // WebApp Manifest Configuration
        appName: 'B64 Translator', // Inferred with your package.json
        appDescription: null,
        developerName: null,
        developerURL: 'https://checkitout.io/',
        dir: 'auto',
        lang: 'en-US',
        background: '#172a3a',
        theme_color: '#004346',
        display: 'standalone',
        orientation: 'portrait',
        start_url: '/?homescreen=1',
        version: '1.0',

        icons: {
          android: true,
          appleIcon: true,
          appleStartup: true,
          coast: false,
          favicons: true,
          firefox: true,
          opengraph: false,
          twitter: true,
          windows: false,
        },
      },
    },
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
        name: 'B64 Translator',
        short_name: 'B64',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/images/gatsby-icon.png', // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.app/offline
    'gatsby-plugin-offline',
    {
      resolve: `@wapps/gatsby-plugin-material-ui`,
      options: {
        // Add any options here
        theme: {
          palette: {
            type: 'dark',
          },
          primaryColor: '#508991',
        },
      },
    },
  ],
}
