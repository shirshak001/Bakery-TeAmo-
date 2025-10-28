'use client';

import Link from 'next/link';
import { Calendar, Clock, User, Heart, Cookie, Cake, ChefHat } from 'lucide-react';

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  author: string;
  date: string;
  readTime: string;
  category: string;
  icon: React.ComponentType<{ size?: number; className?: string }>;
  featured: boolean;
}

export default function BlogPage() {
  const blogPosts: BlogPost[] = [
    {
      id: 1,
      title: "How We Make Our Signature Butter Cookies",
      excerpt: "Discover the secret behind our most beloved treats and learn the traditional techniques passed down through generations.",
      author: "Maria Rodriguez",
      date: "October 15, 2025",
      readTime: "5 min read",
      category: "Recipes",
      icon: Cookie,
      featured: true
    },
    {
      id: 2,
      title: "5 Tips to Keep Cakes Fresh at Home",
      excerpt: "Professional baker tips to maintain the freshness and flavor of your cakes for days after purchase.",
      author: "Carlos Mendoza",
      date: "October 12, 2025",
      readTime: "3 min read",
      category: "Tips",
      icon: Cake,
      featured: false
    },
    {
      id: 3,
      title: "Autumn Flavors: Seasonal Recipe Ideas",
      excerpt: "Embrace the warmth of fall with our collection of seasonal recipes featuring pumpkin, apple, and warming spices.",
      author: "Sofia Martinez",
      date: "October 8, 2025",
      readTime: "7 min read",
      category: "Seasonal",
      icon: Heart,
      featured: true
    },
    {
      id: 4,
      title: "Behind the Scenes: A Day in Our Kitchen",
      excerpt: "Take a peek behind the curtain and see how we prepare hundreds of fresh items every single day.",
      author: "Te Amo Team",
      date: "October 5, 2025",
      readTime: "4 min read",
      category: "Behind the Scenes",
      icon: ChefHat,
      featured: false
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-pink-50">
      {/* Hero Section */}
      <section className="blog-hero">
        <div className="container">
          <div className="blog-hero-content floating-element">
            <h1 className="blog-title">
              Sweet Stories & Recipes
              <Heart size={40} className="title-icon" />
            </h1>
            <p className="blog-subtitle">
              Discover the stories behind our treats, learn baking tips from our experts, 
              and get inspired with seasonal recipes to try at home.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Posts */}
      <section className="featured-posts">
        <div className="container">
          <h2 className="section-title">Featured Stories</h2>
          <div className="featured-grid">
            {blogPosts.filter(post => post.featured).map(post => {
              const IconComponent = post.icon;
              return (
                <article key={post.id} className="featured-post">
                  <div className="post-icon">
                    <IconComponent size={40} />
                  </div>
                  <div className="post-content">
                    <div className="post-category">{post.category}</div>
                    <h3 className="post-title">{post.title}</h3>
                    <p className="post-excerpt">{post.excerpt}</p>
                    <div className="post-meta">
                      <div className="meta-item">
                        <User size={14} />
                        <span>{post.author}</span>
                      </div>
                      <div className="meta-item">
                        <Calendar size={14} />
                        <span>{post.date}</span>
                      </div>
                      <div className="meta-item">
                        <Clock size={14} />
                        <span>{post.readTime}</span>
                      </div>
                    </div>
                    <Link href={`/blog/${post.id}`} className="read-more">
                      Read Full Story →
                    </Link>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* All Posts */}
      <section className="all-posts">
        <div className="container">
          <h2 className="section-title">All Stories</h2>
          <div className="posts-grid">
            {blogPosts.map(post => {
              const IconComponent = post.icon;
              return (
                <article key={post.id} className="blog-post">
                  <div className="post-header">
                    <div className="post-icon-small">
                      <IconComponent size={24} />
                    </div>
                    <div className="post-category">{post.category}</div>
                  </div>
                  <h3 className="post-title">{post.title}</h3>
                  <p className="post-excerpt">{post.excerpt}</p>
                  <div className="post-meta">
                    <div className="meta-item">
                      <User size={12} />
                      <span>{post.author}</span>
                    </div>
                    <div className="meta-item">
                      <Calendar size={12} />
                      <span>{post.date}</span>
                    </div>
                    <div className="meta-item">
                      <Clock size={12} />
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                  <Link href={`/blog/${post.id}`} className="read-more">
                    Read More →
                  </Link>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="blog-newsletter">
        <div className="container">
          <div className="newsletter-content">
            <h2>Never Miss Our Sweet Updates</h2>
            <p>Get the latest recipes, baking tips, and behind-the-scenes stories delivered to your inbox.</p>
            <form className="newsletter-form">
              <input type="email" placeholder="Enter your email address" required />
              <button type="submit" className="btn btn-primary">
                Subscribe
              </button>
            </form>
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
                <Link href="/blog">Blog</Link>
                <Link href="/contact">Contact</Link>
                <Link href="/order">Order</Link>
              </div>
            </div>
            <div className="footer-section">
              <h4>Contact</h4>
              <p>123 Baker Street<br />Sweet City, SC 12345<br />(555) 123-CAKE</p>
            </div>
          </div>
          <div className="footer-bottom">
            <p>&copy; 2025 Te Amo Bakery. Made with love for our community.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}