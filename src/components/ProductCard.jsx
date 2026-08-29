import React, { useState } from 'react';
import { Heart } from 'lucide-react';

/* Product card.

   This is where most stores give the positioning away, so almost everything
   the old card displayed has been removed: the star row, the review count,
   the coloured badge pill, the percentage-off flash, the permanent Add to
   Bag button. A card carrying six competing signals reads as a marketplace
   listing no matter how good the photograph is.

   What survives: the photograph at 4:5, the name, the fabric, the price. Add
   to Bag is revealed over the image on hover on desktop, and is always
   present on touch, where there is no hover to reveal it. */

export default function ProductCard({ product, onQuickView, onAddToCart, onToggleWishlist, isWishlisted }) {
  const [hovered, setHovered] = useState(false);
  const [added, setAdded] = useState(false);
  // Several catalogue entries still point at placeholder stock URLs, and at
  // least one is already dead. A broken <img> renders as a blank white box,
  // which on a grid of otherwise careful photography looks like a bug rather
  // than a gap — so a failed load falls back to a paper tile carrying the
  // garment name instead.
  const [imgFailed, setImgFailed] = useState(false);

  const handleAdd = (e) => {
    e.stopPropagation();
    onAddToCart({ ...product, selectedSize: 'M' }, 1);
    setAdded(true);
    setTimeout(() => setAdded(false), 1800);
  };

  const isDiscounted = product.originalPrice && product.originalPrice > product.price;
  const inr = (n) => `₹${n.toLocaleString('en-IN')}`;

  return (
    <article
      className="product-card card"
      style={{ position: 'relative', display: 'flex', flexDirection: 'column' }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="product-card-image-wrapper">
        {imgFailed ? (
          <div
            style={{
              width: '100%', height: '100%',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              padding: '2rem', textAlign: 'center',
              backgroundColor: 'var(--paper-deep)'
            }}
          >
            <span className="eyebrow" style={{ fontSize: '0.5625rem', lineHeight: 1.8 }}>
              {product.name}
              <br />
              <span style={{ color: 'var(--bronze)' }}>Photography to follow</span>
            </span>
          </div>
        ) : (
          <img
            src={product.image}
            alt={product.name}
            loading="lazy"
            onError={() => setImgFailed(true)}
          />
        )}

        {/* Badge — a tracked label on a hairline, top-left, never a fill. */}
        {product.badge && (
          <span
            className="badge"
            style={{
              position: 'absolute', top: 14, left: 14,
              color: '#FBFAF8',
              mixBlendMode: 'difference',
              zIndex: 2
            }}
          >
            {product.badge}
          </span>
        )}

        {/* Wishlist — outline only; fills bronze once saved. */}
        <button
          className="card-action"
          onClick={(e) => { e.stopPropagation(); onToggleWishlist(product.id); }}
          aria-label={isWishlisted ? `Remove ${product.name} from wishlist` : `Save ${product.name} to wishlist`}
          aria-pressed={isWishlisted}
          style={{
            position: 'absolute', top: 10, right: 10,
            background: 'transparent', border: 'none', cursor: 'pointer',
            padding: 8, lineHeight: 0
          }}
        >
          <Heart
            size={17}
            strokeWidth={1.25}
            style={{
              color: isWishlisted ? 'var(--bronze)' : '#FBFAF8',
              fill: isWishlisted ? 'var(--bronze)' : 'none',
              filter: 'drop-shadow(0 1px 3px rgba(15,13,10,0.45))',
              transition: 'color var(--medium) var(--ease), fill var(--medium) var(--ease)'
            }}
          />
        </button>

        {/* Add to Bag — slides up from the base of the image on hover. On
            touch there is no hover, so it sits visible at all times. */}
        <div
          className="card-action"
          style={{
            position: 'absolute', left: 0, right: 0, bottom: 0,
            transform: hovered ? 'translateY(0)' : 'translateY(101%)',
            transition: 'transform var(--slow) var(--ease)'
          }}
        >
          <button
            onClick={handleAdd}
            disabled={product.inStock === false}
            style={{
              width: '100%',
              padding: '15px 10px',
              border: 'none',
              cursor: product.inStock === false ? 'not-allowed' : 'pointer',
              backgroundColor: added ? 'var(--success)' : 'rgba(23,20,15,0.92)',
              color: '#FBFAF8',
              fontFamily: 'var(--font-ui)',
              fontSize: '0.6875rem',
              fontWeight: 400,
              letterSpacing: '0.22em',
              textTransform: 'uppercase',
              transition: 'background-color var(--medium) var(--ease)'
            }}
          >
            {product.inStock === false ? 'Sold Out' : added ? 'Added' : 'Add to Bag'}
          </button>
        </div>
      </div>

      {/* Caption block. Centred, airy, and quiet — this is a museum label,
          not a price tag. */}
      <div style={{ padding: '1.35rem 0.25rem 0', textAlign: 'center' }}>
        <h3 className="product-name" style={{ marginBottom: '0.6rem' }}>
          <button
            onClick={() => onQuickView(product)}
            className="stretched-link"
            style={{
              background: 'none', border: 'none', padding: 0, cursor: 'pointer',
              font: 'inherit', letterSpacing: 'inherit', textTransform: 'inherit',
              color: 'var(--ink)', textAlign: 'center'
            }}
          >
            {product.name}
          </button>
        </h3>

        <p
          className="eyebrow"
          style={{
            fontSize: '0.625rem',
            marginBottom: '0.85rem',
            color: 'var(--ink-muted)',
            display: '-webkit-box',
            WebkitLineClamp: 1,
            WebkitBoxOrient: 'vertical',
            overflow: 'hidden'
          }}
        >
          {product.fabric?.split('(')[0].trim()}
        </p>

        <p>
          <span className="price">{inr(product.price)}</span>
          {isDiscounted && <span className="price-was">{inr(product.originalPrice)}</span>}
        </p>
      </div>
    </article>
  );
}
