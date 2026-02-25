'use client';

import { useState, useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Phone, Mail, MapPin, Send, MessageCircle, Clock } from 'lucide-react';

export default function Contact() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', phone: '', message: '' });
    }, 3000);
  };

  const contactInfo = [
    {
      icon: Phone,
      title: 'Phone',
      content: '+91-8571801102',
      link: 'tel:+918571801102',
    },
    {
      icon: Mail,
      title: 'Email',
      content: 'info@ravinairayen.com',
      link: 'mailto:info@ravinairayen.com',
    },
    {
      icon: MapPin,
      title: 'Address',
      content: 'Met City, Yukubpur, Jhajjar, Haryana',
      link: '#',
    },
    {
      icon: Clock,
      title: 'Hours',
      content: '24/7 Available',
      link: '#',
    },
  ];

  return (
    <>
      <Navbar />

      {/* Hero */}
      <section className="min-h-screen pt-20 flex items-center relative overflow-hidden" style={{
        backgroundImage: 'url(/gallery/landscape-1.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}>
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/60" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
          <div className={`text-center transition-all duration-1000 ${isLoaded ? 'animate-slide-up' : 'opacity-0'}`}>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Get In <span className="text-orange-400">Touch</span>
            </h1>
            <p className="text-xl text-gray-100 max-w-3xl mx-auto">
              Have questions? We'd love to hear from you. Contact us anytime!
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-20 bg-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-amber-100 rounded-full blur-3xl opacity-10" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
            {contactInfo.map((info, idx) => {
              const Icon = info.icon;
              return (
                <a
                  key={idx}
                  href={info.link}
                  className="group p-8 bg-gradient-to-br from-white to-amber-50 rounded-xl border border-amber-100 hover:border-amber-400 transition-all duration-500 hover:shadow-xl transform hover:-translate-y-2"
                  style={{
                    animation: `slideInUp 0.6s ease-out forwards`,
                    animationDelay: `${idx * 100}ms`,
                    opacity: 0,
                  }}
                >
                  <div className="mb-4 inline-block p-3 bg-gradient-to-br from-amber-400 to-orange-400 rounded-lg group-hover:scale-110 transition-transform duration-300">
                    <Icon size={28} className="text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{info.title}</h3>
                  <p className="text-gray-600 hover:text-amber-600 transition-colors">{info.content}</p>
                </a>
              );
            })}
          </div>

          {/* Contact Form and Map */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Form */}
            <div className={`transition-all duration-1000 ${isLoaded ? 'animate-slide-left' : 'opacity-0'}`}>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Send us a Message</h2>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">Full Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-amber-200 rounded-lg focus:outline-none focus:border-amber-500 focus:ring-2 focus:ring-amber-200 transition-all duration-300"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label className="block text-gray-700 font-semibold mb-2">Email Address</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-amber-200 rounded-lg focus:outline-none focus:border-amber-500 focus:ring-2 focus:ring-amber-200 transition-all duration-300"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label className="block text-gray-700 font-semibold mb-2">Phone Number</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-amber-200 rounded-lg focus:outline-none focus:border-amber-500 focus:ring-2 focus:ring-amber-200 transition-all duration-300"
                    placeholder="+91-XXXXXXXXXX"
                  />
                </div>

                <div>
                  <label className="block text-gray-700 font-semibold mb-2">Message</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 border border-amber-200 rounded-lg focus:outline-none focus:border-amber-500 focus:ring-2 focus:ring-amber-200 transition-all duration-300 resize-none"
                    placeholder="Tell us more about your inquiry..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3 bg-gradient-to-r from-amber-600 to-orange-500 text-white rounded-lg font-bold hover:shadow-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2"
                >
                  <Send size={20} />
                  Send Message
                </button>

                {submitted && (
                  <div className="p-4 bg-green-100 border border-green-400 text-green-700 rounded-lg animate-slide-up">
                    Thank you for your message! We'll get back to you soon.
                  </div>
                )}
              </form>
            </div>

            {/* Contact Details */}
            <div className={`transition-all duration-1000 delay-200 ${isLoaded ? 'animate-slide-right' : 'opacity-0'}`}>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Why Contact Us?</h2>

              <div className="space-y-6 mb-8">
                {[
                  {
                    title: 'Quick Responses',
                    desc: 'We aim to respond to all inquiries within 2 hours during business hours.',
                  },
                  {
                    title: 'Expert Guidance',
                    desc: 'Our team can help you find the perfect room and answer all your questions.',
                  },
                  {
                    title: 'Flexible Options',
                    desc: 'We offer flexible booking options and can discuss your specific needs.',
                  },
                  {
                    title: 'Special Offers',
                    desc: 'Ask about our current promotions and discounts for long-term stays.',
                  },
                ].map((item, idx) => (
                  <div key={idx} className="flex gap-4 group">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-amber-400 to-orange-400 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                      <MessageCircle size={24} className="text-white" />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 mb-1">{item.title}</h3>
                      <p className="text-gray-600">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Highlighted CTA */}
              <div className="p-6 bg-gradient-to-br from-amber-500 to-orange-500 text-white rounded-xl">
                <h3 className="text-xl font-bold mb-2">Ready to Move In?</h3>
                <p className="mb-4">Call us directly for immediate availability and booking:</p>
                <a
                  href="tel:+918571801102"
                  className="inline-block px-6 py-2 bg-white text-amber-600 rounded-lg font-bold hover:bg-amber-50 transition-all duration-300"
                >
                  +91-8571801102
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Location Info Section */}
      <section className="py-20 bg-gradient-to-b from-gray-900 to-gray-800 text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Visit Us</h2>
            <p className="text-xl text-gray-300">Located in the heart of Haryana's growing community</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 bg-white/10 backdrop-blur-md border border-orange-500/30 rounded-xl hover:border-orange-500/60 transition-all duration-300">
              <h3 className="text-2xl font-bold mb-4 text-orange-400">Location</h3>
              <p className="text-gray-100 leading-relaxed">
                Met City, Yukubpur<br />
                Jhajjar, Haryana<br />
                India
              </p>
            </div>

            <div className="p-8 bg-white/10 backdrop-blur-md border border-orange-500/30 rounded-xl hover:border-orange-500/60 transition-all duration-300">
              <h3 className="text-2xl font-bold mb-4 text-orange-400">Contact</h3>
              <p className="text-gray-100">
                <a href="tel:+918571801102" className="hover:text-orange-400 transition-colors">
                  +91-8571801102
                </a><br />
                <a href="mailto:info@ravinairayen.com" className="hover:text-orange-400 transition-colors">
                  info@ravinairayen.com
                </a>
              </p>
            </div>

            <div className="p-8 bg-white/10 backdrop-blur-md border border-orange-500/30 rounded-xl hover:border-orange-500/60 transition-all duration-300">
              <h3 className="text-2xl font-bold mb-4 text-orange-400">Hours</h3>
              <p className="text-gray-100">
                Available 24/7<br />
                for inquiries and<br />
                support
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
