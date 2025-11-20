
import NavBar from "./NavBar";
import Footer from "./Footer";

export default function Layout({ children }) {
  return (
    <div className="mm-page">
      <div className="mm-shell">
        <NavBar />
        {children}
        <Footer />
      </div>
    </div>
  );
}
