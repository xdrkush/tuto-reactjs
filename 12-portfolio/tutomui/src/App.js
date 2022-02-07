import { HashRouter, Route, Routes } from "react-router-dom";

import MainLayout from "./layouts/MainLayout";
import AdminLayout from "./layouts/AdminLayout";

// Import Pages
import Home from "./pages/HomePage";
import About from "./pages/AboutPage";
import Category from "./pages/CategoryPage";
import CategoryID from "./pages/CategoryIDPage";
import Contact from "./pages/ContactPage";
import Project from "./pages/ProjectPage";
import ArticleID from "./pages/ArticleIDPage";
import Login from "./pages/LoginPage";
import NotFound from "./pages/NotFoundPage";

import Admin from "./pages/AdminPage";
import AWebsite from "./pages/admin/AdminWebsite";
import ACategory from "./pages/admin/AdminCategory";
import AArticle from "./pages/admin/AdminArticle";
import AUser from "./pages/admin/AdminUser";

const AppRoutes = () => (
  <MainLayout>
    <Routes>
      <Route path="" element={<Home />} />
      <Route path="Home" element={<Home />} />
      <Route path="About" exact element={<About />} />
      <Route path="Category" exact element={<Category />} />
      <Route path="Category/:name" exact element={<CategoryID />} />
      <Route path="Contact" exact element={<Contact />} />
      <Route path="Project" exact element={<Project />} />
      <Route path="Login" exact element={<Login />} />
      <Route path="Article/:name" exact element={<ArticleID />} />
    </Routes>
  </MainLayout>
);

const AdminRoutes = () => (
  <AdminLayout>
    <Routes>
      <Route path="" element={<Admin />} />
      <Route path="Website" exact element={<AWebsite />} />
      <Route path="Category" exact element={<ACategory />} />
      <Route path="Article" exact element={<AArticle />} />
      <Route path="User" exact element={<AUser />} />
    </Routes>
  </AdminLayout>
);

export default function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/*" element={<AppRoutes />} />
        <Route path="/Admin/*" element={<AdminRoutes />} />
        <Route path="*" exact element={<NotFound />} />
      </Routes>
    </HashRouter>
  );
}
