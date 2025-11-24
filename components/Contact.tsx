import React, { useState } from 'react';
import { CheckCircle } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    interest: 'Buy Property',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call / Form Submission
    setTimeout(() => {
      console.log('Form Submitted:', formData);
      setIsSubmitting(false);
      setIsSuccess(true);
      // Reset after a delay or keep success message
      setTimeout(() => {
        setIsSuccess(false);
        setFormData({ name: '', email: '', phone: '', interest: 'Buy Property', message: '' });
      }, 5000);
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 bg-prime-dark relative overflow-hidden scroll-mt-20">
       {/* Decorative elements */}
       <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-prime-gold/30 to-transparent"></div>

      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto bg-prime-navy/30 p-8 md:p-12 rounded-sm border border-white/5 backdrop-blur-sm relative">
          
          {isSuccess ? (
            <div className="absolute inset-0 z-20 bg-prime-dark/95 flex flex-col items-center justify-center p-8 text-center animate-fade-in-up rounded-sm">
              <CheckCircle size={64} className="text-green-500 mb-6" />
              <h3 className="text-3xl font-serif text-white mb-4">Request Received</h3>
              <p className="text-gray-400 max-w-md">
                Thank you, {formData.name}. We have received your inquiry regarding {formData.interest}. A senior agent will contact you shortly.
              </p>
              <button 
                onClick={() => setIsSuccess(false)}
                className="mt-8 text-prime-gold hover:text-white transition-colors underline underline-offset-4"
              >
                Send another request
              </button>
            </div>
          ) : null}

          <div className="text-center mb-12">
            <h2 className="font-serif text-4xl text-white mb-4">Schedule a Private Viewing</h2>
            <p className="text-gray-400 font-light">
              Begin your journey to exceptional living. Fill out the form below, and our senior agents will contact you shortly.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-8">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="group">
                <label className="block text-prime-gold text-xs uppercase tracking-widest mb-2">Full Name</label>
                <input 
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full bg-transparent border-b border-gray-600 text-white py-3 focus:outline-none focus:border-prime-gold transition-colors placeholder-gray-600"
                  placeholder="John Doe"
                />
              </div>
              <div className="group">
                <label className="block text-prime-gold text-xs uppercase tracking-widest mb-2">Email Address</label>
                <input 
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required 
                  className="w-full bg-transparent border-b border-gray-600 text-white py-3 focus:outline-none focus:border-prime-gold transition-colors placeholder-gray-600"
                  placeholder="john@example.com"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="group">
                <label className="block text-prime-gold text-xs uppercase tracking-widest mb-2">Phone Number</label>
                <input 
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full bg-transparent border-b border-gray-600 text-white py-3 focus:outline-none focus:border-prime-gold transition-colors placeholder-gray-600"
                  placeholder="+1 (555) 000-0000"
                />
              </div>
              <div className="group">
                <label className="block text-prime-gold text-xs uppercase tracking-widest mb-2">Interest</label>
                <select 
                  name="interest"
                  value={formData.interest}
                  onChange={handleChange}
                  className="w-full bg-transparent border-b border-gray-600 text-white py-3 focus:outline-none focus:border-prime-gold transition-colors"
                >
                  <option className="bg-prime-dark" value="Buy Property">Buy Property</option>
                  <option className="bg-prime-dark" value="Sell Property">Sell Property</option>
                  <option className="bg-prime-dark" value="Investment Advice">Investment Advice</option>
                </select>
              </div>
            </div>

            <div className="group">
                <label className="block text-prime-gold text-xs uppercase tracking-widest mb-2">Message</label>
                <textarea 
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full bg-transparent border-b border-gray-600 text-white py-3 focus:outline-none focus:border-prime-gold transition-colors placeholder-gray-600"
                  placeholder="I am interested in..."
                ></textarea>
            </div>

            <div className="text-center pt-6">
              <button 
                type="submit"
                disabled={isSubmitting}
                className="px-12 py-4 bg-gradient-to-r from-prime-gold to-prime-goldLight text-prime-dark font-bold tracking-wide rounded-sm hover:shadow-[0_0_15px_rgba(201,168,106,0.5)] transition-all transform hover:-translate-y-1 disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Sending Request...' : 'Send Request'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;