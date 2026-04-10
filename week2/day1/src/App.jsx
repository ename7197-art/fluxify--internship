// 1. Ibuka guhamagara (Import) components zawe zose hano hejuru
import ProfileCard from './components/ProfileCard';
import SkillsList from './components/SkillsList';

function App() {
  // 2. Imibare/Data z'abantu (Users)
  const users = [
    { 
      id: 1, 
      name: "kayesu", 
      role: "React Developer", 
      bio: "Nkunda gukora web apps nziza.", 
      isAvailable: true, 
      image: "https://i.pravatar.cc/150?u=1" 
    },
    { 
      id: 2, 
      name: "dusenge", 
      role: "UI/UX Designer", 
      bio: "Intego yanjye ni ugukora design zoroshye.", 
      isAvailable: false, 
      image: "https://i.pravatar.cc/150?u=2" 
    },
    { 
      id: 3, 
      name: "kamanzi", 
      role: "Backend Engineer", 
      bio: "Inzobere muri Node.js na Databases.", 
      isAvailable: true, 
      image: "https://i.pravatar.cc/150?u=3" 
    }
  ];

  // 3. Imibare y'ubumenyi (Skills) yo muri Task 2
  const mySkills = ["React", "JavaScript", "CSS", "Vite", "Git"];

  return (
    <div style={{ padding: '20px', backgroundColor: '#f0f2f5', minHeight: '100vh' }}>
      <h1 style={{ textAlign: 'center' }}>My Team Profiles</h1>
      
      {/* Aha niho hagaragara Profile Cards */}
      <div style={{ 
        display: 'flex', 
        flexWrap: 'wrap', 
        gap: '20px', 
        justifyContent: 'center',
        marginBottom: '40px' 
      }}>
        {users.map(u => (
          <ProfileCard key={u.id} user={u} />
        ))}
      </div>

      <hr /> {/* Akanyura kamajya hagati y'imirimo ibiri */}

      {/* Aha niho hagaragara ya Skills List yo muri Task 2 */}
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <SkillsList skills={mySkills} />
      </div>
    </div>
  );
}

export default App;