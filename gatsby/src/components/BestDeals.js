import React from 'react'
import { graphql, Link, StaticQuery } from 'gatsby'
import ProductCard from './ProductCard'

export default function BestDeals({ data }) {
  return (
    <StaticQuery
      query={graphql`
        query ProductData {
          allSanityProduct {
            nodes {
              _id
              title
              defaultProductVariant {
                title
                price
                images {
                  asset {
                    gatsbyImageData(
                      width: 200
                      height: 200
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
      `}
      render={(data) => (
        <div>
          <p className="font-semibold text-lg">Today's Best Deals</p>
          <div className="grid grid-cols-3 gap-4 p-10">
            {data.allSanityProduct.nodes.map((product, index) => (
              <Link to={`shop/${product._id}`} key={index + 1}>
                <ProductCard>{product}</ProductCard>
              </Link>
            ))}
          </div>
        </div>
      )}
    />
  )
}
