const Bio = ({ name, role, description }) => {
  return (
    <div>
      <h2>{name}</h2>
      <h4>{role}</h4>
      <p>{description}</p>
    </div>
  );
};

export default Bio;