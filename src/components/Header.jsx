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
    { label: 'New Arrivals', category: 'New Arrivals', href: '#collection', badge: 'NEW', badgeColor: 'var(--sale-price)' },
    { label: 'Embroidery Edit', category: 'Embroidery Edit', href: '#collection', badge: 'HOT', badgeColor: 'var(--accent)' },
    { label: 'Pure Whites', category: 'Pure Whites', href: '#collection' },
    { label: 'Artisan Checks', category: 'Artisan Checks', href: '#collection' },
    { label: 'Everyday Essentials', category: 'Everyday Essentials', href: '#collection' },
    // Jump-only link: scrolls to the reels section without touching the
    // product filter (there is no "Reels" product category).
    { label: 'Reels', href: '#reels', badge: 'WATCH', badgeColor: 'var(--sale-price)' },
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
          {/* Left Actions */}
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
                  type="text"
                  placeholder="Search..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  autoFocus
                  style={{
                    position: 'absolute',
                    left: '30px',
                    backgroundColor: 'var(--bg-primary)',
                    border: '1px solid var(--border)',
                    padding: '5px 10px',
                    borderRadius: '4px',
                    fontFamily: "'Poppins', sans-serif",
                    fontSize: '13px',
                    outline: 'none',
                    width: '150px'
                  }}
                />
              )}
            </div>
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

          {/* Right Actions */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', justifySelf: 'end' }}>
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

        {/* Navigation Bar (Desktop) */}
        <div className="desktop-only" style={{
          display: 'flex',
          justifyContent: 'center',
          backgroundColor: 'var(--bg-primary)',
          borderBottom: '1px solid var(--border)'
        }}>
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => handleNavClick(link)}
              style={{
                fontFamily: "'Work Sans', sans-serif",
                fontSize: '13px',
                fontWeight: 500,
                textTransform: 'uppercase',
                padding: '12px 18px',
                textDecoration: 'none',
                color: activeCategory === link.category ? '#FFFFFF' : 'var(--text-primary)',
                backgroundColor: activeCategory === link.category ? 'var(--accent)' : 'transparent',
                transition: '0.3s ease',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px'
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
