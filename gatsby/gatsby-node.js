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
  console.log('GATSBY NODE : DATA --> ', data)
  data.allSanityProduct.nodes.forEach((node) => {
    console.log('TITLE ---> ', node.title, ' ID --> ', node._id)
    const nodeId = node._id
    actions.createPage({
      path: `/shop/${nodeId}`,
      component: require.resolve(`./src/pages/shop/[shop].js`),
      context: { clientId: nodeId, data: node },
    })
  })
}
