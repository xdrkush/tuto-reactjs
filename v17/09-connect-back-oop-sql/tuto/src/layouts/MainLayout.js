import Navigation from "../components/core/Navigation";
import Footer from "../components/core/Footer";

const MainLayout = ({ children }) => {
  const title = "Ma super app";
  const navlink = ["Article", "Countries", "Admin"];
  
  return (
    <div className="App">
      <Navigation title={ title } link={ navlink } />
        <main> { children } </main>
      <Footer title={ title } />
    </div>
  );
};

export default MainLayout;
