import React from 'react';
import { Home, Grid, Heart, ShoppingBag } from 'lucide-react';

export default function MobileBottomBar({ cartCount, wishlistCount, onOpenCart, activeCategory, setActiveCategory }) {
  return (
    <>
      <nav
        className="mobile-only"
        style={{
          position: 'fixed',
          bottom: 0,
          left: 0,
          right: 0,
          zIndex: 90,
          backgroundColor: '#FDFFF0',
          borderTop: '1px solid rgba(0,0,0,0.08)',
          padding: '8px 10px calc(8px + env(safe-area-inset-bottom, 0px)) 10px',
          display: 'flex',
          justifyContent: 'space-around',
          alignItems: 'center'
        }}
      >
        {/* Home */}
        <a
          href="#"
          onClick={() => setActiveCategory('')}
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '4px',
            textDecoration: 'none',
            color: activeCategory === '' ? '#000080' : '#777777',
          }}
        >
          <Home size={22} />
          <span style={{ fontFamily: "'Poppins', sans-serif", fontSize: '10px' }}>Home</span>
        </a>

        {/* Shop */}
        <a
          href="#collection"
          onClick={() => setActiveCategory('All Shirts')}
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '4px',
            textDecoration: 'none',
            color: activeCategory === 'All Shirts' ? '#000080' : '#777777',
          }}
        >
          <Grid size={22} />
          <span style={{ fontFamily: "'Poppins', sans-serif", fontSize: '10px' }}>Shop</span>
        </a>

        {/* Wishlist */}
        <a
          href="#collection"
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '4px',
            textDecoration: 'none',
            color: '#777777',
            position: 'relative'
          }}
        >
          <div style={{ position: 'relative' }}>
            <Heart size={22} />
            {wishlistCount > 0 && (
              <span style={{
                position: 'absolute',
                top: '-5px',
                right: '-8px',
                backgroundColor: '#000080',
                color: '#FFFFFF',
                borderRadius: '50%',
                width: '14px',
                height: '14px',
                fontSize: '8px',
                fontFamily: "'Poppins', sans-serif",
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontWeight: 'bold'
              }}>
                {wishlistCount}
              </span>
            )}
          </div>
          <span style={{ fontFamily: "'Poppins', sans-serif", fontSize: '10px' }}>Wishlist</span>
        </a>

        {/* Bag */}
        <button
          onClick={onOpenCart}
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '4px',
            background: 'none',
            border: 'none',
            color: '#777777',
            cursor: 'pointer',
            padding: 0
          }}
        >
          <div style={{ position: 'relative' }}>
            <ShoppingBag size={22} />
            {cartCount > 0 && (
              <span style={{
                position: 'absolute',
                top: '-5px',
                right: '-8px',
                backgroundColor: '#000080',
                color: '#FFFFFF',
                borderRadius: '50%',
                width: '14px',
                height: '14px',
                fontSize: '8px',
                fontFamily: "'Poppins', sans-serif",
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontWeight: 'bold'
              }}>
                {cartCount}
              </span>
            )}
          </div>
          <span style={{ fontFamily: "'Poppins', sans-serif", fontSize: '10px' }}>Bag</span>
        </button>
      </nav>

      <style dangerouslySetInnerHTML={{__html: `
        @media (min-width: 769px) {
          .mobile-only { display: none !important; }
        }
      `}} />
    </>
  );
}
