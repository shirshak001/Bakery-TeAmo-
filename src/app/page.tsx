'use client';

import { useState } from 'react';
import { 
  Cake, 
  Cookie, 
  Croissant, 
  Sparkles,
  Sun,
  Award,
  Heart,
  Star,
  Mail
} from 'lucide-react';
import SplitText from '../components/SplitText';
import ScrollFloat from '../components/ScrollFloat';
import ClickSpark from '../components/ClickSpark';

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
      icon: Cake,
      badge: "Bestseller"
    },
    {
      id: 2,
      name: "Classic Croissants", 
      description: "Buttery, flaky pastries baked fresh every morning",
      price: "$3.25",
      icon: Croissant,
      badge: "Fresh Daily"
    },
    {
      id: 3,
      name: "Artisan Cookies",
      description: "Handcrafted cookies with premium chocolate chips", 
      price: "$2.75",
      icon: Cookie,
      badge: "Handmade"
    }
  ];

  const testimonials = [
    {
      id: 1,
      name: "Sarah Martinez",
      quote: "The chocolate cupcakes are absolutely divine! My family asks for them every celebration. Te Amo Bakery has become our sweet tradition.",
      rating: 5
    },
    {
      id: 2,
      name: "Michael Chen",
      quote: "Fresh croissants every morning - you can taste the love in every bite. The quality is unmatched in town!",
      rating: 5
    },
    {
      id: 3,
      name: "Emma Rodriguez",
      quote: "Te Amo Bakery turned our wedding into a fairytale. The custom cake was not just beautiful, but incredibly delicious too!",
      rating: 5
    }
  ];

  return (
    <div>
      {/* Header */}
      <header className="header">
        <div className="container">
          <div className="nav">
            <div className="logo business-name-nav">
              Te Amo 
            </div>
            <ul className="nav-links">
              <li><a href="#home">Home</a></li>
              <li><a href="/menu">Menu</a></li>
              <li><a href="/about">About</a></li>
              <li><a href="/blog">Blog</a></li>
              <li><a href="/contact">Contact</a></li>
              <li><a href="/order">Order</a></li>
            </ul>
            <div className="nav-cta">
              <a href="/menu" className="btn btn-primary">Explore Our Menu</a>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="hero">
        <ClickSpark 
          sparkColor="#FFE66D"
          sparkSize={12}
          sparkRadius={25}
          sparkCount={12}
          duration={600}
          easing="ease-out"
          extraScale={1.2}
        >
          <div className="container">
            <div className="floating-element">
              <h1 className="business-name">Te Amo </h1>
              <SplitText 
                text="Bite-sized Joy. Baked Fresh. Shared with Love."
                tag="p"
                className="hero-tagline"
                delay={0.08}
                duration={0.8}
                splitType="words"
              />
            </div>
          </div>
        </ClickSpark>
      </section>

      {/* Featured Products */}
      <section className="section">
        <div className="container">
          <ScrollFloat 
            containerClassName="section-title scroll-float-container"
            textClassName="scroll-float-text"
            animationDuration={1.2}
            ease="back.out(1.7)"
            stagger={0.05}
          >
            Featured Delights
          </ScrollFloat>
          <div className="grid">
            {featuredItems.map((item, index) => (
              <ClickSpark 
                key={item.id}
                sparkColor="#FF6B9D"
                sparkSize={8}
                sparkRadius={20}
                sparkCount={10}
                duration={500}
                easing="ease-out"
              >
                <div className={`card floating-element floating-delay-${index + 1}`}>
                  <div className="product-image">
                    <item.icon size={48} className="product-icon" />
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
              </ClickSpark>
            ))}
          </div>
        </div>
      </section>

      {/* Freshness Promise */}
      <section className="section freshness-section">
        <div className="container">
          <ScrollFloat 
            containerClassName="section-title scroll-float-container"
            textClassName="scroll-float-text"
            animationDuration={1.4}
            ease="power3.out"
            stagger={0.06}
          >
            Our Freshness Promise
          </ScrollFloat>
          <div className="freshness-grid">
            <div className="freshness-item floating-element floating-delay-1">
              <div className="freshness-icon">
                <Sun size={48} className="freshness-icon-svg" />
              </div>
              <h3>Baked Daily</h3>
              <p>Every morning at 5 AM, our bakers start crafting your favorite treats with the finest ingredients.</p>
            </div>
            <div className="freshness-item floating-element floating-delay-2">
              <div className="freshness-icon">
                <Award size={48} className="freshness-icon-svg" />
              </div>
              <h3>Premium Quality</h3>
              <p>We source only the best ingredients - organic flour, farm-fresh eggs, and real vanilla beans.</p>
            </div>
            <div className="freshness-item floating-element floating-delay-3">
              <div className="freshness-icon">
                <Heart size={48} className="freshness-icon-svg" />
              </div>
              <h3>Made with Love</h3>
              <p>Each treat is handcrafted with passion, ensuring every bite delivers joy to your day.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section">
        <div className="container">
          <ScrollFloat 
            containerClassName="section-title scroll-float-container"
            textClassName="scroll-float-text"
            animationDuration={1.5}
            ease="back.out(2)"
            stagger={0.04}
          >
            Sweet Words from Sweet People
          </ScrollFloat>
          <div className="testimonials-grid">
            {testimonials.map((testimonial, index) => (
              <div key={testimonial.id} className={`testimonial-card floating-element floating-delay-${index + 1}`}>
                <div className="testimonial-stars">
                  {Array.from({ length: 5 }, (_, starIndex) => (
                    <Star key={starIndex} size={20} className="star" fill="currentColor" />
                  ))}
                </div>
                <blockquote className="testimonial-quote">
                  &ldquo;{testimonial.quote}&rdquo;
                </blockquote>
                <cite className="testimonial-author">— {testimonial.name}</cite>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="section newsletter-bg">
        <div className="container">
          <div className="floating-element">
            <ScrollFloat 
              containerClassName="section-title scroll-float-container"
              textClassName="scroll-float-text newsletter-text"
              animationDuration={1.8}
              ease="elastic.out(1, 0.3)"
              stagger={0.02}
            >
              Get a taste of our love — straight to your inbox
            </ScrollFloat>
            <div className="newsletter-icon-wrapper">
              <Mail size={24} className="inline-icon newsletter-icon" />
            </div>
            <div className="newsletter-container">
              <p className="newsletter-description">
                Join our sweet community and be the first to know about new treats, special offers, and baking secrets!
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
                  <ClickSpark 
                    sparkColor="#4ECDC4"
                    sparkSize={10}
                    sparkRadius={15}
                    sparkCount={8}
                    duration={400}
                    easing="ease-out"
                  >
                    <button type="submit" className="btn btn-primary">
                      Subscribe
                    </button>
                  </ClickSpark>
                </form>
              ) : (
                <div className="newsletter-success">
                  <Sparkles size={24} className="inline-icon" /> Thank you for subscribing! Welcome to the Te Amo family!
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-brand">
            <h3 className="footer-title business-name">Te Amo </h3>
            <p>Bite-sized Joy. Baked Fresh. Shared with Love.</p>
          </div>
          <div className="footer-nav">
            <a href="/menu">Menu</a>
            <a href="/order">Order</a>
            <a href="#about">About</a>
            <a href="#contact">Contact</a>
          </div>
          <div className="footer-bottom">
            <p>&copy; 2024 Te Amo . All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}