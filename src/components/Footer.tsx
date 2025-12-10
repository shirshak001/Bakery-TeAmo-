'use client';

import React from 'react';
import Link from 'next/link';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3 className="business-name">Mielo Bakes</h3>
            <p>Baking with love since 2010</p>
          </div>
          <div className="footer-section">
            <h4>Quick Links</h4>
            <div className="footer-links">
              <Link href="/">Home</Link>
              <Link href="/menu">Menu</Link>
              <Link href="/about">About</Link>
              <Link href="/contact">Contact</Link>
            </div>
          </div>
          <div className="footer-section">
            <h4>Contact</h4>
            <p>123 Baker Street<br />Sweet City, SC 12345<br />(555) 123-CAKE</p>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2025 Mielo Bakes. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;