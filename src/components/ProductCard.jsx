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

  const rating = product.rating || 5;
  const reviewCount = product.reviewCount || 0;

  return (
    <div
      className="product-card"
      style={{
        position: 'relative',
        backgroundColor: 'var(--bg-card)',
        borderRadius: '10px',
        overflow: 'hidden',
        boxShadow: hovered ? '0 4px 16px rgba(0,0,0,0.1)' : '0 1px 4px rgba(0,0,0,0.06)',
        transform: hovered ? 'translateY(-2px)' : 'none',
        transition: 'all 0.3s ease',
        display: 'flex',
        flexDirection: 'column',
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* IMAGE AREA */}
      <div className="product-card-image-wrapper" style={{ position: 'relative', overflow: 'hidden', width: '100%' }}>
        <img
          src={product.image}
          alt={product.name}
          loading="lazy"
          decoding="async"
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            transform: hovered ? 'scale(1.05)' : 'scale(1)',
            transition: 'transform 0.5s ease',
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
            zIndex: 2,
          }}>
            {product.badge}
          </span>
        )}

        <button
          type="button"
          aria-label={isWishlisted
            ? `Remove ${product.name} from wishlist`
            : `Add ${product.name} to wishlist`}
          aria-pressed={isWishlisted}
          onClick={(e) => { e.stopPropagation(); onToggleWishlist(product.id); }}
          className="card-action"
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
          margin: '0 0 4px 0',
        }}>
          {/* The title is the card's interactive element. Its ::after stretches
              over the whole card, so the entire surface stays clickable while
              the card contributes a single tab stop. */}
          <button
            type="button"
            className="stretched-link"
            onClick={() => onQuickView(product)}
            style={{
              font: 'inherit',
              color: 'var(--text-primary)',
              background: 'none',
              border: 'none',
              padding: 0,
              textAlign: 'left',
              cursor: 'pointer',
              display: '-webkit-box',
              WebkitLineClamp: 2,
              WebkitBoxOrient: 'vertical',
              overflow: 'hidden',
            }}
          >
            {product.name}
          </button>
        </h3>

        <p style={{
          fontFamily: "'Poppins', sans-serif",
          fontSize: '12px',
          color: 'var(--text-muted)',
          margin: '0 0 6px 0',
          whiteSpace: 'nowrap',
          overflow: 'hidden',
          textOverflow: 'ellipsis',
        }}>
          {product.embroidery || product.description}
        </p>

        {/* Rating */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '4px', marginBottom: '6px' }}>
          <div
            role="img"
            aria-label={`Rated ${rating} out of 5 from ${reviewCount} reviews`}
            style={{ display: 'flex', color: 'var(--stars)', fontSize: '12px' }}
          >
            <span aria-hidden="true">{'★'.repeat(Math.round(rating))}</span>
            <span aria-hidden="true" style={{ color: 'var(--star-empty)' }}>{'★'.repeat(5 - Math.round(rating))}</span>
          </div>
          <span aria-hidden="true" style={{ fontFamily: "'Poppins', sans-serif", fontSize: '12px', color: 'var(--text-muted)' }}>
            ({reviewCount})
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
                <span className="sr-only">Was </span>
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
        type="button"
        onClick={handleAdd}
        onMouseEnter={() => setBtnHovered(true)}
        onMouseLeave={() => setBtnHovered(false)}
        className="card-action"
        aria-label={`Add ${product.name} to cart`}
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
          transition: 'background-color 0.2s ease',
        }}
      >
        {addedToast ? 'Added!' : 'ADD TO CART'}
      </button>
    </div>
  );
}
