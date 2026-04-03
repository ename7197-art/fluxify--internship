export default function Badge({ isAvailable }) {
  // Aha niho hari conditional rendering
  if (!isAvailable) return null;

  return (
    <span style={{ 
      backgroundColor: '#dcfce7', 
      color: '#166534', 
      padding: '4px 8px', 
      borderRadius: '12px', 
      fontSize: '0.75rem',
      fontWeight: 'bold'
    }}>
      Available for hire
    </span>
  );
}