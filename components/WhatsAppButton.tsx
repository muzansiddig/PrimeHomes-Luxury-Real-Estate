import React from 'react';
import { MessageCircle } from 'lucide-react';

const WhatsAppButton: React.FC = () => {
  const message = encodeURIComponent("Hello, I’m interested in a property listed on PrimeHomes.");
  const whatsappUrl = `https://wa.me/1234567890?text=${message}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-8 right-8 z-50 bg-[#25D366] p-4 rounded-full shadow-[0_0_20px_rgba(37,211,102,0.4)] hover:scale-110 transition-transform duration-300 flex items-center justify-center group cursor-pointer"
      title="Chat on WhatsApp"
      onClick={(e) => {
        // Fallback or analytics logic can go here
        console.log("Opening WhatsApp Chat");
      }}
    >
      <MessageCircle size={32} color="white" fill="white" />
      <span className="absolute right-full mr-4 bg-white text-prime-dark px-3 py-1 rounded-md text-sm font-bold opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap shadow-lg pointer-events-none">
        Chat with Agent
      </span>
    </a>
  );
};

export default WhatsAppButton;