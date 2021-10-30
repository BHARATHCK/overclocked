import React from 'react'
import AliceCarousel from 'react-alice-carousel'
import 'react-alice-carousel/lib/alice-carousel.css'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'

export default function ShopProduct({ pageContext }) {
  const handleDragStart = (e) => e.preventDefault()

  const items = []

  pageContext.data.defaultProductVariant.images.forEach((image) => {
    items.push(
      <GatsbyImage
        image={getImage(image.asset)}
        onDragStart={handleDragStart}
        alt="product"
        className="w-full"
      ></GatsbyImage>
    )
  })

  return (
    <div className="flex flex-col space-y-6 lg:space-y-0 pt-10">
      {/* Images */}
      <div className="flex justify-center">
        <div className="max-w-md">
          <AliceCarousel
            mouseTracking
            items={items}
            autoWidth="false"
            autoHeight="false"
          />
        </div>
      </div>

      <div className="flex flex-col space-y-6">
        <div>
          <p className="font-bold">{pageContext.data.title}</p>
          <p className="font-semibold">
            {' '}
            &#36; {pageContext.data.defaultProductVariant.price}
          </p>
          <p>{pageContext.data.body.en[0].children[0].text}</p>
        </div>

        <div className="flex space-x-2">
          <div>
            <button
              type="button"
              className="Product__buy Product snipcart-add-item bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              data-item-id={pageContext.data._id}
              data-item-price={pageContext.data.defaultProductVariant.price}
              data-item-image={
                pageContext.data.defaultProductVariant.images[0].asset.url
              }
              data-item-name={pageContext.data.title}
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
