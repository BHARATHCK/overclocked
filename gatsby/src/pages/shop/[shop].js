import React from 'react'
import Slider from 'react-slick'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { graphql } from 'gatsby'

export default function ShopProduct({ pageContext, data }) {
  console.log('PAGE CONTENT ************** : ', data)

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  }

  let assetList = []

  data = data?.allSanityProduct.nodes[0]

  let image1 = getImage(data.defaultProductVariant.images[0].asset)

  return (
    <div className="flex flex-col space-y-6 lg:space-y-0 pt-10">
      {/* Images */}
      <div className="flex justify-center">
        <div className="max-w-md">
          <Slider {...settings}>
            {data.defaultProductVariant.images.map((asset, index) => (
              <div key={index}>
                <GatsbyImage alt="test" image={getImage(asset.asset)} />
              </div>
            ))}
            <div>
              <h3>No Image</h3>
            </div>
          </Slider>
        </div>
      </div>

      <div className="flex flex-col space-y-6">
        <div>
          <p className="font-bold">{data?.title}</p>
          <p className="font-semibold">
            {' '}
            &#36; {data?.defaultProductVariant?.price}
          </p>
          <p>{data?.body?.en[0]?.children[0]?.text}</p>
        </div>

        <div className="flex space-x-2">
          <div>
            <button
              type="button"
              className="Product__buy Product snipcart-add-item bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              data-item-id={data?._id}
              data-item-price={data?.defaultProductVariant?.price}
              data-item-image={
                data?.defaultProductVariant?.images[0]?.asset?.url
              }
              data-item-name={data?.title}
              data-item-url={`/`}
            >
              Add to cart
            </button>
          </div>
          <div>
            <button
              type="button"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded Header__summary snipcart-summary snipcart-checkout"
            >
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export const query = graphql`
  query productFilter($productId: String) {
    allSanityProduct(filter: { _id: { eq: $productId } }) {
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
