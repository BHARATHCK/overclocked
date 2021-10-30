import React from 'react'
import { graphql, Link, StaticQuery } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'

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
                <div className="flex flex-col shadow-lg rounded-lg" key={index}>
                  <div className="p-4">
                    <GatsbyImage
                      image={getImage(
                        product.defaultProductVariant.images[0].asset
                      )}
                      alt="product"
                    />
                    <div>
                      <p>{product.title}</p>
                    </div>
                    <div className="flex justify-between">
                      <p>{product.defaultProductVariant.price}</p>
                      <p>{product.vendor.title}</p>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      )}
    />
  )
}
