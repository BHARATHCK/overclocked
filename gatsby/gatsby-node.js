exports.createPages = async function ({ actions, graphql }) {
  const { data } = await graphql(`
    query ProductData {
      allSanityProduct {
        nodes {
          _id
          title
          body {
            en {
              children {
                text
              }
            }
          }
          slug {
            current
          }
          defaultProductVariant {
            title
            price
            images {
              asset {
                gatsbyImageData(
                  width: 350
                  height: 350
                  placeholder: BLURRED
                  formats: [AUTO]
                )
                url
              }
            }
          }
          vendor {
            title
          }
        }
      }
    }
  `)

  const { data: browseData } = await graphql(`
    query categories {
      allSanityCategory {
        nodes {
          _id
          title
        }
      }
    }
  `)

  data.allSanityProduct.nodes.forEach((node) => {
    const nodeId = node._id
    actions.createPage({
      path: `/shop/${nodeId}`,
      component: require.resolve(`./src/pages/shop/[shop].js`),
      context: { clientId: nodeId, data: node },
    })
  })

  browseData.allSanityCategory.nodes.forEach((node) => {
    const categoryId = node._id
    actions.createPage({
      path: `/browse/${categoryId}`,
      component: require.resolve(`./src/pages/browse/[browse].js`),
      context: { categoryId: categoryId, data: node },
    })
  })
}
