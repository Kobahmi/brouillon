module.exports = [{
      plugin: require('../node_modules/gatsby-plugin-manifest/gatsby-browser.js'),
      options: {"plugins":[],"name":"gatsby-starter-default","short_name":"starter","start_url":"/","background_color":"#663399","display":"minimal-ui","icon":"src/images/Vector.svg","legacy":true,"theme_color_in_head":true,"cache_busting_mode":"query","crossOrigin":"anonymous","include_favicon":true,"cacheDigest":"52271bba000950f399fe7c6694747e96"},
    },{
      plugin: require('../node_modules/gatsby-plugin-gatsby-cloud/gatsby-browser.js'),
      options: {"plugins":[],"headers":{"/fonts/*":["Cache-Control: public,max-age=31536000,s-maxage=31536000,immutable"],"/meta/*":["Cache-Control: public,max-age=31536000,s-maxage=31536000,immutable"],"**/*.woff":["Cache-Control: public,max-age=31536000,s-maxage=31536000,immutable"],"**/*.woff2":["Cache-Control: public,max-age=31536000,s-maxage=31536000,immutable"]},"allPageHeaders":["Strict-Transport-Security: max-age=31536000; includeSubDomains; preload"]},
    },{
      plugin: require('../gatsby-browser.js'),
      options: {"plugins":[]},
    },{
      plugin: require('../node_modules/gatsby/dist/internal-plugins/partytown/gatsby-browser.js'),
      options: {"plugins":[]},
    }]
