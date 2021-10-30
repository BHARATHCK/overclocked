import React from 'react'
import { graphql, StaticQuery } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'

export default function Categories() {
  return (
    <StaticQuery
      query={graphql`
        query Category {
          allSanityCategory {
            nodes {
              title
              background {
                asset {
                  gatsbyImageData
                  url
                }
              }
            }
          }
        }
      `}
      render={(data) => (
        <div>
          {console.log('Data : ', data)}
          <p className="pb-10 font-semibold text-lg">Categories</p>
          <div className="flex flex-row space-x-2 overflow-x-scroll">
            {data.allSanityCategory.nodes.map((category, index) => (
              <div className="flex flex-col space-y-2 items-center" key={index}>
                <GatsbyImage
                  image={getImage(category?.background?.asset)}
                  alt={category.title}
                />
                <p>{category.title}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    />
  )
}
