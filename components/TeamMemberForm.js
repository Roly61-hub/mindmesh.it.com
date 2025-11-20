
import { useState } from "react";

const MBTI_TYPES = ["ENTJ","ENFJ","ENFP","ENTP","INFJ","INFP","INTJ","INTP","ESTJ","ESFJ","ESFP","ESTP","ISTJ","ISFJ","ISFP","ISTP"];

export default function TeamMemberForm({ onAdd }) {
  const [name, setName] = useState("");
  const [role, setRole] = useState("");
  const [mbti, setMbti] = useState("ENTJ");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name.trim()) return;
    onAdd({ name: name.trim(), role: role.trim() || "Member", mbti });
    setName("");
    setRole("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>Add a team member</div>
      <input value={name} onChange={(e)=>setName(e.target.value)} placeholder="Name" />
      <input value={role} onChange={(e)=>setRole(e.target.value)} placeholder="Role" />
      <select value={mbti} onChange={(e)=>setMbti(e.target.value)}>
        {MBTI_TYPES.map(t=> <option key={t}>{t}</option>)}
      </select>
      <button type="submit">Add</button>
    </form>
  );
}
