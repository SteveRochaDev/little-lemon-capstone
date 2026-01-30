// src/components/BookingForm.js
import React, { useState } from 'react';
import '../styles/BookingForm.css';

function BookingForm({ addBooking }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    guests: 1,
  });

  const [errors, setErrors] = useState({});

  // Validate form inputs
  const validate = () => {
    const newErrors = {};

    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    if (!formData.phone.trim()) newErrors.phone = 'Phone number is required';
    if (!formData.date) newErrors.date = 'Date is required';
    if (!formData.time) newErrors.time = 'Time is required';
    if (formData.guests < 1) newErrors.guests = 'Guests must be at least 1';

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    addBooking(formData);

    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      date: '',
      time: '',
      guests: 1,
    });
    setErrors({});
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <form
      className="booking-form"
      onSubmit={handleSubmit}
      aria-labelledby="booking-form-title"
      noValidate
    >
      <h2 id="booking-form-title">Reserve a Table</h2>

      <fieldset>
        <legend>Customer Information</legend>

        <label htmlFor="name">Name</label>
        <input
          id="name"
          name="name"
          type="text"
          value={formData.name}
          onChange={handleChange}
          aria-invalid={!!errors.name}
          aria-describedby={errors.name ? 'name-error' : undefined}
        />
        {errors.name && (
          <span id="name-error" className="error" role="alert">
            {errors.name}
          </span>
        )}

        <label htmlFor="email">Email</label>
        <input
          id="email"
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          aria-invalid={!!errors.email}
          aria-describedby={errors.email ? 'email-error' : undefined}
        />
        {errors.email && (
          <span id="email-error" className="error" role="alert">
            {errors.email}
          </span>
        )}

        <label htmlFor="phone">Phone</label>
        <input
          id="phone"
          name="phone"
          type="tel"
          value={formData.phone}
          onChange={handleChange}
          aria-invalid={!!errors.phone}
          aria-describedby={errors.phone ? 'phone-error' : undefined}
        />
        {errors.phone && (
          <span id="phone-error" className="error" role="alert">
            {errors.phone}
          </span>
        )}
      </fieldset>

      <fieldset>
        <legend>Reservation Details</legend>

        <label htmlFor="date">Date</label>
        <input
          id="date"
          name="date"
          type="date"
          value={formData.date}
          onChange={handleChange}
          aria-invalid={!!errors.date}
        />

        <label htmlFor="time">Time</label>
        <input
          id="time"
          name="time"
          type="time"
          value={formData.time}
          onChange={handleChange}
          aria-invalid={!!errors.time}
        />

        <label htmlFor="guests">Number of guests</label>
        <input
          id="guests"
          name="guests"
          type="number"
          min="1"
          value={formData.guests}
          onChange={handleChange}
          aria-invalid={!!errors.guests}
        />
      </fieldset>

      <button type="submit" aria-label="Submit table reservation">
        Book Table
      </button>
    </form>
  );
}

export default BookingForm;
