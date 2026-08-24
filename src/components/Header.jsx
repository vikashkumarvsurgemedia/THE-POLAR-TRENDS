import React, { useState, useEffect } from 'react';
import { Search, ShoppingBag, Heart, Menu, X } from 'lucide-react';
import { CATEGORIES } from '../data/products';

/* Header.

   Two states. Over the hero it is transparent with light type, so the
   photograph runs edge to edge and full-bleed under it. Past the fold it
   resolves to paper with ink type and a single hairline beneath. The
   announcement bar rides along and retracts on the same scroll.

   The whole group is fixed, which is why it contributes no flow height —
   the hero deliberately begins at y=0 and the header floats over it.

   Navigation points at the style categories that actually have stock. The
   previous department list advertised footwear and womenswear that the
   catalogue doesn't carry, and every one of those links landed on an empty
   "coming soon" state — the fastest way to make a premium store feel hollow. */

export default function Header({
  cartCount, wishlistCount, onOpenCart,
  searchTerm, setSearchTerm, activeCategory, setActiveCategory
}) {
  const [searchOpen, setSearchOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Lock the page behind the mobile drawer so the body doesn't scroll under it.
  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileMenuOpen]);

  const navItems = CATEGORIES.filter(c => c !== 'All Products');

  // Light type only while transparent over the hero and no panel is open.
  const onImage = !scrolled && !searchOpen && !mobileMenuOpen;
  const ink = onImage ? '#FBFAF8' : 'var(--ink)';
  const inkMuted = onImage ? 'rgba(251,250,248,0.72)' : 'var(--ink-muted)';
  const hairline = onImage ? 'rgba(251,250,248,0.22)' : 'var(--rule)';

  const handleNav = (cat) => {
    setActiveCategory(cat);
    setMobileMenuOpen(false);
  };

  const iconStyle = { color: ink, transition: 'color var(--medium) var(--ease)' };

  return (
    <>
      <div
        style={{
          position: 'fixed',
          top: 0, left: 0, right: 0,
          zIndex: 100,
          backgroundColor: onImage ? 'transparent' : 'var(--paper)',
          borderBottom: `1px solid ${onImage ? 'transparent' : 'var(--rule)'}`,
          transition: 'background-color var(--medium) var(--ease), border-color var(--medium) var(--ease)'
        }}
      >
        {/* Announcement — retracts once the page moves. */}
        <div
          style={{
            height: scrolled ? 0 : 34,
            overflow: 'hidden',
            backgroundColor: onImage ? 'rgba(23,20,15,0.28)' : 'var(--paper-alt)',
            transition: 'height var(--medium) var(--ease), background-color var(--medium) var(--ease)'
          }}
        >
          <p
            className="eyebrow"
            style={{
              color: onImage ? 'rgba(251,250,248,0.86)' : 'var(--ink-body)',
              textAlign: 'center',
              lineHeight: '34px',
              fontSize: '0.625rem'
            }}
          >
            Complimentary Shipping &amp; 14-Day Returns
          </p>
        </div>

        {/* Brand row */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr auto 1fr',
            alignItems: 'center',
            height: 68,
            padding: '0 var(--gutter)'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: 4, justifySelf: 'start' }}>
            <button
              className="icon-btn mobile-only"
              style={iconStyle}
              onClick={() => setMobileMenuOpen(true)}
              aria-label="Open menu"
            >
              <Menu size={19} strokeWidth={1.25} />
            </button>
            <button
              className="icon-btn desktop-only"
              style={iconStyle}
              onClick={() => setSearchOpen(v => !v)}
              aria-label="Search"
              aria-expanded={searchOpen}
            >
              <Search size={18} strokeWidth={1.25} />
            </button>
          </div>

          {/* Wordmark. Cormorant, wide tracking, no logo mark — the name set
              well is the mark. */}
          <a
            href="#main"
            className="brand"
            onClick={() => setActiveCategory('All Products')}
            style={{
              fontFamily: 'var(--font-display)',
              fontWeight: 400,
              fontSize: 'clamp(1.05rem, 2vw, 1.45rem)',
              letterSpacing: '0.3em',
              textTransform: 'uppercase',
              color: ink,
              whiteSpace: 'nowrap',
              paddingLeft: '0.3em',
              transition: 'color var(--medium) var(--ease)'
            }}
          >
            The Polar Trend
          </a>

          <div style={{ display: 'flex', alignItems: 'center', gap: 4, justifySelf: 'end' }}>
            <button
              className="icon-btn mobile-only"
              style={iconStyle}
              onClick={() => setSearchOpen(v => !v)}
              aria-label="Search"
            >
              <Search size={18} strokeWidth={1.25} />
            </button>

            <button className="icon-btn" style={{ ...iconStyle, position: 'relative' }} aria-label={`Wishlist, ${wishlistCount} items`}>
              <Heart size={18} strokeWidth={1.25} />
              {wishlistCount > 0 && <Dot color={ink} />}
            </button>

            <button
              className="icon-btn"
              style={{ ...iconStyle, position: 'relative' }}
              onClick={onOpenCart}
              aria-label={`Open bag, ${cartCount} items`}
            >
              <ShoppingBag size={18} strokeWidth={1.25} />
              {cartCount > 0 && <Dot color={ink} />}
            </button>
          </div>
        </div>

        {/* Category rail — desktop. Tracked, tiny, centred, with the active
            item marked by a bronze hairline rather than a filled pill. */}
        <nav
          className="desktop-only"
          aria-label="Collections"
          style={{
            justifyContent: 'center',
            gap: 'clamp(1.5rem, 3vw, 3rem)',
            /* Longhand only. Mixing the `padding` shorthand with `paddingTop`
               on an element React re-renders makes the two fight on update —
               React warns about exactly this, and the bottom value would
               intermittently reset when `scrolled` flipped. */
            paddingTop: 14,
            paddingBottom: scrolled ? 14 : 18,
            paddingLeft: 0,
            paddingRight: 0,
            borderTop: `1px solid ${hairline}`,
            marginTop: 2,
            transition: 'padding-bottom var(--medium) var(--ease)'
          }}
        >
          {navItems.map(cat => {
            const active = activeCategory === cat;
            return (
              <a
                key={cat}
                href="#collection"
                onClick={() => handleNav(cat)}
                className="eyebrow"
                style={{
                  color: active ? (onImage ? '#FBFAF8' : 'var(--bronze)') : inkMuted,
                  paddingBottom: 4,
                  borderBottom: `1px solid ${active ? (onImage ? '#FBFAF8' : 'var(--bronze)') : 'transparent'}`,
                  transition: 'color var(--medium) var(--ease), border-color var(--medium) var(--ease)'
                }}
              >
                {cat}
              </a>
            );
          })}
        </nav>

        {/* Search — a single ruled line, no box. */}
        {searchOpen && (
          <div style={{ padding: '0 var(--gutter) 22px', backgroundColor: 'var(--paper)' }}>
            <div style={{ maxWidth: 620, margin: '0 auto', display: 'flex', alignItems: 'center', gap: 12, borderBottom: '1px solid var(--rule-strong)' }}>
              <Search size={16} strokeWidth={1.25} style={{ color: 'var(--ink-muted)' }} />
              <input
                autoFocus
                value={searchTerm}
                onChange={e => setSearchTerm(e.target.value)}
                placeholder="Search fabric, weave, or style"
                aria-label="Search products"
                style={{
                  flex: 1, border: 'none', outline: 'none', padding: '12px 0',
                  fontSize: '0.875rem', letterSpacing: '0.04em', background: 'transparent'
                }}
              />
              <button
                className="icon-btn"
                onClick={() => { setSearchTerm(''); setSearchOpen(false); }}
                aria-label="Close search"
              >
                <X size={16} strokeWidth={1.25} />
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Mobile drawer */}
      {mobileMenuOpen && (
        <div
          style={{
            position: 'fixed', inset: 0, zIndex: 200,
            backgroundColor: 'var(--paper)',
            padding: 'var(--gutter)',
            animation: 'fadeIn 260ms var(--ease) both',
            overflowY: 'auto'
          }}
        >
          <div style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: '3rem' }}>
            <button className="icon-btn" onClick={() => setMobileMenuOpen(false)} aria-label="Close menu">
              <X size={22} strokeWidth={1.25} />
            </button>
          </div>

          <nav style={{ display: 'flex', flexDirection: 'column', gap: '1.75rem' }}>
            {navItems.map(cat => (
              <a
                key={cat}
                href="#collection"
                onClick={() => handleNav(cat)}
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '2rem',
                  fontWeight: 300,
                  lineHeight: 1.1,
                  color: activeCategory === cat ? 'var(--bronze)' : 'var(--ink)'
                }}
              >
                {cat}
              </a>
            ))}
          </nav>

          <hr className="feature-divider" style={{ margin: '3rem 0 1.75rem' }} />
          <p className="eyebrow" style={{ lineHeight: 2.4 }}>
            Complimentary Shipping<br />14-Day Returns<br />Cash on Delivery
          </p>
        </div>
      )}
    </>
  );
}

/* Count indicator. A dot, not a numbered pill — the exact count is in the
   drawer, and a bronze pill with a digit in it is the single most
   catalogue-looking element a luxury header can carry. */
function Dot({ color }) {
  return (
    <span
      aria-hidden="true"
      style={{
        position: 'absolute', top: 6, right: 5,
        width: 5, height: 5, borderRadius: '50%',
        backgroundColor: color === '#FBFAF8' ? '#FBFAF8' : 'var(--bronze)'
      }}
    />
  );
}
