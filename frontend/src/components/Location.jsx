import React from 'react';
import { Card, CardContent } from './ui/card';
import { MapPin, Navigation } from 'lucide-react';
import { hotelInfo, nearbyAttractions } from '../utils/mockData';

const Location = () => {
  const mapUrl = `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3955.0!2d${hotelInfo.location.lng}!3d${hotelInfo.location.lat}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zN8KwNTcnMjQuNSJOIDgwwrA0NSczNi43IkU!5e0!3m2!1sen!2s!4v1234567890`;

  return (
    <section id="location" className="py-20 md:py-32" style={{ backgroundColor: '#f7f5f2' }}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
            style={{ color: '#1e1919', fontFamily: 'Dbsharpgroteskvariable Vf, Arial, sans-serif' }}
          >
            Location & Contact
          </h2>
          <p className="text-lg md:text-xl max-w-3xl mx-auto" style={{ color: '#736c64' }}>
            Perfectly positioned for exploring Sigiriya's ancient wonders
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Map */}
          <div className="order-2 lg:order-1">
            <Card className="border-0 shadow-lg overflow-hidden h-full">
              <div className="relative h-full min-h-[400px]">
                <iframe
                  src={mapUrl}
                  width="100%"
                  height="100%"
                  style={{ border: 0, minHeight: '400px' }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="il Frangipane Hotel Location"
                ></iframe>
              </div>
            </Card>
          </div>

          {/* Contact Info & Nearby Attractions */}
          <div className="order-1 lg:order-2 space-y-8">
            {/* Contact Card */}
            <Card className="border-0 shadow-lg bg-white">
              <CardContent className="p-8">
                <div className="flex items-start gap-3 mb-6">
                  <div 
                    className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: '#61525a' }}
                  >
                    <MapPin size={24} className="text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2" style={{ color: '#1e1919' }}>
                      Address
                    </h3>
                    <p className="text-sm leading-relaxed" style={{ color: '#736c64' }}>
                      {hotelInfo.contact.address}
                    </p>
                  </div>
                </div>

                <div className="space-y-4 pt-4 border-t" style={{ borderColor: '#f7f5f2' }}>
                  <div>
                    <p className="text-xs font-semibold mb-1" style={{ color: '#736c64' }}>
                      Email
                    </p>
                    <a 
                      href={`mailto:${hotelInfo.contact.email}`}
                      className="text-sm hover:opacity-70 transition-opacity"
                      style={{ color: '#61525a' }}
                    >
                      {hotelInfo.contact.email}
                    </a>
                  </div>
                  <div>
                    <p className="text-xs font-semibold mb-1" style={{ color: '#736c64' }}>
                      Phone
                    </p>
                    <a 
                      href={`tel:${hotelInfo.contact.phone}`}
                      className="text-sm hover:opacity-70 transition-opacity"
                      style={{ color: '#61525a' }}
                    >
                      {hotelInfo.contact.phone}
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Nearby Attractions */}
            <Card className="border-0 shadow-lg bg-white">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div 
                    className="w-12 h-12 rounded-full flex items-center justify-center"
                    style={{ backgroundColor: '#61525a' }}
                  >
                    <Navigation size={24} className="text-white" />
                  </div>
                  <h3 className="text-xl font-bold" style={{ color: '#1e1919' }}>
                    Nearby Attractions
                  </h3>
                </div>

                <div className="space-y-5">
                  {nearbyAttractions.map((attraction, index) => (
                    <div key={index} className="pb-5 border-b last:border-0" style={{ borderColor: '#f7f5f2' }}>
                      <div className="flex items-start justify-between mb-2">
                        <h4 className="font-semibold text-base" style={{ color: '#1e1919' }}>
                          {attraction.name}
                        </h4>
                        <span 
                          className="text-xs font-medium px-2 py-1 rounded"
                          style={{ backgroundColor: '#f7f5f2', color: '#61525a' }}
                        >
                          {attraction.distance}
                        </span>
                      </div>
                      <p className="text-sm mb-2" style={{ color: '#736c64' }}>
                        {attraction.description}
                      </p>
                      <p className="text-xs font-medium" style={{ color: '#61525a' }}>
                        {attraction.walkTime}
                      </p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Location;
