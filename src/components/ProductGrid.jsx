import React, { useState } from 'react';
import ProductCard from './ProductCard';
import { CATEGORIES } from '../data/products';

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
    <section id="collection" style={{ padding: '60px 0', backgroundColor: '#FDFFF0' }}>
      <div className="container" style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px' }}>
        
        <h2 style={{ fontFamily: "'Work Sans', sans-serif", fontSize: '32px', fontWeight: 600, color: '#212326', textAlign: 'center', margin: '0 0 30px 0' }}>
          Our Collection
        </h2>

        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '20px',
          marginBottom: '40px'
        }}>
          
          <div style={{
            display: 'flex',
            gap: '10px',
            overflowX: 'auto',
            WebkitOverflowScrolling: 'touch',
            paddingBottom: '5px'
          }} className="no-scrollbar">
            {CATEGORIES.map(cat => {
              const isActive = activeCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  style={{
                    backgroundColor: isActive ? '#000080' : 'transparent',
                    color: isActive ? '#FFFFFF' : '#555555',
                    border: isActive ? '1px solid #000080' : '1px solid #ddd',
                    padding: '8px 20px',
                    borderRadius: '25px',
                    fontFamily: "'Poppins', sans-serif",
                    fontWeight: 500,
                    fontSize: '13px',
                    cursor: 'pointer',
                    whiteSpace: 'nowrap',
                    transition: 'all 0.3s'
                  }}
                >
                  {cat}
                </button>
              );
            })}
          </div>

          <div style={{ display: 'flex', alignItems: 'center' }}>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              style={{
                fontFamily: "'Poppins', sans-serif",
                fontSize: '13px',
                border: '1px solid #ddd',
                borderRadius: '6px',
                padding: '8px 12px',
                backgroundColor: '#FFFFFF',
                color: '#212326',
                outline: 'none',
                cursor: 'pointer'
              }}
            >
              <option value="popular">Most Popular</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="rating">Highest Rated</option>
            </select>
          </div>
        </div>

        <style>{`
          .product-grid-responsive {
            display: grid;
            grid-template-columns: repeat(4, 1fr);
            gap: 20px;
          }
          @media (max-width: 992px) {
            .product-grid-responsive {
              grid-template-columns: repeat(2, 1fr);
              gap: 12px;
            }
          }
          .no-scrollbar::-webkit-scrollbar {
            display: none;
          }
          .no-scrollbar {
            -ms-overflow-style: none;
            scrollbar-width: none;
          }
        `}</style>
        
        <div className="product-grid-responsive">
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
