// The default metadata that will be used in the SEO component
module.exports = {
  siteMetadata: {
    title: 'Gatsby project', // the default name of the tab
    description: 'Gatsby project', // the description of your website
    image: '', // image that appears below the link when sharing
    url: '', // the url where your site will be
  },

  plugins: [
    {
      resolve: `gatsby-plugin-manifest`, // must be the first plugin
      options: {
        name: 'Gatsby project',
        short_name: 'Gatsby project',
        start_url: '/',
        background_color: '#ffffff',
        theme_color: '#ffffff',
        display: 'minimal-ui',
        icon: 'static/logo/favicon-32x32.png', // use https://realfavicongenerator.net/ to generate icons
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    'gatsby-plugin-image',
    'gatsby-plugin-react-helmet', // to use a SEO component (that will contain the metadata of your page)
    'gatsby-plugin-preact', // to use preact instead of react
    'gatsby-plugin-preload-fonts', // to preload all web fonts
    'gatsby-plugin-web-font-loader', // to load asyncronously all web fonts
    'gatsby-plugin-purgecss', // to remove all unused css,
    // 'gatsby-plugin-offline',
    {
      resolve: 'gatsby-source-filesystem', // the location of your images for queries
      options: {
        name: 'images',
        path: `${__dirname}/src/images/`,
      },
    },
    {
      resolve: 'gatsby-plugin-htaccess',
      options: {
        https: true,
      },
    },
    {
      resolve: `gatsby-source-filesystem`, // the location of your translations files for react-i18next
      options: {
        path: `${__dirname}/translations`,
        name: `translations`,
      },
    },
    {
      resolve: 'gatsby-plugin-react-i18next',
      options: {
        localeJsonSourceName: 'translations', // use the same name as the gatsby-source-filesystem folder you put for translations
        languages: ['es', 'fr'],
        defaultLanguage: 'fr',
        i18nextOptions: {
          interpolation: {
            escapeValue: false, // not needed for react as it escapes by default
          },
          // keySeparator: false,
          // nsSeparator: false,
        },
      },
    },
  ],
};
