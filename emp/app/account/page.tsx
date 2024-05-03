import React from 'react'

const dashboard = () => {
  return (
  <div style={{ height: '100vh', width: '100vw' }} className="relative min-h-screen overflow-hidden">
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">Dashboard</h1>
      <div className="bg-white shadow-md rounded-md p-6 mb-4">
        <a href="/leaves">Leaves</a>
      </div>
      <div className="bg-white shadow-md rounded-md p-6 mb-4">
        <h2 className="text-xl font-semibold mb-2">Profile Name</h2>
        <p className="text-gray-600">John Doe</p>
      </div>
      <div className="bg-white shadow-md rounded-md p-6 mb-4">
        <h2 className="text-xl font-semibold mb-2">Leave Dates</h2>
        <p className="text-gray-600">From: 2024-04-28</p>
        <p className="text-gray-600">To: 2024-04-30</p>
      </div>
      <div className="bg-white shadow-md rounded-md p-6 mb-4">
        <h2 className="text-xl font-semibold mb-2">Reason for Leave</h2>
        <p className="text-gray-600">Family vacation</p>
      </div>
      <div className="bg-white shadow-md rounded-md p-6 mb-4">
        <h2 className="text-xl font-semibold mb-2">Permission</h2>
        <p className="text-gray-600">Today: Yes</p>
        <p className="text-gray-600">Tomorrow: No</p>
      </div>
    </div>
  </div>
  )
}

export default dashboard