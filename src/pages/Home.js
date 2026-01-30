// src/pages/Home.js
import React from 'react';
import BookingForm from '../components/BookingForm';
import BookingsTable from '../components/BookingsTable';

function Home({ bookings, addBooking }) {
  return (
    <div>
      <h1>Little Lemon Table Booking</h1>

      {/* Booking form */}
      <BookingForm addBooking={addBooking} />

      {/* Table with all bookings */}
      <BookingsTable bookings={bookings} />
    </div>
  );
}

export default Home;
