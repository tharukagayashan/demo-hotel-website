import React, { useState } from 'react';
import { gallery } from '../utils/mockData';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const categories = ['all', 'pool', 'exterior', 'gardens', 'spa', 'dining'];
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredGallery = activeCategory === 'all' 
    ? gallery 
    : gallery.filter(img => img.category === activeCategory);

  return (
    <section id="gallery" className="py-20 md:py-32" style={{ backgroundColor: '#ffffff' }}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
            style={{ color: '#1e1919', fontFamily: 'Dbsharpgroteskvariable Vf, Arial, sans-serif' }}
          >
            Gallery
          </h2>
          <p className="text-lg md:text-xl max-w-3xl mx-auto mb-8" style={{ color: '#736c64' }}>
            Explore our tropical paradise through stunning photography
          </p>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeCategory === cat 
                    ? 'shadow-md' 
                    : 'opacity-70 hover:opacity-100'
                }`}
                style={{
                  backgroundColor: activeCategory === cat ? '#61525a' : '#f7f5f2',
                  color: activeCategory === cat ? '#ffffff' : '#1e1919'
                }}
              >
                {cat.charAt(0).toUpperCase() + cat.slice(1)}
              </button>
            ))}
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredGallery.map((image) => (
            <div 
              key={image.id}
              className="relative aspect-square overflow-hidden rounded-lg cursor-pointer group shadow-md hover:shadow-xl transition-shadow duration-300"
              onClick={() => setSelectedImage(image)}
            >
              <img 
                src={image.url}
                alt={image.alt}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300"></div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button 
            className="absolute top-4 right-4 text-white text-4xl hover:opacity-70 transition-opacity"
            onClick={() => setSelectedImage(null)}
          >
            ×
          </button>
          <img 
            src={selectedImage.url}
            alt={selectedImage.alt}
            className="max-w-full max-h-full object-contain"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </section>
  );
};

export default Gallery;
