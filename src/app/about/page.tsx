'use client';

import Link from 'next/link';
import { Heart, Sparkles, Award, Users, Clock, Leaf } from 'lucide-react';
import ScrollFloat from '../../components/ScrollFloat';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-pink-50">
      {/* Hero Section */}
      <section className="about-hero">
        <div className="container">
          <div className="about-hero-content">
            <div className="about-hero-text floating-element">
              <ScrollFloat 
                containerClassName="about-title scroll-float-container"
                textClassName="scroll-float-text about-hero-text"
                animationDuration={1.3}
                ease="elastic.out(1, 0.6)"
                stagger={0.1}
              >
                Our Story
              </ScrollFloat>
              <div className="about-heart-wrapper">
                <Heart size={40} className="title-heart about-heart" />
              </div>
              <p className="about-subtitle">
                Where every recipe is made with love, and every bite tells a story of passion, 
                tradition, and the finest ingredients.
              </p>
            </div>
            <div className="about-hero-image">
              <div className="kitchen-illustration floating-element">
                <div className="kitchen-scene">
                  <Sparkles size={60} className="kitchen-sparkle" />
                  <div className="kitchen-text">Our Kitchen</div>
                  <p>Where the magic happens every day</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="story-section">
        <div className="container">
          <div className="story-content">
            <div className="story-text">
              <h2 className="section-title">The Te Amo Story</h2>
              <div className="story-paragraphs">
                <p>
                  &ldquo;Te Amo&rdquo; means &ldquo;I love you&rdquo; in Spanish, and that&apos;s exactly what we put into every single 
                  item we bake. Our journey began in a small home kitchen, where our founder Maria discovered 
                  the joy of creating happiness through freshly baked goods.
                </p>
                <p>
                  What started as baking for family and friends quickly grew into a passion for sharing 
                  love through food. Every morning, we wake up before dawn to ensure that when you walk 
                  into our bakery, you&apos;re greeted with the warm aroma of fresh bread, the sight of 
                  perfectly glazed pastries, and the promise of something truly special.
                </p>
                <p>
                  Today, Te Amo Bakery continues to be a place where traditional recipes meet modern 
                  creativity, where every customer becomes part of our extended family, and where every 
                  day brings new opportunities to spread joy, one delicious bite at a time.
                </p>
              </div>
            </div>
            <div className="story-highlights">
              <div className="highlight-card">
                <Users size={30} />
                <h3>Family Owned</h3>
                <p>Three generations of baking expertise</p>
              </div>
              <div className="highlight-card">
                <Clock size={30} />
                <h3>Fresh Daily</h3>
                <p>Baked fresh every morning since 2010</p>
              </div>
              <div className="highlight-card">
                <Award size={30} />
                <h3>Award Winning</h3>
                <p>Best Local Bakery 2023 & 2024</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="values-section">
        <div className="container">
          <h2 className="section-title values-title">Our Values</h2>
          <p className="section-subtitle values-subtitle">
            The principles that guide everything we do
          </p>
          
          <div className="values-grid">
            <div className="value-card value-freshness">
              <div className="value-icon">
                <Sparkles size={40} />
              </div>
              <h3>Freshness</h3>
              <p>
                We bake everything fresh daily, starting before sunrise to ensure you get 
                the warmest, most delicious treats possible.
              </p>
            </div>

            <div className="value-card value-homemade">
              <div className="value-icon">
                <Heart size={40} />
              </div>
              <h3>Homemade with Love</h3>
              <p>
                Every recipe is crafted with the same care and attention we&apos;d give to 
                treats for our own family. Love is our secret ingredient.
              </p>
            </div>

            <div className="value-card value-quality">
              <div className="value-icon">
                <Award size={40} />
              </div>
              <h3>Quality Ingredients</h3>
              <p>
                We source the finest ingredients - from organic flours to free-range eggs, 
                premium chocolate to locally sourced honey.
              </p>
            </div>

            <div className="value-card value-sustainability">
              <div className="value-icon">
                <Leaf size={40} />
              </div>
              <h3>Sustainability</h3>
              <p>
                We&apos;re committed to sustainable practices, supporting local farmers and 
                using eco-friendly packaging whenever possible.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="team-section">
        <div className="container">
          <h2 className="section-title bakers-title">Meet Our Bakers</h2>
          <div className="team-grid">
            <div className="team-member">
              <div className="member-photo">
                <Sparkles size={50} className="member-icon" />
              </div>
              <h3>Maria Rodriguez</h3>
              <p className="member-role">Founder & Head Baker</p>
              <p className="member-bio">
                The heart and soul of Te Amo, Maria brings 25 years of baking passion 
                and family recipes passed down through generations.
              </p>
            </div>
            
            <div className="team-member">
              <div className="member-photo">
                <Heart size={50} className="member-icon" />
              </div>
              <h3>Carlos Mendoza</h3>
              <p className="member-role">Pastry Chef</p>
              <p className="member-bio">
                Our creative genius behind the seasonal specials and artistic cake designs 
                that make every celebration extra special.
              </p>
            </div>
            
            <div className="team-member">
              <div className="member-photo">
                <Award size={50} className="member-icon" />
              </div>
              <h3>Sofia Martinez</h3>
              <p className="member-role">Bread Specialist</p>
              <p className="member-bio">
                Sofia&apos;s expertise in artisan breads ensures every loaf has the perfect 
                crust and the most incredible flavor.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="about-cta">
        <div className="container">
          <div className="cta-content">
            <h2>Ready to Taste the Love?</h2>
            <p>Visit us today and become part of the Te Amo family</p>
            <div className="cta-buttons">
              <Link href="/menu" className="btn btn-primary">
                View Our Menu
              </Link>
              <Link href="/order" className="btn btn-secondary">
                Order Online
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-section">
              <h3 className="business-name">Te Amo Bakery</h3>
              <p>Baking with love since 2010</p>
            </div>
            <div className="footer-section">
              <h4>Quick Links</h4>
              <div className="footer-links">
                <Link href="/">Home</Link>
                <Link href="/menu">Menu</Link>
                <Link href="/about">About</Link>
                <Link href="/order">Order</Link>
              </div>
            </div>
            <div className="footer-section">
              <h4>Contact</h4>
              <p>123 Baker Street<br />Sweet City, SC 12345<br />(555) 123-CAKE</p>
            </div>
          </div>
          <div className="footer-bottom">
            <p>&copy; 2025 Te Amo Bakery. Made with <Heart size={16} className="inline-icon" /> for our community.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}