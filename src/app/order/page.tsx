'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Cake, Cookie, Wheat, Sparkles, ShoppingCart, PartyPopper } from 'lucide-react';

interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
  category: string;
  icon: React.ComponentType<{ size?: number; className?: string }>;
}

interface OrderForm {
  customerName: string;
  email: string;
  phone: string;
  orderType: 'pickup' | 'delivery';
  address: string;
  pickupDate: string;
  pickupTime: string;
  paymentMethod: 'cash' | 'card' | 'online';
  specialRequests: string;
}

export default function OrderPage() {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [showCheckout, setShowCheckout] = useState(false);
  const [orderForm, setOrderForm] = useState<OrderForm>({
    customerName: '',
    email: '',
    phone: '',
    orderType: 'pickup',
    address: '',
    pickupDate: '',
    pickupTime: '',
    paymentMethod: 'cash',
    specialRequests: ''
  });

  const products = [
    // Cakes
    { id: 1, name: "Signature Chocolate Cake", price: 24.99, category: 'Cakes', icon: Cake },
    { id: 2, name: "Vanilla Rainbow Cake", price: 22.99, category: 'Cakes', icon: Cake },
    { id: 3, name: "Red Velvet Delight", price: 26.99, category: 'Cakes', icon: Cake },
    { id: 4, name: "Lemon Zest Cake", price: 23.99, category: 'Cakes', icon: Cake },
    
    // Cookies & Treats
    { id: 5, name: "Chocolate Chip Cookies (Dozen)", price: 12.99, category: 'Cookies', icon: Cookie },
    { id: 6, name: "Sugar Cookies (Dozen)", price: 10.99, category: 'Cookies', icon: Cookie },
    { id: 7, name: "Double Chocolate Brownies", price: 14.99, category: 'Cookies', icon: Cookie },
    { id: 8, name: "Oatmeal Raisin Cookies", price: 11.99, category: 'Cookies', icon: Cookie },
    
    // Breads
    { id: 9, name: "Artisan Sourdough Loaf", price: 8.99, category: 'Breads', icon: Wheat },
    { id: 10, name: "Honey Wheat Bread", price: 7.99, category: 'Breads', icon: Wheat },
    { id: 11, name: "Cinnamon Swirl Bread", price: 9.99, category: 'Breads', icon: Wheat },
    
    // Seasonal
    { id: 12, name: "Pumpkin Spice Cupcakes (6pc)", price: 18.99, category: 'Seasonal', icon: Sparkles },
    { id: 13, name: "Apple Cinnamon Turnovers", price: 15.99, category: 'Seasonal', icon: Sparkles },
    { id: 14, name: "Cranberry Orange Scones", price: 13.99, category: 'Seasonal', icon: Sparkles }
  ];

  const getCategoryIcon = (category: string) => {
    switch(category) {
      case 'Cakes': return Cake;
      case 'Cookies': return Cookie;
      case 'Breads': return Wheat;
      default: return Sparkles;
    }
  };

  const addToCart = (product: typeof products[0]) => {
    const existingItem = cart.find(item => item.id === product.id);
    if (existingItem) {
      setCart(cart.map(item => 
        item.id === product.id 
          ? { ...item, quantity: item.quantity + 1 }
          : item
      ));
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  const updateQuantity = (id: number, quantity: number) => {
    if (quantity <= 0) {
      setCart(cart.filter(item => item.id !== id));
    } else {
      setCart(cart.map(item => 
        item.id === id ? { ...item, quantity } : item
      ));
    }
  };

  const getTotalPrice = () => {
    return cart.reduce((total, item) => total + (item.price * item.quantity), 0);
  };

  const getTotalItems = () => {
    return cart.reduce((total, item) => total + item.quantity, 0);
  };

  const handleFormChange = (field: keyof OrderForm, value: string) => {
    setOrderForm({ ...orderForm, [field]: value });
  };

  const handleSubmitOrder = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, you'd send this to your backend
    const orderData = {
      items: cart,
      total: getTotalPrice(),
      customer: orderForm,
      orderDate: new Date().toISOString()
    };
    
    // For now, we'll show an alert and log the order
    console.log('Order submitted:', orderData);
    alert(`Order submitted successfully! Total: $${getTotalPrice().toFixed(2)}\n\nWe'll contact you at ${orderForm.phone} to confirm your order.`);
    
    // Reset form and cart
    setCart([]);
    setShowCheckout(false);
    setOrderForm({
      customerName: '',
      email: '',
      phone: '',
      orderType: 'pickup',
      address: '',
      pickupDate: '',
      pickupTime: '',
      paymentMethod: 'cash',
      specialRequests: ''
    });
  };

  const groupedProducts = products.reduce((acc, product) => {
    if (!acc[product.category]) acc[product.category] = [];
    acc[product.category].push(product);
    return acc;
  }, {} as Record<string, typeof products>);

  return (
    <div>
      {/* Header */}
      <header className="header">
        <div className="container">
          <div className="nav">
            <div className="logo">
              <Link href="/" className="business-name-link">Te Amo Bakery</Link>
            </div>
            <ul className="nav-links">
              <li><Link href="/">Home</Link></li>
              <li><Link href="/menu">Menu</Link></li>
              <li><Link href="/about">About</Link></li>
              <li><Link href="/blog">Blog</Link></li>
              <li><Link href="/contact">Contact</Link></li>
              <li><Link href="/order" className="active">Order</Link></li>
            </ul>
          </div>
        </div>
      </header>

      {/* Order Hero */}
      <section className="order-hero">
        <div className="container">
          <div className="floating-element">
            <h1>Place Your Sweet Order</h1>
            <p>Fresh treats made with love, ready when you need them</p>
            {cart.length > 0 && (
              <div className="cart-summary">
                <span className="cart-count">{getTotalItems()} items in cart</span>
                <span className="cart-total">${getTotalPrice().toFixed(2)}</span>
              </div>
            )}
          </div>
        </div>
      </section>

      <div className="order-container">
        <div className="container">
          {!showCheckout ? (
            /* Product Selection */
            <div className="order-content">
              <div className="products-section">
                <h2>Select Your Treats</h2>
                {Object.entries(groupedProducts).map(([category, categoryProducts]) => (
                  <div key={category} className="product-category">
                    <h3 className="category-header">
                      <span className="category-icon">
                        {(() => {
                          const IconComponent = getCategoryIcon(category);
                          return <IconComponent size={24} />;
                        })()}
                      </span>
                      {category}
                    </h3>
                    <div className="order-products-grid">
                      {categoryProducts.map(product => (
                        <div key={product.id} className="order-product-card">
                          <div className="order-product-image">
                            <product.icon size={24} />
                          </div>
                          <div className="order-product-info">
                            <h4 className="order-product-name">{product.name}</h4>
                            <p className="order-product-price">${product.price}</p>
                            <button 
                              className="add-to-cart-btn"
                              onClick={() => addToCart(product)}
                            >
                              Add to Cart <ShoppingCart size={16} className="inline-icon" />
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              {/* Cart Sidebar */}
              {cart.length > 0 && (
                <div className="cart-section">
                  <div className="cart-sticky">
                    <h3>Your Order</h3>
                    <div className="cart-items">
                      {cart.map(item => (
                        <div key={item.id} className="cart-item">
                          <div className="cart-item-info">
                            <span className="cart-item-emoji">
                              <item.icon size={20} />
                            </span>
                            <div>
                              <div className="cart-item-name">{item.name}</div>
                              <div className="cart-item-price">${item.price}</div>
                            </div>
                          </div>
                          <div className="quantity-controls">
                            <button 
                              className="qty-btn"
                              onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            >
                              -
                            </button>
                            <span className="quantity">{item.quantity}</span>
                            <button 
                              className="qty-btn"
                              onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            >
                              +
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>
                    <div className="cart-total">
                      <strong>Total: ${getTotalPrice().toFixed(2)}</strong>
                    </div>
                    <button 
                      className="checkout-btn"
                      onClick={() => setShowCheckout(true)}
                    >
                      Proceed to Checkout <ShoppingCart size={16} className="inline-icon" />
                    </button>
                  </div>
                </div>
              )}
            </div>
          ) : (
            /* Checkout Form */
            <div className="checkout-section">
              <div className="checkout-header">
                <button 
                  className="back-btn"
                  onClick={() => setShowCheckout(false)}
                >
                  ← Back to Products
                </button>
                <h2>Checkout Details</h2>
              </div>

              <div className="checkout-content">
                <form onSubmit={handleSubmitOrder} className="checkout-form">
                  {/* Customer Information */}
                  <div className="form-section">
                    <h3>Contact Information</h3>
                    <div className="form-row">
                      <div className="form-group">
                        <label htmlFor="customerName">Full Name *</label>
                        <input
                          type="text"
                          id="customerName"
                          value={orderForm.customerName}
                          onChange={(e) => handleFormChange('customerName', e.target.value)}
                          required
                          className="form-input"
                        />
                      </div>
                      <div className="form-group">
                        <label htmlFor="phone">Phone Number *</label>
                        <input
                          type="tel"
                          id="phone"
                          value={orderForm.phone}
                          onChange={(e) => handleFormChange('phone', e.target.value)}
                          required
                          className="form-input"
                        />
                      </div>
                    </div>
                    <div className="form-group">
                      <label htmlFor="email">Email Address</label>
                      <input
                        type="email"
                        id="email"
                        value={orderForm.email}
                        onChange={(e) => handleFormChange('email', e.target.value)}
                        className="form-input"
                      />
                    </div>
                  </div>

                  {/* Order Type */}
                  <div className="form-section">
                    <h3>Order Type</h3>
                    <div className="radio-group">
                      <label className="radio-option">
                        <input
                          type="radio"
                          name="orderType"
                          value="pickup"
                          checked={orderForm.orderType === 'pickup'}
                          onChange={(e) => handleFormChange('orderType', e.target.value)}
                        />
                        <span className="radio-label">🏪 Pickup from Store</span>
                      </label>
                      <label className="radio-option">
                        <input
                          type="radio"
                          name="orderType"
                          value="delivery"
                          checked={orderForm.orderType === 'delivery'}
                          onChange={(e) => handleFormChange('orderType', e.target.value)}
                        />
                        <span className="radio-label">🚚 Home Delivery</span>
                      </label>
                    </div>
                    
                    {orderForm.orderType === 'delivery' && (
                      <div className="form-group">
                        <label htmlFor="address">Delivery Address *</label>
                        <textarea
                          id="address"
                          value={orderForm.address}
                          onChange={(e) => handleFormChange('address', e.target.value)}
                          required={orderForm.orderType === 'delivery'}
                          className="form-textarea"
                          rows={3}
                        />
                      </div>
                    )}
                  </div>

                  {/* Pickup/Delivery Time */}
                  <div className="form-section">
                    <h3>{orderForm.orderType === 'pickup' ? 'Pickup' : 'Delivery'} Schedule</h3>
                    <div className="form-row">
                      <div className="form-group">
                        <label htmlFor="pickupDate">Date *</label>
                        <input
                          type="date"
                          id="pickupDate"
                          value={orderForm.pickupDate}
                          onChange={(e) => handleFormChange('pickupDate', e.target.value)}
                          required
                          className="form-input"
                          min={new Date().toISOString().split('T')[0]}
                        />
                      </div>
                      <div className="form-group">
                        <label htmlFor="pickupTime">Preferred Time *</label>
                        <select
                          id="pickupTime"
                          value={orderForm.pickupTime}
                          onChange={(e) => handleFormChange('pickupTime', e.target.value)}
                          required
                          className="form-input"
                        >
                          <option value="">Select time</option>
                          <option value="09:00">9:00 AM</option>
                          <option value="10:00">10:00 AM</option>
                          <option value="11:00">11:00 AM</option>
                          <option value="12:00">12:00 PM</option>
                          <option value="13:00">1:00 PM</option>
                          <option value="14:00">2:00 PM</option>
                          <option value="15:00">3:00 PM</option>
                          <option value="16:00">4:00 PM</option>
                          <option value="17:00">5:00 PM</option>
                          <option value="18:00">6:00 PM</option>
                        </select>
                      </div>
                    </div>
                  </div>

                  {/* Payment Method */}
                  <div className="form-section">
                    <h3>Payment Method</h3>
                    <div className="radio-group">
                      <label className="radio-option">
                        <input
                          type="radio"
                          name="paymentMethod"
                          value="cash"
                          checked={orderForm.paymentMethod === 'cash'}
                          onChange={(e) => handleFormChange('paymentMethod', e.target.value)}
                        />
                        <span className="radio-label">💵 Cash on {orderForm.orderType === 'pickup' ? 'Pickup' : 'Delivery'}</span>
                      </label>
                      <label className="radio-option">
                        <input
                          type="radio"
                          name="paymentMethod"
                          value="card"
                          checked={orderForm.paymentMethod === 'card'}
                          onChange={(e) => handleFormChange('paymentMethod', e.target.value)}
                        />
                        <span className="radio-label">💳 Card at Store</span>
                      </label>
                      <label className="radio-option">
                        <input
                          type="radio"
                          name="paymentMethod"
                          value="online"
                          checked={orderForm.paymentMethod === 'online'}
                          onChange={(e) => handleFormChange('paymentMethod', e.target.value)}
                        />
                        <span className="radio-label">🌐 Online Payment</span>
                      </label>
                    </div>
                  </div>

                  {/* Special Requests */}
                  <div className="form-section">
                    <h3>Special Requests</h3>
                    <div className="form-group">
                      <label htmlFor="specialRequests">
                        Any special requests or messages?
                        <span className="label-hint">(e.g., &ldquo;Happy Birthday Sarah&rdquo; on cake, allergies, etc.)</span>
                      </label>
                      <textarea
                        id="specialRequests"
                        value={orderForm.specialRequests}
                        onChange={(e) => handleFormChange('specialRequests', e.target.value)}
                        className="form-textarea"
                        rows={4}
                        placeholder="Let us know how we can make your order special..."
                      />
                    </div>
                  </div>

                  <button type="submit" className="submit-order-btn">
                    Submit Order - ${getTotalPrice().toFixed(2)} <PartyPopper size={16} className="inline-icon" />
                  </button>
                </form>

                {/* Order Summary */}
                <div className="order-summary">
                  <h3>Order Summary</h3>
                  <div className="summary-items">
                    {cart.map(item => (
                      <div key={item.id} className="summary-item">
                        <span>
                          <item.icon size={16} className="inline-icon" />
                          {item.name}
                        </span>
                        <span>{item.quantity}x ${(item.price * item.quantity).toFixed(2)}</span>
                      </div>
                    ))}
                  </div>
                  <div className="summary-total">
                    <strong>Total: ${getTotalPrice().toFixed(2)}</strong>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-brand">
            <h3 className="footer-title business-name">Te Amo Bakery</h3>
            <p>Bite-sized Joy. Baked Fresh. Shared with Love.</p>
          </div>
          <div className="footer-nav">
            <Link href="/">Home</Link>
            <Link href="/menu">Menu</Link>
            <Link href="/order">Order</Link>
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