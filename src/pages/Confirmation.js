// src/pages/Confirmation.js
import React from 'react';
import { Link } from 'react-router-dom';

function Confirmation() {
  return (
    <div>
      <h1>Booking Confirmed 🎉</h1>
      <p>Your table has been successfully reserved.</p>

      {/* Link back to home */}
      <Link to="/">Back to Home</Link>
    </div>
  );
}

export default Confirmation;
