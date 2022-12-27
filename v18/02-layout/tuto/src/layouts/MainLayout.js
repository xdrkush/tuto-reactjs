import "./MainLayout.css"
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

// Notre layout prend un paramêtre particulier ({children})
// En sois il parsera nos pages à l'interieur du children
export default function MainLayout ({ children }) {
  
  return (
    <div className="MainLayout">
      <Navbar />
        { children }
      <Footer />
    </div>
  );
};
