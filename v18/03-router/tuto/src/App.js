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
        <Route path="/" exact element={<HomePage/>} />
        <Route path="/contact" exact element={<ContactPage/>} />
        <Route path="/country" exact element={<CountryPage/>} />
        <Route path="/admin" exact element={<AdminPage/>} />
        <Route path="*" exact element={ <NotFoundPage/> } />
      </Routes>
    </HashRouter>
  );
}
