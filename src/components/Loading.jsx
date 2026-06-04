import React from 'react'

function Loading() {
  return (
    <div className="flex items-center justify-center h-full w-full">
      <svg className="animate-spin h-20 w-20 text-teal-600" viewBox="0 0 100 100">
        <path d="M10 50A40 40 0 0 0 90 50A40 42 0 0 1 10 50" fill="currentColor"></path>
      </svg>
    </div>
  )
}

export default Loading