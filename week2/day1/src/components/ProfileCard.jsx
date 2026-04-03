import Avatar from './Avatar';
import Bio from './Bio';
import Badge from './Badge';

export default function ProfileCard({ user }) {
  return (
    <div style={{ 
      border: '1px solid #ddd', 
      borderRadius: '12px', 
      padding: '16px', 
      width: '250px', 
      textAlign: 'center',
      boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
      backgroundColor: '#fff'
    }}>
      <Avatar imageUrl={user.image} name={user.name} />
      <Bio name={user.name} role={user.role} bio={user.bio} />
      <Badge isAvailable={user.isAvailable} />
    </div>
  );
}