// src/pages/Booking.js
import React from 'react';
import Home from './Home';

function Booking({ bookings, addBooking }) {
  return <Home bookings={bookings} addBooking={addBooking} />;
}

export default Booking;
