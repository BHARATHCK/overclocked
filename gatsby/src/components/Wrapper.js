import React from 'react'

export default function Wrapper({ children }) {
  return (
    <div className="flex justify-center">
      <div className="w-8/12">{children}</div>
    </div>
  )
}
