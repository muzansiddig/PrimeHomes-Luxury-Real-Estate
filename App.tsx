import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Properties from './components/Properties';
import Services from './components/Services';
import Contact from './components/Contact';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import AIChat from './components/AIChat';

const App: React.FC = () => {
  return (
    <div className="bg-prime-dark min-h-screen text-white selection:bg-prime-gold selection:text-prime-dark">
      <Navbar />
      
      <main>
        <Hero />
        <About />
        <Properties />
        <Services />
        <Contact />
      </main>

      <Footer />
      
      {/* Floating Elements */}
      <WhatsAppButton />
      <AIChat />
    </div>
  );
};

export default App;
