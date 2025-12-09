'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { 
  Cake, 
  Cookie, 
  Wheat, 
  Sparkles,
  ShoppingCart,
  Trophy,
  Leaf,
  Egg,
  Star
} from 'lucide-react';
import ScrollFloat from '../../components/ScrollFloat';

interface Product {
  id: number;
  name: string;
  category: string;
  description: string;
  price: string;
  icon: React.ComponentType<{ size?: number; className?: string }>;
  tags: string[];
  background: string;
}

export default function MenuPage() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedFilter, setSelectedFilter] = useState('all');

  const categories = [
    { id: 'all', name: 'All Items', icon: Cake },
    { id: 'cakes', name: 'Cakes', icon: Cake },
    { id: 'cookies', name: 'Cookies', icon: Cookie },
    { id: 'breads', name: 'Breads', icon: Wheat },
    { id: 'seasonal', name: 'Seasonal Specials', icon: Sparkles }
  ];

  const filters = [
    { id: 'all', name: 'All' },
    { id: 'bestseller', name: 'Best Sellers' },
    { id: 'eggless', name: 'Eggless' },
    { id: 'glutenfree', name: 'Gluten-Free' },
    { id: 'vegan', name: 'Vegan' }
  ];

  const products = [
    // Cakes
    {
      id: 1,
      name: "Signature Chocolate Cake",
      category: 'cakes',
      description: "Rich, moist chocolate cake with silky ganache frosting",
      price: "$24.99",
      icon: Cake,
      tags: ['bestseller'],
      background: 'var(--primary)'
    },
    {
      id: 2,
      name: "Vanilla Rainbow Cake",
      category: 'cakes',
      description: "Light vanilla sponge with colorful buttercream layers",
      price: "$22.99",
      icon: Cake,
      tags: ['eggless'],
      background: 'var(--accent-2)'
    },
    {
      id: 3,
      name: "Red Velvet Delight",
      category: 'cakes',
      description: "Classic red velvet with cream cheese frosting",
      price: "$26.99",
      icon: Cake,
      tags: ['bestseller'],
      background: '#ffcccb'
    },
    {
      id: 4,
      name: "Lemon Zest Cake",
      category: 'cakes',
      description: "Fresh lemon cake with tangy lemon curd filling",
      price: "$23.99",
      icon: Cake,
      tags: ['glutenfree'],
      background: '#fff9c4'
    },

    // Cookies
    {
      id: 5,
      name: "Chocolate Chip Cookies",
      category: 'cookies',
      description: "Classic cookies with premium Belgian chocolate chips",
      price: "$12.99",
      icon: Cookie,
      tags: ['bestseller'],
      background: 'var(--accent-2)'
    },
    {
      id: 6,
      name: "Sugar Cookies",
      category: 'cookies',
      description: "Buttery sugar cookies with royal icing decoration",
      price: "$10.99",
      icon: Cookie,
      tags: ['eggless'],
      background: 'var(--secondary)'
    },
    {
      id: 7,
      name: "Oatmeal Raisin",
      category: 'cookies',
      description: "Chewy oats with plump raisins and warm spices",
      price: "$11.99",
      icon: Cookie,
      tags: ['vegan'],
      background: '#f4e4bc'
    },
    {
      id: 8,
      name: "Double Chocolate Brownies",
      category: 'cookies',
      description: "Fudgy brownies with chocolate chunks and nuts",
      price: "$14.99",
      icon: Cookie,
      tags: ['bestseller', 'glutenfree'],
      background: '#d4a574'
    },

    // Breads
    {
      id: 9,
      name: "Artisan Sourdough",
      category: 'breads',
      description: "Traditional sourdough with a perfect crispy crust",
      price: "$8.99",
      icon: Wheat,
      tags: ['bestseller', 'vegan'],
      background: '#f5e6d3'
    },
    {
      id: 10,
      name: "Honey Wheat Bread",
      category: 'breads',
      description: "Wholesome wheat bread sweetened with local honey",
      price: "$7.99",
      icon: Wheat,
      tags: ['eggless'],
      background: '#f4e4bc'
    },
    {
      id: 11,
      name: "Cinnamon Swirl Bread",
      category: 'breads',
      description: "Sweet bread with cinnamon sugar swirls throughout",
      price: "$9.99",
      icon: Wheat,
      tags: [],
      background: '#ffe4b5'
    },
    {
      id: 12,
      name: "Multigrain Loaf",
      category: 'breads',
      description: "Nutritious bread packed with seeds and grains",
      price: "$8.49",
      icon: Wheat,
      tags: ['vegan'],
      background: '#ddbf86'
    },

    // Seasonal Specials
    {
      id: 13,
      name: "Pumpkin Spice Cupcakes",
      category: 'seasonal',
      description: "Autumn-spiced cupcakes with cream cheese frosting",
      price: "$18.99",
      icon: Sparkles,
      tags: ['bestseller'],
      background: '#ff8c69'
    },
    {
      id: 14,
      name: "Apple Cinnamon Turnovers",
      category: 'seasonal',
      description: "Flaky pastry filled with spiced apple compote",
      price: "$15.99",
      icon: Sparkles,
      tags: ['eggless'],
      background: '#ffb3ba'
    },
    {
      id: 15,
      name: "Cranberry Orange Scones",
      category: 'seasonal',
      description: "Buttery scones with tart cranberries and orange zest",
      price: "$13.99",
      icon: Sparkles,
      tags: [],
      background: '#ffdfba'
    },
    {
      id: 16,
      name: "Hot Cross Buns",
      category: 'seasonal',
      description: "Spiced buns with currants and traditional cross",
      price: "$16.99",
      icon: Sparkles,
      tags: [],
      background: '#bae1ff'
    }
  ];

  const filteredProducts = products.filter(product => {
    const categoryMatch = selectedCategory === 'all' || product.category === selectedCategory;
    const filterMatch = selectedFilter === 'all' || product.tags.includes(selectedFilter);
    return categoryMatch && filterMatch;
  });

  const getTagIcon = (tag: string) => {
    switch(tag) {
      case 'bestseller': return Trophy;
      case 'eggless': return Egg;
      case 'glutenfree': return Wheat;
      case 'vegan': return Leaf;
      default: return Star;
    }
  };

  const handleAddToCart = (product: Product) => {
    // For now, just show an alert. In a real app, you'd add to cart state
    alert(`Added ${product.name} to cart!`);
  };

  const handleEnquiry = (product: Product) => {
    // Open email client with pre-filled subject
    const subject = `Enquiry about ${product.name}`;
    const body = `Hi Mielo Bakes,\n\nI'm interested in ordering ${product.name}. Could you please provide more details?\n\nThank you!`;
    window.location.href = `mailto:orders@teamobakery.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  // Apply background colors via JavaScript to avoid inline styles
  useEffect(() => {
    const cardImages = document.querySelectorAll('.menu-card-image[data-bg]');
    cardImages.forEach((element) => {
      const bgColor = element.getAttribute('data-bg');
      if (bgColor && element instanceof HTMLElement) {
        element.style.backgroundColor = bgColor;
      }
    });
  }, [filteredProducts]);

  return (
    <div>
      {/* Menu Hero */}
      <section className="menu-hero">
        <div className="container">
          <div className="floating-element">
            <ScrollFloat 
              containerClassName="scroll-float-container"
              textClassName="scroll-float-text menu-hero-text"
              animationDuration={1.6}
              ease="back.out(1.5)"
              stagger={0.08}
            >
              Our Delicious Menu
            </ScrollFloat>
            <p className="menu-hero-subtitle">Freshly baked with love, served with joy</p>
          </div>
        </div>
      </section>

      {/* Filters */}
      <section className="menu-filters">
        <div className="container">
          <div className="simplified-filters">
            {/* Category Filters */}
            {categories.map(category => (
              <button
                key={category.id}
                className={`filter-chip ${selectedCategory === category.id ? 'active' : ''}`}
                onClick={() => setSelectedCategory(category.id)}
              >
                <category.icon size={20} className="chip-icon" />
                {category.name}
              </button>
            ))}
            
            <div className="filter-divider"></div>
            
            {/* Special Filters */}
            {filters.slice(1).map(filter => (
              <button
                key={filter.id}
                className={`filter-chip special-chip ${selectedFilter === filter.id ? 'active' : ''}`}
                onClick={() => setSelectedFilter(filter.id)}
              >
                {filter.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="menu-products">
        <div className="container">
          <div className="products-count">
            Showing {filteredProducts.length} delicious items
          </div>
          <div className="products-grid">
            {filteredProducts.map(product => (
              <div key={product.id} className="menu-product-card">
                <div className="menu-card-image" data-bg={product.background}>
                  <product.icon size={72} className="menu-card-icon" />
                  {product.tags.includes('bestseller') && (
                    <span className="menu-badge-tag"><Trophy size={14} /> Best Seller</span>
                  )}
                </div>
                <div className="menu-card-content">
                  <h3 className="menu-card-title">{product.name}</h3>
                  <p className="menu-card-description">{product.description}</p>
                  
                  <div className="menu-card-tags">
                    {product.tags.filter(tag => tag !== 'bestseller').map(tag => {
                      const TagIcon = getTagIcon(tag);
                      return (
                        <span key={tag} className={`menu-tag menu-tag-${tag}`}>
                          <TagIcon size={12} />
                          {tag === 'eggless' ? 'Eggless' : tag === 'glutenfree' ? 'Gluten-Free' : tag.charAt(0).toUpperCase() + tag.slice(1)}
                        </span>
                      );
                    })}
                  </div>

                  <div className="menu-card-footer">
                    <span className="menu-card-price">{product.price}</span>
                    <div className="menu-card-actions">
                      <button 
                        className="menu-btn-primary"
                        onClick={() => handleAddToCart(product)}
                      >
                        <ShoppingCart size={18} />
                        Add to Cart
                      </button>
                      <button 
                        className="menu-btn-secondary"
                        onClick={() => handleEnquiry(product)}
                      >
                        Enquiry
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-brand">
            <h3 className="footer-title business-name">Mielo Bakes</h3>
            <p>Bite-sized Joy. Baked Fresh. Shared with Love.</p>
          </div>
          <div className="footer-nav">
            <Link href="/">Home</Link>
            <Link href="/menu">Menu</Link>
            <Link href="/order">Order</Link>
            <a href="#contact">Contact</a>
          </div>
          <div className="footer-bottom">
            <p>&copy; 2024 Mielo Bakes. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}