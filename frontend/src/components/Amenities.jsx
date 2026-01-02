import React from 'react';
import { Card, CardContent } from './ui/card';
import * as Icons from 'lucide-react';
import { amenities } from '../utils/mockData';

const Amenities = () => {
  return (
    <section id="amenities" className="py-20 md:py-32" style={{ backgroundColor: '#f7f5f2' }}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
            style={{ color: '#1e1919', fontFamily: 'Dbsharpgroteskvariable Vf, Arial, sans-serif' }}
          >
            Amenities & Services
          </h2>
          <p className="text-lg md:text-xl max-w-3xl mx-auto" style={{ color: '#736c64' }}>
            Everything you need for a comfortable and memorable stay at our jungle sanctuary
          </p>
        </div>

        {/* Amenities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {amenities.map((amenity, index) => {
            const IconComponent = Icons[amenity.icon];
            return (
              <Card 
                key={index}
                className="border-0 shadow-md hover:shadow-lg transition-shadow duration-300 bg-white"
              >
                <CardContent className="p-8">
                  <div 
                    className="w-14 h-14 rounded-full flex items-center justify-center mb-5"
                    style={{ backgroundColor: '#61525a' }}
                  >
                    {IconComponent && <IconComponent size={28} className="text-white" />}
                  </div>
                  <h3 
                    className="text-xl font-bold mb-3"
                    style={{ color: '#1e1919' }}
                  >
                    {amenity.title}
                  </h3>
                  <p className="text-sm leading-relaxed" style={{ color: '#736c64' }}>
                    {amenity.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Amenities;
