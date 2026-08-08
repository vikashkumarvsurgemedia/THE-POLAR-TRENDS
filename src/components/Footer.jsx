import React, { useState } from 'react';
import { MapPin, Instagram, Facebook, Twitter } from 'lucide-react';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
    }
  };

  return (
    <footer style={{ backgroundColor: '#1A1A1A', color: '#FFFFFF', paddingTop: '6rem', paddingBottom: '3rem', borderTop: '1px solid rgba(255,255,255,0.08)' }}>
      <div className="container">
        
        {/* Newsletter Row */}
        <div style={{
          backgroundColor: '#252525',
          padding: '3.5rem',
          border: '1px solid rgba(255, 255, 255, 0.08)',
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '3rem',
          alignItems: 'center',
          marginBottom: '6rem'
        }}>
          <div>
            <span className="editorial-tag" style={{ marginBottom: '0.6rem' }}>THE POLAR CLUB</span>
            <h3 style={{ fontFamily: 'Cinzel, serif', fontSize: '2.2rem', fontWeight: 600, color: '#FFFFFF', marginTop: '0.4rem' }}>
              Privé Atelier Access
            </h3>
            <p style={{ color: '#AAAAAA', fontSize: '0.92rem', marginTop: '0.5rem' }}>
              Subscribe to receive private invitations to limited-edition embroidery drops and bespoke trunk shows.
            </p>
          </div>

          <div>
            {subscribed ? (
              <div style={{ backgroundColor: '#1A1A1A', color: '#FFFFFF', padding: '1.2rem', border: '1px solid #D97706', fontWeight: 800, textAlign: 'center', fontSize: '0.88rem', letterSpacing: '0.1em' }}>
                ✓ SUBSCRIBED. USE PROMO CODE <span style={{ color: '#D97706' }}>POLAR10</span> FOR 10% PRIVILEGE AT CHECKOUT.
              </div>
            ) : (
              <form onSubmit={handleSubscribe} style={{ display: 'flex', gap: '0' }}>
                <input
                  type="email"
                  required
                  placeholder="ENTER YOUR EMAIL..."
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  style={{
                    flex: 1,
                    padding: '1.1rem 1.2rem',
                    border: '1px solid rgba(255,255,255,0.2)',
                    backgroundColor: '#1A1A1A',
                    color: '#FFFFFF',
                    outline: 'none',
                    fontSize: '0.82rem',
                    letterSpacing: '0.1em'
                  }}
                />
                <button
                  type="submit"
                  style={{
                    backgroundColor: '#FFFFFF',
                    color: '#000000',
                    border: 'none',
                    padding: '1.1rem 2rem',
                    fontFamily: 'Plus Jakarta Sans, sans-serif',
                    fontWeight: 800,
                    fontSize: '0.78rem',
                    letterSpacing: '0.2em',
                    cursor: 'pointer'
                  }}
                >
                  JOIN
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Footer Navigation */}
        <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 1.5fr', gap: '3rem', marginBottom: '5rem' }} className="footer-links">
          
          <div>
            <div style={{ fontFamily: 'Cinzel, serif', fontWeight: 700, fontSize: '1.4rem', color: '#FFFFFF', letterSpacing: '0.18em', marginBottom: '1rem' }}>
              THE POLAR TREND
            </div>
            <p style={{ color: '#AAAAAA', fontSize: '0.88rem', lineHeight: 1.7, maxWidth: '320px', marginBottom: '1.8rem' }}>
              India's premier luxury modern cotton clothing brand. Specialized in 100% long-staple Pima & Giza cotton with precision embroidery work.
            </p>
            <div style={{ display: 'flex', gap: '1rem' }}>
              <a href="#" style={{ color: '#FFFFFF', border: '1px solid rgba(255,255,255,0.2)', width: '38px', height: '38px', display: 'flex', alignItems: 'center', justifyContent: 'center', textDecoration: 'none' }}><Instagram size={16} /></a>
              <a href="#" style={{ color: '#FFFFFF', border: '1px solid rgba(255,255,255,0.2)', width: '38px', height: '38px', display: 'flex', alignItems: 'center', justifyContent: 'center', textDecoration: 'none' }}><Facebook size={16} /></a>
              <a href="#" style={{ color: '#FFFFFF', border: '1px solid rgba(255,255,255,0.2)', width: '38px', height: '38px', display: 'flex', alignItems: 'center', justifyContent: 'center', textDecoration: 'none' }}><Twitter size={16} /></a>
            </div>
          </div>

          <div>
            <h4 style={{ fontFamily: 'Cinzel, serif', fontSize: '0.9rem', fontWeight: 700, color: '#FFFFFF', marginBottom: '1.2rem', letterSpacing: '0.15em' }}>
              COLLECTIONS
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem', fontSize: '0.82rem', color: '#AAAAAA', letterSpacing: '0.05em' }}>
              <a href="#catalog" style={{ color: 'inherit', textDecoration: 'none' }}>Embroidery Edit</a>
              <a href="#catalog" style={{ color: 'inherit', textDecoration: 'none' }}>Pure Whites Collection</a>
              <a href="#catalog" style={{ color: 'inherit', textDecoration: 'none' }}>Artisan Checks & Plaid</a>
              <a href="#custom-embroidery" style={{ color: '#D97706', textDecoration: 'none', fontWeight: 700 }}>Bespoke Monogramming</a>
            </div>
          </div>

          <div>
            <h4 style={{ fontFamily: 'Cinzel, serif', fontSize: '0.9rem', fontWeight: 700, color: '#FFFFFF', marginBottom: '1.2rem', letterSpacing: '0.15em' }}>
              THE ATELIER
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem', fontSize: '0.82rem', color: '#AAAAAA', letterSpacing: '0.05em' }}>
              <a href="#fabric-story" style={{ color: 'inherit', textDecoration: 'none' }}>Cotton Science & Loupe</a>
              <a href="#lookbook" style={{ color: 'inherit', textDecoration: 'none' }}>Urban Lookbook</a>
              <a href="#" style={{ color: 'inherit', textDecoration: 'none' }}>Jaipur Artisan Guild</a>
              <a href="#" style={{ color: 'inherit', textDecoration: 'none' }}>Complimentary Shipping & Returns</a>
            </div>
          </div>

          <div>
            <h4 style={{ fontFamily: 'Cinzel, serif', fontSize: '0.9rem', fontWeight: 700, color: '#FFFFFF', marginBottom: '1.2rem', letterSpacing: '0.15em' }}>
              FLAGSHIP ATELIERS
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', fontSize: '0.82rem', color: '#AAAAAA' }}>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem' }}>
                <MapPin size={15} color="#D97706" style={{ marginTop: '2px', flexShrink: 0 }} />
                <span><strong>MUMBAI:</strong> Kala Ghoda Art District, Fort, Mumbai 400001</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem' }}>
                <MapPin size={15} color="#D97706" style={{ marginTop: '2px', flexShrink: 0 }} />
                <span><strong>NEW DELHI:</strong> Hauz Khas Village, New Delhi 110016</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem' }}>
                <MapPin size={15} color="#D97706" style={{ marginTop: '2px', flexShrink: 0 }} />
                <span><strong>BENGALURU:</strong> 100ft Road, Indiranagar, Bengaluru 560038</span>
              </div>
            </div>
          </div>

        </div>

        {/* Copyright & Agency Credit */}
        <div style={{ paddingTop: '2.5rem', borderTop: '1px solid rgba(255,255,255,0.08)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '0.78rem', color: '#777777', flexWrap: 'wrap', gap: '1rem', letterSpacing: '0.05em' }}>
          <div>
            © {new Date().getFullYear()} THE POLAR TREND. All Rights Reserved. Crafted with 100% Cotton & Pride in India.
          </div>
          <div style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
            <span>Privacy Policy</span>
            <span>Terms of Service</span>
            <span>Made in India 🇮🇳</span>
          </div>
        </div>

        {/* Agency Credit Line */}
        <div style={{ textAlign: 'center', marginTop: '2rem', paddingTop: '1.5rem', borderTop: '1px solid rgba(255,255,255,0.04)', fontSize: '0.72rem', color: '#888888', letterSpacing: '0.15em', textTransform: 'uppercase' }}>
          WEBSITE DESIGNED & DEVELOPED BY <span style={{ color: '#FFFFFF', fontWeight: 700, letterSpacing: '0.2em' }}>VSURGEMEDIA</span>
        </div>

      </div>
    </footer>
  );
}
