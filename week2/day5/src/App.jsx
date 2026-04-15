import { useState } from 'react';
import SearchBar from './components/SearchBar';
import MemberList from './components/MemberList';
import AddMemberForm from './components/AddMemberForm';

const initialMembers = [
  { id: 1, name: 'Alice Mutesi', role: 'Frontend Developer', department: 'Engineering', avatar: '👩‍💻' },
  { id: 2, name: 'Bob Habimana', role: 'UI/UX Designer', department: 'Design', avatar: '🎨' },
  { id: 3, name: 'Claire Uwase', role: 'Product Manager', department: 'Product', avatar: '📋' },
  { id: 4, name: 'David Niyonshuti', role: 'Backend Engineer', department: 'Engineering', avatar: '⚙️' },
  { id: 5, name: 'Eva Mukamana', role: 'QA Tester', department: 'Quality', avatar: '🔍' },
  { id: 6, name: 'Frank Rwigema', role: 'DevOps Specialist', department: 'Operations', avatar: '☁️' },
];

function App() {
  const [members, setMembers] = useState(initialMembers);
  const [searchTerm, setSearchTerm] = useState('');

  const filteredMembers = members.filter(member =>
    member.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    member.role.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleAddMember = (newMember) => {
    setMembers([...members, { ...newMember, id: Date.now() }]);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-6">
      <h1 className="text-3xl font-bold text-center mb-6">🧑‍💼 Team Directory</h1>
      <SearchBar value={searchTerm} onChange={setSearchTerm} />
      <AddMemberForm onAdd={handleAddMember} />
      <MemberList members={filteredMembers} />
    </div>
  );
}

export default App;