import './App.css';

import { HashRouter, Route, Routes } from "react-router-dom";

import HomePage from './pages/HomePage'
import CountryPage from './pages/CountryPage'
import ContactPage from './pages/ContactPage'
import AdminPage from './pages/AdminPage'
import NotFoundPage from './pages/NotFoundPage'

export default function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/contact" element={<ContactPage/>} />
        <Route path="/country" element={<CountryPage/>} />
        <Route path="/admin" element={<AdminPage/>} />
        <Route path="*" element={ <NotFoundPage/> } />
      </Routes>
    </HashRouter>
  );
}
