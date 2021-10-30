import React from 'react'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
export default function ProductCard({ children }) {
  return (
    <div className="flex flex-col shadow-lg rounded-lg" key={children._id}>
      <div className="p-4">
        <GatsbyImage
          image={getImage(children.defaultProductVariant.images[0].asset)}
          alt="product"
        />
        <div>
          <p>{children.title}</p>
        </div>
        <div className="flex justify-between">
          <p>{children.defaultProductVariant.price}</p>
          <p>{children.vendor.title}</p>
        </div>
      </div>
    </div>
  )
}
