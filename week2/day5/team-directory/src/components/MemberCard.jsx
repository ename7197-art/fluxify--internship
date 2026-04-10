const MemberCard = ({ member }) => {
  // Generate gradient colors based on department
  const getDepartmentColor = (dept) => {
    const colors = {
      'Engineering': 'from-blue-500 to-cyan-500',
      'Design': 'from-pink-500 to-rose-500',
      'Product': 'from-purple-500 to-indigo-500',
      'Operations': 'from-emerald-500 to-teal-500',
      'Quality Assurance': 'from-orange-500 to-amber-500'
    };
    return colors[dept] || 'from-gray-500 to-gray-600';
  };

  return (
    <div className="member-card group">
      <div className="p-6">
        {/* Avatar with department-based gradient */}
        <div className="flex items-center justify-center mb-4 relative">
          <div className={`avatar bg-gradient-to-br ${getDepartmentColor(member.department)} group-hover:scale-105 transition-transform duration-300`}>
            {member.avatar}
          </div>
          {/* Decorative ring */}
          <div className="absolute -inset-1 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full opacity-0 group-hover:opacity-30 transition-opacity duration-300 -z-10"></div>
        </div>
        
        {/* Member Info */}
        <div className="text-center">
          <h3 className="text-xl font-bold text-gray-800 mb-1 group-hover:text-blue-600 transition-colors">
            {member.name}
          </h3>
          <p className="text-blue-600 font-semibold mb-2 text-sm uppercase tracking-wide">
            {member.role}
          </p>
          <div className="inline-block px-3 py-1 bg-gray-100 rounded-full text-xs text-gray-600 font-medium">
            {member.department}
          </div>
        </div>
        
        {/* Stats/Footer */}
        <div className="card-stats">
          <div className="stat-item">
            <div className="stat-value">💼</div>
            <div>Projects</div>
          </div>
          <div className="stat-item">
            <div className="stat-value">⭐</div>
            <div>Rating</div>
          </div>
          <div className="stat-item">
            <div className="stat-value">🤝</div>
            <div>Team</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MemberCard;