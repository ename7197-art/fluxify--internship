// Single responsibility: Display one team member's information
function MemberCard({ name, role, department, avatar }) {
  return (
    <div className="bg-white rounded-xl shadow-md p-4 flex items-center space-x-4 border border-gray-100 hover:shadow-lg transition">
      <div className="text-4xl bg-gray-100 rounded-full w-14 h-14 flex items-center justify-center">
        {avatar}
      </div>
      <div>
        <h3 className="text-lg font-semibold">{name}</h3>
        <p className="text-gray-600 text-sm">{role}</p>
        <p className="text-gray-400 text-xs mt-1">{department}</p>
      </div>
    </div>
  );
}

export default MemberCard;