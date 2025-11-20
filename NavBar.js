
import Link from "next/link";

export default function NavBar() {
  return (
    <header style={{ marginBottom: "1.5rem" }}>
      <nav
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "1rem",
        }}
      >
        <Link href="/" style={{ display: "flex", alignItems: "center", gap: "0.45rem" }}>
          <div>MindMesh</div>
        </Link>
        <Link href="/team">Team Analyzer</Link>
      </nav>
    </header>
  );
}
