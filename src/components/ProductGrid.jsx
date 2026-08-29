import React from 'react';
import ProductCard from './ProductCard';
import { DEPARTMENTS } from '../data/products';

/* The collection.

   Stripped to the grid alone — no section title, no eyebrow, no filter rail,
   no piece count, no sort control. The photography introduces itself.

   The filter rail was also duplicating work: the header's category nav sets
   the same `activeCategory`, so filtering still works from up there and the
   second copy was only adding text to the page.

   Sorting is gone with it. If it's wanted back, it belongs in the header
   beside the search control rather than as a row of labels here. */

export default function ProductGrid({
  products, activeCategory, setActiveCategory,
  onAddToCart, onToggleWishlist, wishlist
}) {
  const filtered = products.filter(p => {
    if (activeCategory === 'All Products') return true;
    if (activeCategory === 'New Arrivals') return p.badge?.toLowerCase() === 'new';
    if (DEPARTMENTS.includes(activeCategory)) return p.department === activeCategory;
    return p.category === activeCategory;
  });

  return (
    <section id="collection" className="section" style={{ backgroundColor: 'var(--paper)' }}>
      <div className="container">
        {filtered.length === 0 ? (
          <div style={{ textAlign: 'center', padding: 'clamp(3rem, 7vw, 5rem) 0' }}>
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
