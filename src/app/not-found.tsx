'use client';

import Link from 'next/link';
import { Home, ArrowLeft, Cookie, Heart, Sparkles } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-pink-50 flex items-center justify-center">
      <div className="container">
        <div className="not-found-content">
          {/* Cute Animation */}
          <div className="error-animation">
            <div className="crumbling-cookie">
              <Cookie size={120} className="cookie-icon" />
              <div className="crumbs">
                <div className="crumb crumb-1"></div>
                <div className="crumb crumb-2"></div>
                <div className="crumb crumb-3"></div>
                <div className="crumb crumb-4"></div>
                <div className="crumb crumb-5"></div>
              </div>
            </div>
          </div>

          {/* Error Message */}
          <div className="error-text">
            <h1 className="error-title">
              Oops! This page crumbled like a cookie
              <Sparkles size={30} className="sparkle-icon" />
            </h1>
            <p className="error-subtitle">
              Don&apos;t worry, it happens to the best of us! Even our cookies sometimes crumble, 
              but that doesn&apos;t make them any less sweet.
            </p>
            <p className="error-message">
              The page you&apos;re looking for might have been moved, deleted, or perhaps it never existed. 
              But hey, our delicious treats are still waiting for you!
            </p>
          </div>

          {/* Action Buttons */}
          <div className="error-actions">
            <Link href="/" className="btn btn-primary error-btn">
              <Home size={20} className="inline-icon" />
              Back to Home
            </Link>
            <Link href="/menu" className="btn btn-secondary error-btn">
              <Cookie size={20} className="inline-icon" />
              Browse Menu
            </Link>
            <button onClick={() => window.history.back()} className="btn btn-outline error-btn">
              <ArrowLeft size={20} className="inline-icon" />
              Go Back
            </button>
          </div>

          {/* Sweet Suggestions */}
          <div className="sweet-suggestions">
            <h3>
              <Heart size={20} className="inline-icon" />
              While you&apos;re here, why not try:
            </h3>
            <div className="suggestion-links">
              <Link href="/menu" className="suggestion-link">
                <Cookie size={16} />
                Fresh Daily Menu
              </Link>
              <Link href="/about" className="suggestion-link">
                <Heart size={16} />
                Our Sweet Story
              </Link>
              <Link href="/order" className="suggestion-link">
                <Sparkles size={16} />
                Order Online
              </Link>
            </div>
          </div>

          {/* Fun Quote */}
          <div className="fun-quote">
            <p>
              &ldquo;Life is what happens when you&apos;re busy making other plans... 
              and sometimes those plans include finding the wrong page, but the right bakery!&rdquo;
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}