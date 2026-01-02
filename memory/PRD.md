# Product Requirements Document (PRD)
## il Frangipane Boutique Hotel Website

**Project Start Date:** January 2, 2025

---

## Original Problem Statement
Build a showcase website for il Frangipane, a 3-star boutique hotel in Sigiriya, Sri Lanka. The website should feature:
- Room showcase with detailed descriptions and images
- Photo gallery of the property
- Booking inquiry system
- Contact form with Google Maps integration
- Information about amenities and nearby attractions

**Primary Goal:** Showcase the hotel with information and gallery (informational site)

**User Choices:**
- Key Features: Room showcase, Photo gallery, Booking/Reservation form, Contact form and location map
- Integrations: Google Maps integration
- Content: Images sourced via vision expert agent
- Design: DB brand design guidelines (grey #61525a accent, clean typography, modern aesthetics)

---

## Architecture & Tech Stack

### Frontend
- **Framework:** React 19
- **Styling:** Tailwind CSS with custom DB brand design system
- **Components:** Shadcn UI library
- **State Management:** React hooks
- **Notifications:** Sonner for toast messages

### Backend (Planned)
- **Framework:** FastAPI (Python)
- **Database:** MongoDB
- **ODM:** Motor (async MongoDB driver)

### Design System
- **Primary Brand Color:** #61525a (grey accent)
- **Secondary Colors:** #fad24b (yellow), #f7f5f2 (coconut/cream), #1e1919 (dark)
- **Typography:** Dbsharpgroteskvariable Vf, Arial, sans-serif
- **Components:** Shadcn UI (buttons, cards, forms, selects, etc.)

---

## User Personas

### Primary Persona: International Traveler
- **Age:** 25-55
- **Goals:** Find comfortable accommodation near Sigiriya attractions
- **Needs:** Clear room information, easy booking process, location details
- **Pain Points:** Wants to verify hotel quality before booking

### Secondary Persona: Adventure Seeker
- **Age:** 20-40
- **Goals:** Plan trips to Lion Rock and Pidurangala Rock
- **Needs:** Information about nearby attractions, transportation options
- **Pain Points:** Needs to understand proximity to key sites

---

## Core Requirements (Static)

### Functional Requirements
1. **Header Navigation**
   - Fixed header with smooth scrolling to sections
   - Mobile-responsive hamburger menu
   - "Book Now" CTA button

2. **Hero Section**
   - Full-screen hero with hotel name and tagline
   - 3-star rating display
   - Dual CTAs: "Book Your Stay" and "Explore Rooms"
   - Animated scroll indicator

3. **Rooms Section**
   - Display 3 room types (Deluxe Garden View, Pool View Suite, Premium Suite)
   - Room cards with images, size, capacity, features
   - "Book This Room" CTA that pre-selects room in booking form

4. **Amenities Section**
   - 6 amenity cards with icons and descriptions
   - Grid layout (3 columns on desktop)

5. **Gallery**
   - Filterable image gallery (All, Pool, Exterior, Gardens, Spa, Dining)
   - Lightbox modal for full-size image viewing
   - Hover effects on images

6. **Reviews Section**
   - Guest testimonials with star ratings
   - Reviewer name, country, and date

7. **Booking Form**
   - Form fields: Name, Email, Phone, Check-in/out dates, Room type, Guests, Special requests
   - Form validation
   - Toast notification on submission
   - Mock submission (logs to console)

8. **Location & Contact**
   - Google Maps embed showing hotel location
   - Contact information (address, email, phone)
   - Nearby attractions with distances

9. **Footer**
   - Quick links, contact info, reception hours
   - Social media icons
   - Privacy policy and T&C links

### Non-Functional Requirements
- Responsive design (mobile, tablet, desktop)
- Smooth scrolling between sections
- Fast load times with optimized images
- Accessible (WCAG guidelines)
- Clean, modern aesthetic following DB brand guidelines

---

## What's Been Implemented

### ✅ Phase 1: Frontend with Mock Data (January 2, 2025)

**Files Created:**
1. `/app/frontend/src/utils/mockData.js` - Mock data for hotel info, rooms, amenities, gallery, reviews, attractions
2. `/app/frontend/src/components/Header.jsx` - Fixed header with navigation
3. `/app/frontend/src/components/Hero.jsx` - Hero section with CTAs
4. `/app/frontend/src/components/Rooms.jsx` - Room showcase with cards
5. `/app/frontend/src/components/Amenities.jsx` - Amenities grid with icons
6. `/app/frontend/src/components/Gallery.jsx` - Filterable gallery with lightbox
7. `/app/frontend/src/components/Reviews.jsx` - Guest reviews section
8. `/app/frontend/src/components/BookingForm.jsx` - Booking inquiry form
9. `/app/frontend/src/components/Location.jsx` - Google Maps + contact info
10. `/app/frontend/src/components/Footer.jsx` - Footer with links and info

**Files Modified:**
- `/app/frontend/src/App.js` - Main app component with all sections
- `/app/frontend/src/App.css` - Custom styles following DB brand guidelines

**Features Implemented:**
- ✅ Fully functional frontend with smooth navigation
- ✅ Mobile-responsive design
- ✅ Interactive booking form (mock submission)
- ✅ Filterable image gallery
- ✅ Google Maps integration
- ✅ Room pre-selection from room cards
- ✅ Toast notifications
- ✅ DB brand design system applied throughout
- ✅ Lucide React icons (no AI emojis)
- ✅ Smooth scroll behavior
- ✅ Hover effects and transitions

**Current State:** Frontend-only application with mock data. All interactive elements work as expected, forms submit (console log), and navigation is smooth.

---

## Prioritized Backlog

### P0 - Backend Development (Next Phase)
- [ ] Set up MongoDB models for:
  - Rooms
  - Bookings
  - Contact inquiries
- [ ] Create API endpoints:
  - `POST /api/bookings` - Submit booking inquiry
  - `GET /api/rooms` - Fetch room data
  - `GET /api/amenities` - Fetch amenities
  - `POST /api/contact` - Submit contact form
- [ ] Integrate frontend with backend APIs
- [ ] Remove mock data, use real API calls
- [ ] Add email notification service for booking inquiries

### P1 - Enhanced Features
- [ ] Admin dashboard to manage bookings
- [ ] Email confirmation system for guests
- [ ] Room availability calendar
- [ ] Photo upload system for gallery
- [ ] Multi-language support (Sinhala, English)
- [ ] SEO optimization
- [ ] Analytics integration (Google Analytics)

### P2 - Nice-to-Have Features
- [ ] Virtual tour integration
- [ ] Live chat support
- [ ] Weather widget for Sigiriya
- [ ] Blog section for travel tips
- [ ] Newsletter subscription
- [ ] Integration with booking.com/Airbnb APIs
- [ ] Progressive Web App (PWA) capabilities

---

## Next Tasks (Immediate)

1. **User Approval** - Get confirmation to proceed with backend development
2. **Backend Setup** - Create MongoDB models and API endpoints
3. **Frontend-Backend Integration** - Connect forms to real APIs
4. **Testing** - Use testing_agent_v3 to verify all flows
5. **Deployment Preparation** - Ensure production readiness

---

## API Contracts (For Backend Phase)

### POST /api/bookings
**Request:**
```json
{
  "name": "string",
  "email": "string",
  "phone": "string",
  "checkIn": "ISO date",
  "checkOut": "ISO date",
  "room": "string",
  "guests": "number",
  "specialRequests": "string"
}
```
**Response:**
```json
{
  "success": true,
  "bookingId": "uuid",
  "message": "Booking inquiry received"
}
```

### GET /api/rooms
**Response:**
```json
{
  "rooms": [
    {
      "id": "number",
      "name": "string",
      "description": "string",
      "size": "string",
      "capacity": "string",
      "features": ["string"],
      "image": "url"
    }
  ]
}
```

### POST /api/contact
**Request:**
```json
{
  "name": "string",
  "email": "string",
  "message": "string"
}
```
**Response:**
```json
{
  "success": true,
  "message": "Message sent successfully"
}
```

---

## Success Metrics

- User engagement: Average time on site > 2 minutes
- Booking inquiries: > 5 submissions per week
- Mobile traffic: > 60% of total visitors
- Form completion rate: > 40%
- Gallery interaction: > 70% of visitors view gallery

---

**Last Updated:** January 2, 2025
