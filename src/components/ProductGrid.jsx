import React, { useState } from 'react';
import ProductCard from './ProductCard';
import { CATEGORIES } from '../data/products';
import { ArrowUpDown } from 'lucide-react';

export default function ProductGrid({
  products,
  activeCategory,
  setActiveCategory,
  onQuickView,
  onAddToCart,
  onToggleWishlist,
  wishlist
}) {
  const [sortBy, setSortBy] = useState('popular');

  let filteredProducts = products.filter(p => {
    if (activeCategory === 'All Products') return true;
    return p.category === activeCategory;
  });

  if (sortBy === 'price-low') {
    filteredProducts.sort((a, b) => a.price - b.price);
  } else if (sortBy === 'price-high') {
    filteredProducts.sort((a, b) => b.price - a.price);
  } else if (sortBy === 'rating') {
    filteredProducts.sort((a, b) => b.rating - a.rating);
  }

  return (
    <section id="catalog" style={{ padding: '4.5rem 0', backgroundColor: '#FAF9F6' }}>
      <div className="container">
        
        {/* Section Title */}
        <div style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto 3rem auto' }}>
          <span className="editorial-tag" style={{ marginBottom: '0.8rem' }}>
            ATELIER EDITION • 2026
          </span>
          <h2 style={{ fontFamily: 'Cinzel, serif', fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', fontWeight: 600, color: '#111111', marginTop: '0.6rem', marginBottom: '0.8rem' }}>
            The Cotton & Embroidery Collection
          </h2>
          <p style={{ fontSize: 'clamp(0.9rem, 1.8vw, 1.05rem)', color: '#555555', lineHeight: 1.65, fontWeight: 400 }}>
            Meticulously tailored from 100% long-staple Indian Pima & Egyptian Giza cotton yarn with precision hand embroidery.
          </p>
        </div>

        {/* Filters & Sorting Row */}
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '1.2rem',
          marginBottom: '2.5rem',
          paddingBottom: '1.2rem',
          borderBottom: '1px solid rgba(0, 0, 0, 0.08)'
        }}>
          
          {/* Touch-Scrollable Category Tabs */}
          <div style={{
            display: 'flex',
            gap: '0.6rem',
            overflowX: 'auto',
            WebkitOverflowScrolling: 'touch',
            paddingBottom: '0.4rem',
            width: '100%',
            maxWidth: '100%'
          }} className="no-scrollbar">
            {CATEGORIES.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                style={{
                  backgroundColor: activeCategory === cat ? '#111111' : 'transparent',
                  color: activeCategory === cat ? '#FFFFFF' : '#777777',
                  border: '1px solid rgba(0, 0, 0, 0.15)',
                  padding: '0.55rem 1.2rem',
                  fontFamily: 'Plus Jakarta Sans, sans-serif',
                  fontWeight: 800,
                  fontSize: '0.72rem',
                  letterSpacing: '0.15em',
                  textTransform: 'uppercase',
                  cursor: 'pointer',
                  whiteSpace: 'nowrap',
                  transition: 'all 0.3s',
                  flexShrink: 0,
                  minHeight: '40px'
                }}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Sort Menu */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%', gap: '0.8rem', marginTop: '0.2rem' }}>
            <span style={{ fontSize: '0.72rem', fontWeight: 800, color: '#777777', letterSpacing: '0.12em', display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
              <ArrowUpDown size={14} /> SORT BY:
            </span>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              style={{
                backgroundColor: '#FFFFFF',
                border: '1px solid rgba(0,0,0,0.15)',
                color: '#111111',
                padding: '0.5rem 1rem',
                fontSize: '0.75rem',
                fontWeight: 700,
                letterSpacing: '0.08em',
                outline: 'none',
                cursor: 'pointer',
                minHeight: '38px'
              }}
            >
              <option value="popular">MOST POPULAR</option>
              <option value="price-low">PRICE: LOW TO HIGH</option>
              <option value="price-high">PRICE: HIGH TO LOW</option>
              <option value="rating">HIGHEST RATED</option>
            </select>
          </div>

        </div>

        {/* Responsive Product Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
          gap: '2rem'
        }} className="product-grid-responsive">
          {filteredProducts.map(product => (
            <ProductCard
              key={product.id}
              product={product}
              onQuickView={onQuickView}
              onAddToCart={onAddToCart}
              onToggleWishlist={onToggleWishlist}
              isWishlisted={wishlist.includes(product.id)}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
