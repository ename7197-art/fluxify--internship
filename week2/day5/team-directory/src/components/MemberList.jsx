 import MemberCard from './MemberCard';

const MemberList = ({ members }) => {
  if (members.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-500 text-lg">No team members found</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {members.map(member => (
        <MemberCard key={member.id} member={member} />
      ))}
    </div>
  );
};

export default MemberList;

