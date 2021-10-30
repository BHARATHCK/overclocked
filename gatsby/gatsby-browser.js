import React from 'react'
import Layout from './src/components/Layout'
import Wrapper from './src/components/Wrapper'

import './src/styles/global.css'

// Wraps every page in a component
export function wrapPageElement({ element, props }) {
  return (
    <Layout>
      <Wrapper {...props}>{element}</Wrapper>
    </Layout>
  )
}
