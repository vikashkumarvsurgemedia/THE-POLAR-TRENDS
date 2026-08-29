import React from 'react';
import Hero from '../components/Hero';
import ProductGrid from '../components/ProductGrid';
import PromoBanners from '../components/PromoBanners';
import Lookbook from '../components/Lookbook';
import VideoReels from '../components/VideoReels';
import Reviews from '../components/Reviews';

/* The homepage.

   Lifted out of App unchanged when routing was introduced — App is now the
   router shell and owns shared state, and each route owns its own sequence
   of sections. */

export default function HomePage({
  products, activeCategory, setActiveCategory,
  onAddToCart, onToggleWishlist, wishlist
}) {
  return (
    <main id="main">
      {/* 1 — The image */}
      <Hero />

      {/* 2 — The collection */}
      <ProductGrid
        products={products}
        activeCategory={activeCategory}
        setActiveCategory={setActiveCategory}
        onAddToCart={onAddToCart}
        onToggleWishlist={onToggleWishlist}
        wishlist={wishlist}
      />

      {/* 3 — Ways in */}
      <PromoBanners setActiveCategory={setActiveCategory} />

      {/* 4 — The dark chapter */}
      <Lookbook />

      {/* 5 — The film */}
      <VideoReels />

      {/* 6 — Proof */}
      <Reviews />
    </main>
  );
}
