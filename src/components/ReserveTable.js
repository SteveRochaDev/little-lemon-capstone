// src/components/ReserveTable.js
import React, { useState } from 'react';
import '../styles/ReserveTable.css';

function ReserveTable({ bookings, setBookings }) {
  // State to store all form data
  const [data, setData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    guests: 1
  });

  // Handle input changes
  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    setBookings([...bookings, data]); // Add new booking
    setData({ name: '', email: '', phone: '', date: '', time: '', guests: 1 }); // Reset form
  };

  return (
    <form className="reserve-table" onSubmit={handleSubmit}>
      <h2>Reserve a Table</h2>

      {/* Customer Information Section */}
      <div className="customer-info">
        <h3>Customer Information</h3>
        <input 
          type="text" 
          name="name" 
          placeholder="Name" 
          value={data.name} 
          onChange={handleChange} 
          required 
        />
        <input 
          type="email" 
          name="email" 
          placeholder="Email" 
          value={data.email} 
          onChange={handleChange} 
          required 
        />
        <input 
          type="tel" 
          name="phone" 
          placeholder="Phone" 
          value={data.phone} 
          onChange={handleChange} 
          required 
        />
      </div>

      {/* Reservation Details Section */}
      <div className="reservation-details">
        <h3>Reservation Details</h3>
        <input 
          type="date" 
          name="date" 
          value={data.date} 
          onChange={handleChange} 
          required 
        />
        <input 
          type="time" 
          name="time" 
          value={data.time} 
          onChange={handleChange} 
          required 
        />
        <input 
          type="number" 
          name="guests" 
          value={data.guests} 
          min="1" 
          onChange={handleChange} 
          required 
        />
      </div>

      <button type="submit">Book Table</button>
    </form>
  );
}

export default ReserveTable;
