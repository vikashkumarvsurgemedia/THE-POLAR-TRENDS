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
    { label: 'Reels', category: 'Reels', href: '#reels', badge: 'WATCH', badgeColor: 'var(--sale-price)' },
  ];

  const handleNavClick = (link) => {
    setActiveCategory(link.category);
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
        {/* Main Header Row */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          height: '60px',
          padding: '0 20px',
          borderBottom: '1px solid var(--border)'
        }}>
          {/* Left Actions */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
            <button
              className="mobile-only"
              onClick={() => setMobileMenuOpen(true)}
              style={{ background: 'none', border: 'none', cursor: 'pointer', padding: '0', display: 'flex', alignItems: 'center', color: 'var(--text-primary)' }}
            >
              <Menu size={24} />
            </button>
            <div style={{ position: 'relative', display: 'flex', alignItems: 'center' }}>
              <button
                onClick={() => setSearchOpen(!searchOpen)}
                style={{ background: 'none', border: 'none', cursor: 'pointer', padding: '0', display: 'flex', alignItems: 'center', color: 'var(--text-primary)' }}
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
          <div style={{
            fontFamily: "'Work Sans', sans-serif",
            fontWeight: 600,
            fontSize: '22px',
            letterSpacing: '2px',
            color: 'var(--text-primary)',
            textAlign: 'center',
            position: 'absolute',
            left: '50%',
            transform: 'translateX(-50%)',
            whiteSpace: 'nowrap'
          }}>
            THE POLAR TREND
          </div>

          {/* Right Actions */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
            <div style={{ position: 'relative', cursor: 'pointer', display: 'flex', alignItems: 'center', color: 'var(--text-primary)' }}>
              <Heart size={20} />
              {wishlistCount > 0 && (
                <span style={{
                  position: 'absolute',
                  top: '-8px',
                  right: '-10px',
                  backgroundColor: 'var(--accent)',
                  color: '#FFFFFF',
                  fontSize: '10px',
                  fontFamily: "'Poppins', sans-serif",
                  borderRadius: '50%',
                  width: '16px',
                  height: '16px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  {wishlistCount}
                </span>
              )}
            </div>
            <div
              onClick={onOpenCart}
              style={{ position: 'relative', cursor: 'pointer', display: 'flex', alignItems: 'center', color: 'var(--text-primary)' }}
            >
              <ShoppingBag size={20} />
              {cartCount > 0 && (
                <span style={{
                  position: 'absolute',
                  top: '-8px',
                  right: '-10px',
                  backgroundColor: 'var(--accent)',
                  color: '#FFFFFF',
                  fontSize: '10px',
                  fontFamily: "'Poppins', sans-serif",
                  borderRadius: '50%',
                  width: '16px',
                  height: '16px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  {cartCount}
                </span>
              )}
            </div>
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
        @media (max-width: 768px) {
          .desktop-only { display: none !important; }
        }
        @media (min-width: 769px) {
          .mobile-only { display: none !important; }
        }
      `}} />
    </>
  );
}
