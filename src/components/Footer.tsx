'use client';

import React from 'react';
import Link from 'next/link';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-brand">
          <h3 className="footer-title business-name">Te Amo </h3>
          <p>Bite-sized Joy. Baked Fresh. Shared with Love.</p>
        </div>
        <div className="footer-nav">
          <Link href="/menu">Menu</Link>
          <Link href="/order">Order</Link>
          <Link href="/about">About</Link>
          <Link href="/contact">Contact</Link>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2024 Te Amo . All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;