import React, { useState } from 'react';
import { ShoppingBag, Search, X, Menu, Sparkles, ChevronRight } from 'lucide-react';

export default function Header({ cartCount, wishlistCount, onOpenCart, searchTerm, setSearchTerm, activeCategory, setActiveCategory }) {
  const [searchOpen, setSearchOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleMobileCategorySelect = (cat) => {
    setActiveCategory(cat);
    setMobileMenuOpen(false);
  };

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
        padding: '0.4rem 0.8rem',
        fontSize: '0.65rem',
        fontWeight: 600,
        letterSpacing: '0.15em',
        textTransform: 'uppercase',
        borderBottom: '1px solid rgba(0,0,0,0.05)',
        textAlign: 'center',
        whiteSpace: 'nowrap',
        overflow: 'hidden',
        textOverflow: 'ellipsis'
      }}>
        ATELIER EDITION • 100% PIMA & GIZA COTTON • COMPLIMENTARY EXPRESS SHIPPING
      </div>

      {/* Main Navbar */}
      <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0.9rem 1.25rem' }}>
        
        {/* Mobile Hamburger Menu Toggle */}
        <button
          onClick={() => setMobileMenuOpen(true)}
          className="mobile-only"
          style={{
            background: 'none',
            border: 'none',
            color: '#111111',
            cursor: 'pointer',
            padding: '0.3rem',
            marginRight: '0.5rem'
          }}
          aria-label="Open Mobile Menu"
        >
          <Menu size={22} />
        </button>

        {/* Brand Logo Identity */}
        <a href="#" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.7rem' }}>
          <div style={{
            backgroundColor: '#111111',
            color: '#FFFFFF',
            width: '38px',
            height: '38px',
            borderRadius: '0px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontFamily: 'Cinzel, serif',
            fontWeight: 800,
            fontSize: '1.15rem',
            letterSpacing: '0.05em',
            flexShrink: 0
          }}>
            P
          </div>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <span style={{ fontFamily: 'Cinzel, serif', fontWeight: 700, fontSize: '1.15rem', color: '#111111', letterSpacing: '0.15em', lineHeight: 1.1 }}>
              THE POLAR TREND
            </span>
            <span style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', fontSize: '0.55rem', fontWeight: 700, color: '#999999', letterSpacing: '0.25em', textTransform: 'uppercase' }}>
              COTTON ATELIER
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav style={{ display: 'flex', gap: '2rem', alignItems: 'center' }} className="desktop-only">
          <a
            href="#catalog"
            onClick={() => setActiveCategory('All Products')}
            style={{
              textDecoration: 'none',
              color: activeCategory === 'All Products' ? '#111111' : '#777777',
              fontWeight: 700,
              fontSize: '0.75rem',
              letterSpacing: '0.2em',
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
              fontSize: '0.75rem',
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
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
              fontSize: '0.75rem',
              letterSpacing: '0.2em',
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
              fontSize: '0.75rem',
              letterSpacing: '0.2em',
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
              fontSize: '0.75rem',
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              border: '1px solid rgba(0,0,0,0.2)',
              padding: '0.4rem 0.8rem',
              transition: 'all 0.3s'
            }}
          >
            BESPOKE MONOGRAM
          </a>
        </nav>

        {/* Right Actions */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          
          {/* Search Toggle */}
          <div style={{ position: 'relative' }}>
            {searchOpen ? (
              <div style={{ display: 'flex', alignItems: 'center', backgroundColor: '#F0EDE8', border: '1px solid #E0DDD8', padding: '0.35rem 0.6rem' }}>
                <Search size={15} color="#111111" />
                <input
                  type="text"
                  placeholder="SEARCH..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  autoFocus
                  style={{ border: 'none', background: 'transparent', outline: 'none', paddingLeft: '0.4rem', fontSize: '0.75rem', color: '#111111', letterSpacing: '0.1em', width: '110px' }}
                />
                <X size={15} color="#111111" style={{ cursor: 'pointer' }} onClick={() => { setSearchOpen(false); setSearchTerm(''); }} />
              </div>
            ) : (
              <button
                onClick={() => setSearchOpen(true)}
                style={{ background: 'transparent', border: 'none', color: '#111111', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.75rem', letterSpacing: '0.15em', fontWeight: 700, padding: '0.4rem' }}
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
              padding: '0.55rem 1.1rem',
              fontFamily: 'Plus Jakarta Sans, sans-serif',
              fontWeight: 800,
              fontSize: '0.75rem',
              letterSpacing: '0.15em',
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              cursor: 'pointer',
              minHeight: '40px'
            }}
          >
            <ShoppingBag size={15} />
            <span>BAG ({cartCount})</span>
          </button>

        </div>

      </div>

      {/* Mobile Menu Overlay Drawer */}
      {mobileMenuOpen && (
        <div style={{
          position: 'fixed',
          inset: 0,
          zIndex: 450,
          backgroundColor: 'rgba(0,0,0,0.6)',
          backdropFilter: 'blur(8px)',
          display: 'flex',
          justifyContent: 'flex-start'
        }} className="animate-fade-in">
          <div style={{
            width: '85%',
            maxWidth: '340px',
            backgroundColor: '#FAF9F6',
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            boxShadow: '10px 0 30px rgba(0,0,0,0.5)',
            padding: '1.5rem'
          }} className="animate-slide-right">
            
            <div>
              {/* Menu Header */}
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingBottom: '1.2rem', borderBottom: '1px solid rgba(0,0,0,0.1)' }}>
                <div style={{ fontFamily: 'Cinzel, serif', fontWeight: 700, fontSize: '1.1rem', letterSpacing: '0.15em', color: '#111111' }}>
                  ATELIER NAVIGATION
                </div>
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  style={{ background: 'none', border: 'none', color: '#111111', cursor: 'pointer', padding: '0.4rem' }}
                >
                  <X size={22} />
                </button>
              </div>

              {/* Mobile Search Box */}
              <div style={{ marginTop: '1.2rem', marginBottom: '1.5rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', backgroundColor: '#FFFFFF', border: '1px solid rgba(0,0,0,0.15)', padding: '0.6rem 0.8rem' }}>
                  <Search size={16} color="#777777" />
                  <input
                    type="text"
                    placeholder="Search Pima Cotton, Embroidery..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    style={{ border: 'none', background: 'transparent', outline: 'none', paddingLeft: '0.6rem', fontSize: '0.82rem', color: '#111111', width: '100%' }}
                  />
                </div>
              </div>

              {/* Nav Category Links */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.3rem' }}>
                <a
                  href="#catalog"
                  onClick={() => handleMobileCategorySelect('All Products')}
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    padding: '0.9rem 0.5rem',
                    textDecoration: 'none',
                    color: '#111111',
                    fontFamily: 'Cinzel, serif',
                    fontWeight: 700,
                    fontSize: '0.95rem',
                    borderBottom: '1px solid rgba(0,0,0,0.06)'
                  }}
                >
                  <span>ALL COTTON SHIRTS</span>
                  <ChevronRight size={16} color="#999" />
                </a>

                <a
                  href="#catalog"
                  onClick={() => handleMobileCategorySelect('Embroidery Edit')}
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    padding: '0.9rem 0.5rem',
                    textDecoration: 'none',
                    color: '#111111',
                    fontFamily: 'Cinzel, serif',
                    fontWeight: 700,
                    fontSize: '0.95rem',
                    borderBottom: '1px solid rgba(0,0,0,0.06)'
                  }}
                >
                  <span>EMBROIDERY EDIT</span>
                  <ChevronRight size={16} color="#999" />
                </a>

                <a
                  href="#catalog"
                  onClick={() => handleMobileCategorySelect('Pure Whites')}
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    padding: '0.9rem 0.5rem',
                    textDecoration: 'none',
                    color: '#111111',
                    fontFamily: 'Cinzel, serif',
                    fontWeight: 700,
                    fontSize: '0.95rem',
                    borderBottom: '1px solid rgba(0,0,0,0.06)'
                  }}
                >
                  <span>PURE WHITES COLLECTION</span>
                  <ChevronRight size={16} color="#999" />
                </a>

                <a
                  href="#custom-embroidery"
                  onClick={() => setMobileMenuOpen(false)}
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    padding: '0.9rem 0.5rem',
                    textDecoration: 'none',
                    color: '#D97706',
                    fontFamily: 'Cinzel, serif',
                    fontWeight: 700,
                    fontSize: '0.95rem',
                    borderBottom: '1px solid rgba(0,0,0,0.06)'
                  }}
                >
                  <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <Sparkles size={16} /> BESPOKE MONOGRAMMING
                  </span>
                  <ChevronRight size={16} color="#D97706" />
                </a>

                <a
                  href="#fabric-story"
                  onClick={() => setMobileMenuOpen(false)}
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    padding: '0.9rem 0.5rem',
                    textDecoration: 'none',
                    color: '#111111',
                    fontFamily: 'Cinzel, serif',
                    fontWeight: 700,
                    fontSize: '0.95rem',
                    borderBottom: '1px solid rgba(0,0,0,0.06)'
                  }}
                >
                  <span>COTTON SCIENCE & LOUPE</span>
                  <ChevronRight size={16} color="#999" />
                </a>
              </div>
            </div>

            {/* Bottom Info */}
            <div style={{ paddingTop: '1.5rem', borderTop: '1px solid rgba(0,0,0,0.1)' }}>
              <div style={{ fontSize: '0.72rem', color: '#777777', letterSpacing: '0.1em', marginBottom: '0.4rem' }}>
                FLAGSHIP ATELIERS
              </div>
              <div style={{ fontSize: '0.8rem', fontWeight: 700, color: '#111111' }}>
                Mumbai • New Delhi • Bengaluru
              </div>
            </div>

          </div>
        </div>
      )}

    </header>
  );
}
