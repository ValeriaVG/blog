require('babel-core/register')
require('babel-polyfill')
const crypto = require('crypto')
const path = require('path')
/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// Implement the Gatsby API “onCreatePage”. This is called after every page is
// created.
exports.onCreatePage = async ({ page, boundActionCreators }) => {
  const { createPage, createNode } = boundActionCreators
  return new Promise((resolve, reject) => {
    if (page.path.match(/^\/blog\//)) {
      //page.layout = "blogEntry"
      const { settings } = require(page.component)
      if (settings) {
        // page.context=settings
        createNode({
          path: page.path,
          ...settings,
          // Required fields.
          id: `BlogPost ${page.path}`,
          parent: null,
          children: [],
          internal: {
            type: `BlogPost`,
            contentDigest: crypto
              .createHash(`md5`)
              .update(JSON.stringify(settings))
              .digest(`hex`),
            mediaType: `application/json`,
            content: JSON.stringify(settings),
          },
        })
      }
      createPage(page)
    }
    resolve()
  })
}
