// Single responsibility: Handle new member input and submission
import { useState } from 'react';

function AddMemberForm({ onAdd }) {
  const [name, setName] = useState('');
  const [role, setRole] = useState('');
  const [department, setDepartment] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name.trim() || !role.trim() || !department.trim()) return;
    onAdd({
      name: name.trim(),
      role: role.trim(),
      department: department.trim(),
      avatar: '👤'
    });
    setName('');
    setRole('');
    setDepartment('');
  };

  return (
    <form onSubmit={handleSubmit} className="bg-gray-50 p-4 rounded-lg shadow-md mb-6">
      <h2 className="text-xl font-semibold mb-3">➕ Add New Member</h2>
      <div className="flex flex-col md:flex-row gap-3">
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="flex-1 p-2 border rounded"
          required
        />
        <input
          type="text"
          placeholder="Role"
          value={role}
          onChange={(e) => setRole(e.target.value)}
          className="flex-1 p-2 border rounded"
          required
        />
        <input
          type="text"
          placeholder="Department"
          value={department}
          onChange={(e) => setDepartment(e.target.value)}
          className="flex-1 p-2 border rounded"
          required
        />
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
          Add
        </button>
      </div>
    </form>
  );
}

export default AddMemberForm;