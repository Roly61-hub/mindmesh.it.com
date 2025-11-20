
import Link from "next/link";
import Layout from "@/components/Layout";

export default function HomePage() {
  return (
    <Layout>
      <main>
        <h1>MindMesh Team Analyzer</h1>
        <p>Preview build – turn personality data into team insight.</p>
        <Link href="/team">Open Team Analyzer</Link>
      </main>
    </Layout>
  );
}
