export default function Avatar({ imageUrl, name }) {
  return (
    <img 
      src={imageUrl} 
      alt={name} 
      style={{ width: '80px', height: '80px', borderRadius: '50%', objectFit: 'cover' }} 
    />
  );
}