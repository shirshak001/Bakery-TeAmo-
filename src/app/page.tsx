'use client';

import { useState } from 'react';
import { 
  Cake, 
  Cookie, 
  Croissant, 
  Sparkles,
  Star,
  Mail
} from 'lucide-react';
import SplitText from '../components/SplitText';
import SmoothScroll from '../components/SmoothScroll';
import ClickSpark from '../components/ClickSpark';
import Masonry from '../components/Masonry';

const masonryItems = [
  {
    id: "1",
    img: "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=600&h=900",
    url: "#",
    height: 400,
  },
  {
    id: "2",
    img: "https://images.unsplash.com/photo-1558961363-fa8fdf82db35?w=600&h=750",
    url: "#",
    height: 250,
  },
  {
    id: "3",
    img: "https://images.unsplash.com/photo-1486427944299-d1955d23e34d?w=600&h=800",
    url: "#",
    height: 600,
  },
  {
    id: "4",
    img: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=600&h=700",
    url: "#",
    height: 350,
  },
  {
    id: "5",
    img: "https://images.unsplash.com/photo-1557925923-cd4648e211a0?w=600&h=850",
    url: "#",
    height: 450,
  },
  {
    id: "6",
    img: "https://images.unsplash.com/photo-1556909172-54557c7e4fb7?w=600&h=750",
    url: "#",
    height: 300,
  },
  {
    id: "7",
    img: "https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?w=600&h=900",
    url: "#",
    height: 500,
  },
  {
    id: "8",
    img: "https://images.unsplash.com/photo-1571115177098-24ec42ed204d?w=600&h=800",
    url: "#",
    height: 400,
  },
];

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
            animationDuration={0.7}
            fromDirection="top"
            delay={0.2}
          >
            <h2>Baked Fresh Daily</h2>
          </SmoothScroll>
          <SmoothScroll
            animationDuration={0.7}
            fromDirection="fade"
            delay={0.4}
          >
            <p className="section-subtitle">
              Every morning, we start from scratch to bring you the freshest, most delicious baked goods.
            </p>
          </SmoothScroll>
        </div>
      </section>

      {/* Masonry Gallery Section */}
      <section className="section masonry-section">
        <div className="container">
          <SmoothScroll 
            containerClassName="section-title"
            animationDuration={0.7}
            fromDirection="top"
            delay={0.2}
          >
            <h2>Our Creations</h2>
          </SmoothScroll>
          <SmoothScroll
            animationDuration={0.7}
            fromDirection="fade"
            delay={0.4}
          >
            <p className="section-subtitle">
              Discover the artistry behind every sweet creation
            </p>
          </SmoothScroll>
          <div className="masonry-container">
            <Masonry
              items={masonryItems}
              ease="power3.out"
              duration={0.6}
              stagger={0.05}
              animateFrom="bottom"
              scaleOnHover={true}
              hoverScale={0.95}
              blurToFocus={true}
              colorShiftOnHover={false}
            />
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