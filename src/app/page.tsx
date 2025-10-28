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
import SmoothScroll from '../components/SmoothScroll';
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
            <SmoothScroll 
              animationDuration={0.8}
              fromDirection="fade"
              delay={0.2}
            >
              <div>
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
            </SmoothScroll>
          </div>
        </ClickSpark>
      </section>

      {/* Featured Products */}
      <section className="section">
        <div className="container">
          <SmoothScroll 
            containerClassName="section-title"
            animationDuration={0.8}
            fromDirection="bottom"
            distance={30}
          >
            <h2 className="section-title">Featured Delights</h2>
          </SmoothScroll>
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
                <SmoothScroll
                  animationDuration={0.6}
                  fromDirection="bottom"
                  distance={30}
                  delay={index * 0.1}
                >
                  <div className="card">
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
                </SmoothScroll>
              </ClickSpark>
            ))}
          </div>
        </div>
      </section>

      {/* Freshness Promise */}
      <section className="section freshness-section">
        <div className="container">
          <SmoothScroll 
            containerClassName="section-title"
            animationDuration={0.8}
            fromDirection="bottom"
            distance={30}
          >
            <h2 className="section-title">Our Freshness Promise</h2>
          </SmoothScroll>
          <div className="freshness-grid">
            <SmoothScroll
              animationDuration={0.6}
              fromDirection="bottom"
              distance={30}
              delay={0}
            >
              <div className="freshness-item">
              <div className="freshness-icon">
                <Sun size={48} className="freshness-icon-svg" />
              </div>
              <h3>Baked Daily</h3>
              <p>Every morning at 5 AM, our bakers start crafting your favorite treats with the finest ingredients.</p>
              </div>
            </SmoothScroll>
            <SmoothScroll
              animationDuration={0.6}
              fromDirection="bottom"
              distance={30}
              delay={0.2}
            >
              <div className="freshness-item">
              <div className="freshness-icon">
                <Award size={48} className="freshness-icon-svg" />
              </div>
              <h3>Premium Quality</h3>
              <p>We source only the best ingredients - organic flour, farm-fresh eggs, and real vanilla beans.</p>
              </div>
            </SmoothScroll>
            <SmoothScroll
              animationDuration={0.6}
              fromDirection="bottom"
              distance={30}
              delay={0.4}
            >
              <div className="freshness-item">
                <div className="freshness-icon">
                  <Heart size={48} className="freshness-icon-svg" />
                </div>
                <h3>Made with Love</h3>
                <p>Each treat is handcrafted with passion, ensuring every bite delivers joy to your day.</p>
              </div>
            </SmoothScroll>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section">
        <div className="container">
          <SmoothScroll 
            containerClassName="section-title"
            animationDuration={0.8}
            fromDirection="bottom"
            distance={30}
          >
            <h2 className="section-title">Sweet Words from Sweet People</h2>
          </SmoothScroll>
          <div className="testimonials-grid">
            {testimonials.map((testimonial, index) => (
              <SmoothScroll
                key={testimonial.id}
                animationDuration={0.6}
                fromDirection="bottom"
                distance={30}
                delay={index * 0.1}
              >
                <div className="testimonial-card">
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
              </SmoothScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="section newsletter-bg">
        <div className="container">
          <SmoothScroll 
            containerClassName="section-title"
            animationDuration={0.8}
            fromDirection="bottom"
            distance={30}
          >
              <h2 className="section-title newsletter-text">Get a taste of our love — straight to your inbox</h2>
            </SmoothScroll>
            <SmoothScroll
              animationDuration={0.6}
              fromDirection="fade"
              delay={0.3}
            >
              <div>
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
            </SmoothScroll>
        </div>
      </section>
    </div>
  );
}