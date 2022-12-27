import Navigation from "../components/core/Navigation";
import Footer from "../components/core/Footer";

const AdminLayout = ({ children }) => {
  const title = "Admin Page";
  const navlink = ["Admin"];
  
  return (
    <div className="App">
      <Navigation title={ title } link={ navlink } />
        <main> { children } </main>
      <Footer title={ title } />
    </div>
  );
};

export default AdminLayout;
