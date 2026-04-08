import { useState } from 'react';
import SearchBar from './components/SearchBar';
import MemberList from './components/MemberList';
import AddMemberForm from './components/AddMemberForm';

const initialMembers = [
  { id: 1, name: "Emmy Backend", role: "Software Developer", department: "Engineering" },
  { id: 2, name: "Alice Kaneza", role: "UI/UX Designer", department: "Design" },
  { id: 3, name: "Jean Paul", role: "Product Manager", department: "Product" },
  { id: 4, name: "Sonia Uwase", role: "Frontend Lead", department: "Engineering" },
  { id: 5, name: "Kevine I", role: "HR Specialist", department: "Marketing" },
  { id: 6, name: "Eric G", role: "QA Engineer", department: "Engineering" },
];

function App() {
  const [members, setMembers] = useState(initialMembers);
  const [searchTerm, setSearchTerm] = useState('');

  const addMember = (newMember) => {
    setMembers([newMember, ...members]);
  };

  const filteredMembers = members.filter(m => 
    m.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
    m.role.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-extrabold text-gray-900 tracking-tight">Team Directory</h1>
          <p className="mt-2 text-lg text-gray-600">Fluxify Internship - Week 2 Final Project</p>
        </div>
        
        <AddMemberForm onAdd={addMember} />
        <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        <MemberList members={filteredMembers} />
      </div>
    </div>
  );
}
export default App;