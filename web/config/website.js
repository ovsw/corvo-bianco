const tailwind = require('../tailwind')

module.exports = {
  pathPrefix: '/', // Prefix for all links. If you deploy your site to example.com/portfolio your pathPrefix should be "/portfolio"

  siteTitle: 'Corvo Bianco -  Wood Fired Cookery', // Navigation and Site Title
  siteTitleAlt: 'Corvo Bianco', // Alternative Site title for SEO
  siteTitleShort: 'Corvo Bianco', // short_name for manifest
  siteHeadline: 'Neapolitan Pizza Truck', // Headline for schema.org JSONLD
  siteUrl: 'https://corvo-bianco-t.netlify.com', // Domain of your site. No trailing slash!
  siteLanguage: 'en', // Language Tag on <html> element
  siteLogo: '/logo.png', // Used for SEO and manifest
  siteDescription: 'Website for Corvo Bianco Wood Fired Cookery',
  author: 'OVS Websites', // Author for schema.org JSONLD

  // siteFBAppID: '123456789', // Facebook App ID - Optional
  userTwitter: '@corvobianco', // Twitter Username
  ogSiteName: 'corvobianco', // Facebook Site Name
  ogLanguage: 'en_US', // Facebook Language
  googleAnalyticsID: 'UA-47519312-5',

  // Manifest and Progress color
  themeColor: tailwind.colors.orange,
  backgroundColor: tailwind.colors.blue,
}
