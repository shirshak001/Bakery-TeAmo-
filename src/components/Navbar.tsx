'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ShoppingCart } from 'lucide-react';
import { useCart } from '@/context/CartContext';

const Navbar: React.FC = () => {
  const pathname = usePathname();
  const { getCartItemsCount } = useCart();
  const cartCount = getCartItemsCount();

  const isActive = (path: string) => {
    if (path === '/') {
      return pathname === '/';
    }
    return pathname === path;
  };

  const getCtaButton = () => {
    switch (pathname) {
      case '/menu':
        return { href: '/checkout', text: 'View Cart' };
      case '/checkout':
        return { href: '/menu', text: 'Continue Shopping' };
      default:
        return { href: '/menu', text: 'Explore Our Menu' };
    }
  };

  const ctaButton = getCtaButton();

  return (
    <header className="header">
      <div className="container">
        <div className="nav">
          <Link href="/" className="logo business-name-nav" style={{ textDecoration: 'none' }}>
            Mielo Bakes 
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
          </ul>
          <div className="nav-cta">
            <Link href="/checkout" className="nav-cart-icon">
              <ShoppingCart size={24} />
              {cartCount > 0 && <span className="cart-badge">{cartCount}</span>}
            </Link>
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