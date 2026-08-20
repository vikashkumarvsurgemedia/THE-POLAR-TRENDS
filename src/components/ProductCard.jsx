import React, { useState } from 'react';
import { Heart } from 'lucide-react';

export default function ProductCard({ product, onQuickView, onAddToCart, onToggleWishlist, isWishlisted }) {
  const [hovered, setHovered] = useState(false);
  const [btnHovered, setBtnHovered] = useState(false);
  const [addedToast, setAddedToast] = useState(false);

  const handleAdd = (e) => {
    e.stopPropagation();
    onAddToCart({ ...product, selectedSize: 'M' }, 1);
    setAddedToast(true);
    setTimeout(() => setAddedToast(false), 2000);
  };

  const getBadgeBg = (badge) => {
    const b = badge?.toLowerCase();
    if (b === 'new') return 'var(--accent)';
    if (b === 'limited') return 'var(--sale-price)';
    return 'var(--bg-dark)'; // Best Seller or others
  };

  const isDiscounted = product.originalPrice && product.originalPrice > product.price;
  const discountPercent = isDiscounted 
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100) 
    : 0;

  return (
    <div
      style={{
        backgroundColor: 'var(--bg-card)',
        borderRadius: '10px',
        overflow: 'hidden',
        cursor: 'pointer',
        boxShadow: hovered ? '0 4px 16px rgba(0,0,0,0.1)' : '0 1px 4px rgba(0,0,0,0.06)',
        transform: hovered ? 'translateY(-2px)' : 'none',
        transition: 'all 0.3s ease',
        display: 'flex',
        flexDirection: 'column'
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={() => onQuickView(product)}
    >
      <style>{`
        .product-card-image-wrapper { height: 300px; }
        @media (max-width: 768px) {
          .product-card-image-wrapper { height: 220px; }
        }
      `}</style>
      
      {/* IMAGE AREA */}
      <div
        className="product-card-image-wrapper"
        style={{
          position: 'relative',
          overflow: 'hidden',
          width: '100%'
        }}
      >
        <img
          src={product.image}
          alt={product.name}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            transform: hovered ? 'scale(1.05)' : 'scale(1)',
            transition: 'transform 0.5s ease'
          }}
        />

        {product.badge && (
          <span style={{
            position: 'absolute',
            top: '10px',
            left: '10px',
            backgroundColor: getBadgeBg(product.badge),
            color: '#FFFFFF',
            fontFamily: "'Poppins', sans-serif",
            fontSize: '10px',
            fontWeight: 600,
            padding: '4px 10px',
            borderRadius: '4px',
            zIndex: 2
          }}>
            {product.badge}
          </span>
        )}

        <button
          onClick={(e) => { e.stopPropagation(); onToggleWishlist(product.id); }}
          style={{
            position: 'absolute',
            top: '10px',
            right: '10px',
            width: '32px',
            height: '32px',
            backgroundColor: 'var(--bg-card)',
            borderRadius: '50%',
            boxShadow: '0 2px 6px rgba(0,0,0,0.1)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            border: 'none',
            cursor: 'pointer',
            zIndex: 2
          }}
        >
          <Heart size={16} fill={isWishlisted ? 'var(--sale-price)' : 'none'} color={isWishlisted ? 'var(--sale-price)' : 'var(--text-muted)'} />
        </button>
      </div>

      {/* DETAILS AREA */}
      <div style={{ padding: '14px', flex: 1, display: 'flex', flexDirection: 'column' }}>
        <h3 style={{
          fontFamily: "'Work Sans', sans-serif",
          fontSize: '14px',
          fontWeight: 500,
          color: 'var(--text-primary)',
          margin: '0 0 4px 0',
          display: '-webkit-box',
          WebkitLineClamp: 2,
          WebkitBoxOrient: 'vertical',
          overflow: 'hidden'
        }}>
          {product.name}
        </h3>
        
        <p style={{
          fontFamily: "'Poppins', sans-serif",
          fontSize: '12px',
          color: 'var(--text-muted)',
          margin: '0 0 6px 0',
          whiteSpace: 'nowrap',
          overflow: 'hidden',
          textOverflow: 'ellipsis'
        }}>
          {product.embroidery || product.description}
        </p>

        {/* Rating */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '4px', marginBottom: '6px' }}>
          <div style={{ display: 'flex', color: 'var(--stars)', fontSize: '12px' }}>
            {'★'.repeat(Math.round(product.rating || 5))}
            <span style={{ color: 'var(--star-empty)' }}>{'★'.repeat(5 - Math.round(product.rating || 5))}</span>
          </div>
          <span style={{ fontFamily: "'Poppins', sans-serif", fontSize: '12px', color: 'var(--text-muted)' }}>
            ({product.reviews || 0})
          </span>
        </div>

        {/* Price Row */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginTop: 'auto' }}>
          <span style={{ fontFamily: "'Work Sans', sans-serif", fontSize: '16px', fontWeight: 600, color: 'var(--text-primary)' }}>
            ₹{product.price.toLocaleString('en-IN')}
          </span>
          {isDiscounted && (
            <>
              <span style={{ fontFamily: "'Poppins', sans-serif", fontSize: '13px', color: 'var(--text-muted)', textDecoration: 'line-through' }}>
                ₹{product.originalPrice.toLocaleString('en-IN')}
              </span>
              <span style={{ fontFamily: "'Poppins', sans-serif", fontSize: '11px', color: 'var(--sale-price)', fontWeight: 600 }}>
                {discountPercent}% OFF
              </span>
            </>
          )}
        </div>
      </div>

      {/* ACTION AREA */}
      <button
        onClick={handleAdd}
        onMouseEnter={() => setBtnHovered(true)}
        onMouseLeave={() => setBtnHovered(false)}
        style={{
          width: '100%',
          backgroundColor: btnHovered ? 'var(--accent-hover)' : 'var(--accent)',
          color: '#FFFFFF',
          fontFamily: "'Poppins', sans-serif",
          fontSize: '13px',
          fontWeight: 500,
          borderRadius: '0 0 10px 10px',
          padding: '10px',
          border: 'none',
          cursor: 'pointer',
          transition: 'background-color 0.2s ease'
        }}
      >
        {addedToast ? 'Added!' : 'ADD TO CART'}
      </button>
    </div>
  );
}
