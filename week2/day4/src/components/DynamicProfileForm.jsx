
import { useState } from 'react';

const DynamicProfileForm = () => {
  const [profile, setProfile] = useState({
    name: '',
    jobTitle: '',
    bio: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfile(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-6 max-w-7xl mx-auto">
      {/* Form Section */}
      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-bold mb-6 text-gray-800">Profile Information</h2>
        
        <div className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
              Full Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={profile.name}
              onChange={handleChange}
              placeholder="Enter your full name"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>

          <div>
            <label htmlFor="jobTitle" className="block text-sm font-medium text-gray-700 mb-1">
              Job Title
            </label>
            <input
              type="text"
              id="jobTitle"
              name="jobTitle"
              value={profile.jobTitle}
              onChange={handleChange}
              placeholder="e.g., Software Engineer"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>

          <div>
            <label htmlFor="bio" className="block text-sm font-medium text-gray-700 mb-1">
              Short Bio
            </label>
            <textarea
              id="bio"
              name="bio"
              value={profile.bio}
              onChange={handleChange}
              rows="6"
              placeholder="Tell us about yourself..."
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
            />
          </div>
        </div>
      </div>

      {/* Preview Section */}
      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-bold mb-6 text-gray-800">Live Preview</h2>
        
        <div className="bg-gradient-to-br from-purple-50 to-blue-50 rounded-lg p-6 border-2 border-gray-200">
          {profile.name || profile.jobTitle || profile.bio ? (
            <div className="space-y-4">
              {/* Avatar Placeholder */}
              <div className="flex items-center justify-center mb-4">
                <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white text-3xl font-bold shadow-lg">
                  {profile.name ? profile.name.charAt(0).toUpperCase() : '?'}
                </div>
              </div>
              
              {/* Name */}
              <div className="text-center">
                <h3 className="text-xl font-bold text-gray-800">
                  {profile.name || 'Your Name'}
                </h3>
                {profile.jobTitle && (
                  <p className="text-blue-600 font-medium mt-1">
                    {profile.jobTitle}
                  </p>
                )}
              </div>
              
              {/* Bio */}
              {profile.bio && (
                <div className="mt-4 pt-4 border-t border-gray-200">
                  <p className="text-gray-600 leading-relaxed">
                    {profile.bio}
                  </p>
                </div>
              )}
              
              {/* Stats placeholder */}
              <div className="flex justify-around mt-6 pt-4 border-t border-gray-200">
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-700">💼</div>
                  <div className="text-xs text-gray-500 mt-1">Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-700">🌟</div>
                  <div className="text-xs text-gray-500 mt-1">Projects</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-700">🤝</div>
                  <div className="text-xs text-gray-500 mt-1">Connections</div>
                </div>
              </div>
            </div>
          ) : (
            <div className="text-center py-12 text-gray-400">
              <div className="text-6xl mb-4">👤</div>
              <p>Start typing to see your profile preview</p>
            </div>
          )}
        </div>
        
        {/* Live typing indicator */}
        <div className="mt-4 text-xs text-gray-500 text-center">
          ✨ Updates in real-time as you type
        </div>
      </div>
    </div>
  );
};

export default DynamicProfileForm;