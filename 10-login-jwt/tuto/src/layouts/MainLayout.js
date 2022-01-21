import { useDispatch } from "react-redux";
import { useEffect } from 'react'
import { checkUx } from '../store/actions/LoginActions'
import Navigation from "../components/core/Navigation";
import Footer from "../components/core/Footer";

const MainLayout = ({ children }) => {
  const dispatch = useDispatch();
  const title = "Ma super app";
  const navlink = ["Article", "Countries", "Admin", "Profile", "Login"];
  
  useEffect(() => {
    if (!localStorage.getItem('user_token')) localStorage.setItem('user_token', 'visitor')
    dispatch(checkUx());
  }, []);

  return (
    <div className="App">
      <Navigation title={ title } link={ navlink } />
        <main> { children } </main>
      <Footer title={ title } />
    </div>
  );
};

export default MainLayout;
