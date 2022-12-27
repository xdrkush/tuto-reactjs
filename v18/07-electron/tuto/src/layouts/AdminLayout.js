import "./AdminLayout.css"
import NavbarAdmin from "../components/NavbarAdmin";
import FooterAdmin from "../components/FooterAdmin";

// Notre layout prend un paramêtre particulier ({children})
// En sois il parsera nos pages à l'interieur du children
export default function AdminLayout ({ children }) {
  
  return (
    <div className="AdminLayout">
      <NavbarAdmin />
        <main>
          {children}
        </main>
      <FooterAdmin />
    </div>
  );
};
