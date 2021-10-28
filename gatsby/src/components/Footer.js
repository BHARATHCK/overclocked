import React from 'react'

export default function Footer() {
  return (
    <footer className="flex justify-center p-4">
      <p>&copy; Overclocked {new Date().getFullYear()}</p>
    </footer>
  )
}
