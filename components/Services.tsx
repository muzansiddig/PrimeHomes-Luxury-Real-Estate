import React from 'react';
import { CheckCircle2, Clock, DollarSign, Search } from 'lucide-react';

const Services: React.FC = () => {
  const features = [
    { Icon: CheckCircle2, title: "Verified Listings", desc: "Every property is vetted for legal clarity and structural integrity." },
    { Icon: DollarSign, title: "Best-Value Luxury", desc: "Negotiated directly with owners to ensure fair market premiums." },
    { Icon: Search, title: "Expert Advisors", desc: "Market analysis and ROI projection for every investment." },
    { Icon: Clock, title: "Instant Support", desc: "24/7 dedicated lines for our premium clientele." },
  ];

  return (
    <section id="services" className="py-24 bg-prime-navy/20 scroll-mt-20">
      <div className="container mx-auto px-6">
        <div className="mb-16 text-center">
          <h2 className="font-serif text-4xl text-white mb-4">Why Choose PrimeHomes</h2>
          <div className="w-24 h-1 bg-prime-gold mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((item, idx) => (
            <div key={idx} className="text-center p-6 group hover:bg-white/5 rounded-sm transition-colors duration-300">
              <div className="w-16 h-16 mx-auto bg-prime-dark border border-prime-gold rounded-full flex items-center justify-center text-prime-gold mb-6 shadow-lg group-hover:scale-110 transition-transform">
                <item.Icon size={28} />
              </div>
              <h3 className="text-xl text-white font-serif mb-3">{item.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;