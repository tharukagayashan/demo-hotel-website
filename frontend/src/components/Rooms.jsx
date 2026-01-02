import React from 'react';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { Users, Maximize, Check } from 'lucide-react';
import { rooms } from '../utils/mockData';

const Rooms = () => {
  const handleBookRoom = (roomName) => {
    const bookingSection = document.getElementById('booking');
    if (bookingSection) {
      bookingSection.scrollIntoView({ behavior: 'smooth' });
      // Pre-select room in form (will implement in booking form)
      setTimeout(() => {
        const roomSelect = document.getElementById('room-select');
        if (roomSelect) {
          roomSelect.value = roomName;
        }
      }, 500);
    }
  };

  return (
    <section id="rooms" className="py-20 md:py-32" style={{ backgroundColor: '#ffffff' }}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
            style={{ color: '#1e1919', fontFamily: 'Dbsharpgroteskvariable Vf, Arial, sans-serif' }}
          >
            Our Rooms
          </h2>
          <p className="text-lg md:text-xl max-w-3xl mx-auto" style={{ color: '#736c64' }}>
            Each of our 8 exclusive rooms offers spacious layouts, modern amenities, and stunning views of our tropical gardens or refreshing pool
          </p>
        </div>

        {/* Rooms Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {rooms.map((room) => (
            <Card 
              key={room.id} 
              className="overflow-hidden border-0 shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              {/* Room Image */}
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={room.image}
                  alt={room.name}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>

              <CardContent className="p-6">
                {/* Room Name */}
                <h3 
                  className="text-2xl font-bold mb-3"
                  style={{ color: '#1e1919' }}
                >
                  {room.name}
                </h3>

                {/* Room Info */}
                <div className="flex items-center gap-4 mb-4">
                  <div className="flex items-center gap-1.5" style={{ color: '#736c64' }}>
                    <Maximize size={16} />
                    <span className="text-sm">{room.size}</span>
                  </div>
                  <div className="flex items-center gap-1.5" style={{ color: '#736c64' }}>
                    <Users size={16} />
                    <span className="text-sm">{room.capacity}</span>
                  </div>
                </div>

                {/* Description */}
                <p className="text-sm mb-6 leading-relaxed" style={{ color: '#736c64' }}>
                  {room.description}
                </p>

                {/* Features */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {room.features.slice(0, 4).map((feature, index) => (
                    <Badge 
                      key={index}
                      variant="secondary"
                      className="text-xs"
                      style={{ backgroundColor: '#f7f5f2', color: '#61525a' }}
                    >
                      <Check size={12} className="mr-1" />
                      {feature}
                    </Badge>
                  ))}
                </div>

                {/* Book Button */}
                <Button 
                  className="w-full"
                  style={{ backgroundColor: '#61525a' }}
                  onClick={() => handleBookRoom(room.name)}
                >
                  Book This Room
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Rooms;
