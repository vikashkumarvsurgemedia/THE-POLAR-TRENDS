import React from 'react';

export default function CategoryCircles({ activeCategory, setActiveCategory }) {
  const categories = [
    {
      id: 'embroidery',
      title: 'Embroidery Edit',
      category: 'Embroidery Edit',
      image: '/assets/products/black-lotus-embroidered.jpg',
      badge: 'POPULAR'
    },
    {
      id: 'whites',
      title: 'Pure Whites',
      category: 'Pure Whites',
      image: '/assets/products/white-kashmiri-floral.jpg',
      badge: 'NEW'
    },
    {
      id: 'checks',
      title: 'Artisan Checks',
      category: 'Artisan Checks',
      image: '/assets/products/terracotta-artisan-check.jpg'
    },
    {
      id: 'sage',
      title: 'Sage & Linen',
      category: 'Embroidery Edit',
      image: '/assets/products/sage-star-stitch.jpg'
    },
    {
      id: 'essentials',
      title: 'Everyday Essentials',
      category: 'Everyday Essentials',
      image: 'https://images.unsplash.com/photo-1603252109303-2751441dd157?auto=format&fit=crop&q=80&w=300',
      badge: 'HOT'
    },
    {
      id: 'combos',
      title: 'Build Combo',
      category: 'All Products',
      image: 'https://images.unsplash.com/photo-1608234807905-4156b01e3c67?auto=format&fit=crop&q=80&w=300',
      badge: 'UP TO 25% OFF',
      badgeColor: '#D72C0D'
    }
  ];

  const handleClick = (categoryName) => {
    setActiveCategory(categoryName);
    const element = document.getElementById('collection');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section style={{
      padding: '30px 0 20px 0',
      backgroundColor: '#FDFFF0',
      borderBottom: '1px solid rgba(0,0,0,0.06)'
    }}>
      <div className="container">
        <div style={{
          display: 'flex',
          gap: '24px',
          justifyContent: 'center',
          overflowX: 'auto',
          paddingBottom: '10px'
        }} className="no-scrollbar">
          {categories.map((cat) => {
            const isActive = activeCategory === cat.category;
            return (
              <div
                key={cat.id}
                onClick={() => handleClick(cat.category)}
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  cursor: 'pointer',
                  flexShrink: 0,
                  width: '90px'
                }}
              >
                <div style={{
                  position: 'relative',
                  width: '74px',
                  height: '74px',
                  borderRadius: '50%',
                  padding: '3px',
                  border: isActive ? '2px solid #000080' : '2px solid rgba(0,0,128,0.15)',
                  backgroundColor: '#FFFFFF',
                  transition: 'all 0.3s ease',
                  boxShadow: isActive ? '0 4px 12px rgba(0,0,128,0.2)' : '0 2px 6px rgba(0,0,0,0.06)'
                }}>
                  <img
                    src={cat.image}
                    alt={cat.title}
                    style={{
                      width: '100%',
                      height: '100%',
                      borderRadius: '50%',
                      objectFit: 'cover'
                    }}
                  />
                  {cat.badge && (
                    <span style={{
                      position: 'absolute',
                      bottom: '-4px',
                      left: '50%',
                      transform: 'translateX(-50%)',
                      backgroundColor: cat.badgeColor || '#000080',
                      color: '#FFFFFF',
                      fontSize: '8px',
                      fontWeight: 700,
                      fontFamily: "'Poppins', sans-serif",
                      padding: '2px 6px',
                      borderRadius: '10px',
                      whiteSpace: 'nowrap',
                      boxShadow: '0 1px 3px rgba(0,0,0,0.2)'
                    }}>
                      {cat.badge}
                    </span>
                  )}
                </div>
                <span style={{
                  fontFamily: "'Work Sans', sans-serif",
                  fontSize: '12px',
                  fontWeight: isActive ? 600 : 500,
                  color: isActive ? '#000080' : '#212326',
                  marginTop: '10px',
                  textAlign: 'center',
                  lineHeight: '1.2'
                }}>
                  {cat.title}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
