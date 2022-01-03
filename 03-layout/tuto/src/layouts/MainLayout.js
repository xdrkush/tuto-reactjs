import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

const MainLayout = ({ children }) => {
  const title = "Ma super app";
  const navlink = ["Article", "Contact"];
  
  return (
    <div className="App">
      <Navigation title={ title } link={ navlink } />
        { children }
      <Footer title={ title } />
    </div>
  );
};

export default MainLayout;
