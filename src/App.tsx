import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import WarrantySection from './components/WarrantySection';
import MobileFeatures from './components/MobileFeatures';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <MobileFeatures />
      <About />
      <WarrantySection />
      <Footer />
    </div>
  );
}

export default App;
