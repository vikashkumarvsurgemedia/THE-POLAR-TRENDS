import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import ProductGrid from './components/ProductGrid';
import PromoBanners from './components/PromoBanners';
import VideoReels from './components/VideoReels';
import Lookbook from './components/Lookbook';
import Reviews from './components/Reviews';
import CartDrawer from './components/CartDrawer';
import ProductModal from './components/ProductModal';
import CheckoutModal from './components/CheckoutModal';
import Footer from './components/Footer';
import MobileBottomBar from './components/MobileBottomBar';
import WhatsAppButton from './components/WhatsAppButton';
import { PRODUCTS } from './data/products';

export default function App() {
  const [products] = useState(PRODUCTS);
  const [cartItems, setCartItems] = useState([]);
  const [wishlist, setWishlist] = useState(['polar-002']);
  const [cartOpen, setCartOpen] = useState(false);
  const [quickViewProduct, setQuickViewProduct] = useState(null);
  const [checkoutOpen, setCheckoutOpen] = useState(false);
  const [checkoutTotals, setCheckoutTotals] = useState({});
  const [activeCategory, setActiveCategory] = useState('All Products');
  const [searchTerm, setSearchTerm] = useState('');

  // Cart operations
  const handleAddToCart = (product, qty = 1) => {
    setCartItems(prev => {
      const existingIndex = prev.findIndex(item => item.id === product.id && item.selectedSize === (product.selectedSize || 'M'));
      if (existingIndex > -1) {
        const updated = [...prev];
        updated[existingIndex].quantity += qty;
        return updated;
      } else {
        return [...prev, { ...product, selectedSize: product.selectedSize || 'M', quantity: qty }];
      }
    });
    setCartOpen(true);
  };

  const handleUpdateQuantity = (id, size, newQty) => {
    if (newQty <= 0) {
      handleRemoveItem(id, size);
      return;
    }
    setCartItems(prev => prev.map(item => {
      if (item.id === id && item.selectedSize === size) {
        return { ...item, quantity: newQty };
      }
      return item;
    }));
  };

  const handleRemoveItem = (id, size) => {
    setCartItems(prev => prev.filter(item => !(item.id === id && item.selectedSize === size)));
  };

  const handleToggleWishlist = (id) => {
    setWishlist(prev => {
      if (prev.includes(id)) {
        return prev.filter(item => item !== id);
      } else {
        return [...prev, id];
      }
    });
  };

  const handleProceedCheckout = (totals) => {
    setCheckoutTotals(totals);
    setCheckoutOpen(true);
  };

  const handleClearCart = () => {
    setCartItems([]);
  };

  // Search filtering
  const displayedProducts = products.filter(p => {
    if (!searchTerm) return true;
    return p.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
           p.embroidery.toLowerCase().includes(searchTerm.toLowerCase()) ||
           p.fabric.toLowerCase().includes(searchTerm.toLowerCase());
  });

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', backgroundColor: 'var(--paper)' }}>
      
      {/* Header */}
      <Header
        cartCount={cartItems.reduce((sum, item) => sum + item.quantity, 0)}
        wishlistCount={wishlist.length}
        onOpenCart={() => setCartOpen(true)}
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        activeCategory={activeCategory}
        setActiveCategory={setActiveCategory}
      />

      {/* Section order follows the reference's narrative arc: establish the
          image, state the craft, then sell. Putting the brand statement ahead
          of the grid is what separates an editorial store from a catalogue —
          the customer learns what the cloth is before they see a price. */}
      <main id="main">
        {/* 1 — The image */}
        <Hero />

        {/* 2 — The collection */}
        <ProductGrid
          products={displayedProducts}
          activeCategory={activeCategory}
          setActiveCategory={setActiveCategory}
          onQuickView={(p) => setQuickViewProduct(p)}
          onAddToCart={handleAddToCart}
          onToggleWishlist={handleToggleWishlist}
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

      {/* Footer */}
      <Footer />

      {/* Slide-out Cart Drawer */}
      <CartDrawer
        isOpen={cartOpen}
        onClose={() => setCartOpen(false)}
        cartItems={cartItems}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onProceedCheckout={handleProceedCheckout}
      />

      {/* Quick View Product Modal */}
      <ProductModal
        product={quickViewProduct}
        onClose={() => setQuickViewProduct(null)}
        onAddToCart={handleAddToCart}
      />

      {/* Checkout Modal */}
      <CheckoutModal
        isOpen={checkoutOpen}
        onClose={() => setCheckoutOpen(false)}
        cartItems={cartItems}
        checkoutTotals={checkoutTotals}
        onClearCart={handleClearCart}
      />

      {/* Floating WhatsApp contact */}
      <WhatsAppButton />

      {/* Mobile Sticky Bottom Navigation Bar */}
      <MobileBottomBar
        cartCount={cartItems.reduce((sum, item) => sum + item.quantity, 0)}
        wishlistCount={wishlist.length}
        onOpenCart={() => setCartOpen(true)}
        activeCategory={activeCategory}
        setActiveCategory={setActiveCategory}
      />

    </div>
  );
}
