import MemberCard from './MemberCard';

const MemberList = ({ members }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {members.map((member) => (
        <MemberCard key={member.id} member={member} />
      ))}
      {members.length === 0 && (
        <div className="col-span-full py-10 text-center text-gray-400 italic">
          No team members found matching your search.
        </div>
      )}
    </div>
  );
};
export default MemberList;