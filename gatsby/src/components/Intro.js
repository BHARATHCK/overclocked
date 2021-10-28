import React from 'react'

export default function Intro() {
  return (
    <div className="pt-10">
      <div className="flex justify-center p-14">
        <p className="font-semibold text-lg">WHAT'S OVERCLOCKED?</p>
      </div>

      <div className="flex flex-col space-y-2 lg:flex-row lg:space-y-0">
        <div className="flex flex-col max-w-sm">
          <div>
            <p className="font-semibold">The Leading Tech-Focused e-Retailer</p>
          </div>
          <div>
            Today, millions of customers turn to Newegg to shop for the latest
            PC components, consumer electronics, smart home, gaming products and
            more.
          </div>
          <div>
            <div className="bg-purple-700 w-40 h-20"></div>
          </div>
        </div>

        <div className="flex flex-col max-w-sm">
          <div>
            <p className="font-semibold">
              Reliable &nbsp; Award-Winning Experience
            </p>
          </div>
          <div>
            Newegg is consistently ranked asa one of the best online shopping
            destinations, and the company regularly earns industry-leading
            customer service ratings.
          </div>
          <div>
            <div className="bg-purple-700 w-40 h-20"></div>
          </div>
        </div>

        <div className="flex flex-col max-w-sm">
          <div>
            <p className="font-semibold">Global Shopping</p>
          </div>
          <div>
            Newegg is based in North America, with a global reach in Europe,
            South America, Asia Pacific and the Middle East.
          </div>
          <div>
            <div className="bg-purple-700 w-40 h-20"></div>
          </div>
        </div>
      </div>
    </div>
  )
}
