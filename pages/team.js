import { useState, useMemo } from "react";

// Correct imports (use one consistent style)
import Layout from "@/components/Layout";
import TeamMemberForm from "@/components/TeamMemberForm";
import PersonalityCard from "@/components/PersonalityCard";

import { SAMPLE_TEAM } from "@/data/sampleTeam";

function buildCompatibilityNarrative(team) {
  if (!team.length) return "Add at least two people.";
  return "Static narrative preview for demo purposes only.";
}

export default function TeamPage() {
  const [team, setTeam] = useState(SAMPLE_TEAM);

  const compatibilitySummary = useMemo(
    () => buildCompatibilityNarrative(team),
    [team]
  );

  return (
    <Layout>
      <main>
        <h1>Team Analyzer</h1>

        <TeamMemberForm
          onAdd={(m) => setTeam((prev) => [...prev, m])}
        />

        {team.map((m) => (
          <PersonalityCard key={m.name + m.mbti} member={m} />
        ))}

        <p>{compatibilitySummary}</p>
      </main>
    </Layout>
  );
}
