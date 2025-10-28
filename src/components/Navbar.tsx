'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Navbar: React.FC = () => {
  const pathname = usePathname();

  const isActive = (path: string) => {
    if (path === '/') {
      return pathname === '/';
    }
    return pathname === path;
  };

  const getCtaButton = () => {
    switch (pathname) {
      case '/menu':
        return { href: '/order', text: 'Order Now' };
      case '/order':
        return { href: '/menu', text: 'View Menu' };
      default:
        return { href: '/menu', text: 'Explore Our Menu' };
    }
  };

  const ctaButton = getCtaButton();

  return (
    <header className="header">
      <div className="container">
        <div className="nav">
          <Link href="/" className="logo business-name-nav">
            Te Amo 
          </Link>
          <ul className="nav-links">
            <li>
              <Link 
                href="/" 
                className={isActive('/') ? 'active' : ''}
              >
                Home
              </Link>
            </li>
            <li>
              <Link 
                href="/menu" 
                className={isActive('/menu') ? 'active' : ''}
              >
                Menu
              </Link>
            </li>
            <li>
              <Link 
                href="/about" 
                className={isActive('/about') ? 'active' : ''}
              >
                About
              </Link>
            </li>
            <li>
              <Link 
                href="/blog" 
                className={isActive('/blog') ? 'active' : ''}
              >
                Blog
              </Link>
            </li>
            <li>
              <Link 
                href="/contact" 
                className={isActive('/contact') ? 'active' : ''}
              >
                Contact
              </Link>
            </li>
            <li>
              <Link 
                href="/order" 
                className={isActive('/order') ? 'active' : ''}
              >
                Order
              </Link>
            </li>
          </ul>
          <div className="nav-cta">
            <Link href={ctaButton.href} className="btn btn-primary">
              {ctaButton.text}
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;