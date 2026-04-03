const Badge = ({ isAvailable }) => {
  // Niba isAvailable ari true, yerekana badge. Niba ari false, nta kintu yerekana (null)
  return isAvailable ? <span style={{ color: 'green' }}>● Available for hire</span> : null;
};

export default Badge;