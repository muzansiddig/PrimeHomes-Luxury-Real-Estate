import React from 'react';
import { ChevronRight, MessageCircle } from 'lucide-react';

const Hero: React.FC = () => {
  const whatsappMessage = encodeURIComponent("Hello, I’m interested in a property listed on PrimeHomes.");
  const whatsappUrl = `https://wa.me/1234567890?text=${whatsappMessage}`;

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative h-screen w-full overflow-hidden flex items-center justify-center scroll-mt-0">
      {/* Background Image with Parallax-like fixed attachment */}
      <div 
        className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center bg-no-repeat bg-fixed scale-110"
      >
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-prime-dark/80 via-prime-dark/60 to-prime-dark/90"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto animate-fade-in-up">
        <h2 className="text-prime-gold uppercase tracking-[0.3em] text-sm md:text-base mb-6 font-semibold">
          Redefining Modern Opulence
        </h2>
        <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl text-white leading-tight mb-8">
          Discover Luxury <br />
          <span className="italic text-prime-goldLight">Living</span> with PrimeHomes
        </h1>
        <p className="text-gray-300 text-lg md:text-xl font-light max-w-2xl mx-auto mb-12 leading-relaxed">
          Exclusive apartments, villas, and premium investment opportunities curated for refined lifestyles.
        </p>
        
        <div className="flex flex-col md:flex-row items-center justify-center gap-6">
          <a 
            href="#properties"
            onClick={(e) => handleScroll(e, '#properties')}
            className="group relative px-8 py-4 bg-gradient-to-r from-prime-gold to-prime-goldLight text-prime-dark font-bold tracking-wide overflow-hidden rounded-sm transition-all hover:shadow-[0_0_20px_rgba(201,168,106,0.4)] cursor-pointer"
          >
            <span className="relative z-10 flex items-center gap-2">
              Explore Properties <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </span>
          </a>
          
          <a 
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group px-8 py-4 border border-prime-gold text-prime-gold font-medium tracking-wide hover:bg-prime-gold/10 transition-all rounded-sm flex items-center gap-2 cursor-pointer"
          >
             <MessageCircle size={18} /> Contact via WhatsApp
          </a>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce text-white/50">
        <span className="text-xs tracking-widest uppercase">Scroll</span>
      </div>
    </section>
  );
};

export default Hero;