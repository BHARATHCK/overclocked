import React from 'react'
import Footer from './Footer'
import Nav from './Navbar'

export default function Layout({ children }) {
  return (
    <div className="flex flex-col h-screen">
      <Nav />
      <div className="flex-grow">{children}</div>
      <Footer />
    </div>
  )
}
