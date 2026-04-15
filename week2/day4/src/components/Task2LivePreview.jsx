import React, { useState } from 'react'

const Task2LivePreview = () => {
  const [formData, setFormData] = useState({
    name: '',
    jobTitle: '',
    bio: ''
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">
          Profile Builder with Live Preview
        </h1>
        
        <div className="flex flex-col lg:flex-row gap-8">
          
          {/* Left Column - Form */}
          <div className="flex-1">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-6 border-b pb-3">
                Edit Your Profile
              </h2>
              
              <form>
                <div className="mb-6">
                  <label htmlFor="name" className="block text-gray-700 font-semibold mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Enter your full name"
                  />
                  <p className="mt-1 text-sm text-gray-500">
                    {formData.name.length} characters
                  </p>
                </div>
                
                <div className="mb-6">
                  <label htmlFor="jobTitle" className="block text-gray-700 font-semibold mb-2">
                    Job Title
                  </label>
                  <input
                    type="text"
                    id="jobTitle"
                    name="jobTitle"
                    value={formData.jobTitle}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="e.g., Software Engineer, Designer, etc."
                  />
                </div>
                
                <div className="mb-6">
                  <label htmlFor="bio" className="block text-gray-700 font-semibold mb-2">
                    Short Bio
                  </label>
                  <textarea
                    id="bio"
                    name="bio"
                    value={formData.bio}
                    onChange={handleChange}
                    rows="5"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
                    placeholder="Tell us a little about yourself..."
                  ></textarea>
                  <p className="mt-1 text-sm text-gray-500">
                    {formData.bio.length} characters
                  </p>
                </div>
                
                <div className="pt-4 border-t border-gray-200">
                  <p className="text-sm text-gray-600">
                    ✍️ Profile completion: {
                      [formData.name, formData.jobTitle, formData.bio].filter(field => field.trim()).length
                    }/3 fields filled
                  </p>
                </div>
              </form>
            </div>
          </div>
          
          {/* Right Column - Live Preview */}
          <div className="flex-1">
            <div className="bg-white rounded-lg shadow-lg p-6 sticky top-4">
              <h2 className="text-2xl font-bold text-gray-800 mb-6 border-b pb-3">
                Live Preview
              </h2>
              
              <div className="bg-gradient-to-br from-blue-50 to-indigo-100 rounded-xl overflow-hidden shadow-md">
                <div className="bg-gradient-to-r from-blue-600 to-indigo-600 p-6 text-center">
                  <div className="w-24 h-24 mx-auto bg-white rounded-full flex items-center justify-center shadow-lg">
                    <span className="text-4xl font-bold text-blue-600">
                      {formData.name ? formData.name.charAt(0).toUpperCase() : '?'}
                    </span>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="text-center mb-4">
                    <h3 className="text-2xl font-bold text-gray-800">
                      {formData.name || 'Your Name Here'}
                    </h3>
                    <p className="text-blue-600 font-semibold mt-1">
                      {formData.jobTitle || 'Your Job Title'}
                    </p>
                  </div>
                  
                  <div className="border-t border-gray-200 pt-4">
                    <p className="text-gray-700 leading-relaxed">
                      {formData.bio || 'Write something about yourself...'}
                    </p>
                  </div>
                  
                  {!formData.bio && (
                    <div className="mt-3 p-3 bg-gray-50 rounded-lg border border-dashed border-gray-300">
                      <p className="text-gray-400 text-sm italic text-center">
                        Your bio will appear here
                      </p>
                    </div>
                  )}
                </div>
                
                <div className="bg-gray-50 px-6 py-3 border-t border-gray-200">
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-gray-600">Profile Status</span>
                    <span className={`px-2 py-1 rounded-full text-xs font-semibold ${
                      formData.name && formData.jobTitle && formData.bio
                        ? 'bg-green-100 text-green-700'
                        : 'bg-yellow-100 text-yellow-700'
                    }`}>
                      {formData.name && formData.jobTitle && formData.bio
                        ? 'Complete ✓'
                        : 'In Progress'}
                    </span>
                  </div>
                </div>
              </div>
              
              <div className="mt-4 text-center">
                <p className="text-xs text-gray-500 animate-pulse">
                  🔄 Live preview updates as you type
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Task2LivePreview