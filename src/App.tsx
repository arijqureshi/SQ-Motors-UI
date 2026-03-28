import { Routes, Route, Navigate } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home';
import Contact from './pages/Contact';
import About from './pages/About';
import Reviews from './pages/Reviews';
import Inventory from './pages/Inventory';
import Financing from './pages/Financing';
import Inspections from './pages/Inspections';
import TradeIn from './pages/TradeIn';

function App() {
  return (
    <div className="min-h-screen bg-white pt-10">
      <Header />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about-us" element={<About />} />
        <Route path="/financing" element={<Financing />} />
        <Route path="/reviews" element={<Reviews />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/inventory" element={<Inventory />} />
        <Route path="/inspections" element={<Inspections />} />
        <Route path="/inspections/*" element={<Inspections />} />
        <Route path="/warranty" element={<Navigate to="/inspections" replace />} />
        <Route path="/warranty/*" element={<Navigate to="/inspections" replace />} />
        <Route path="/trade-in" element={<TradeIn />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
