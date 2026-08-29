import React, { useState, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import CartDrawer from './components/CartDrawer';
import CheckoutModal from './components/CheckoutModal';
import MobileBottomBar from './components/MobileBottomBar';
import WhatsAppButton from './components/WhatsAppButton';
import HomePage from './pages/HomePage';
import ProductPage from './pages/ProductPage';
import { PRODUCTS } from './data/products';

/* App is the router shell.

   It owns the state shared across every route — the bag, the wishlist, the
   active edit — and renders the chrome that persists between pages: header,
   footer, cart drawer, checkout, mobile bar, WhatsApp.

   Routes:
     /                     the homepage
     /products/:slug       one garment, rendered through the page template
     /collections/:slug    an edit, filtered on the homepage grid
*/

export default function App() {
  const [products] = useState(PRODUCTS);
  const [cartItems, setCartItems] = useState([]);
  const [wishlist, setWishlist] = useState(['polar-002']);
  const [cartOpen, setCartOpen] = useState(false);
  const [checkoutOpen, setCheckoutOpen] = useState(false);
  const [checkoutTotals, setCheckoutTotals] = useState({});
  const [activeCategory, setActiveCategory] = useState('All Products');
  const [searchTerm, setSearchTerm] = useState('');

  const handleAddToCart = (product, qty = 1) => {
    const size = product.selectedSize || 'M';
    setCartItems(prev => {
      const i = prev.findIndex(item => item.id === product.id && item.selectedSize === size);
      if (i > -1) {
        const updated = [...prev];
        updated[i] = { ...updated[i], quantity: updated[i].quantity + qty };
        return updated;
      }
      return [...prev, { ...product, selectedSize: size, quantity: qty }];
    });
    setCartOpen(true);
  };

  const handleUpdateQuantity = (id, size, newQty) => {
    if (newQty <= 0) return handleRemoveItem(id, size);
    setCartItems(prev => prev.map(item =>
      item.id === id && item.selectedSize === size ? { ...item, quantity: newQty } : item
    ));
  };

  const handleRemoveItem = (id, size) =>
    setCartItems(prev => prev.filter(item => !(item.id === id && item.selectedSize === size)));

  const handleToggleWishlist = (id) =>
    setWishlist(prev => prev.includes(id) ? prev.filter(x => x !== id) : [...prev, id]);

  const handleProceedCheckout = (totals) => {
    setCheckoutTotals(totals);
    setCheckoutOpen(true);
  };

  const displayedProducts = products.filter(p => {
    if (!searchTerm) return true;
    const q = searchTerm.toLowerCase();
    return p.name.toLowerCase().includes(q)
        || (p.embroidery || '').toLowerCase().includes(q)
        || (p.fabric || '').toLowerCase().includes(q);
  });

  const cartCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', backgroundColor: 'var(--paper)' }}>
      <ScrollToTop />

      <Header
        cartCount={cartCount}
        wishlistCount={wishlist.length}
        onOpenCart={() => setCartOpen(true)}
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        activeCategory={activeCategory}
        setActiveCategory={setActiveCategory}
      />

      <Routes>
        <Route
          path="/"
          element={
            <HomePage
              products={displayedProducts}
              activeCategory={activeCategory}
              setActiveCategory={setActiveCategory}
              onAddToCart={handleAddToCart}
              onToggleWishlist={handleToggleWishlist}
              wishlist={wishlist}
            />
          }
        />
        <Route
          path="/products/:slug"
          element={
            <ProductPage
              onAddToCart={handleAddToCart}
              onToggleWishlist={handleToggleWishlist}
              wishlist={wishlist}
            />
          }
        />
        {/* Any unknown path falls through to the product route's own
            not-found state via the template, so a mistyped URL still lands
            inside the store rather than on a blank screen. */}
        <Route
          path="*"
          element={
            <ProductPage
              onAddToCart={handleAddToCart}
              onToggleWishlist={handleToggleWishlist}
              wishlist={wishlist}
            />
          }
        />
      </Routes>

      <Footer />

      <CartDrawer
        isOpen={cartOpen}
        onClose={() => setCartOpen(false)}
        cartItems={cartItems}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onProceedCheckout={handleProceedCheckout}
      />

      <CheckoutModal
        isOpen={checkoutOpen}
        onClose={() => setCheckoutOpen(false)}
        cartItems={cartItems}
        checkoutTotals={checkoutTotals}
        onClearCart={() => setCartItems([])}
      />

      <WhatsAppButton />

      <MobileBottomBar
        cartCount={cartCount}
        wishlistCount={wishlist.length}
        onOpenCart={() => setCartOpen(true)}
        activeCategory={activeCategory}
        setActiveCategory={setActiveCategory}
      />
    </div>
  );
}

/* Scroll behaviour on navigation.

   Two jobs. A plain route change goes to the top — browsers otherwise restore
   the previous scroll position, which lands you halfway down a new product.

   A link carrying a hash (/#collection, used by every category link in the
   header, footer and mobile bar) scrolls to that section instead, so choosing
   an edit from a product page arrives at the grid rather than the hero.

   The scroll runs synchronously. React has committed the destination route's
   DOM before any effect fires, so the target section already exists — and
   requestAnimationFrame is the wrong tool here regardless: it is paused in
   backgrounded or non-compositing tabs, so a link opened in a background tab
   would silently never scroll. rAF stays only as a fallback for the case
   where the section genuinely isn't mounted yet.

   Instant rather than smooth: this runs on a route change, so the page being
   animated across is one the customer has never seen. There is nothing to
   follow, and an interrupted smooth scroll just leaves them at the top. */
function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (!hash) {
      window.scrollTo(0, 0);
      return;
    }

    // scroll-margin-top on the section handles the fixed header offset.
    const jump = () => {
      const el = document.querySelector(hash);
      if (!el) return false;
      el.scrollIntoView({ behavior: 'instant', block: 'start' });
      return true;
    };

    if (jump()) return;

    const id = requestAnimationFrame(jump);
    return () => cancelAnimationFrame(id);
  }, [pathname, hash]);

  return null;
}
