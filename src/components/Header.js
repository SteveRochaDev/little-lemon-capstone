// src/components/Header.js
import React from 'react';
import '../styles/Header.css';
import logo from '../assets/logo.png';

function Header() {
  return (
    <header className="header">
      <div className="header-container">
        {/* Brand logo */}
        <div className="brand">
          <img
            src={logo}
            alt="Little Lemon restaurant logo"
            className="logo"
          />
          <span className="brand-name">Little Lemon</span>
        </div>

        {/* Main navigation */}
        <nav aria-label="Main navigation">
          <ul className="nav-list">
            <li><a href="/">Home</a></li>
            <li><a href="#booking">Reserve</a></li>
            <li><a href="#bookings">Bookings</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
