/**
 * App Constants
*/

export default {
   AppLogo: require('../assets/images/header-logo.png'),         // App logo
   rtlLayout: false,                                             // RTL Layout
   adminLayout: false,                                            // Admin Layout
   navCollapsed: false,                                          // Sidebar Nav Layout
   algoliaConfig: {                                              // Algolia configuration
      appId: 'latency',
      apiKey: '3d9875e51fbd20c7754e65422f7ce5e1',
      indexName: 'bestbuy'
   },
   // Default locale
   locale: {
      locale: 'en',
      name: 'English',
      icon: 'en',
   },
   // Footer about description
   AboutUs: 'GOLD BATHROOM FURNITURE, which transforms into a completely different area with the elegance and ergonomics of your bathroom; interpreting traditional lines with an innovative approach.',
   // Copyright text
   CopyrightText: '© All Rights Reversed | Made With Love by AKY for better Web '
}