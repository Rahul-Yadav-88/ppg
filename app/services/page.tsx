'use client';

import { useState, useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ImageGallery from '@/components/ImageGallery';
import { Users, Wind, Lock, UtensilsCrossed, Wifi, Droplet, Phone, Shirt, Home } from 'lucide-react';

export default function Services() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const roomTypes = [
    {
      type: 'Single Room',
      price: '₹8,000/month',
      features: ['Private Room', 'Attached Bathroom', 'Wi-Fi Access', 'Air Conditioning'],
      color: 'from-blue-400 to-blue-600',
      icon: Home,
    },
    {
      type: 'Sharing Room (2-Bed)',
      price: '₹6,000/month',
      features: ['Spacious Room', 'Shared Bathroom', 'Wi-Fi Access', 'Air Conditioning'],
      color: 'from-purple-400 to-purple-600',
      icon: Users,
    },
    {
      type: 'Sharing Room (3-Bed)',
      price: '₹5,500/month',
      features: ['Large Room', 'Shared Bathroom', 'Wi-Fi Access', 'Air Conditioning'],
      color: 'from-pink-400 to-pink-600',
      icon: Users,
    },
  ];

  const facilities = [
    { icon: Wifi, label: 'High-Speed Wi-Fi', desc: 'Unlimited internet connectivity throughout the property' },
    { icon: Droplet, label: 'RO Water System', desc: 'Pure drinking water 24/7' },
    { icon: Lock, label: '24/7 CCTV Security', desc: 'Advanced surveillance system for your safety' },
    { icon: UtensilsCrossed, label: 'Food Service', desc: 'Hygienic and delicious home-cooked meals' },
    { icon: Shirt, label: 'Laundry Service', desc: 'Free laundry facility and washing machine' },
    { icon: Wind, label: 'Air Conditioning', desc: 'Individual AC control in all rooms' },
    { icon: Phone, label: 'Common Areas', desc: 'Comfortable lounge and study spaces' },
    { icon: Lock, label: 'Guest Management', desc: 'Secure visitor management system' },
  ];

  return (
    <>
      <Navbar />

      {/* Hero */}
      <section className="min-h-screen pt-20 flex items-center relative overflow-hidden" style={{
        backgroundImage: 'url(/gallery/room-3.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}>
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/60" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
          <div className={`text-center transition-all duration-1000 ${isLoaded ? 'animate-slide-up' : 'opacity-0'}`}>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Our <span className="text-orange-400">Rooms & Services</span>
            </h1>
            <p className="text-xl text-gray-100 max-w-3xl mx-auto">
              Choose from our range of comfortable and affordable accommodation options
            </p>
          </div>
        </div>
      </section>

      {/* Room Types */}
      <section className="py-20 bg-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-amber-100 rounded-full blur-3xl opacity-10" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Room Options</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Select the perfect room that fits your needs and budget
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {roomTypes.map((room, idx) => {
              const Icon = room.icon;
              return (
                <div
                  key={idx}
                  className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-4 cursor-pointer"
                  style={{
                    animation: `slideInUp 0.6s ease-out forwards`,
                    animationDelay: `${idx * 100}ms`,
                    opacity: 0,
                  }}
                >
                  {/* Header with color gradient */}
                  <div className={`bg-gradient-to-r ${room.color} p-8 text-white relative overflow-hidden`}>
                    <div className="absolute top-0 right-0 w-40 h-40 bg-white opacity-10 rounded-full -mr-20 -mt-20" />
                    <Icon size={48} className="mb-4 relative z-10" />
                    <h3 className="text-2xl font-bold relative z-10">{room.type}</h3>
                  </div>

                  {/* Body */}
                  <div className="p-8">
                    <p className="text-3xl font-bold text-gray-900 mb-6">{room.price}</p>
                    <ul className="space-y-3 mb-8">
                      {room.features.map((feature, fIdx) => (
                        <li key={fIdx} className="flex items-center gap-3 text-gray-600">
                          <div className="w-2 h-2 bg-amber-500 rounded-full" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <button className="w-full py-3 bg-gradient-to-r from-amber-500 to-orange-500 text-white rounded-lg font-bold hover:shadow-lg transition-all duration-300 group-hover:scale-105">
                      Book Now
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Facilities Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-amber-50 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-96 h-96 bg-orange-100 rounded-full blur-3xl opacity-10" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Premium Facilities</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Everything you need for a comfortable and convenient stay
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {facilities.map((facility, idx) => {
              const Icon = facility.icon;
              return (
                <div
                  key={idx}
                  className="group p-8 bg-white rounded-xl border border-amber-100 hover:border-amber-400 transition-all duration-500 hover:shadow-xl transform hover:-translate-y-2"
                  style={{
                    animation: `slideInUp 0.6s ease-out forwards`,
                    animationDelay: `${idx * 80}ms`,
                    opacity: 0,
                  }}
                >
                  <div className="mb-4 inline-block p-3 bg-gradient-to-br from-amber-400 to-orange-400 rounded-lg group-hover:scale-110 transition-transform duration-300">
                    <Icon size={24} className="text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{facility.label}</h3>
                  <p className="text-gray-600 text-sm">{facility.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Facilities Gallery */}
      <section className="py-20 bg-gradient-to-b from-gray-900 to-gray-800 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Explore Our <span className="text-orange-500">Facilities</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              State-of-the-art facilities designed for your comfort and convenience
            </p>
          </div>

          <ImageGallery
            images={[
              {
                src: '/gallery/bathroom-1.jpg',
                title: 'Premium Bathrooms',
                description: 'Modern bathrooms with elegant tile work and fixtures',
              },
              {
                src: '/gallery/bathroom-vanity.jpg',
                title: 'Luxury Vanity',
                description: 'High-quality wooden vanity with marble countertops',
              },
              {
                src: '/gallery/bathroom-5.jpg',
                title: 'Shower Area',
                description: 'Contemporary shower enclosures with premium fittings',
              },
              {
                src: '/gallery/common-lounge.jpg',
                title: 'TV Lounge',
                description: 'Spacious common area with TV and entertainment',
              },
              {
                src: '/gallery/terrace.jpg',
                title: 'Rooftop Terrace',
                description: 'Stunning terrace with panoramic city views',
              },
              {
                src: '/gallery/rooftop-terrace.jpg',
                title: 'Outdoor Space',
                description: 'Peaceful rooftop area perfect for relaxation',
              },
              {
                src: '/gallery/hallway.jpg',
                title: 'Clean Hallways',
                description: 'Well-maintained corridors with modern paint scheme',
              },
              {
                src: '/gallery/stairs.jpg',
                title: 'Modern Staircase',
                description: 'Contemporary staircase with safe railings',
              },
            ]}
            autoplay={true}
            autoplayInterval={5000}
          />
        </div>
      </section>

      {/* Pricing Info */}
      <section className="py-20 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">What's Included?</h2>
              <div className="space-y-4">
                {[
                  'Furnished comfortable bed with premium bedding',
                  'Attached or shared bathroom with hot water',
                  'High-speed Wi-Fi throughout the property',
                  'RO filtered drinking water 24/7',
                  'Daily housekeeping service',
                  'Air conditioning and fans',
                  '24/7 CCTV security monitoring',
                  'Free laundry service',
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-amber-500 flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-white font-bold text-sm">✓</span>
                    </div>
                    <p className="text-gray-600">{item}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-br from-amber-50 to-orange-50 p-12 rounded-2xl border border-amber-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Additional Services</h3>
              <div className="space-y-6">
                <div>
                  <h4 className="font-bold text-gray-900 mb-2">Food Service</h4>
                  <p className="text-gray-600">₹200-300 per meal - Hygienic, home-cooked meals available on request</p>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-2">Flexible Booking</h4>
                  <p className="text-gray-600">Short-term and long-term stays welcome. No hidden charges!</p>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-2">Offers Available</h4>
                  <p className="text-gray-600">First month discount and referral rewards for new residents</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-amber-600 to-orange-500 text-white text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-40 h-40 bg-white rounded-full blur-2xl" />
          <div className="absolute bottom-10 right-10 w-40 h-40 bg-white rounded-full blur-2xl" />
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Book Your Room?</h2>
          <p className="text-xl mb-8 text-amber-100">Contact us today for availability and special offers</p>
          <a
            href="tel:+918571801102"
            className="inline-block px-8 py-3 bg-white text-amber-600 rounded-lg font-bold hover:bg-amber-50 transition-all duration-300 transform hover:scale-105"
          >
            Call: +91-8571801102
          </a>
        </div>
      </section>

      <Footer />
    </>
  );
}
