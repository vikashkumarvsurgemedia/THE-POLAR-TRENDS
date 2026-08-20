import React, { useState, useEffect } from 'react';
import { Search, ShoppingBag, Heart, Menu, X } from 'lucide-react';

export default function Header({ cartCount, wishlistCount, onOpenCart, searchTerm, setSearchTerm, activeCategory, setActiveCategory }) {
  const [searchOpen, setSearchOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', category: 'All Products', href: '#main' },
    { label: "Men's Wear", category: "Men's Wear", href: '#collection' },
    { label: "Women's Wear", category: "Women's Wear", href: '#collection' },
    { label: "Men's Footwear", category: "Men's Footwear", href: '#collection' },
    { label: "Women's Footwear", category: "Women's Footwear", href: '#collection' },
    { label: "Men's Accessories", category: "Men's Accessories", href: '#collection' },
    { label: "Women's Accessories", category: "Women's Accessories", href: '#collection' },
    // Jump-only link: leaves the product filter alone.
    { label: 'Our Blogs', href: '#reels' },
  ];

  const handleNavClick = (link) => {
    if (link.category) setActiveCategory(link.category);
    setMobileMenuOpen(false);
  };

  return (
    <>
      {/* Top Announcement Bar — cream, so the blue reads as the site's canvas
          rather than a stripe at the very top of the page. */}
      <div style={{
        backgroundColor: 'var(--bg-light)',
        color: 'var(--text-on-light)',
        textAlign: 'center',
        padding: '7px',
        fontFamily: "'Poppins', sans-serif",
        fontSize: '11px',
        fontWeight: 500,
        letterSpacing: '0.5px'
      }}>
        FREE SHIPPING ON ORDERS ABOVE ₹999 • COD AVAILABLE • EASY RETURNS
      </div>

      {/* Sticky Header */}
      <header style={{
        position: isSticky ? 'fixed' : 'relative',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        backgroundColor: 'var(--bg-primary)',
        boxShadow: isSticky ? '0 2px 8px rgba(0,0,0,0.06)' : 'none',
        transition: 'box-shadow 0.3s ease',
      }}>
        {/* Main Header Row — three equal columns, so the brand can be centred by
            layout instead of absolute positioning (which overlapped the icons
            on small phones). */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr auto 1fr',
          alignItems: 'center',
          gap: '12px',
          height: '60px',
          padding: '0 20px',
          borderBottom: '1px solid var(--border)'
        }}>
          {/* Left Actions — menu toggle only; search now lives on the right. */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', justifySelf: 'start' }}>
            <button
              className="mobile-only icon-btn"
              aria-label="Open menu"
              aria-expanded={mobileMenuOpen}
              onClick={() => setMobileMenuOpen(true)}
              style={iconBtn}
            >
              <Menu size={24} />
            </button>
          </div>

          {/* Center Brand */}
          <a href="#main" className="brand" style={{
            fontFamily: "'Work Sans', sans-serif",
            fontWeight: 600,
            letterSpacing: '2px',
            color: 'var(--text-primary)',
            textAlign: 'center',
            whiteSpace: 'nowrap',
            textDecoration: 'none',
          }}>
            THE POLAR TREND
          </a>

          {/* Right Actions — search, wishlist, cart */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', justifySelf: 'end' }}>
            <div style={{ position: 'relative', display: 'flex', alignItems: 'center' }}>
              <button
                className="icon-btn"
                aria-label={searchOpen ? 'Close search' : 'Search'}
                aria-expanded={searchOpen}
                onClick={() => setSearchOpen(!searchOpen)}
                style={iconBtn}
              >
                <Search size={20} />
              </button>
              {searchOpen && (
                <input
                  type="search"
                  placeholder="Search products..."
                  aria-label="Search products"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  autoFocus
                  style={{
                    position: 'absolute',
                    // Opens leftwards from the icon so it can't run off the
                    // right edge of the viewport.
                    right: '40px',
                    backgroundColor: 'var(--bg-card)',
                    border: '1px solid var(--border)',
                    color: 'var(--text-primary)',
                    padding: '7px 12px',
                    borderRadius: '6px',
                    fontFamily: "'Poppins', sans-serif",
                    fontSize: '13px',
                    outline: 'none',
                    width: 'clamp(140px, 34vw, 220px)',
                  }}
                />
              )}
            </div>
            <button
              className="icon-btn"
              aria-label={`Wishlist, ${wishlistCount} ${wishlistCount === 1 ? 'item' : 'items'}`}
              style={iconBtn}
            >
              <Heart size={20} />
              {wishlistCount > 0 && <span style={countBadge}>{wishlistCount}</span>}
            </button>
            <button
              className="icon-btn"
              aria-label={`Open cart, ${cartCount} ${cartCount === 1 ? 'item' : 'items'}`}
              onClick={onOpenCart}
              style={iconBtn}
            >
              <ShoppingBag size={20} />
              {cartCount > 0 && <span style={countBadge}>{cartCount}</span>}
            </button>
          </div>
        </div>

        {/* Navigation Bar (Desktop) — scrolls rather than wraps if the eight
            departments outrun a narrow window. */}
        <div className="desktop-only no-scrollbar" style={{
          display: 'flex',
          justifyContent: 'center',
          backgroundColor: 'var(--bg-primary)',
          borderBottom: '1px solid var(--border)',
          overflowX: 'auto',
        }}>
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => handleNavClick(link)}
              style={{
                fontFamily: "'Work Sans', sans-serif",
                fontSize: '14px',
                fontWeight: activeCategory === link.category ? 600 : 500,
                padding: '13px 16px',
                textDecoration: 'none',
                whiteSpace: 'nowrap',
                color: activeCategory === link.category ? '#FFFFFF' : 'var(--text-body)',
                transition: 'color 0.2s ease',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px'
              }}
              onMouseEnter={(e) => { e.currentTarget.style.color = '#FFFFFF'; }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color =
                  activeCategory === link.category ? '#FFFFFF' : 'var(--text-body)';
              }}
            >
              <span>{link.label}</span>
              {link.badge && (
                <span style={{
                  backgroundColor: link.badgeColor || 'var(--sale-price)',
                  color: '#FFFFFF',
                  fontSize: '9px',
                  fontWeight: 700,
                  padding: '2px 5px',
                  borderRadius: '3px',
                  lineHeight: '1',
                  letterSpacing: '0.5px'
                }}>
                  {link.badge}
                </span>
              )}
            </a>
          ))}
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div style={{
          position: 'fixed',
          inset: 0,
          zIndex: 200,
          backgroundColor: 'rgba(0,0,0,0.5)',
          display: 'flex'
        }}>
          <div style={{
            width: '80%',
            maxWidth: '300px',
            backgroundColor: 'var(--bg-primary)',
            height: '100%',
            padding: '20px',
            display: 'flex',
            flexDirection: 'column',
            animation: 'slideRight 0.3s ease'
          }}>
            <div style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: '20px' }}>
              <button
                onClick={() => setMobileMenuOpen(false)}
                style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 0, color: 'var(--text-primary)' }}
              >
                <X size={24} />
              </button>
            </div>
            
            <div style={{ marginBottom: '20px', display: 'flex', alignItems: 'center', backgroundColor: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: '6px', padding: '8px 12px' }}>
              <Search size={18} color="var(--text-body)" />
              <input
                type="text"
                placeholder="Search..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                style={{
                  border: 'none',
                  outline: 'none',
                  background: 'transparent',
                  paddingLeft: '10px',
                  width: '100%',
                  fontFamily: "'Poppins', sans-serif",
                  fontSize: '14px',
                  color: 'var(--text-primary)'
                }}
              />
            </div>

            <div style={{ display: 'flex', flexDirection: 'column' }}>
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => handleNavClick(link)}
                  style={{
                    fontFamily: "'Poppins', sans-serif",
                    fontSize: '16px',
                    color: activeCategory === link.category ? 'var(--accent)' : 'var(--text-primary)',
                    textDecoration: 'none',
                    padding: '15px 0',
                    borderBottom: '1px solid var(--border)',
                    fontWeight: activeCategory === link.category ? 600 : 400
                  }}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      )}

      <style dangerouslySetInnerHTML={{__html: `
        @keyframes slideRight {
          from { transform: translateX(-100%); }
          to { transform: translateX(0); }
        }
        .brand { font-size: 22px; }
        .icon-btn:hover { background-color: rgba(255,255,255,0.08); }
        @media (max-width: 768px) {
          .desktop-only { display: none !important; }
        }
        @media (min-width: 769px) {
          .mobile-only { display: none !important; }
        }
        @media (max-width: 480px) {
          .brand { font-size: 16px; letter-spacing: 1px; }
        }
      `}} />
    </>
  );
}

/* 36px keeps every header control past the 24px minimum target size while the
   icon inside stays 20px. */
const iconBtn = {
  position: 'relative',
  width: '36px',
  height: '36px',
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  background: 'none',
  border: 'none',
  borderRadius: '50%',
  padding: 0,
  cursor: 'pointer',
  color: 'var(--text-primary)',
  transition: 'background-color 0.2s ease',
};

const countBadge = {
  position: 'absolute',
  top: '2px',
  right: '2px',
  backgroundColor: 'var(--accent)',
  color: '#FFFFFF',
  fontSize: '10px',
  fontFamily: "'Poppins', sans-serif",
  borderRadius: '50%',
  minWidth: '16px',
  height: '16px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  pointerEvents: 'none',
};
