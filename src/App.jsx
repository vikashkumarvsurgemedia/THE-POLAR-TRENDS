import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import ProductGrid from './components/ProductGrid';
import FabricStory from './components/FabricStory';
import CustomMonogrammer from './components/CustomMonogrammer';
import Lookbook from './components/Lookbook';
import Reviews from './components/Reviews';
import CartDrawer from './components/CartDrawer';
import ProductModal from './components/ProductModal';
import CheckoutModal from './components/CheckoutModal';
import Footer from './components/Footer';
import { PRODUCTS } from './data/products';

export default function App() {
  const [products] = useState(PRODUCTS);
  const [cartItems, setCartItems] = useState([
    {
      ...PRODUCTS[0],
      selectedSize: 'L',
      quantity: 1
    }
  ]);
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
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', backgroundColor: '#FAF9F6' }}>
      
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

      {/* Hero Section */}
      <Hero />

      {/* Main Catalog Section */}
      <ProductGrid
        products={displayedProducts}
        activeCategory={activeCategory}
        setActiveCategory={setActiveCategory}
        onQuickView={(p) => setQuickViewProduct(p)}
        onAddToCart={handleAddToCart}
        onToggleWishlist={handleToggleWishlist}
        wishlist={wishlist}
      />

      {/* Fabric Craftsmanship Spotlight Section */}
      <FabricStory />

      {/* Interactive Custom Monogrammer Section */}
      <CustomMonogrammer
        products={products}
        onAddToCart={handleAddToCart}
      />

      {/* Indian City Lookbook Section */}
      <Lookbook />

      {/* Customer Reviews Section */}
      <Reviews />

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

    </div>
  );
}
