import React from 'react'
import { graphql, StaticQuery } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'

export default function BestDeals({ data }) {
  console.log('Response : ', data)
  return (
    <StaticQuery
      query={graphql`
        query ProductData {
          allSanityProduct {
            nodes {
              title
              defaultProductVariant {
                title
                price
                images {
                  asset {
                    gatsbyImageData(
                      width: 200
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
          {console.log('DATA : ', data)}
          <p className="font-semibold text-lg">Today's Best Deals</p>
          <div className="grid grid-cols-3 gap-4 p-10">
            {data.allSanityProduct.nodes.map((product, index) => (
              <div className="flex flex-col" key={index}>
                {console.log(
                  'IMAGE URL : ',
                  product.defaultProductVariant.images[0].asset.url
                )}
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
            ))}
          </div>
        </div>
      )}
    />
  )
}
