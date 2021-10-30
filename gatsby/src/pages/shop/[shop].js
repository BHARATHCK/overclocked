import React from 'react'
import AliceCarousel from 'react-alice-carousel'
import 'react-alice-carousel/lib/alice-carousel.css'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'

export default function ShopProduct({ pageContext }) {
  const handleDragStart = (e) => e.preventDefault()
  console.log('DATA : ', pageContext.data)

  const items = []

  pageContext.data.defaultProductVariant.images.forEach((image) => {
    items.push(
      <GatsbyImage
        image={getImage(image.asset)}
        onDragStart={handleDragStart}
        alt="product"
      ></GatsbyImage>
    )
  })

  return (
    <div className="flex flex-col space-y-6 lg:space-y-0 lg:flex-row lg:justify-between pt-10">
      {/* Images */}
      <div className="max-w-md">
        <AliceCarousel mouseTracking items={items} />
      </div>

      <div className="flex flex-col space-y-6">
        <div>
          <p>{pageContext.data.title}</p>
          <p>{pageContext.data.defaultProductVariant.price}</p>
          <p>{pageContext.data.body.en[0].children[0].text}</p>
        </div>

        <div className="flex space-x-2">
          <div>
            <button
              type="button"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
              Add to cart
            </button>
          </div>
          <div>
            <button
              type="button"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
