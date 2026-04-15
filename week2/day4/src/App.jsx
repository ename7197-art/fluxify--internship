import React, { useState } from 'react'
import Task1RegistrationForm from './components/Task1RegistrationForm'
import Task2LivePreview from './components/Task2LivePreview'

const App = () => {
  const [activeTab, setActiveTab] = useState('task1')

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Navigation Tabs */}
      <div className="bg-white shadow-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <h1 className="text-xl font-bold text-blue-600">Day 4 Tasks</h1>
            <div className="flex space-x-2">
              <button
                onClick={() => setActiveTab('task1')}
                className={`px-6 py-2 rounded-lg font-semibold transition duration-300 ${
                  activeTab === 'task1'
                    ? 'bg-blue-600 text-white'
                    : 'text-gray-700 hover:bg-gray-100'
                }`}
              >
                Task 1: Registration Form
              </button>
              <button
                onClick={() => setActiveTab('task2')}
                className={`px-6 py-2 rounded-lg font-semibold transition duration-300 ${
                  activeTab === 'task2'
                    ? 'bg-blue-600 text-white'
                    : 'text-gray-700 hover:bg-gray-100'
                }`}
              >
                Task 2: Live Preview
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Content based on active tab */}
      <div className="py-8">
        {activeTab === 'task1' ? <Task1RegistrationForm /> : <Task2LivePreview />}
      </div>
    </div>
  )
}

export default App