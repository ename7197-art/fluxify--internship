export default function SkillsList({ skills }) {
  /* 1. React ikenera 'key' prop kugira ngo imenye neza buri kantu kahindutse mu rutonde. 
     2. Ibi bituma React itongera gusubiramo (re-render) ibintu byose, ikura cyangwa yongeramo akantu kamwe gusa. 
     3. Ibi bituma porogaramu yawe yihuta kandi ikoresha neza ubwonko bwa mudasobwa (optimization).
  */

  return (
    <div style={{ marginTop: '20px', textAlign: 'center' }}>
      <h3>Skills</h3>
      {skills.length === 0 ? (
        <p>No items found</p>
      ) : (
        <ul style={{ listStyle: 'none', padding: 0 }}>
          {skills.map((skill, index) => (
            <li key={index} style={{ display: 'inline-block', margin: '5px', padding: '5px 10px', backgroundColor: '#eee', borderRadius: '5px' }}>
              {skill}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}