import React from 'react';
import { MapPin, Phone, Mail, Facebook, Instagram, Twitter } from 'lucide-react';
import { hotelInfo } from '../utils/mockData';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer style={{ backgroundColor: '#1e1919' }} className="text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* About */}
          <div>
            <h3 
              className="text-2xl font-bold mb-4"
              style={{ color: '#fad24b', fontFamily: 'Dbsharpgroteskvariable Vf, Arial, sans-serif' }}
            >
              {hotelInfo.name}
            </h3>
            <p className="text-sm leading-relaxed mb-4" style={{ color: '#bbb5ae' }}>
              A tranquil jungle sanctuary in the heart of Sigiriya, offering boutique luxury and personalized service.
            </p>
            <div className="flex items-center gap-3">
              <a href="#" className="hover:opacity-70 transition-opacity" style={{ color: '#fad24b' }}>
                <Facebook size={20} />
              </a>
              <a href="#" className="hover:opacity-70 transition-opacity" style={{ color: '#fad24b' }}>
                <Instagram size={20} />
              </a>
              <a href="#" className="hover:opacity-70 transition-opacity" style={{ color: '#fad24b' }}>
                <Twitter size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-4" style={{ color: '#ffffff' }}>
              Quick Links
            </h4>
            <ul className="space-y-3">
              <li>
                <button 
                  onClick={() => scrollToSection('rooms')}
                  className="text-sm hover:opacity-70 transition-opacity text-left"
                  style={{ color: '#bbb5ae' }}
                >
                  Our Rooms
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('amenities')}
                  className="text-sm hover:opacity-70 transition-opacity text-left"
                  style={{ color: '#bbb5ae' }}
                >
                  Amenities
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('gallery')}
                  className="text-sm hover:opacity-70 transition-opacity text-left"
                  style={{ color: '#bbb5ae' }}
                >
                  Gallery
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('booking')}
                  className="text-sm hover:opacity-70 transition-opacity text-left"
                  style={{ color: '#bbb5ae' }}
                >
                  Book Now
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-bold mb-4" style={{ color: '#ffffff' }}>
              Contact
            </h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <MapPin size={16} className="mt-1 flex-shrink-0" style={{ color: '#fad24b' }} />
                <span className="text-sm" style={{ color: '#bbb5ae' }}>
                  {hotelInfo.contact.address}
                </span>
              </li>
              <li className="flex items-center gap-2">
                <Phone size={16} style={{ color: '#fad24b' }} />
                <a 
                  href={`tel:${hotelInfo.contact.phone}`}
                  className="text-sm hover:opacity-70 transition-opacity"
                  style={{ color: '#bbb5ae' }}
                >
                  {hotelInfo.contact.phone}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail size={16} style={{ color: '#fad24b' }} />
                <a 
                  href={`mailto:${hotelInfo.contact.email}`}
                  className="text-sm hover:opacity-70 transition-opacity"
                  style={{ color: '#bbb5ae' }}
                >
                  {hotelInfo.contact.email}
                </a>
              </li>
            </ul>
          </div>

          {/* Opening Hours */}
          <div>
            <h4 className="text-lg font-bold mb-4" style={{ color: '#ffffff' }}>
              Reception Hours
            </h4>
            <ul className="space-y-2 text-sm" style={{ color: '#bbb5ae' }}>
              <li className="flex justify-between">
                <span>24/7 Service</span>
              </li>
              <li className="pt-3 mt-3 border-t" style={{ borderColor: '#736c64' }}>
                <span className="block mb-1 font-semibold" style={{ color: '#ffffff' }}>
                  Check-in
                </span>
                <span>From 2:00 PM</span>
              </li>
              <li>
                <span className="block mb-1 font-semibold" style={{ color: '#ffffff' }}>
                  Check-out
                </span>
                <span>Until 12:00 PM</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t mt-12 pt-8" style={{ borderColor: '#736c64' }}>
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm" style={{ color: '#bbb5ae' }}>
              © {currentYear} {hotelInfo.name}. All rights reserved.
            </p>
            <div className="flex gap-6">
              <a href="#" className="text-sm hover:opacity-70 transition-opacity" style={{ color: '#bbb5ae' }}>
                Privacy Policy
              </a>
              <a href="#" className="text-sm hover:opacity-70 transition-opacity" style={{ color: '#bbb5ae' }}>
                Terms & Conditions
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
