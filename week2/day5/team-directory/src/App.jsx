import { useState } from 'react';
import './App.css';
import SearchBar from './components/SearchBar';
import MemberList from './components/MemberList';
import AddMemberForm from './components/AddMemberForm';

const initialMembers = [
  {
    id: 1,
    name: 'John Doe',
    role: 'Frontend Developer',
    department: 'Engineering',
    avatar: 'JD'
  },
  {
    id: 2,
    name: 'Jane Smith',
    role: 'UI/UX Designer',
    department: 'Design',
    avatar: 'JS'
  },
  {
    id: 3,
    name: 'Mike Johnson',
    role: 'Backend Developer',
    department: 'Engineering',
    avatar: 'MJ'
  },
  {
    id: 4,
    name: 'Sarah Williams',
    role: 'Product Manager',
    department: 'Product',
    avatar: 'SW'
  },
  {
    id: 5,
    name: 'Tom Brown',
    role: 'DevOps Engineer',
    department: 'Operations',
    avatar: 'TB'
  },
  {
    id: 6,
    name: 'Lisa Davis',
    role: 'QA Engineer',
    department: 'Quality Assurance',
    avatar: 'LD'
  }
];

function App() {
  const [members, setMembers] = useState(initialMembers);
  const [searchTerm, setSearchTerm] = useState('');

  const filteredMembers = members.filter(member =>
    member.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    member.role.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const addMember = (newMember) => {
    setMembers([...members, { ...newMember, id: Date.now() }]);
  };

  return (
    <div className="app-container">
      <div className="container">
        <header className="app-header">
          <h1 className="app-title">Team Directory</h1>
          <p className="app-subtitle">Meet our amazing team members</p>
        </header>
        
        <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        <AddMemberForm onAddMember={addMember} />
        <MemberList members={filteredMembers} />
      </div>
    </div>
  );
}

export default App;