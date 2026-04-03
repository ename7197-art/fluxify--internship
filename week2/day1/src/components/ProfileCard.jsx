import Avatar from './Avatar';
import Bio from './Bio';
import Badge from './Badge';

const ProfileCard = ({ user }) => {
  return (
    <div style={{ border: '1px solid #ccc', padding: '20px', margin: '10px', borderRadius: '8px' }}>
      <Avatar imageUrl={user.image} name={user.name} />
      <Bio name={user.name} role={user.role} description={user.bio} />
      <Badge isAvailable={user.isAvailable} />
    </div>
  );
};

export default ProfileCard;