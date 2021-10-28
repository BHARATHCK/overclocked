import React from 'react'

export default function Categories() {
  return (
    <div>
      <p className="pb-10 font-semibold text-lg">Categories</p>
      <div className="flex flex-row space-x-2 overflow-x-scroll">
        <div className="flex flex-col space-y-2 items-center">
          <div className="bg-purple-700 w-40 h-20" />
          <p>Gaming PCs</p>
        </div>

        <div className="flex flex-col space-y-2 items-center">
          <div className="bg-purple-700 w-40 h-20" />
          <p>Gaming Laptops</p>
        </div>

        <div className="flex flex-col space-y-2 items-center">
          <div className="bg-purple-700 w-40 h-20" />
          <p>Motherboards</p>
        </div>

        <div className="flex flex-col space-y-2 items-center">
          <div className="bg-purple-700 w-40 h-20" />
          <p>Video Cards</p>
        </div>

        <div className="flex flex-col space-y-2 items-center">
          <div className="bg-purple-700 w-40 h-20" />
          <p>Storage</p>
        </div>

        <div className="flex flex-col space-y-2 items-center">
          <div className="bg-purple-700 w-40 h-20" />
          <p>Memory</p>
        </div>

        <div className="flex flex-col space-y-2 items-center">
          <div className="bg-purple-700 w-40 h-20" />
          <p>Monitors</p>
        </div>

        <div className="flex flex-col space-y-2 items-center">
          <div className="bg-purple-700 w-40 h-20" />
          <p>Cases</p>
        </div>

        <div className="flex flex-col space-y-2 items-center">
          <div className="bg-purple-700 w-40 h-20" />
          <p>Cell Phones</p>
        </div>
      </div>
    </div>
  )
}
