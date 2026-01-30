import React, { useState } from 'react';
import Header from './components/Header';
import BookingForm from './components/BookingForm';
import BookingsTable from './components/BookingsTable';
import './styles/App.css';

function App() {
  const [bookings, setBookings] = useState([]);

  const addBooking = (booking) => {
    setBookings([...bookings, booking]);
  };

  return (
    <div className="App">
      <Header />

      <main>
        <h1>Table Reservation</h1>

        <section id="booking">
          <BookingForm addBooking={addBooking} />
        </section>

        <section id="bookings">
          <BookingsTable bookings={bookings} />
        </section>
      </main>
    </div>
  );
}

export default App;
