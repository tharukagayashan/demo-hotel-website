// Mock data for il Frangipane Hotel Website

export const hotelInfo = {
  name: "il Frangipane",
  tagline: "A Jungle Sanctuary in the Heart of Sigiriya",
  rating: 3,
  description: "Experience tranquility at il Frangipane, a highly-rated boutique hotel nestled in lush tropical gardens. Our intimate 8-room property offers a peaceful escape while remaining within walking distance of Sigiriya's iconic landmarks.",
  contact: {
    email: "info@ilfrangipane.com",
    phone: "+94 66 228 7000",
    address: "Sigiriya Road, Sigiriya 21120, Sri Lanka"
  },
  location: {
    lat: 7.9568,
    lng: 80.7602
  }
};

export const rooms = [
  {
    id: 1,
    name: "Deluxe Garden View",
    description: "Spacious room with modern amenities, private balcony overlooking our lush tropical gardens. Features a comfortable king-size bed, sitting area, and pristine bathroom with walk-in shower.",
    size: "35 m²",
    capacity: "2 Adults",
    features: ["King Bed", "Garden View", "Private Balcony", "Air Conditioning", "Coffee Maker", "Free WiFi"],
    image: "https://images.unsplash.com/photo-1578683010236-d716f9a3f461"
  },
  {
    id: 2,
    name: "Pool View Suite",
    description: "Large suite with stunning pool views from your private porch. Enjoy separate sitting and sleeping areas, premium bedding, and a luxurious bathroom with bidet.",
    size: "45 m²",
    capacity: "2 Adults + 1 Child",
    features: ["King Bed", "Pool View", "Large Porch", "Sitting Area", "Modern Bathroom", "Climate Control"],
    image: "https://images.unsplash.com/photo-1607712617949-8c993d290809"
  },
  {
    id: 3,
    name: "Premium Suite",
    description: "Our most spacious accommodation featuring a private entrance, expansive balcony, and elegant interiors. Perfect for guests seeking ultimate comfort and privacy.",
    size: "50 m²",
    capacity: "3 Adults",
    features: ["King Bed", "Private Entrance", "Large Balcony", "Tea/Coffee Facilities", "Premium Amenities", "Walk-in Shower"],
    image: "https://images.unsplash.com/photo-1578683010236-d716f9a3f461"
  }
];

export const amenities = [
  {
    icon: "Waves",
    title: "Outdoor Pool",
    description: "Year-round swimming pool with picturesque shallow end, surrounded by tropical gardens"
  },
  {
    icon: "UtensilsCrossed",
    title: "Restaurant",
    description: "On-site dining serving Asian and international cuisines, including traditional Sri Lankan breakfast"
  },
  {
    icon: "Sparkles",
    title: "Wellness Services",
    description: "Full-body massages and dedicated massage room for ultimate relaxation"
  },
  {
    icon: "Car",
    title: "Transportation",
    description: "Car rentals, airport shuttles, and tour desk for elephant safaris and local attractions"
  },
  {
    icon: "Wifi",
    title: "Free WiFi",
    description: "High-speed internet access throughout the property"
  },
  {
    icon: "Accessibility",
    title: "Accessible",
    description: "Ground floor units with wheelchair accessibility throughout"
  }
];

export const gallery = [
  {
    id: 1,
    url: "https://images.unsplash.com/photo-1728049006343-9ee0187643d5",
    category: "pool",
    alt: "Aerial view of tropical pool"
  },
  {
    id: 2,
    url: "https://images.unsplash.com/photo-1743525922686-badbeac16a34",
    category: "pool",
    alt: "Swimming pool surrounded by gardens"
  },
  {
    id: 3,
    url: "https://images.unsplash.com/photo-1617643817469-418747ebcc9a",
    category: "exterior",
    alt: "Palm trees and tropical setting"
  },
  {
    id: 4,
    url: "https://images.unsplash.com/photo-1673964566152-2aee6bc89929",
    category: "gardens",
    alt: "Lush tropical gardens"
  },
  {
    id: 5,
    url: "https://images.unsplash.com/photo-1761470575018-135c213340eb",
    category: "spa",
    alt: "Luxury spa treatment room"
  },
  {
    id: 6,
    url: "https://images.unsplash.com/photo-1703565426315-4209c2e88eea",
    category: "dining",
    alt: "Hotel restaurant dining area"
  }
];

export const reviews = [
  {
    id: 1,
    name: "Sarah Johnson",
    country: "United Kingdom",
    rating: 5,
    comment: "An absolute gem! The staff were incredibly friendly and helpful. The gardens are stunning, and we loved watching the monkeys play in the trees. Perfect location for visiting Lion Rock.",
    date: "December 2024"
  },
  {
    id: 2,
    name: "Michael Chen",
    country: "Singapore",
    rating: 5,
    comment: "Tranquil oasis in the heart of Sigiriya. The rooms are surprisingly spacious and spotlessly clean. The pool area is beautiful, and the breakfast was excellent with many Sri Lankan options.",
    date: "November 2024"
  },
  {
    id: 3,
    name: "Emma Williams",
    country: "Australia",
    rating: 5,
    comment: "Perfect base for exploring the area. Just a 15-minute walk to Lion Rock entrance. The young staff are attentive and gave us great tips. The massage service was wonderful after climbing Pidurangala!",
    date: "October 2024"
  }
];

export const nearbyAttractions = [
  {
    name: "Sigiriya Lion Rock",
    distance: "1.5 km",
    description: "UNESCO World Heritage Site - Ancient rock fortress and palace ruins",
    walkTime: "15 min walk"
  },
  {
    name: "Pidurangala Rock",
    distance: "2.3 km",
    description: "Ancient monastery with stunning sunrise views of Lion Rock",
    walkTime: "Short tuk-tuk ride"
  },
  {
    name: "Sigiriya Heritage Museum",
    distance: "Walking distance",
    description: "Learn about the history and archaeology of the region",
    walkTime: "10 min walk"
  }
];
