import React from 'react';
import { Card, CardContent } from './ui/card';
import { Star } from 'lucide-react';
import { reviews } from '../utils/mockData';

const Reviews = () => {
  return (
    <section className="py-20 md:py-32" style={{ backgroundColor: '#f7f5f2' }}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
            style={{ color: '#1e1919', fontFamily: 'Dbsharpgroteskvariable Vf, Arial, sans-serif' }}
          >
            Guest Reviews
          </h2>
          <p className="text-lg md:text-xl max-w-3xl mx-auto" style={{ color: '#736c64' }}>
            What our guests say about their experience at il Frangipane
          </p>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviews.map((review) => (
            <Card 
              key={review.id}
              className="border-0 shadow-md hover:shadow-lg transition-shadow duration-300 bg-white"
            >
              <CardContent className="p-8">
                {/* Rating Stars */}
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} size={18} fill="#fad24b" stroke="#fad24b" />
                  ))}
                </div>

                {/* Review Text */}
                <p className="text-sm leading-relaxed mb-6" style={{ color: '#736c64' }}>
                  "{review.comment}"
                </p>

                {/* Reviewer Info */}
                <div className="border-t pt-4" style={{ borderColor: '#f7f5f2' }}>
                  <p className="font-semibold text-sm" style={{ color: '#1e1919' }}>
                    {review.name}
                  </p>
                  <p className="text-xs mt-1" style={{ color: '#736c64' }}>
                    {review.country} • {review.date}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;
