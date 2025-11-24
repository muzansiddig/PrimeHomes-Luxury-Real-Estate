import React from 'react';
import { Facebook, Instagram, Twitter, MapPin, Phone, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-prime-dark border-t border-prime-gold pt-16 pb-8">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div>
             <a href="#hero" onClick={(e) => handleScroll(e, '#hero')} className="text-2xl font-serif font-bold text-white tracking-widest block mb-6">
              PRIME<span className="text-prime-gold">HOMES</span>
            </a>
            <p className="text-gray-500 text-sm leading-relaxed">
              The premier destination for luxury real estate. We connect the world's elite with extraordinary properties.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-serif text-lg mb-6">Explore</h4>
            <ul className="space-y-3 text-gray-400 text-sm">
              <li>
                <a href="#hero" onClick={(e) => handleScroll(e, '#hero')} className="hover:text-prime-gold transition-colors">Home</a>
              </li>
              <li>
                <a href="#properties" onClick={(e) => handleScroll(e, '#properties')} className="hover:text-prime-gold transition-colors">Properties</a>
              </li>
              <li>
                <a href="#about" onClick={(e) => handleScroll(e, '#about')} className="hover:text-prime-gold transition-colors">About Us</a>
              </li>
              <li>
                <a href="#contact" onClick={(e) => handleScroll(e, '#contact')} className="hover:text-prime-gold transition-colors">Contact</a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-serif text-lg mb-6">Contact</h4>
            <ul className="space-y-4 text-gray-400 text-sm">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-prime-gold mt-1" />
                <span>123 Luxury Blvd,<br />Beverly Hills, CA 90210</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-prime-gold" />
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-prime-gold" />
                <span>concierge@primehomes.com</span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-white font-serif text-lg mb-6">Newsletter</h4>
            <p className="text-gray-500 text-sm mb-4">Subscribe for exclusive off-market listings.</p>
            <div className="flex border-b border-gray-600 pb-2">
              <input 
                type="email" 
                placeholder="Email Address" 
                className="bg-transparent border-none text-white focus:ring-0 w-full placeholder-gray-600 text-sm"
              />
              <button className="text-prime-gold uppercase text-xs font-bold">Join</button>
            </div>
          </div>
        </div>

        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-600 text-xs">© 2025 PrimeHomes Real Estate. All rights reserved.</p>
          <div className="flex space-x-6">
            <a href="#" className="text-gray-500 hover:text-prime-gold transition-colors"><Instagram size={20} /></a>
            <a href="#" className="text-gray-500 hover:text-prime-gold transition-colors"><Facebook size={20} /></a>
            <a href="#" className="text-gray-500 hover:text-prime-gold transition-colors"><Twitter size={20} /></a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;