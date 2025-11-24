import React from 'react';
import { ShieldCheck, Star, Users } from 'lucide-react';

const About: React.FC = () => {
  const features = [
    {
      icon: <Star size={32} />,
      title: "Elite Experience",
      desc: "Access to off-market listings and VIP viewings tailored to your schedule."
    },
    {
      icon: <ShieldCheck size={32} />,
      title: "Trusted Advisors",
      desc: "Decades of combined experience in high-value real estate transactions."
    },
    {
      icon: <Users size={32} />,
      title: "Concierge Support",
      desc: "From legal paperwork to interior design, we handle every detail."
    }
  ];

  return (
    <section id="about" className="py-24 bg-prime-dark relative scroll-mt-20">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Text Content */}
          <div>
            <div className="h-1 w-20 bg-prime-gold mb-8"></div>
            <h2 className="font-serif text-4xl md:text-5xl text-white mb-6">
              Curating the World's <br />
              <span className="text-prime-gold italic">Most Desirable</span> Addresses
            </h2>
            <p className="text-gray-400 leading-loose text-lg mb-8">
              At PrimeHomes, we don't just sell properties; we broker lifestyles. 
              Our agency represents a portfolio of the most exquisite homes globally, 
              offering a bespoke service for the discerning investor. Whether you seek 
              a quiet coastal retreat or a vibrant urban penthouse, our expertise ensures 
              a seamless journey to your dream home.
            </p>
          </div>

          {/* Image Composition */}
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2053&auto=format&fit=crop" 
              alt="Luxury Interior" 
              className="w-full h-[500px] object-cover rounded-sm shadow-2xl opacity-80 hover:opacity-100 transition-opacity duration-500"
            />
            <div className="absolute -bottom-6 -left-6 w-40 h-40 border-2 border-prime-gold/50 -z-10 hidden md:block"></div>
            <div className="absolute -top-6 -right-6 w-40 h-40 border-2 border-prime-navy -z-10 hidden md:block"></div>
          </div>
        </div>

        {/* Feature Blocks */}
        <div className="grid md:grid-cols-3 gap-8 mt-24">
          {features.map((feature, idx) => (
            <div 
              key={idx}
              className="group p-8 border border-white/10 hover:border-prime-gold/50 bg-white/5 transition-all duration-300 hover:-translate-y-2"
            >
              <div className="text-prime-gold mb-6 group-hover:scale-110 transition-transform duration-300">
                {feature.icon}
              </div>
              <h3 className="font-serif text-2xl text-white mb-4">{feature.title}</h3>
              <p className="text-gray-400 font-light">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;