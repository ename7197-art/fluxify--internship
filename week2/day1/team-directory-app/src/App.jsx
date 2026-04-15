import ProfileCard from './components/ProfileCard'
import SkillsList from './components/SkillsList'

function App() {
  // Data for 3 different ProfileCard instances
  const profiles = [
    {
      id: 1,
      name: "Clenia Umuhoza",
      role: "Frontend Developer",
      bio: "Passionate React developer with 2 years of experience building modern web applications.",
      avatarUrl: "",
      isAvailable: true
    },
    {
      id: 2,
      name: "Jean Niyomugabo",
      role: "UI/UX Designer",
      bio: "Creative designer focused on user-centered design and beautiful interfaces.",
      avatarUrl: "",
      isAvailable: false
    },
    {
      id: 3,
      name: "Aline Ingabire",
      role: "Full Stack Engineer",
      bio: "Building scalable applications with React, Node.js, and cloud technologies.",
      avatarUrl: "",
      isAvailable: true
    }
  ]

  // Example skills data for Task 2
  const mySkills = ["React", "JavaScript", "Tailwind CSS", "Git", "Vite"]

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 py-10 px-4">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold text-center mb-8 text-gray-800 dark:text-white">
          📇 Team Profile Cards
        </h1>
        
        {/* Task 1: Render 3 ProfileCard instances */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {profiles.map(profile => (
            <ProfileCard
              key={profile.id}
              name={profile.name}
              role={profile.role}
              bio={profile.bio}
              avatarUrl={profile.avatarUrl}
              isAvailable={profile.isAvailable}
            />
          ))}
        </div>

        {/* Task 2: JSX Exploration with .map() and conditional rendering */}
        <div className="mt-8">
          <h2 className="text-2xl font-bold text-center mb-4 text-gray-800 dark:text-white">
            📋 JSX Exploration: Skills List
          </h2>
          <SkillsList skills={mySkills} />
          
          {/* Example with empty array to show conditional rendering */}
          <div className="mt-6">
            <p className="text-sm text-gray-500 text-center mb-2">
              (Below is an example of empty list - shows "No items found")
            </p>
            <SkillsList skills={[]} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default App