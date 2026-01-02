import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from './ui/button';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/95 backdrop-blur-md shadow-sm' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <button 
              onClick={() => scrollToSection('hero')}
              className="text-2xl font-bold tracking-tight"
              style={{ color: '#61525a' }}
            >
              il Frangipane
            </button>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('rooms')}
              className="text-sm font-medium hover:opacity-70 transition-opacity"
              style={{ color: '#1e1919' }}
            >
              Rooms
            </button>
            <button 
              onClick={() => scrollToSection('amenities')}
              className="text-sm font-medium hover:opacity-70 transition-opacity"
              style={{ color: '#1e1919' }}
            >
              Amenities
            </button>
            <button 
              onClick={() => scrollToSection('gallery')}
              className="text-sm font-medium hover:opacity-70 transition-opacity"
              style={{ color: '#1e1919' }}
            >
              Gallery
            </button>
            <button 
              onClick={() => scrollToSection('location')}
              className="text-sm font-medium hover:opacity-70 transition-opacity"
              style={{ color: '#1e1919' }}
            >
              Location
            </button>
            <Button 
              onClick={() => scrollToSection('booking')}
              style={{ backgroundColor: '#61525a' }}
              className="text-white hover:opacity-90 transition-opacity"
            >
              Book Now
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            style={{ color: '#61525a' }}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 border-t" style={{ borderColor: '#f7f5f2' }}>
            <nav className="flex flex-col space-y-4">
              <button 
                onClick={() => scrollToSection('rooms')}
                className="text-left text-sm font-medium hover:opacity-70 transition-opacity"
                style={{ color: '#1e1919' }}
              >
                Rooms
              </button>
              <button 
                onClick={() => scrollToSection('amenities')}
                className="text-left text-sm font-medium hover:opacity-70 transition-opacity"
                style={{ color: '#1e1919' }}
              >
                Amenities
              </button>
              <button 
                onClick={() => scrollToSection('gallery')}
                className="text-left text-sm font-medium hover:opacity-70 transition-opacity"
                style={{ color: '#1e1919' }}
              >
                Gallery
              </button>
              <button 
                onClick={() => scrollToSection('location')}
                className="text-left text-sm font-medium hover:opacity-70 transition-opacity"
                style={{ color: '#1e1919' }}
              >
                Location
              </button>
              <Button 
                onClick={() => scrollToSection('booking')}
                style={{ backgroundColor: '#61525a' }}
                className="text-white w-full"
              >
                Book Now
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
