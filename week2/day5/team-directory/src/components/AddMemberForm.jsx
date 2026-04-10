import { useState } from 'react';

const AddMemberForm = ({ onAddMember }) => {
  const [formData, setFormData] = useState({
    name: '',
    role: '',
    department: '',
    avatar: ''
  });
  const [isOpen, setIsOpen] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.name && formData.role && formData.department) {
      const avatar = formData.avatar || formData.name.split(' ').map(n => n[0]).join('').toUpperCase();
      onAddMember({ ...formData, avatar });
      setFormData({ name: '', role: '', department: '', avatar: '' });
      setIsOpen(false);
    }
  };

  return (
    <div className="mb-8 flex justify-center">
      {!isOpen ? (
        <button
          onClick={() => setIsOpen(true)}
          className="btn-primary flex items-center gap-2"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
          </svg>
          Add New Member
        </button>
      ) : (
        <div className="glass-effect p-6 max-w-md mx-auto animate-fadeIn">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Add New Team Member
            </h3>
            <button
              onClick={() => setIsOpen(false)}
              className="text-gray-400 hover:text-gray-600 transition-colors"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="form-label">Full Name *</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="e.g., John Doe"
                className="form-input"
              />
            </div>
            
            <div className="mb-4">
              <label className="form-label">Role *</label>
              <input
                type="text"
                name="role"
                value={formData.role}
                onChange={handleChange}
                required
                placeholder="e.g., Frontend Developer"
                className="form-input"
              />
            </div>
            
            <div className="mb-4">
              <label className="form-label">Department *</label>
              <select
                name="department"
                value={formData.department}
                onChange={handleChange}
                required
                className="form-input"
              >
                <option value="">Select Department</option>
                <option value="Engineering">Engineering</option>
                <option value="Design">Design</option>
                <option value="Product">Product</option>
                <option value="Operations">Operations</option>
                <option value="Quality Assurance">Quality Assurance</option>
              </select>
            </div>
            
            <div className="mb-4">
              <label className="form-label">Avatar Initials (Optional)</label>
              <input
                type="text"
                name="avatar"
                value={formData.avatar}
                onChange={handleChange}
                maxLength="2"
                placeholder="e.g., JD"
                className="form-input"
              />
              <p className="text-xs text-gray-500 mt-1">Leave empty to auto-generate from name</p>
            </div>
            
            <div className="flex gap-3">
              <button type="submit" className="btn-success flex-1">
                Add Member
              </button>
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="btn-secondary"
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

export default AddMemberForm;