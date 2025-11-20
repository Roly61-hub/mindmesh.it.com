
export default function PersonalityCard({ member }) {
  return (
    <div className="mm-team-row">
      <div>{member.name}</div>
      <div>{member.mbti}</div>
      <div>{member.role}</div>
    </div>
  );
}
