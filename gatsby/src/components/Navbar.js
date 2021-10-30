import React from 'react'
import { Link } from 'gatsby'
import { SearchIcon, ShoppingCartIcon } from '@heroicons/react/solid'

export default function Nav() {
  return (
    <nav className="p-4">
      <div className="flex flex-row justify-between items-center">
        <div className="flex flex-row space-x-4 items-center">
          <Link to="/">Home</Link>

          <div className="bg-white flex items-center rounded-full shadow-xl">
            <input
              className="rounded-l-full w-full py-2 px-6 text-gray-700 leading-tight focus:outline-none"
              id="search"
              type="text"
              placeholder="Search"
            />

            <div className="">
              <button className="bg-blue-500 text-white rounded-full p-2 hover:bg-blue-400 focus:outline-none w-12 h-12 flex items-center justify-center">
                <SearchIcon className="h-5 w-5 text-white" />
              </button>
            </div>
          </div>
        </div>

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
