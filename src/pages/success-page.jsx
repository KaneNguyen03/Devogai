import React from 'react'

const SuccessPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-green-100 text-gray-800">
      <h1 className="text-5xl font-bold mb-4">Success!</h1>
      <p className="text-lg mb-6">Your operation was successful.</p>
      <a href="/" className="text-blue-500 hover:text-blue-700 underline text-lg">Go back to home page</a>
    </div>
  )
}

export default SuccessPage