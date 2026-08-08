import React, { useState } from 'react';
import { Eye, Heart, ShoppingBag } from 'lucide-react';

export default function ProductCard({ product, onQuickView, onAddToCart, onToggleWishlist, isWishlisted }) {
  const [hovered, setHovered] = useState(false);
  const [addedToast, setAddedToast] = useState(false);

  const handleQuickSizeAdd = (size, e) => {
    e.stopPropagation();
    onAddToCart({ ...product, selectedSize: size }, 1);
    setAddedToast(true);
    setTimeout(() => setAddedToast(false), 2000);
  };

  return (
    <div
      style={{
        backgroundColor: '#FFFFFF',
        border: '1px solid rgba(0, 0, 0, 0.06)',
        transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
        display: 'flex',
        flexDirection: 'column',
        position: 'relative'
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Product Image Box */}
      <div
        className="luxury-card-img-wrapper product-card-image-wrapper"
        style={{ position: 'relative', width: '100%', height: '340px', cursor: 'pointer' }}
        onClick={() => onQuickView(product)}
      >
        <img
          src={product.image}
          alt={product.name}
          className="primary-img"
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        />

        {/* Top Badges */}
        <div style={{ position: 'absolute', top: '10px', left: '10px', zIndex: 2 }}>
          {product.badge && (
            <span style={{
              backgroundColor: '#111111',
              color: '#FFFFFF',
              padding: '0.25rem 0.6rem',
              fontSize: '0.6rem',
              fontWeight: 800,
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
              border: '1px solid rgba(0,0,0,0.1)'
            }}>
              {product.badge}
            </span>
          )}
        </div>

        {/* Wishlist Icon */}
        <button
          onClick={(e) => { e.stopPropagation(); onToggleWishlist(product.id); }}
          style={{
            position: 'absolute',
            top: '10px',
            right: '10px',
            width: '36px',
            height: '36px',
            backgroundColor: 'rgba(255, 255, 255, 0.9)',
            backdropFilter: 'blur(6px)',
            border: '1px solid rgba(0,0,0,0.1)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            zIndex: 3
          }}
          aria-label="Wishlist"
        >
          <Heart size={16} fill={isWishlisted ? '#111111' : 'none'} color={isWishlisted ? '#111111' : '#999999'} />
        </button>

        {/* Hover / Touch Quick Size Selector Overlay */}
        <div
          style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            backgroundColor: 'rgba(250, 249, 246, 0.97)',
            backdropFilter: 'blur(10px)',
            padding: '0.6rem 0.8rem',
            borderTop: '1px solid rgba(0,0,0,0.1)',
            display: 'flex',
            flexDirection: 'column',
            gap: '0.4rem',
            transform: hovered ? 'translateY(0)' : 'translateY(100%)',
            opacity: hovered ? 1 : 0,
            transition: 'all 0.35s cubic-bezier(0.16, 1, 0.3, 1)',
            zIndex: 3
          }}
          className="desktop-only"
        >
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <span style={{ fontSize: '0.62rem', fontWeight: 800, color: '#777777', letterSpacing: '0.12em' }}>
              {addedToast ? '✓ ADDED TO BAG!' : 'QUICK ADD SIZE:'}
            </span>
            <button
              onClick={(e) => { e.stopPropagation(); onQuickView(product); }}
              style={{ background: 'none', border: 'none', color: '#111111', fontSize: '0.62rem', fontWeight: 700, letterSpacing: '0.08em', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '2px' }}
            >
              <Eye size={12} /> DETAILS
            </button>
          </div>

          <div style={{ display: 'flex', gap: '0.3rem' }}>
            {product.sizes.map(size => (
              <button
                key={size}
                onClick={(e) => handleQuickSizeAdd(size, e)}
                style={{
                  flex: 1,
                  padding: '0.3rem 0',
                  border: '1px solid rgba(0,0,0,0.15)',
                  backgroundColor: 'rgba(0,0,0,0.03)',
                  color: '#111111',
                  fontSize: '0.7rem',
                  fontWeight: 800,
                  cursor: 'pointer',
                  transition: 'all 0.2s',
                  minHeight: '32px'
                }}
              >
                {size}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Card Details */}
      <div style={{ padding: '1rem', display: 'flex', flexDirection: 'column', flex: 1, justifyContent: 'space-between' }}>
        <div>
          <div style={{ fontSize: '0.62rem', fontWeight: 800, color: '#999999', letterSpacing: '0.18em', textTransform: 'uppercase', marginBottom: '0.3rem' }}>
            {product.category}
          </div>

          <h3 style={{ fontFamily: 'Cinzel, serif', fontSize: '0.95rem', fontWeight: 600, color: '#111111', lineHeight: 1.25, marginBottom: '0.3rem' }}>
            {product.name}
          </h3>

          <p style={{ fontSize: '0.75rem', color: '#777777', lineHeight: 1.35, marginBottom: '0.8rem', height: '2.7em', overflow: 'hidden' }}>
            {product.embroidery}
          </p>
        </div>

        <div style={{ paddingTop: '0.6rem', borderTop: '1px solid rgba(0, 0, 0, 0.06)', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div style={{ fontFamily: 'Cinzel, serif', fontSize: '1.05rem', fontWeight: 700, color: '#111111' }}>
            ₹{product.price.toLocaleString('en-IN')}
          </div>

          {/* Touch-Friendly Action Button */}
          <button
            onClick={() => onQuickView(product)}
            style={{
              backgroundColor: 'transparent',
              color: '#111111',
              border: '1px solid rgba(0,0,0,0.2)',
              padding: '0.45rem 0.8rem',
              fontSize: '0.68rem',
              fontWeight: 800,
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              cursor: 'pointer',
              transition: 'all 0.3s',
              minHeight: '36px',
              display: 'flex',
              alignItems: 'center',
              gap: '0.3rem'
            }}
          >
            <ShoppingBag size={13} />
            <span>VIEW</span>
          </button>
        </div>
      </div>
    </div>
  );
}
