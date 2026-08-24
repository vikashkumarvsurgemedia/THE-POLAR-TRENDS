import React, { useState } from 'react';
import ProductCard from './ProductCard';
import { CATEGORIES, DEPARTMENTS } from '../data/products';

/* The collection.

   Filters are text, not chips. A row of filled pill buttons is the most
   recognisable "marketplace" tell in retail UI; the same control set as
   tracked labels over a hairline reads as an editorial index and costs
   nothing in usability — the active item is marked by a bronze rule and
   aria-pressed rather than by a coloured fill. */

export default function ProductGrid({
  products, activeCategory, setActiveCategory,
  onQuickView, onAddToCart, onToggleWishlist, wishlist
}) {
  const [sort, setSort] = useState('featured');

  let filtered = products.filter(p => {
    if (activeCategory === 'All Products') return true;
    if (activeCategory === 'New Arrivals') return p.badge?.toLowerCase() === 'new';
    if (DEPARTMENTS.includes(activeCategory)) return p.department === activeCategory;
    return p.category === activeCategory;
  });

  if (sort === 'low') filtered = [...filtered].sort((a, b) => a.price - b.price);
  else if (sort === 'high') filtered = [...filtered].sort((a, b) => b.price - a.price);

  const sorts = [
    { id: 'featured', label: 'Featured' },
    { id: 'low', label: 'Price, Low' },
    { id: 'high', label: 'Price, High' }
  ];

  return (
    <section id="collection" className="section" style={{ backgroundColor: 'var(--paper)' }}>
      <div className="container">

        <div className="section-head">
          <div className="rule-center" />
          <p className="eyebrow">The Collection</p>
          <h2>New Now</h2>
        </div>

        {/* Filter index */}
        <div
          className="no-scrollbar"
          style={{
            display: 'flex',
            justifyContent: 'center',
            flexWrap: 'wrap',
            gap: 'clamp(1.25rem, 2.6vw, 2.5rem)',
            paddingBottom: '1.5rem',
            marginBottom: '1.25rem'
          }}
        >
          {CATEGORIES.map(cat => {
            const active = activeCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                aria-pressed={active}
                className="eyebrow"
                style={{
                  background: 'none',
                  border: 'none',
                  borderBottom: `1px solid ${active ? 'var(--bronze)' : 'transparent'}`,
                  color: active ? 'var(--bronze)' : 'var(--ink-muted)',
                  paddingBottom: 5,
                  cursor: 'pointer',
                  whiteSpace: 'nowrap',
                  transition: 'color var(--medium) var(--ease), border-color var(--medium) var(--ease)'
                }}
              >
                {cat}
              </button>
            );
          })}
        </div>

        <hr className="feature-divider" />

        {/* Count + sort */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '1rem',
            padding: '1.25rem 0 clamp(2rem, 4vw, 3.5rem)'
          }}
        >
          <p className="eyebrow" style={{ fontSize: '0.625rem' }}>
            {filtered.length} {filtered.length === 1 ? 'Piece' : 'Pieces'}
          </p>

          <div style={{ display: 'flex', gap: '1.5rem' }}>
            {sorts.map(s => (
              <button
                key={s.id}
                onClick={() => setSort(s.id)}
                aria-pressed={sort === s.id}
                className="eyebrow"
                style={{
                  background: 'none', border: 'none', cursor: 'pointer',
                  fontSize: '0.625rem',
                  color: sort === s.id ? 'var(--ink)' : 'var(--ink-muted)',
                  borderBottom: `1px solid ${sort === s.id ? 'var(--ink)' : 'transparent'}`,
                  paddingBottom: 4,
                  transition: 'color var(--medium) var(--ease)'
                }}
              >
                {s.label}
              </button>
            ))}
          </div>
        </div>

        {filtered.length === 0 ? (
          <div style={{ textAlign: 'center', padding: 'clamp(4rem, 9vw, 7rem) 0' }}>
            <h3 style={{ marginBottom: '1rem' }}>Arriving shortly</h3>
            <p style={{ marginBottom: '2.5rem', fontSize: '0.9375rem' }}>
              This edit is still at the atelier.
            </p>
            <button className="link-rule" onClick={() => setActiveCategory('All Products')}>
              View Everything
            </button>
          </div>
        ) : (
          <div className="product-grid-responsive">
            {filtered.map(product => (
              <ProductCard
                key={product.id}
                product={product}
                onQuickView={onQuickView}
                onAddToCart={onAddToCart}
                onToggleWishlist={onToggleWishlist}
                isWishlisted={wishlist.includes(product.id)}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
