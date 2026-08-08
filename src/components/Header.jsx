import React, { useState } from 'react';
import { ShoppingBag, Search, X } from 'lucide-react';

export default function Header({ cartCount, wishlistCount, onOpenCart, searchTerm, setSearchTerm, activeCategory, setActiveCategory }) {
  const [searchOpen, setSearchOpen] = useState(false);

  return (
    <header style={{
      position: 'sticky',
      top: 0,
      zIndex: 100,
      backgroundColor: 'rgba(250, 249, 246, 0.95)',
      backdropFilter: 'blur(16px)',
      WebkitBackdropFilter: 'blur(16px)',
      borderBottom: '1px solid rgba(0, 0, 0, 0.08)'
    }}>
      {/* Top Editorial Ticker */}
      <div style={{
        backgroundColor: '#000000',
        color: '#A1A1AA',
        padding: '0.4rem 1rem',
        fontSize: '0.72rem',
        fontWeight: 600,
        letterSpacing: '0.2em',
        textTransform: 'uppercase',
        borderBottom: '1px solid rgba(0,0,0,0.05)',
        textAlign: 'center'
      }}>
        ATELIER EDITION • 100% PIMA & GIZA COTTON • COMPLIMENTARY EXPRESS WORLDWIDE & INDIA SHIPPING
      </div>

      {/* Main High Fashion Navbar */}
      <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '1.2rem 2rem' }}>
        
        {/* Brand Logo Identity: High-Fashion Luxury Emblem */}
        <a href="#" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.9rem' }}>
          <div style={{
            backgroundColor: '#111111',
            color: '#FFFFFF',
            width: '42px',
            height: '42px',
            borderRadius: '0px', // Architectural sharp corners
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontFamily: 'Cinzel, serif',
            fontWeight: 800,
            fontSize: '1.2rem',
            letterSpacing: '0.05em'
          }}>
            P
          </div>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <span style={{ fontFamily: 'Cinzel, serif', fontWeight: 700, fontSize: '1.35rem', color: '#111111', letterSpacing: '0.18em' }}>
              THE POLAR TREND
            </span>
            <span style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', fontSize: '0.6rem', fontWeight: 700, color: '#999999', letterSpacing: '0.3em', textTransform: 'uppercase' }}>
              COTTON ATELIER • HAUTE EMBROIDERY
            </span>
          </div>
        </a>

        {/* Center High-Fashion Links */}
        <nav style={{ display: 'flex', gap: '2.5rem', alignItems: 'center' }} className="desktop-only">
          <a
            href="#catalog"
            onClick={() => setActiveCategory('All Products')}
            style={{
              textDecoration: 'none',
              color: activeCategory === 'All Products' ? '#111111' : '#777777',
              fontWeight: 700,
              fontSize: '0.78rem',
              letterSpacing: '0.22em',
              textTransform: 'uppercase',
              transition: 'color 0.3s'
            }}
          >
            THE ATELIER
          </a>
          <a
            href="#catalog"
            onClick={() => setActiveCategory('Embroidery Edit')}
            style={{
              textDecoration: 'none',
              color: activeCategory === 'Embroidery Edit' ? '#111111' : '#777777',
              fontWeight: 700,
              fontSize: '0.78rem',
              letterSpacing: '0.22em',
              textTransform: 'uppercase',
              display: 'flex',
              alignItems: 'center',
              gap: '0.4rem',
              transition: 'color 0.3s'
            }}
          >
            EMBROIDERY EDIT
          </a>
          <a
            href="#catalog"
            onClick={() => setActiveCategory('Pure Whites')}
            style={{
              textDecoration: 'none',
              color: activeCategory === 'Pure Whites' ? '#111111' : '#777777',
              fontWeight: 700,
              fontSize: '0.78rem',
              letterSpacing: '0.22em',
              textTransform: 'uppercase',
              transition: 'color 0.3s'
            }}
          >
            PURE WHITES
          </a>
          <a
            href="#fabric-story"
            style={{
              textDecoration: 'none',
              color: '#777777',
              fontWeight: 700,
              fontSize: '0.78rem',
              letterSpacing: '0.22em',
              textTransform: 'uppercase',
              transition: 'color 0.3s'
            }}
          >
            COTTON SCIENCE
          </a>
          <a
            href="#custom-embroidery"
            style={{
              textDecoration: 'none',
              color: '#111111',
              fontWeight: 700,
              fontSize: '0.78rem',
              letterSpacing: '0.22em',
              textTransform: 'uppercase',
              border: '1px solid rgba(0,0,0,0.2)',
              padding: '0.4rem 0.9rem',
              transition: 'all 0.3s'
            }}
          >
            BESPOKE MONOGRAM
          </a>
        </nav>

        {/* Right Actions */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
          
          {/* Search Toggle */}
          <div style={{ position: 'relative' }}>
            {searchOpen ? (
              <div style={{ display: 'flex', alignItems: 'center', backgroundColor: '#F0EDE8', border: '1px solid #E0DDD8', padding: '0.4rem 0.8rem' }}>
                <Search size={15} color="#111111" />
                <input
                  type="text"
                  placeholder="SEARCH ATELIER..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  autoFocus
                  style={{ border: 'none', background: 'transparent', outline: 'none', paddingLeft: '0.5rem', fontSize: '0.78rem', color: '#111111', letterSpacing: '0.1em', width: '160px' }}
                />
                <X size={15} color="#111111" style={{ cursor: 'pointer' }} onClick={() => { setSearchOpen(false); setSearchTerm(''); }} />
              </div>
            ) : (
              <button
                onClick={() => setSearchOpen(true)}
                style={{ background: 'transparent', border: 'none', color: '#111111', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.78rem', letterSpacing: '0.15em', fontWeight: 700 }}
              >
                <Search size={18} />
                <span className="desktop-only">SEARCH</span>
              </button>
            )}
          </div>

          {/* Cart Bag */}
          <button
            onClick={onOpenCart}
            style={{
              backgroundColor: '#111111',
              color: '#FFFFFF',
              border: 'none',
              padding: '0.65rem 1.4rem',
              fontFamily: 'Plus Jakarta Sans, sans-serif',
              fontWeight: 800,
              fontSize: '0.78rem',
              letterSpacing: '0.2em',
              display: 'flex',
              alignItems: 'center',
              gap: '0.6rem',
              cursor: 'pointer',
              transition: 'all 0.3s'
            }}
          >
            <ShoppingBag size={16} />
            <span>BAG ({cartCount})</span>
          </button>

        </div>

      </div>
    </header>
  );
}
