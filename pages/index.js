export default function Home() {
  if (typeof window !== "undefined") {
    window.location.href = "/team";
  }

  return null;
}
