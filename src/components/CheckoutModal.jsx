import React, { useState } from 'react';
import { X, CheckCircle, Smartphone, CreditCard, Truck } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function CheckoutModal({ isOpen, onClose, cartItems, checkoutTotals, onClearCart }) {
  const [step, setStep] = useState('form');
  const [paymentMethod, setPaymentMethod] = useState('upi');
  const [formData, setFormData] = useState({
    name: 'Aarav Sharma',
    email: 'aarav.sharma@example.com',
    phone: '+91 98765 43210',
    address: 'Flat 402, Sea Crest Towers, Bandra West',
    city: 'Mumbai',
    pincode: '400050'
  });

  if (!isOpen) return null;

  const handleSubmitOrder = (e) => {
    e.preventDefault();
    confetti({ particleCount: 140, spread: 80, origin: { y: 0.6 } });
    setStep('success');
    onClearCart();
  };

  return (
    <div style={{
      position: 'fixed',
      inset: 0,
      zIndex: 400,
      backgroundColor: 'rgba(0, 0, 0, 0.65)',
      backdropFilter: 'blur(12px)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '1rem'
    }} className="animate-fade-in">
      <div style={{
        backgroundColor: '#FFFFFF',
        color: '#111111',
        border: '1px solid rgba(0, 0, 0, 0.1)',
        maxWidth: '860px',
        width: '100%',
        maxHeight: '90vh',
        overflowY: 'auto',
        position: 'relative',
        boxShadow: '0 25px 60px rgba(0,0,0,0.8)',
        padding: '2rem 1.5rem'
      }} className="animate-slide-up">
        
        <button
          onClick={onClose}
          style={{ position: 'absolute', top: '16px', right: '16px', width: '38px', height: '38px', border: 'none', backgroundColor: 'rgba(0,0,0,0.05)', color: '#111111', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 10 }}
          aria-label="Close Checkout"
        >
          <X size={20} />
        </button>

        {step === 'form' ? (
          <div>
            <div style={{ marginBottom: '2rem', borderBottom: '1px solid rgba(0,0,0,0.1)', paddingBottom: '1rem' }}>
              <span className="editorial-tag">256-BIT SECURE ATELIER CHECKOUT</span>
              <h2 style={{ fontFamily: 'Cinzel, serif', fontSize: 'clamp(1.5rem, 3.5vw, 2.2rem)', fontWeight: 600, color: '#111111', marginTop: '0.4rem' }}>
                Complete Your Order
              </h2>
            </div>

            <form onSubmit={handleSubmitOrder} style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }} className="checkout-grid">
              
              <div>
                <h3 style={{ fontFamily: 'Cinzel, serif', fontSize: '1rem', fontWeight: 700, marginBottom: '1rem', color: '#111111' }}>
                  1. Shipping Address (India)
                </h3>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
                  <div>
                    <label style={{ fontSize: '0.68rem', fontWeight: 800, color: '#777777', letterSpacing: '0.12em', display: 'block', marginBottom: '0.3rem' }}>FULL NAME</label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      style={{ width: '100%', padding: '0.75rem', border: '1px solid rgba(0,0,0,0.15)', backgroundColor: '#FAF9F6', color: '#111111', fontSize: '0.85rem' }}
                    />
                  </div>

                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.8rem' }}>
                    <div>
                      <label style={{ fontSize: '0.68rem', fontWeight: 800, color: '#777777', letterSpacing: '0.12em', display: 'block', marginBottom: '0.3rem' }}>EMAIL</label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        style={{ width: '100%', padding: '0.75rem', border: '1px solid rgba(0,0,0,0.15)', backgroundColor: '#FAF9F6', color: '#111111', fontSize: '0.85rem' }}
                      />
                    </div>
                    <div>
                      <label style={{ fontSize: '0.68rem', fontWeight: 800, color: '#777777', letterSpacing: '0.12em', display: 'block', marginBottom: '0.3rem' }}>PHONE</label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        style={{ width: '100%', padding: '0.75rem', border: '1px solid rgba(0,0,0,0.15)', backgroundColor: '#FAF9F6', color: '#111111', fontSize: '0.85rem' }}
                      />
                    </div>
                  </div>

                  <div>
                    <label style={{ fontSize: '0.68rem', fontWeight: 800, color: '#777777', letterSpacing: '0.12em', display: 'block', marginBottom: '0.3rem' }}>ADDRESS</label>
                    <input
                      type="text"
                      required
                      value={formData.address}
                      onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                      style={{ width: '100%', padding: '0.75rem', border: '1px solid rgba(0,0,0,0.15)', backgroundColor: '#FAF9F6', color: '#111111', fontSize: '0.85rem' }}
                    />
                  </div>

                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.8rem' }}>
                    <div>
                      <label style={{ fontSize: '0.68rem', fontWeight: 800, color: '#777777', letterSpacing: '0.12em', display: 'block', marginBottom: '0.3rem' }}>CITY</label>
                      <input
                        type="text"
                        required
                        value={formData.city}
                        onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                        style={{ width: '100%', padding: '0.75rem', border: '1px solid rgba(0,0,0,0.15)', backgroundColor: '#FAF9F6', color: '#111111', fontSize: '0.85rem' }}
                      />
                    </div>
                    <div>
                      <label style={{ fontSize: '0.68rem', fontWeight: 800, color: '#777777', letterSpacing: '0.12em', display: 'block', marginBottom: '0.3rem' }}>PINCODE</label>
                      <input
                        type="text"
                        required
                        value={formData.pincode}
                        onChange={(e) => setFormData({ ...formData, pincode: e.target.value })}
                        style={{ width: '100%', padding: '0.75rem', border: '1px solid rgba(0,0,0,0.15)', backgroundColor: '#FAF9F6', color: '#111111', fontSize: '0.85rem' }}
                      />
                    </div>
                  </div>
                </div>

                <h3 style={{ fontFamily: 'Cinzel, serif', fontSize: '1rem', fontWeight: 700, margin: '1.5rem 0 0.8rem 0', color: '#111111' }}>
                  2. Select Payment Method
                </h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
                  <label style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', padding: '0.8rem', border: paymentMethod === 'upi' ? '1px solid #111111' : '1px solid rgba(0,0,0,0.1)', backgroundColor: paymentMethod === 'upi' ? 'rgba(0,0,0,0.03)' : '#FAF9F6', cursor: 'pointer', fontWeight: 700, fontSize: '0.78rem', color: '#111111', minHeight: '44px' }}>
                    <input type="radio" name="pay" checked={paymentMethod === 'upi'} onChange={() => setPaymentMethod('upi')} />
                    <Smartphone size={16} color="#D97706" />
                    <span>UPI / GPay / PhonePe</span>
                  </label>

                  <label style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', padding: '0.8rem', border: paymentMethod === 'card' ? '1px solid #111111' : '1px solid rgba(0,0,0,0.1)', backgroundColor: paymentMethod === 'card' ? 'rgba(0,0,0,0.03)' : '#FAF9F6', cursor: 'pointer', fontWeight: 700, fontSize: '0.78rem', color: '#111111', minHeight: '44px' }}>
                    <input type="radio" name="pay" checked={paymentMethod === 'card'} onChange={() => setPaymentMethod('card')} />
                    <CreditCard size={16} color="#60A5FA" />
                    <span>Credit / Debit Card</span>
                  </label>

                  <label style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', padding: '0.8rem', border: paymentMethod === 'cod' ? '1px solid #111111' : '1px solid rgba(0,0,0,0.1)', backgroundColor: paymentMethod === 'cod' ? 'rgba(0,0,0,0.03)' : '#FAF9F6', cursor: 'pointer', fontWeight: 700, fontSize: '0.78rem', color: '#111111', minHeight: '44px' }}>
                    <input type="radio" name="pay" checked={paymentMethod === 'cod'} onChange={() => setPaymentMethod('cod')} />
                    <Truck size={16} color="#10B981" />
                    <span>Cash on Delivery (COD)</span>
                  </label>
                </div>
              </div>

              <div style={{ backgroundColor: '#FAF9F6', padding: '1.5rem', border: '1px solid rgba(0,0,0,0.06)', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <div>
                  <h3 style={{ fontFamily: 'Cinzel, serif', fontSize: '1rem', fontWeight: 700, marginBottom: '1rem', color: '#111111' }}>
                    Order Summary ({cartItems.length} Items)
                  </h3>

                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem', maxHeight: '180px', overflowY: 'auto', marginBottom: '1.2rem' }}>
                    {cartItems.map((item, i) => (
                      <div key={i} style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.78rem', borderBottom: '1px solid rgba(0,0,0,0.06)', paddingBottom: '0.4rem' }}>
                        <div>
                          <div style={{ fontWeight: 700, color: '#111111' }}>{item.name}</div>
                          <div style={{ fontSize: '0.68rem', color: '#999999' }}>Qty: {item.quantity} • Size: {item.selectedSize}</div>
                        </div>
                        <div style={{ fontWeight: 700, color: '#111111' }}>₹{(item.price * item.quantity).toLocaleString('en-IN')}</div>
                      </div>
                    ))}
                  </div>

                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem', fontSize: '0.8rem', paddingTop: '0.8rem', borderTop: '1px solid rgba(0,0,0,0.06)', color: '#777777' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                      <span>Subtotal</span>
                      <span>₹{checkoutTotals.subtotal?.toLocaleString('en-IN')}</span>
                    </div>
                    {checkoutTotals.discountAmount > 0 && (
                      <div style={{ display: 'flex', justifyContent: 'space-between', color: '#10B981', fontWeight: 700 }}>
                        <span>Privilege Discount</span>
                        <span>-₹{checkoutTotals.discountAmount?.toLocaleString('en-IN')}</span>
                      </div>
                    )}
                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                      <span>Express Shipping</span>
                      <span>{checkoutTotals.shippingFee === 0 ? 'COMPLIMENTARY' : `₹${checkoutTotals.shippingFee}`}</span>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '1.15rem', fontWeight: 700, color: '#111111', fontFamily: 'Cinzel, serif', paddingTop: '0.8rem', borderTop: '1px solid rgba(0,0,0,0.06)' }}>
                      <span>TOTAL PAYABLE</span>
                      <span>₹{checkoutTotals.grandTotal?.toLocaleString('en-IN')}</span>
                    </div>
                  </div>
                </div>

                <button
                  type="submit"
                  className="btn-luxury"
                  style={{ width: '100%', padding: '1.1rem', marginTop: '1.5rem' }}
                >
                  <span>PLACE ORDER NOW</span>
                </button>
              </div>

            </form>
          </div>
        ) : (
          <div style={{ textAlign: 'center', padding: '3rem 1rem' }}>
            <div style={{ width: '70px', height: '70px', border: '2px solid #10B981', color: '#10B981', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.2rem auto' }}>
              <CheckCircle size={38} />
            </div>
            
            <span className="editorial-tag" style={{ color: '#10B981', borderBottomColor: '#10B981' }}>
              ORDER CONFIRMED #TPT-84920
            </span>
            
            <h2 style={{ fontFamily: 'Cinzel, serif', fontSize: 'clamp(1.8rem, 4vw, 2.5rem)', fontWeight: 600, color: '#111111', margin: '0.6rem 0 0.8rem 0' }}>
              Thank You, {formData.name}
            </h2>

            <p style={{ fontSize: '0.95rem', color: '#555555', maxWidth: '540px', margin: '0 auto 2rem auto', lineHeight: 1.6 }}>
              Your 100% long-staple cotton embroidered apparel is being hand-inspected and packed. An order receipt has been sent to <strong>{formData.email}</strong>.
            </p>

            <button
              onClick={onClose}
              className="btn-luxury"
              style={{ padding: '1rem 2.5rem' }}
            >
              CONTINUE SHOPPING
            </button>
          </div>
        )}

      </div>
    </div>
  );
}
