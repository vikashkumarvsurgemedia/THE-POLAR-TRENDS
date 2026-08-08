import React, { useState } from 'react';
import { X, CheckCircle, ShieldCheck, CreditCard, Smartphone, Truck } from 'lucide-react';
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
      backgroundColor: 'rgba(0, 0, 0, 0.6)',
      backdropFilter: 'blur(12px)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '2rem'
    }}>
      <div style={{
        backgroundColor: '#FFFFFF',
        color: '#111111',
        border: '1px solid rgba(0, 0, 0, 0.1)',
        maxWidth: '880px',
        width: '100%',
        maxHeight: '90vh',
        overflowY: 'auto',
        position: 'relative',
        boxShadow: '0 30px 80px rgba(0,0,0,0.9)',
        padding: '3rem'
      }}>
        
        <button
          onClick={onClose}
          style={{ position: 'absolute', top: '24px', right: '24px', width: '36px', height: '36px', border: 'none', backgroundColor: 'rgba(0,0,0,0.05)', color: '#111111', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
        >
          <X size={20} />
        </button>

        {step === 'form' ? (
          <div>
            <div style={{ marginBottom: '2.5rem', borderBottom: '1px solid rgba(0,0,0,0.1)', paddingBottom: '1.2rem' }}>
              <span className="editorial-tag">256-BIT SECURE ATELIER CHECKOUT</span>
              <h2 style={{ fontFamily: 'Cinzel, serif', fontSize: '2.2rem', fontWeight: 600, color: '#111111', marginTop: '0.6rem' }}>
                Complete Your Order
              </h2>
            </div>

            <form onSubmit={handleSubmitOrder} style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem' }} className="checkout-grid">
              
              <div>
                <h3 style={{ fontFamily: 'Cinzel, serif', fontSize: '1.1rem', fontWeight: 700, marginBottom: '1.2rem', color: '#111111' }}>
                  1. Shipping Address (India)
                </h3>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                  <div>
                    <label style={{ fontSize: '0.72rem', fontWeight: 800, color: '#777777', letterSpacing: '0.15em', display: 'block', marginBottom: '0.4rem' }}>FULL NAME</label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      style={{ width: '100%', padding: '0.85rem', border: '1px solid rgba(0,0,0,0.15)', backgroundColor: '#FAF9F6', color: '#111111', fontSize: '0.88rem' }}
                    />
                  </div>

                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                    <div>
                      <label style={{ fontSize: '0.72rem', fontWeight: 800, color: '#777777', letterSpacing: '0.15em', display: 'block', marginBottom: '0.4rem' }}>EMAIL</label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        style={{ width: '100%', padding: '0.85rem', border: '1px solid rgba(0,0,0,0.15)', backgroundColor: '#FAF9F6', color: '#111111', fontSize: '0.88rem' }}
                      />
                    </div>
                    <div>
                      <label style={{ fontSize: '0.72rem', fontWeight: 800, color: '#777777', letterSpacing: '0.15em', display: 'block', marginBottom: '0.4rem' }}>PHONE</label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        style={{ width: '100%', padding: '0.85rem', border: '1px solid rgba(0,0,0,0.15)', backgroundColor: '#FAF9F6', color: '#111111', fontSize: '0.88rem' }}
                      />
                    </div>
                  </div>

                  <div>
                    <label style={{ fontSize: '0.72rem', fontWeight: 800, color: '#777777', letterSpacing: '0.15em', display: 'block', marginBottom: '0.4rem' }}>ADDRESS</label>
                    <input
                      type="text"
                      required
                      value={formData.address}
                      onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                      style={{ width: '100%', padding: '0.85rem', border: '1px solid rgba(0,0,0,0.15)', backgroundColor: '#FAF9F6', color: '#111111', fontSize: '0.88rem' }}
                    />
                  </div>

                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                    <div>
                      <label style={{ fontSize: '0.72rem', fontWeight: 800, color: '#777777', letterSpacing: '0.15em', display: 'block', marginBottom: '0.4rem' }}>CITY</label>
                      <input
                        type="text"
                        required
                        value={formData.city}
                        onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                        style={{ width: '100%', padding: '0.85rem', border: '1px solid rgba(0,0,0,0.15)', backgroundColor: '#FAF9F6', color: '#111111', fontSize: '0.88rem' }}
                      />
                    </div>
                    <div>
                      <label style={{ fontSize: '0.72rem', fontWeight: 800, color: '#777777', letterSpacing: '0.15em', display: 'block', marginBottom: '0.4rem' }}>PINCODE</label>
                      <input
                        type="text"
                        required
                        value={formData.pincode}
                        onChange={(e) => setFormData({ ...formData, pincode: e.target.value })}
                        style={{ width: '100%', padding: '0.85rem', border: '1px solid rgba(0,0,0,0.15)', backgroundColor: '#FAF9F6', color: '#111111', fontSize: '0.88rem' }}
                      />
                    </div>
                  </div>
                </div>

                <h3 style={{ fontFamily: 'Cinzel, serif', fontSize: '1.1rem', fontWeight: 700, margin: '2rem 0 1rem 0', color: '#111111' }}>
                  2. Select Payment Method
                </h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
                  <label style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', padding: '0.9rem 1rem', border: paymentMethod === 'upi' ? '1px solid #111111' : '1px solid rgba(0,0,0,0.1)', backgroundColor: paymentMethod === 'upi' ? 'rgba(0,0,0,0.03)' : '#FAF9F6', cursor: 'pointer', fontWeight: 700, fontSize: '0.82rem', color: '#111111' }}>
                    <input type="radio" name="pay" checked={paymentMethod === 'upi'} onChange={() => setPaymentMethod('upi')} />
                    <Smartphone size={16} color="#D97706" />
                    <span>UPI / Instant GPay / Paytm / PhonePe</span>
                  </label>

                  <label style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', padding: '0.9rem 1rem', border: paymentMethod === 'card' ? '1px solid #111111' : '1px solid rgba(0,0,0,0.1)', backgroundColor: paymentMethod === 'card' ? 'rgba(0,0,0,0.03)' : '#FAF9F6', cursor: 'pointer', fontWeight: 700, fontSize: '0.82rem', color: '#111111' }}>
                    <input type="radio" name="pay" checked={paymentMethod === 'card'} onChange={() => setPaymentMethod('card')} />
                    <CreditCard size={16} color="#60A5FA" />
                    <span>Credit / Debit Card (Visa, Mastercard, RuPay)</span>
                  </label>

                  <label style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', padding: '0.9rem 1rem', border: paymentMethod === 'cod' ? '1px solid #111111' : '1px solid rgba(0,0,0,0.1)', backgroundColor: paymentMethod === 'cod' ? 'rgba(0,0,0,0.03)' : '#FAF9F6', cursor: 'pointer', fontWeight: 700, fontSize: '0.82rem', color: '#111111' }}>
                    <input type="radio" name="pay" checked={paymentMethod === 'cod'} onChange={() => setPaymentMethod('cod')} />
                    <Truck size={16} color="#10B981" />
                    <span>Cash on Delivery (COD)</span>
                  </label>
                </div>
              </div>

              <div style={{ backgroundColor: '#FAF9F6', padding: '2rem', border: '1px solid rgba(0,0,0,0.06)', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <div>
                  <h3 style={{ fontFamily: 'Cinzel, serif', fontSize: '1.1rem', fontWeight: 700, marginBottom: '1.2rem', color: '#111111' }}>
                    Order Summary ({cartItems.length} Items)
                  </h3>

                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem', maxHeight: '200px', overflowY: 'auto', marginBottom: '1.5rem' }}>
                    {cartItems.map((item, i) => (
                      <div key={i} style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.82rem', borderBottom: '1px solid rgba(0,0,0,0.06)', paddingBottom: '0.5rem' }}>
                        <div>
                          <div style={{ fontWeight: 700, color: '#111111' }}>{item.name}</div>
                          <div style={{ fontSize: '0.72rem', color: '#999999' }}>Qty: {item.quantity} • Size: {item.selectedSize}</div>
                        </div>
                        <div style={{ fontWeight: 700, color: '#111111' }}>₹{(item.price * item.quantity).toLocaleString('en-IN')}</div>
                      </div>
                    ))}
                  </div>

                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', fontSize: '0.85rem', paddingTop: '1rem', borderTop: '1px solid rgba(0,0,0,0.06)', color: '#777777' }}>
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
                    <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '1.3rem', fontWeight: 700, color: '#111111', fontFamily: 'Cinzel, serif', paddingTop: '1rem', borderTop: '1px solid rgba(0,0,0,0.06)' }}>
                      <span>TOTAL PAYABLE</span>
                      <span>₹{checkoutTotals.grandTotal?.toLocaleString('en-IN')}</span>
                    </div>
                  </div>
                </div>

                <button
                  type="submit"
                  className="btn-luxury"
                  style={{ width: '100%', padding: '1.2rem', marginTop: '2rem' }}
                >
                  <span>PLACE ORDER NOW</span>
                </button>
              </div>

            </form>
          </div>
        ) : (
          <div style={{ textAlign: 'center', padding: '4rem 1rem' }}>
            <div style={{ width: '80px', height: '80px', border: '2px solid #10B981', color: '#10B981', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.5rem auto' }}>
              <CheckCircle size={44} />
            </div>
            
            <span className="editorial-tag" style={{ color: '#10B981', borderBottomColor: '#10B981' }}>
              ORDER CONFIRMED #TPT-84920
            </span>
            
            <h2 style={{ fontFamily: 'Cinzel, serif', fontSize: '2.8rem', fontWeight: 600, color: '#111111', margin: '0.8rem 0 1rem 0' }}>
              Thank You, {formData.name}
            </h2>

            <p style={{ fontSize: '1.05rem', color: '#555555', maxWidth: '580px', margin: '0 auto 2.5rem auto', lineHeight: 1.7 }}>
              Your 100% long-staple cotton embroidered apparel is being hand-inspected and packed. An order receipt has been sent to <strong>{formData.email}</strong>.
            </p>

            <button
              onClick={onClose}
              className="btn-luxury"
              style={{ padding: '1.1rem 3rem' }}
            >
              CONTINUE SHOPPING
            </button>
          </div>
        )}

      </div>
    </div>
  );
}
