'use client';

import { useState } from 'react';
import Link from 'next/link';
import { MapPin, Phone, Mail, Clock, Send, Truck } from 'lucide-react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-pink-50">
      {/* Hero Section */}
      <section className="contact-hero">
        <div className="container">
          <div className="contact-hero-content">
            <div className="contact-hero-text floating-element">
              <h1 className="contact-title">
                Get in Touch
                <Mail size={40} className="title-icon" />
              </h1>
              <p className="contact-subtitle">
                We&apos;d love to hear from you! Whether you have questions, special requests, 
                or just want to say hello, we&apos;re here to help.
              </p>
            </div>
            <div className="contact-hero-image">
              <div className="delivery-illustration floating-element">
                <div className="delivery-scene">
                  <Truck size={80} className="delivery-truck" />
                  <div className="delivery-text">Free Delivery</div>
                  <p>Fresh bakes delivered to your door</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="contact-content">
        <div className="container">
          <div className="contact-grid">
            
            {/* Contact Form */}
            <div className="contact-form-section">
              <h2 className="section-title">Send us a Message</h2>
              <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-group">
                  <label htmlFor="name">Your Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Enter your full name"
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="email">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="your.email@example.com"
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="message">Your Message</label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    required
                    placeholder="Tell us about your inquiry, special requests, or just say hello!"
                  ></textarea>
                </div>
                
                <button type="submit" className="btn btn-primary contact-submit">
                  <Send size={20} className="inline-icon" />
                  {isSubmitted ? 'Message Sent!' : 'Send Message'}
                </button>
                
                {isSubmitted && (
                  <div className="success-message">
                    Thank you! We&apos;ll get back to you within 24 hours.
                  </div>
                )}
              </form>
            </div>

            {/* Contact Info */}
            <div className="contact-info-section">
              <h2 className="section-title">Visit Our Bakery</h2>
              
              <div className="contact-info-cards">
                <div className="info-card">
                  <div className="info-icon">
                    <MapPin size={24} />
                  </div>
                  <div className="info-content">
                    <h3>Address</h3>
                    <p>123 Baker Street<br />Sweet City, SC 12345</p>
                  </div>
                </div>
                
                <div className="info-card">
                  <div className="info-icon">
                    <Phone size={24} />
                  </div>
                  <div className="info-content">
                    <h3>Phone</h3>
                    <p>(555) 123-CAKE<br />(555) 123-2253</p>
                  </div>
                </div>
                
                <div className="info-card">
                  <div className="info-icon">
                    <Mail size={24} />
                  </div>
                  <div className="info-content">
                    <h3>Email</h3>
                    <p>hello@mielobakes.com<br />orders@mielobakes.com</p>
                  </div>
                </div>
                
                <div className="info-card">
                  <div className="info-icon">
                    <Clock size={24} />
                  </div>
                  <div className="info-content">
                    <h3>Hours</h3>
                    <p>
                      Mon-Fri: 7:00 AM - 7:00 PM<br />
                      Sat-Sun: 8:00 AM - 6:00 PM
                    </p>
                  </div>
                </div>
              </div>
              
              {/* Map Placeholder */}
              <div className="map-section">
                <h3>Find Us</h3>
                <div className="map-placeholder">
                  <MapPin size={40} className="map-icon" />
                  <p>Interactive Map</p>
                  <span>123 Baker Street, Sweet City</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="contact-cta">
        <div className="container">
          <div className="cta-content">
            <h2>Ready to Order?</h2>
            <p>Browse our delicious menu and place your order online</p>
            <div className="cta-buttons">
              <Link href="/menu" className="btn btn-primary">
                View Menu
              </Link>
              <Link href="/checkout" className="btn btn-secondary">
                View Cart
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}