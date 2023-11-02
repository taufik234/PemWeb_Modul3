import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar.jsx';

// Import komponen-komponen halaman
import Homepage from './pages/Homepage.jsx';
import About from './pages/About.jsx';
import Contact from './pages/Contact.jsx';
import Footer from './components/Footer.jsx';
import './css/style.css';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="Home" element={<Homepage />} />
        <Route path="/AboutUs" element={<About />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes>
      <ConditionalFooter />
    </Router>
  );
}

function ConditionalFooter() {
  const location = useLocation();

  // Tampilkan footer hanya jika bukan halaman AboutUs atau Contact
  if (location.pathname !== '/About') {
    return <Footer />;
  }

  return null;
}

export default App;