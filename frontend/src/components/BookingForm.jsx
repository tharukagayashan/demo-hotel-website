import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Textarea } from './ui/textarea';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from './ui/select';
import { toast } from 'sonner';
import { Calendar, Users, Mail, Phone, User } from 'lucide-react';
import { rooms } from '../utils/mockData';

const BookingForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    checkIn: '',
    checkOut: '',
    guests: '2',
    room: '',
    specialRequests: ''
  });

  const handleChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Validation
    if (!formData.name || !formData.email || !formData.checkIn || !formData.checkOut || !formData.room) {
      toast.error('Please fill in all required fields');
      return;
    }

    // Mock submission
    console.log('Booking submission:', formData);
    toast.success('Booking inquiry sent! We\'ll contact you shortly to confirm your reservation.');
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      checkIn: '',
      checkOut: '',
      guests: '2',
      room: '',
      specialRequests: ''
    });
  };

  return (
    <section id="booking" className="py-20 md:py-32" style={{ backgroundColor: '#ffffff' }}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <Card className="border-0 shadow-xl">
            <CardHeader className="text-center pb-8" style={{ backgroundColor: '#f7f5f2' }}>
              <CardTitle 
                className="text-3xl md:text-4xl font-bold"
                style={{ color: '#1e1919', fontFamily: 'Dbsharpgroteskvariable Vf, Arial, sans-serif' }}
              >
                Book Your Stay
              </CardTitle>
              <p className="text-base mt-3" style={{ color: '#736c64' }}>
                Fill out the form below and we'll get back to you within 24 hours
              </p>
            </CardHeader>

            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name */}
                <div>
                  <Label htmlFor="name" className="text-sm font-medium" style={{ color: '#1e1919' }}>
                    Full Name *
                  </Label>
                  <div className="relative mt-2">
                    <User className="absolute left-3 top-1/2 -translate-y-1/2" size={18} style={{ color: '#736c64' }} />
                    <Input
                      id="name"
                      type="text"
                      value={formData.name}
                      onChange={(e) => handleChange('name', e.target.value)}
                      className="pl-11"
                      placeholder="John Doe"
                      required
                    />
                  </div>
                </div>

                {/* Email & Phone */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="email" className="text-sm font-medium" style={{ color: '#1e1919' }}>
                      Email *
                    </Label>
                    <div className="relative mt-2">
                      <Mail className="absolute left-3 top-1/2 -translate-y-1/2" size={18} style={{ color: '#736c64' }} />
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleChange('email', e.target.value)}
                        className="pl-11"
                        placeholder="john@example.com"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="phone" className="text-sm font-medium" style={{ color: '#1e1919' }}>
                      Phone
                    </Label>
                    <div className="relative mt-2">
                      <Phone className="absolute left-3 top-1/2 -translate-y-1/2" size={18} style={{ color: '#736c64' }} />
                      <Input
                        id="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => handleChange('phone', e.target.value)}
                        className="pl-11"
                        placeholder="+94 123 456 789"
                      />
                    </div>
                  </div>
                </div>

                {/* Check-in & Check-out */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="checkIn" className="text-sm font-medium" style={{ color: '#1e1919' }}>
                      Check-in Date *
                    </Label>
                    <div className="relative mt-2">
                      <Calendar className="absolute left-3 top-1/2 -translate-y-1/2" size={18} style={{ color: '#736c64' }} />
                      <Input
                        id="checkIn"
                        type="date"
                        value={formData.checkIn}
                        onChange={(e) => handleChange('checkIn', e.target.value)}
                        className="pl-11"
                        min={new Date().toISOString().split('T')[0]}
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="checkOut" className="text-sm font-medium" style={{ color: '#1e1919' }}>
                      Check-out Date *
                    </Label>
                    <div className="relative mt-2">
                      <Calendar className="absolute left-3 top-1/2 -translate-y-1/2" size={18} style={{ color: '#736c64' }} />
                      <Input
                        id="checkOut"
                        type="date"
                        value={formData.checkOut}
                        onChange={(e) => handleChange('checkOut', e.target.value)}
                        className="pl-11"
                        min={formData.checkIn || new Date().toISOString().split('T')[0]}
                        required
                      />
                    </div>
                  </div>
                </div>

                {/* Room & Guests */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="room-select" className="text-sm font-medium" style={{ color: '#1e1919' }}>
                      Room Type *
                    </Label>
                    <Select value={formData.room} onValueChange={(value) => handleChange('room', value)}>
                      <SelectTrigger id="room-select" className="mt-2">
                        <SelectValue placeholder="Select a room" />
                      </SelectTrigger>
                      <SelectContent>
                        {rooms.map((room) => (
                          <SelectItem key={room.id} value={room.name}>
                            {room.name}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor="guests" className="text-sm font-medium" style={{ color: '#1e1919' }}>
                      Number of Guests
                    </Label>
                    <div className="relative mt-2">
                      <Users className="absolute left-3 top-1/2 -translate-y-1/2" size={18} style={{ color: '#736c64' }} />
                      <Select value={formData.guests} onValueChange={(value) => handleChange('guests', value)}>
                        <SelectTrigger className="pl-11">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          {[1, 2, 3, 4].map((num) => (
                            <SelectItem key={num} value={num.toString()}>
                              {num} {num === 1 ? 'Guest' : 'Guests'}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </div>

                {/* Special Requests */}
                <div>
                  <Label htmlFor="requests" className="text-sm font-medium" style={{ color: '#1e1919' }}>
                    Special Requests
                  </Label>
                  <Textarea
                    id="requests"
                    value={formData.specialRequests}
                    onChange={(e) => handleChange('specialRequests', e.target.value)}
                    className="mt-2 min-h-[100px]"
                    placeholder="Any special requirements or requests..."
                  />
                </div>

                {/* Submit Button */}
                <Button 
                  type="submit"
                  className="w-full py-6 text-base font-semibold"
                  style={{ backgroundColor: '#61525a' }}
                >
                  Submit Booking Inquiry
                </Button>

                <p className="text-xs text-center mt-4" style={{ color: '#736c64' }}>
                  We'll confirm availability and contact you within 24 hours
                </p>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default BookingForm;
