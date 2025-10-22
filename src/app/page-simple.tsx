'use client';

import { useState } from 'react';

export default function Home() {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubscribed(true);
      setEmail('');
    }
  };

  const featuredItems = [
    {
      id: 1,
      name: "Signature Chocolate Cupcakes",
      description: "Rich chocolate cake topped with silky buttercream frosting",
      price: "$4.50",
      image: "🧁",
      badge: "Bestseller"
    },
    {
      id: 2,
      name: "Classic Croissants", 
      description: "Buttery, flaky pastries baked fresh every morning",
      price: "$3.25",
      image: "🥐",
      badge: "Fresh Daily"
    },
    {
      id: 3,
      name: "Artisan Cookies",
      description: "Handcrafted cookies with premium chocolate chips", 
      price: "$2.75",
      image: "🍪",
      badge: "Handmade"
    }
  ];

  return (
    <div>
      {/* Header */}
      <header className="header">
        <div className="container">
          <div className="nav">
            <div className="logo">
              Te Amo Bakery
            </div>
            <ul className="nav-links">
              <li><a href="#home">Home</a></li>
              <li><a href="#menu">Menu</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <h1>Te Amo Bakery</h1>
          <p>Bite-sized Joy. Baked Fresh. Shared with Love.</p>
          <a href="#menu" className="btn btn-primary">Explore Our Menu</a>
        </div>
      </section>

      {/* Featured Products */}
      <section className="section">
        <div className="container">
          <h2 className="section-title">Featured Delights</h2>
          <div className="grid">
            {featuredItems.map((item) => (
              <div key={item.id} className="card">
                <div className="product-image">
                  {item.image}
                </div>
                <h3 className="product-title">{item.name}</h3>
                <p className="product-description">{item.description}</p>
                <div className="product-footer">
                  <span className="product-price">
                    {item.price}
                  </span>
                  <span className="product-badge">
                    {item.badge}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="section newsletter-bg">
        <div className="container">
          <h2 className="section-title">Stay Sweet with Us</h2>
          <div className="newsletter-container">
            <p className="newsletter-description">
              Subscribe to our newsletter for the latest treats, special offers, and baking tips!
            </p>
            {!isSubscribed ? (
              <form onSubmit={handleSubmit} className="newsletter-form">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  required
                  className="newsletter-input"
                />
                <button type="submit" className="btn btn-primary">
                  Subscribe
                </button>
              </form>
            ) : (
              <div className="newsletter-success">
                🎉 Thank you for subscribing! Welcome to the Te Amo family!
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-brand">
            <h3 className="footer-title">Te Amo Bakery</h3>
            <p>Bite-sized Joy. Baked Fresh. Shared with Love.</p>
          </div>
          <div className="footer-nav">
            <a href="#menu">Menu</a>
            <a href="#about">About</a>
            <a href="#contact">Contact</a>
          </div>
          <div className="footer-bottom">
            <p>&copy; 2024 Te Amo Bakery. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}