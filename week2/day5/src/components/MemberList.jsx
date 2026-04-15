// Single responsibility: Render a grid of member cards
import MemberCard from './MemberCard';

function MemberList({ members }) {
  if (members.length === 0) {
    return <p className="text-center text-gray-500 mt-10">No team members found.</p>;
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-6">
      {members.map(member => (
        <MemberCard key={member.id} {...member} />
      ))}
    </div>
  );
}

export default MemberList;