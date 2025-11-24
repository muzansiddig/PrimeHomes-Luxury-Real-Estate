import React from 'react';
import { Property } from '../types';
import { Bed, Bath, Move, ArrowRight } from 'lucide-react';

const properties: Property[] = [
  {
    id: 1,
    title: "The Royal Penthouse",
    location: "Downtown Metropolis",
    price: "$12,500,000",
    description: "360-degree views, private elevator, and rooftop infinity pool.",
    image: "https://images.unsplash.com/photo-1512915922686-57c11dde9b6b?q=80&w=2073&auto=format&fit=crop",
    beds: 4,
    baths: 5,
    sqft: 6500
  },
  {
    id: 2,
    title: "Oceanfront Villa Azure",
    location: "Coastal Riviera",
    price: "$8,900,000",
    description: "Direct beach access, expansive gardens, and guest house.",
    image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?q=80&w=2071&auto=format&fit=crop",
    beds: 6,
    baths: 7,
    sqft: 8200
  },
  {
    id: 3,
    title: "Midtown Sky Loft",
    location: "Financial District",
    price: "$4,200,000",
    description: "Double-height ceilings, smart home integration, gym amenities.",
    image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?q=80&w=2070&auto=format&fit=crop",
    beds: 3,
    baths: 3,
    sqft: 2800
  }
];

const Properties: React.FC = () => {
  const handleViewDetails = (id: number) => {
    // In a full application, this would use router navigation: navigate(`/properties/${id}`)
    console.log(`Navigating to Property Details Page for Property ID: ${id}`);
    alert(`Navigating to details for: Property ID ${id}`);
  };

  return (
    <section id="properties" className="py-24 bg-gradient-to-b from-prime-dark to-prime-navy text-white scroll-mt-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-prime-gold uppercase tracking-widest text-sm font-bold mb-2">Exclusive Listings</h2>
          <h3 className="font-serif text-4xl md:text-5xl">Featured Properties</h3>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {properties.map((property) => (
            <div 
              key={property.id} 
              className="group relative bg-prime-dark border border-white/5 hover:border-prime-gold/50 rounded-sm overflow-hidden transition-all duration-500 hover:shadow-[0_0_30px_rgba(201,168,106,0.2)] hover:scale-[1.02] hover:-translate-y-3"
            >
              {/* Image Area */}
              <div className="relative h-80 overflow-hidden">
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors z-10"></div>
                <img 
                  src={property.image} 
                  alt={property.title} 
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-out"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-prime-dark to-transparent h-20 z-10"></div>
                <div className="absolute top-4 right-4 bg-prime-gold text-prime-dark font-bold px-4 py-1 text-sm uppercase tracking-wide z-20">
                  For Sale
                </div>
              </div>

              {/* Content Area */}
              <div className="p-8 relative z-20 bg-prime-dark transition-transform duration-300 transform group-hover:-translate-y-2">
                <h4 className="font-serif text-2xl mb-2 truncate group-hover:text-prime-gold transition-colors">{property.title}</h4>
                <p className="text-gray-400 text-sm mb-4 uppercase tracking-wider">{property.location}</p>
                
                <div className="flex items-center gap-6 text-gray-400 text-sm mb-6 border-b border-white/10 pb-6">
                  <div className="flex items-center gap-2">
                    <Bed size={16} className="text-prime-gold" /> {property.beds}
                  </div>
                  <div className="flex items-center gap-2">
                    <Bath size={16} className="text-prime-gold" /> {property.baths}
                  </div>
                  <div className="flex items-center gap-2">
                    <Move size={16} className="text-prime-gold" /> {property.sqft} sqft
                  </div>
                </div>

                <div className="flex justify-between items-center">
                  <span className="text-2xl font-serif text-white">{property.price}</span>
                  <button 
                    onClick={() => handleViewDetails(property.id)}
                    className="text-prime-gold text-sm font-bold uppercase tracking-widest flex items-center gap-2 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 delay-75 cursor-pointer hover:text-white"
                  >
                    View Details <ArrowRight size={16} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
           <button className="inline-block px-10 py-4 border border-white/20 text-white hover:bg-white hover:text-prime-dark transition-all duration-300 uppercase tracking-widest text-sm cursor-pointer">
             View All Listings
           </button>
        </div>
      </div>
    </section>
  );
};

export default Properties;