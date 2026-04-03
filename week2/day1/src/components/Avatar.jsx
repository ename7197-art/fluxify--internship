const Avatar = ({ imageUrl, name }) => {
  return <img src={imageUrl} alt={name} style={{ borderRadius: '50%', width: '100px' }} />;
};

export default Avatar;