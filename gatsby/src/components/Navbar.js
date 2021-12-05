import React from 'react'
import { Link } from 'gatsby'
import { ShoppingCartIcon } from '@heroicons/react/solid'
import Search from './search/index'
const searchIndices = [{ name: `products`, title: `products` }]

export default function Nav() {
  return (
    <nav className="p-4">
      <div className="flex flex-row justify-between items-center">
        <div className="flex flex-row space-x-4 items-center">
          <Link to="/">Home</Link>
        </div>

        <Search indices={searchIndices} />

        <div className="flex flex-row space-x-4 items-center">
          <div>Hello! 👋</div>

          <div className=" rounded-2xl bg-gray-200 flex text-center justify-center items-center Header__summary snipcart-summary snipcart-checkout cursor-pointer">
            <button type="button">
              <ShoppingCartIcon className="h-10 w-10 p-2 text-blue-500" />
              {/* <span className="snipcart-total-items"></span> */}
            </button>
            <p className="p-2">
              <span className="snipcart-total-price"></span>
            </p>
          </div>
        </div>
      </div>
    </nav>
  )
}
