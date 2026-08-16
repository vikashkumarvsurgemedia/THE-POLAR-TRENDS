import React from 'react';
import { Leaf, Shield, Truck, Star } from 'lucide-react';

export default function FabricStory() {
  return (
    <section style={{ backgroundColor: '#F5F3EE', padding: '80px 20px' }}>
      <div className="container" style={{ maxWidth: '1200px', margin: '0 auto' }}>
        
        <div style={{ textAlign: 'center', marginBottom: '40px' }}>
          <h2 style={{
            fontFamily: "'Work Sans', sans-serif",
            fontSize: '32px',
            fontWeight: 600,
            color: '#212326',
            margin: '0 0 8px 0'
          }}>
            Our Promise
          </h2>
          <p style={{
            fontFamily: "'Poppins', sans-serif",
            fontSize: '15px',
            color: '#777777',
            margin: 0
          }}>
            Crafted with care, designed with purpose
          </p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '40px',
          alignItems: 'center'
        }}>
          
          <div style={{ width: '100%', height: '100%', minHeight: '400px' }}>
            <img 
              src="/assets/products/white-kashmiri-floral.jpg" 
              alt="Our Promise"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                borderRadius: '10px'
              }}
            />
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            
            <div style={{ display: 'flex', gap: '16px' }}>
              <div style={{ flexShrink: 0, marginTop: '2px' }}>
                <Leaf size={24} color="#000080" />
              </div>
              <div>
                <h3 style={{ fontFamily: "'Work Sans', sans-serif", fontSize: '16px', fontWeight: 600, color: '#212326', margin: '0 0 6px 0' }}>
                  100% Pure Cotton
                </h3>
                <p style={{ fontFamily: "'Poppins', sans-serif", fontSize: '13px', color: '#555555', margin: 0, lineHeight: 1.6 }}>
                  Sourced from the finest long-staple cotton fibers ensuring breathability, softness, and durability for everyday wear.
                </p>
              </div>
            </div>

            <div style={{ display: 'flex', gap: '16px' }}>
              <div style={{ flexShrink: 0, marginTop: '2px' }}>
                <Star size={24} color="#000080" />
              </div>
              <div>
                <h3 style={{ fontFamily: "'Work Sans', sans-serif", fontSize: '16px', fontWeight: 600, color: '#212326', margin: '0 0 6px 0' }}>
                  Expert Craftsmanship
                </h3>
                <p style={{ fontFamily: "'Poppins', sans-serif", fontSize: '13px', color: '#555555', margin: 0, lineHeight: 1.6 }}>
                  Each piece features intricate, handcrafted embroidery meticulously placed by our skilled artisans.
                </p>
              </div>
            </div>

            <div style={{ display: 'flex', gap: '16px' }}>
              <div style={{ flexShrink: 0, marginTop: '2px' }}>
                <Truck size={24} color="#000080" />
              </div>
              <div>
                <h3 style={{ fontFamily: "'Work Sans', sans-serif", fontSize: '16px', fontWeight: 600, color: '#212326', margin: '0 0 6px 0' }}>
                  Free Express Shipping
                </h3>
                <p style={{ fontFamily: "'Poppins', sans-serif", fontSize: '13px', color: '#555555', margin: 0, lineHeight: 1.6 }}>
                  Enjoy fast and complimentary shipping on all orders nationwide, delivered straight to your doorstep.
                </p>
              </div>
            </div>

            <div style={{ display: 'flex', gap: '16px' }}>
              <div style={{ flexShrink: 0, marginTop: '2px' }}>
                <Shield size={24} color="#000080" />
              </div>
              <div>
                <h3 style={{ fontFamily: "'Work Sans', sans-serif", fontSize: '16px', fontWeight: 600, color: '#212326', margin: '0 0 6px 0' }}>
                  Premium Quality
                </h3>
                <p style={{ fontFamily: "'Poppins', sans-serif", fontSize: '13px', color: '#555555', margin: 0, lineHeight: 1.6 }}>
                  Our garments undergo rigorous quality checks to maintain their shape, color, and pristine finish.
                </p>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
