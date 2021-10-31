import { graphql, Link } from 'gatsby'
import React from 'react'
import ProductCard from '../../components/ProductCard'

export default function Browse({ pageContext, data }) {
  return (
    <div className="grid grid-cols-3 gap-4 p-10">
      {data.allSanityProduct.nodes.map((product, index) => (
        <Link to={`/shop/${product._id}`} replace key={index + 1}>
          <ProductCard>{product}</ProductCard>
        </Link>
      ))}
    </div>
  )
}
export const query = graphql`
  query categoryFilter($categoryId: String) {
    allSanityProduct(filter: { category: { _id: { eq: $categoryId } } }) {
      nodes {
        _id
        title
        vendor {
          _id
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
`
