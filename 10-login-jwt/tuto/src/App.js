import "./assets/css/App.css";
import { HashRouter, Route, Routes } from "react-router-dom";

// Import Pages
import Home from "./pages/HomePage"
import Countries from "./pages/CountriesPage"
import Article from "./pages/ArticlePage"
import ArticleID from "./pages/ArticleIDPage"
import Admin from "./pages/AdminPage"
import Profile from "./pages/ProfilePage"
import Login from "./pages/LoginPage"
import NotFound from "./pages/NotFoundPage"

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" index exact element={<Home />} />
        <Route path="/Countries" exact element={<Countries />} />
        <Route path="/Article" exact element={<Article />} />
        <Route path="/Article/:id" exact element={<ArticleID />} />
        <Route path="/Profile/:name" exact element={<Profile />} />
        <Route path="/Admin" exact element={<Admin />} />
        <Route path="/Login" exact element={<Login />} />
        <Route element={ NotFound } />
      </Routes>
    </HashRouter>
  );
}

export default App;
