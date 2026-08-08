import React from 'react';
import { ShoppingBag, Sparkles, Grid, Heart } from 'lucide-react';

export default function MobileBottomBar({ cartCount, wishlistCount, onOpenCart, activeCategory, setActiveCategory }) {
  return (
    <nav
      className="mobile-only"
      style={{
        position: 'fixed',
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: 90,
        backgroundColor: 'rgba(255, 255, 255, 0.96)',
        backdropFilter: 'blur(16px)',
        WebkitBackdropFilter: 'blur(16px)',
        borderTop: '1px solid rgba(0, 0, 0, 0.1)',
        padding: '0.5rem 0.8rem calc(0.5rem + env(safe-area-inset-bottom, 0px)) 0.8rem',
        justifyContent: 'space-around',
        alignItems: 'center',
        boxShadow: '0 -10px 25px rgba(0,0,0,0.06)'
      }}
    >
      {/* Catalog / Shop */}
      <a
        href="#catalog"
        onClick={() => setActiveCategory('All Products')}
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '2px',
          textDecoration: 'none',
          color: activeCategory === 'All Products' ? '#111111' : '#888888',
          fontSize: '0.62rem',
          fontWeight: 700,
          letterSpacing: '0.08em',
          padding: '0.3rem'
        }}
      >
        <Grid size={18} />
        <span>ATELIER</span>
      </a>

      {/* Bespoke Monogramming */}
      <a
        href="#custom-embroidery"
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '2px',
          textDecoration: 'none',
          color: '#D97706',
          fontSize: '0.62rem',
          fontWeight: 800,
          letterSpacing: '0.08em',
          padding: '0.3rem'
        }}
      >
        <Sparkles size={18} />
        <span>BESPOKE</span>
      </a>

      {/* Wishlist */}
      <a
        href="#catalog"
        onClick={() => setActiveCategory('All Products')}
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '2px',
          textDecoration: 'none',
          color: wishlistCount > 0 ? '#111111' : '#888888',
          fontSize: '0.62rem',
          fontWeight: 700,
          letterSpacing: '0.08em',
          position: 'relative',
          padding: '0.3rem'
        }}
      >
        <Heart size={18} />
        <span>SAVED ({wishlistCount})</span>
      </a>

      {/* Cart Bag */}
      <button
        onClick={onOpenCart}
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '2px',
          background: 'none',
          border: 'none',
          color: '#111111',
          fontSize: '0.62rem',
          fontWeight: 800,
          letterSpacing: '0.08em',
          position: 'relative',
          cursor: 'pointer',
          padding: '0.3rem'
        }}
      >
        <div style={{ position: 'relative' }}>
          <ShoppingBag size={18} color="#111111" />
          {cartCount > 0 && (
            <span
              style={{
                position: 'absolute',
                top: '-5px',
                right: '-8px',
                backgroundColor: '#111111',
                color: '#FFFFFF',
                borderRadius: '50%',
                width: '15px',
                height: '15px',
                fontSize: '0.55rem',
                fontWeight: 800,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
            >
              {cartCount}
            </span>
          )}
        </div>
        <span>BAG ({cartCount})</span>
      </button>
    </nav>
  );
}
