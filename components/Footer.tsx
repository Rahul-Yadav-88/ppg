'use client';

import Link from 'next/link';
import { Mail, Phone, MapPin, Wifi, Droplet, Camera, UtensilsCrossed } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-amber-900 to-amber-950 text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* About */}
          <div className="animate-slide-up">
            <h3 className="text-xl font-bold mb-4 text-amber-200">Ravinairayen</h3>
            <p className="text-amber-100 mb-4">Premium PG Guesthouse providing comfort and convenience for working professionals and students.</p>
            <div className="flex gap-4">
              <a href="#" className="hover:text-amber-300 transition-colors">Instagram</a>
              <a href="#" className="hover:text-amber-300 transition-colors">Facebook</a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="animate-slide-up">
            <h3 className="text-xl font-bold mb-4 text-amber-200">Quick Links</h3>
            <ul className="space-y-2">
              {['Home', 'About', 'Services', 'Contact'].map((item) => (
                <li key={item}>
                  <Link href={item === 'Home' ? '/' : `/${item.toLowerCase()}`} className="text-amber-100 hover:text-amber-300 transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Facilities */}
          <div className="animate-slide-up">
            <h3 className="text-xl font-bold mb-4 text-amber-200">Facilities</h3>
            <div className="space-y-2 text-amber-100">
              <div className="flex items-center gap-2">
                <Wifi size={16} /> High-Speed Wi-Fi
              </div>
              <div className="flex items-center gap-2">
                <Droplet size={16} /> RO Water
              </div>
              <div className="flex items-center gap-2">
                <Camera size={16} /> 24/7 Security
              </div>
              <div className="flex items-center gap-2">
                <UtensilsCrossed size={16} /> Food Service
              </div>
            </div>
          </div>

          {/* Contact */}
          <div className="animate-slide-up">
            <h3 className="text-xl font-bold mb-4 text-amber-200">Contact Us</h3>
            <div className="space-y-3 text-amber-100">
              <div className="flex items-start gap-3">
                <Phone size={18} className="mt-1" />
                <div>
                  <a href="tel:+918571801102" className="hover:text-amber-300 transition-colors">
                    +91-8571801102
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <MapPin size={18} className="mt-1" />
                <div>
                  <p>Met City, Yukubpur</p>
                  <p>Jhajjar, Haryana</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-amber-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-amber-200 text-sm">
            <p>&copy; 2025 Ravinairayen PG Guesthouse. All rights reserved.</p>
            <div className="flex gap-4 mt-4 md:mt-0">
              <a href="#" className="hover:text-amber-300 transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-amber-300 transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
