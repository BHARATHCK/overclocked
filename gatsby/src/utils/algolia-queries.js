const escapeStringRegexp = require('escape-string-regexp')

const myQuery = `{
    allSanityProduct {
        edges {
          node {
            objectID: _id
            title
            vendor {
              title
            }
            defaultProductVariant {
              price
              images {
                asset {
                  gatsbyImageData
                  url
                }
              }
            }
          }
        }
      }
  }`

const queries = [
  {
    query: myQuery,
    transformer: ({ data }) =>
      data.allSanityProduct.edges.map(({ node }) => node), // optional
    indexName: 'products', // overrides main index name, optional
    settings: {
      // optional, any index settings
    },
    matchFields: ['slug', 'modified'], // Array<String> overrides main match fields, optional
  },
]

module.exports = queries
