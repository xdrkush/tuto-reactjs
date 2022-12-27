import "./assets/css/App.css";
import { HashRouter, Route, Routes } from "react-router-dom";

// Import Pages
import Home from "./pages/HomePage"
import Contact from "./pages/ContactPage"
import Article from "./pages/ArticlePage"
import Admin from "./pages/AdminPage"
import NotFound from "./pages/NotFoundPage"

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" exact element={<Home/>} />
        <Route path="/Contact" exact element={<Contact/>} />
        <Route path="/Article" exact element={<Article/>} />
        <Route path="/Admin" exact element={<Admin/>} />
        <Route element={ NotFound } />
      </Routes>
    </HashRouter>
  );
}

export default App;
