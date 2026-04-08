import { useState } from 'react';

const AddMemberForm = ({ onAdd }) => {
  const [formData, setFormData] = useState({ name: '', role: '', department: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.role || !formData.department) return alert("Please fill all fields!");
    
    onAdd({ ...formData, id: Date.now() });
    setFormData({ name: '', role: '', department: '' }); // Clear form
  };

  return (
    <form onSubmit={handleSubmit} className="bg-blue-50 p-6 rounded-2xl mb-10 border border-blue-100 shadow-sm">
      <h2 className="text-lg font-bold text-blue-800 mb-4">Add New Team Member</h2>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <input
          type="text"
          placeholder="Full Name"
          className="p-3 rounded-xl border-none ring-1 ring-gray-200 focus:ring-2 focus:ring-blue-500"
          value={formData.name}
          onChange={(e) => setFormData({...formData, name: e.target.value})}
        />
        <input
          type="text"
          placeholder="Role (e.g. Designer)"
          className="p-3 rounded-xl border-none ring-1 ring-gray-200 focus:ring-2 focus:ring-blue-500"
          value={formData.role}
          onChange={(e) => setFormData({...formData, role: e.target.value})}
        />
        <select
          className="p-3 rounded-xl border-none ring-1 ring-gray-200 focus:ring-2 focus:ring-blue-500 bg-white"
          value={formData.department}
          onChange={(e) => setFormData({...formData, department: e.target.value})}
        >
          <option value="">Department</option>
          <option value="Engineering">Engineering</option>
          <option value="Design">Design</option>
          <option value="Product">Product</option>
          <option value="Marketing">Marketing</option>
        </select>
        <button className="bg-blue-600 text-white p-3 rounded-xl font-bold hover:bg-blue-700 transition-colors">
          Add Member
        </button>
      </div>
    </form>
  );
};
export default AddMemberForm;