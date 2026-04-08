const MemberCard = ({ member }) => {
  return (
    <div className="bg-white p-6 rounded-2xl shadow-md border border-gray-100 flex flex-col items-center text-center hover:shadow-lg transition-shadow">
      <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-xl font-bold mb-4 shadow-inner">
        {member.name[0].toUpperCase()}
      </div>
      <h3 className="text-lg font-bold text-gray-800">{member.name}</h3>
      <p className="text-blue-600 font-semibold text-sm uppercase tracking-wide">{member.role}</p>
      <span className="mt-2 px-3 py-1 bg-gray-100 text-gray-600 text-xs rounded-full font-medium">
        {member.department}
      </span>
    </div>
  );
};
export default MemberCard;