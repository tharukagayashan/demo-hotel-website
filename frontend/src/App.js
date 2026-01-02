import React from "react";
import "./App.css";
import { Toaster } from "./components/ui/sonner";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Rooms from "./components/Rooms";
import Amenities from "./components/Amenities";
import Gallery from "./components/Gallery";
import Reviews from "./components/Reviews";
import BookingForm from "./components/BookingForm";
import Location from "./components/Location";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Hero />
        <Rooms />
        <Amenities />
        <Gallery />
        <Reviews />
        <BookingForm />
        <Location />
      </main>
      <Footer />
      <Toaster />
    </div>
  );
}

export default App;
