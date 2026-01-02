import React from 'react';
import { Star } from 'lucide-react';
import { Button } from './ui/button';
import { hotelInfo } from '../utils/mockData';

const Hero = () => {
  const scrollToBooking = () => {
    const element = document.getElementById('booking');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="hero" 
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{ backgroundColor: '#f7f5f2' }}
    >
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img 
          src="https://images.unsplash.com/photo-1728049006343-9ee0187643d5"
          alt="il Frangipane Hotel Pool"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/60"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Rating Stars */}
          <div className="flex items-center justify-center gap-1 mb-6">
            {[...Array(hotelInfo.rating)].map((_, i) => (
              <Star key={i} size={24} fill="#fad24b" stroke="#fad24b" />
            ))}
          </div>

          {/* Main Heading */}
          <h1 
            className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 text-white leading-tight"
            style={{ fontFamily: 'Dbsharpgroteskvariable Vf, Arial, sans-serif' }}
          >
            {hotelInfo.name}
          </h1>

          {/* Tagline */}
          <p className="text-xl md:text-2xl lg:text-3xl text-white/95 mb-8 font-medium">
            {hotelInfo.tagline}
          </p>

          {/* Description */}
          <p className="text-base md:text-lg text-white/90 mb-12 max-w-2xl mx-auto leading-relaxed">
            {hotelInfo.description}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button 
              size="lg"
              onClick={scrollToBooking}
              style={{ backgroundColor: '#61525a' }}
              className="text-white hover:opacity-90 transition-opacity px-8 py-6 text-lg w-full sm:w-auto"
            >
              Book Your Stay
            </Button>
            <Button 
              size="lg"
              variant="outline"
              onClick={() => document.getElementById('rooms')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-white/10 backdrop-blur-sm text-white border-white/30 hover:bg-white/20 transition-all px-8 py-6 text-lg w-full sm:w-auto"
            >
              Explore Rooms
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full p-1">
          <div className="w-1.5 h-1.5 bg-white rounded-full mx-auto"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
