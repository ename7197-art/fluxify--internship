import Avatar from './Avatar'
import Bio from './Bio'
import Badge from './Badge'

function ProfileCard({ name, role, bio, avatarUrl, isAvailable }) {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
      <div className="p-6">
        <Avatar imageUrl={avatarUrl} name={name} />
        <h3 className="text-xl font-bold text-center text-gray-800 dark:text-white">{name}</h3>
        <p className="text-blue-600 dark:text-blue-400 text-center font-medium">{role}</p>
        <Bio bio={bio} />
        <Badge isAvailable={isAvailable} />
      </div>
    </div>
  )
}

export default ProfileCard