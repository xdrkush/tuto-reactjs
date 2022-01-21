import Navigation from "../components/core/Navigation";
import Footer from "../components/core/Footer";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const AdminLayout = ({ children }) => {
  const navigate = useNavigate();
  const title = "Go Home";
  const navlink = ["Admin", "Login"];

  useEffect(() => {
    if (!localStorage.getItem('user_admin')) navigate("/Login");
    }, []);

  return (
    <div className="App">
      <Navigation title={title} link={navlink} />
      <main> {children} </main>
      <Footer title={title} />
    </div>
  );
};

export default AdminLayout;
