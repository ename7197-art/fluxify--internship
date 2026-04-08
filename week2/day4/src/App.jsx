import React, { useState } from 'react';

const RegistrationForm = () => {
  // Task 1: State ya Form
  const [formData, setFormData] = useState({
    fullName: '', email: '', password: '', confirmPassword: '', role: ''
  });
  
  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState('');

  // Task 2: State ya Profile Preview
  const [profile, setProfile] = useState({ name: '', job: '', bio: '' });

  // Handle Input Changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    // Update Profile Preview (Task 2)
    if (['name', 'job', 'bio'].includes(name)) {
      setProfile({ ...profile, [name]: value });
    }
  };

  const validate = () => {
    let tempErrors = {};
    if (!formData.fullName) tempErrors.fullName = "Full Name is required";
    if (!/\S+@\S+\.\S+/.test(formData.email)) tempErrors.email = "Invalid email format";
    if (formData.password.length < 8) tempErrors.password = "Password must be at least 8 characters";
    if (formData.password !== formData.confirmPassword) tempErrors.confirmPassword = "Passwords do not match";
    if (!formData.role) tempErrors.role = "Please select a role";
    
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      setSuccess('Account created successfully!');
      setFormData({ fullName: '', email: '', password: '', confirmPassword: '', role: '' });
      setErrors({});
    } else {
      setSuccess('');
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-4 md:p-10 dark:bg-gray-900">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
        
        {/* TASK 1: REGISTRATION FORM */}
        <div className="bg-white p-8 rounded-lg shadow-md dark:bg-gray-800">
          <h2 className="text-2xl font-bold mb-6 dark:text-white">Register</h2>
          {success && <p className="text-green-600 font-bold mb-4">{success}</p>}
          
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <input type="text" name="fullName" placeholder="Full Name" value={formData.fullName} onChange={handleChange} 
                className="w-full p-2 border rounded dark:bg-gray-700 dark:text-white" />
              {errors.fullName && <p className="text-red-500 text-sm">{errors.fullName}</p>}
            </div>

            <div>
              <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange}
                className="w-full p-2 border rounded dark:bg-gray-700 dark:text-white" />
              {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
            </div>

            <div className="grid grid-cols-2 gap-4">
              <input type="password" name="password" placeholder="Password" value={formData.password} onChange={handleChange}
                className="p-2 border rounded dark:bg-gray-700 dark:text-white" />
              <input type="password" name="confirmPassword" placeholder="Confirm" value={formData.confirmPassword} onChange={handleChange}
                className="p-2 border rounded dark:bg-gray-700 dark:text-white" />
            </div>
            {errors.password && <p className="text-red-500 text-sm">{errors.password}</p>}
            {errors.confirmPassword && <p className="text-red-500 text-sm">{errors.confirmPassword}</p>}

            <select name="role" value={formData.role} onChange={handleChange} className="w-full p-2 border rounded dark:bg-gray-700 dark:text-white">
              <option value="">Select Role</option>
              <option value="developer">Developer</option>
              <option value="designer">Designer</option>
              <option value="manager">Manager</option>
            </select>
            {errors.role && <p className="text-red-500 text-sm">{errors.role}</p>}

            <button className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700">Create Account</button>
          </form>

          {/* TASK 2: INPUTS FOR PREVIEW */}
          <div className="mt-10 pt-10 border-t">
            <h2 className="text-xl font-bold mb-4 dark:text-white">Profile Editor</h2>
            <input type="text" name="name" placeholder="Name" onChange={handleChange} className="w-full p-2 border rounded mb-2 dark:bg-gray-700 dark:text-white" />
            <input type="text" name="job" placeholder="Job Title" onChange={handleChange} className="w-full p-2 border rounded mb-2 dark:bg-gray-700 dark:text-white" />
            <textarea name="bio" placeholder="Short Bio" onChange={handleChange} className="w-full p-2 border rounded dark:bg-gray-700 dark:text-white"></textarea>
          </div>
        </div>

        {/* TASK 2: LIVE PREVIEW CARD */}
        <div className="flex items-start justify-center">
          <div className="bg-white p-6 rounded-2xl shadow-xl border-t-8 border-blue-600 w-80 dark:bg-gray-800">
            <div className="w-20 h-20 bg-blue-100 rounded-full mb-4 mx-auto flex items-center justify-center text-blue-600 font-bold text-2xl">
              {profile.name ? profile.name[0].toUpperCase() : '?'}
            </div>
            <h3 className="text-center text-xl font-bold dark:text-white">{profile.name || 'Your Name'}</h3>
            <p className="text-center text-blue-600 font-medium mb-4">{profile.job || 'Job Title'}</p>
            <p className="text-center text-gray-600 dark:text-gray-400 text-sm italic">
              "{profile.bio || 'Your bio will appear here as you type...'}"
            </p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default RegistrationForm;