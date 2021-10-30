import React, { useEffect, useState } from 'react'
import { graphql, Link } from 'gatsby'
import { useStaticQuery } from 'gatsby'
import ProductCard from './ProductCard'

export default function BestDeals() {
  const data = useStaticQuery(graphql`
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
  `)

  const nodes = data.allSanityProduct.nodes

  // State for the list
  const [list, setList] = useState([...nodes.slice(0, 10)])

  // State to trigger oad more
  const [loadMore, setLoadMore] = useState(false)

  // State of whether there is more to load
  const [hasMore, setHasMore] = useState(nodes.length > 10)

  // Load more button click
  const handleLoadMore = () => {
    setLoadMore(true)
  }

  // Handle loading more articles
  useEffect(() => {
    if (loadMore && hasMore) {
      const currentLength = list.length
      const isMore = currentLength < nodes.length
      const nextResults = isMore
        ? nodes.slice(currentLength, currentLength + 10)
        : []
      setList([...list, ...nextResults])
      setLoadMore(false)
    }
  }, [loadMore, hasMore]) //eslint-disable-line

  //Check if there is more
  useEffect(() => {
    const isMore = list.length < nodes.length
    setHasMore(isMore)
  }, [list]) //eslint-disable-line

  return (
    <div>
      <p className="font-semibold text-lg">Today's Best Deals</p>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 p-10">
        {list.map((product, index) => (
          <Link to={`shop/${product._id}`} key={index + 1}>
            <ProductCard>{product}</ProductCard>
          </Link>
        ))}
      </div>
      {hasMore ? (
        <button
          onClick={handleLoadMore}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded p-10"
        >
          Load More
        </button>
      ) : (
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded cursor-not-allowed p-10"
          disabled
        >
          No more results
        </button>
      )}
    </div>
  )
}
