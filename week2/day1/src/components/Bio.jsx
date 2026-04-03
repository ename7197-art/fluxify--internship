export default function Bio({ name, role, bio }) {
  return (
    <div style={{ margin: '10px 0' }}>
      <h2 style={{ margin: '0', fontSize: '1.2rem' }}>{name}</h2>
      <strong style={{ color: '#666' }}>{role}</strong>
      <p style={{ fontSize: '0.9rem', color: '#444' }}>{bio}</p>
    </div>
  );
}