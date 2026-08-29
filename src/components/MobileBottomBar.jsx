import React from 'react';
import { Link } from 'react-router-dom';
import { Home, LayoutGrid, Heart, ShoppingBag } from 'lucide-react';

/* Mobile bottom bar.

   Paper ground, hairline top rule, outline icons at 1.25 stroke and tracked
   micro-labels. The previous bar used filled icons and a numeric badge; both
   were the loudest elements on a phone screen and pulled attention off the
   product photography permanently.

   Targets are 56px tall — above the 44pt iOS minimum the design skill flags
   as a critical touch requirement, with the label included in the tap area
   rather than sitting outside it. */

export default function MobileBottomBar({ cartCount, wishlistCount, onOpenCart, activeCategory, setActiveCategory }) {
  const items = [
    { id: 'home',  label: 'Home',    Icon: Home,        to: '/',            onClick: () => setActiveCategory('All Products') },
    { id: 'shop',  label: 'Shop',    Icon: LayoutGrid,  to: '/#collection', onClick: () => setActiveCategory('All Products') },
    { id: 'saved', label: 'Saved',   Icon: Heart,       to: '/#collection', count: wishlistCount },
    { id: 'bag',   label: 'Bag',     Icon: ShoppingBag, count: cartCount,    onClick: onOpenCart }
  ];

  return (
    <nav
      className="mobile-only"
      aria-label="Primary"
      style={{
        position: 'fixed',
        bottom: 0, left: 0, right: 0,
        zIndex: 90,
        backgroundColor: 'var(--paper)',
        borderTop: '1px solid var(--rule)',
        paddingBottom: 'env(safe-area-inset-bottom, 0px)'
      }}
    >
      {/* width:100% is load-bearing. `.mobile-only` sets display:flex on the
          nav, which makes this ul a flex item — without it the list shrinks to
          its content and each tap target ends up ~26px wide instead of a
          quarter of the screen. */}
      <ul style={{ display: 'flex', listStyle: 'none', margin: 0, padding: 0, width: '100%' }}>
        {items.map(({ id, label, Icon, to, onClick, count }) => {
          const content = (
            <>
              <span style={{ position: 'relative', lineHeight: 0 }}>
                <Icon size={18} strokeWidth={1.25} />
                {count > 0 && (
                  <span
                    aria-hidden="true"
                    style={{
                      position: 'absolute', top: -2, right: -5,
                      width: 4, height: 4, borderRadius: '50%',
                      backgroundColor: 'var(--bronze)'
                    }}
                  />
                )}
              </span>
              <span className="eyebrow" style={{ fontSize: '0.5rem', letterSpacing: '0.16em' }}>
                {label}
              </span>
            </>
          );

          const style = {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 6,
            width: '100%',
            minHeight: 56,
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            color: 'var(--ink)',
            textDecoration: 'none'
          };

          return (
            <li key={id} style={{ flex: 1, display: 'flex' }}>
              {to ? (
                <Link to={to} onClick={onClick} style={style}>{content}</Link>
              ) : (
                <button onClick={onClick} style={style} aria-label={`${label}, ${count || 0} items`}>
                  {content}
                </button>
              )}
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
