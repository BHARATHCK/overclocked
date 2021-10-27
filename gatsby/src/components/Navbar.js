import React from 'react'
import { Link } from 'gatsby'

export default function Nav() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/bestdeals">Best Deals</Link>
        </li>
      </ul>
    </nav>
  )
}
