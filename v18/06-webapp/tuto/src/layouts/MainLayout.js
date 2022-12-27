import "./MainLayout.css"
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useState } from "react"

export default function MainLayout({ children }) {
  const [pages] = useState([
    {id: 0, name: 'contact', label: "Contact"},
    {id: 1, name: 'country', label: "Countries"},
    {id: 2, name: 'admin', label: "Admin"},
  ])

  return (
    <div className="MainLayout">
      <Navbar list={pages} />
        <main>
          {children}
        </main>
      <Footer />
    </div>
  );
};
