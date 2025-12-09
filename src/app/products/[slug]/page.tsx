'use client';

import { useParams, useRouter } from 'next/navigation';
import { useState } from 'react';
import Image from 'next/image';
import { ArrowLeft, ShoppingCart, Check, AlertCircle } from 'lucide-react';
import { getProductBySlug } from '@/data/products';
import { useCart } from '@/context/CartContext';
import Link from 'next/link';

export default function ProductDetail() {
  const params = useParams();
  const router = useRouter();
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(0);
  const [addedToCart, setAddedToCart] = useState(false);

  const product = getProductBySlug(params.slug as string);

  if (!product) {
    return (
      <div className="product-not-found-container">
        <div className="product-not-found-content">
          <AlertCircle size={64} className="product-not-found-icon" />
          <h1>Product Not Found</h1>
          <p className="product-not-found-text">Sorry, we couldn&apos;t find the product you&apos;re looking for.</p>
          <Link href="/" className="btn btn-primary">
            Back to Home
          </Link>
        </div>
      </div>
    );
  }

  const handleAddToCart = () => {
    addToCart(product, quantity);
    setAddedToCart(true);
    setTimeout(() => setAddedToCart(false), 2000);
  };

  const handleBuyNow = () => {
    addToCart(product, quantity);
    router.push('/checkout');
  };

  return (
    <div className="product-detail-page">
      <div className="container">
        <button onClick={() => router.back()} className="back-button">
          <ArrowLeft size={20} />
          Back
        </button>

        <div className="product-detail-container">
          {/* Image Gallery */}
          <div className="product-gallery">
            <div className="main-image">
              <Image 
                src={product.images[selectedImage]} 
                alt={product.name}
                width={800}
                height={500}
                priority
              />
              {product.badge && <span className="product-badge">{product.badge}</span>}
            </div>
            <div className="thumbnail-images">
              {product.images.map((image, index) => (
                <Image
                  key={index}
                  src={image}
                  alt={`${product.name} ${index + 1}`}
                  width={150}
                  height={120}
                  className={selectedImage === index ? 'active' : ''}
                  onClick={() => setSelectedImage(index)}
                />
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="product-info">
            <h1 className="product-detail-title">{product.name}</h1>
            <p className="product-category">{product.category}</p>
            <p className="product-price">₹{product.price}</p>

            <p className="product-description">{product.longDescription}</p>

            {/* Ingredients */}
            <div className="product-section">
              <h3>Ingredients</h3>
              <div className="ingredient-tags">
                {product.ingredients.map((ingredient, index) => (
                  <span key={index} className="tag">{ingredient}</span>
                ))}
              </div>
            </div>

            {/* Allergens */}
            <div className="product-section">
              <h3>Allergens</h3>
              <div className="allergen-tags">
                {product.allergens.map((allergen, index) => (
                  <span key={index} className="tag allergen-tag">{allergen}</span>
                ))}
              </div>
            </div>

            {/* Quantity Selector */}
            <div className="quantity-section">
              <label>Quantity</label>
              <div className="quantity-controls">
                <button 
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="qty-btn"
                >
                  -
                </button>
                <span className="quantity-display">{quantity}</span>
                <button 
                  onClick={() => setQuantity(quantity + 1)}
                  className="qty-btn"
                >
                  +
                </button>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="product-actions">
              <button 
                onClick={handleAddToCart}
                className={`btn btn-primary btn-large ${addedToCart ? 'added' : ''}`}
                disabled={!product.inStock}
              >
                {addedToCart ? (
                  <>
                    <Check size={20} />
                    Added to Cart
                  </>
                ) : (
                  <>
                    <ShoppingCart size={20} />
                    Add to Cart
                  </>
                )}
              </button>
              <button 
                onClick={handleBuyNow}
                className="btn btn-secondary btn-large"
                disabled={!product.inStock}
              >
                Buy Now
              </button>
            </div>

            {!product.inStock && (
              <p className="out-of-stock">Currently out of stock</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
