import React, { useState, useEffect, useMemo } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Minus, Plus, Heart, ChevronDown, Leaf, Ruler, Droplet, Sparkles } from 'lucide-react';
import { getProductBySlug, getRelatedProducts } from '../data/products';
import ProductCard from '../components/ProductCard';

/* ═══════════════════════════════════════════════════════════════════════════
   THE PRODUCT PAGE TEMPLATE

   One layout, filled in per garment. Nothing here is written for a specific
   product — every value comes from the normalised product record in
   src/data/products.js, and every optional field collapses out of the layout
   when it is absent rather than leaving a gap.

   Adding a shirt means adding a record. It never means editing this file.

   Page order, top to bottom:
     1  Gallery + buy column   — everything needed to purchase
     2  The cloth              — fabric, fit, care
     3  Detail band            — full-bleed on ink, macro stills or clips
     4  Fit & sizing           — measurement table
     5  You may also like      — four from the same edit
   ═══════════════════════════════════════════════════════════════════════════ */

const FEATURE_ICONS = { leaf: Leaf, ruler: Ruler, drop: Droplet, needle: Sparkles };

const inr = n => `₹${Number(n).toLocaleString('en-IN')}`;

export default function ProductPage({ onAddToCart, onToggleWishlist, wishlist }) {
  const { slug } = useParams();
  const product = getProductBySlug(slug);

  const [size, setSize] = useState(null);
  const [qty, setQty] = useState(1);
  const [sizeError, setSizeError] = useState(false);

  // Reset selection whenever the route lands on a different garment, otherwise
  // a size chosen on the previous product carries across to this one.
  useEffect(() => {
    setSize(null);
    setQty(1);
    setSizeError(false);
    window.scrollTo(0, 0);
  }, [slug]);

  useEffect(() => {
    if (product) document.title = `${product.name} — The Polar Trend`;
  }, [product]);

  const related = useMemo(() => getRelatedProducts(product, 4), [product]);

  if (!product) return <NotFound />;

  const discounted = product.originalPrice && product.originalPrice > product.price;
  const isWishlisted = wishlist.includes(product.id);

  const handleAdd = () => {
    if (!size) { setSizeError(true); return; }
    onAddToCart({ ...product, selectedSize: size }, qty);
  };

  return (
    <main id="main" style={{ backgroundColor: 'var(--paper)' }}>

      {/* ── 1 · Gallery + buy column ─────────────────────────────────────── */}
      <section className="pdp-top container">
        <Gallery images={product.images} name={product.name} />

        {/* Sticky on desktop so Add to Bag stays reachable through a long
            gallery. The reference page lets this column scroll away and
            leaves a tall empty margin. */}
        <div className="pdp-buy">
          {product.badge && (
            <p className="badge" style={{ marginBottom: '1.25rem' }}>{product.badge}</p>
          )}

          <h1 className="product-name" style={{ fontSize: '1.0625rem', marginBottom: '0.9rem' }}>
            {product.name}
          </h1>

          <p style={{ marginBottom: '1.75rem' }}>
            <span className="price" style={{ fontSize: '0.9375rem' }}>{inr(product.price)}</span>
            {discounted && <span className="price-was">{inr(product.originalPrice)}</span>}
          </p>

          {product.tagline && (
            <p style={{ fontSize: '0.9375rem', lineHeight: 1.8, marginBottom: '1.75rem', maxWidth: '42ch' }}>
              {product.tagline}
            </p>
          )}

          <hr className="feature-divider" />

          {/* Colourways — thumbnails of the garment in each colour, linking to
              the sibling product. A coloured dot tells a shirt buyer nothing;
              the weave and the trim are the whole decision. */}
          {product.colorways.length > 0 && (
            <div style={{ padding: '1.75rem 0', borderBottom: '1px solid var(--rule)' }}>
              <p className="eyebrow" style={{ marginBottom: '1rem' }}>
                Colour: <span style={{ color: 'var(--ink)' }}>{product.colorways.find(c => c.slug === slug)?.name || product.colors?.[0]?.name}</span>
              </p>
              <div style={{ display: 'flex', gap: '0.6rem', flexWrap: 'wrap' }}>
                {product.colorways.map(c => (
                  <Link
                    key={c.slug}
                    to={`/products/${c.slug}`}
                    aria-label={c.name}
                    aria-current={c.slug === slug ? 'true' : undefined}
                    style={{
                      width: 58, height: 74, display: 'block', overflow: 'hidden',
                      border: `1px solid ${c.slug === slug ? 'var(--ink)' : 'var(--rule)'}`
                    }}
                  >
                    <img src={c.image} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  </Link>
                ))}
              </div>
            </div>
          )}

          {/* Size */}
          <div style={{ padding: '1.75rem 0', borderBottom: '1px solid var(--rule)' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '1rem' }}>
              <p className="eyebrow">Size</p>
              <a href="#fit" className="eyebrow" style={{ color: 'var(--ink)', borderBottom: '1px solid var(--rule-strong)', paddingBottom: 2 }}>
                Size Guide
              </a>
            </div>

            <div className="size-grid">
              {product.sizeOptions.map(({ label, chest }) => {
                const active = size === label;
                return (
                  <button
                    key={label}
                    onClick={() => { setSize(label); setSizeError(false); }}
                    aria-pressed={active}
                    style={{
                      padding: '13px 6px',
                      background: active ? 'var(--ink)' : 'transparent',
                      color: active ? 'var(--paper)' : 'var(--ink)',
                      border: `1px solid ${active ? 'var(--ink)' : sizeError ? 'var(--sale-price)' : 'var(--rule-strong)'}`,
                      cursor: 'pointer',
                      fontFamily: 'var(--font-ui)',
                      fontSize: '0.6875rem',
                      letterSpacing: '0.1em',
                      textTransform: 'uppercase',
                      transition: 'background-color var(--medium) var(--ease), color var(--medium) var(--ease), border-color var(--medium) var(--ease)'
                    }}
                  >
                    {label}{chest && <span style={{ opacity: 0.62 }}> · {chest}</span>}
                  </button>
                );
              })}
            </div>

            {sizeError && (
              <p role="alert" style={{ color: 'var(--sale-price)', fontSize: '0.75rem', marginTop: '0.85rem', letterSpacing: '0.04em' }}>
                Choose a size to continue.
              </p>
            )}

            {product.modelNote && (
              <p style={{ fontSize: '0.8125rem', color: 'var(--ink-muted)', marginTop: '1rem' }}>
                {product.modelNote}
              </p>
            )}
          </div>

          {/* Quantity + add */}
          <div style={{ padding: '1.75rem 0' }}>
            <div style={{ display: 'flex', gap: '0.75rem', marginBottom: '1rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', border: '1px solid var(--rule-strong)' }}>
                <Stepper label="Decrease quantity" onClick={() => setQty(q => Math.max(1, q - 1))}><Minus size={14} strokeWidth={1.5} /></Stepper>
                <span style={{ width: 44, textAlign: 'center', fontSize: '0.8125rem', fontVariantNumeric: 'tabular-nums' }}>{qty}</span>
                <Stepper label="Increase quantity" onClick={() => setQty(q => Math.min(10, q + 1))}><Plus size={14} strokeWidth={1.5} /></Stepper>
              </div>

              <button
                className="card-action"
                onClick={() => onToggleWishlist(product.id)}
                aria-label={isWishlisted ? 'Remove from wishlist' : 'Save to wishlist'}
                aria-pressed={isWishlisted}
                style={{
                  width: 48, display: 'flex', alignItems: 'center', justifyContent: 'center',
                  border: '1px solid var(--rule-strong)', background: 'transparent', cursor: 'pointer'
                }}
              >
                <Heart
                  size={16}
                  strokeWidth={1.25}
                  style={{ color: isWishlisted ? 'var(--bronze)' : 'var(--ink)', fill: isWishlisted ? 'var(--bronze)' : 'none' }}
                />
              </button>
            </div>

            <button
              className="btn-primary"
              onClick={handleAdd}
              disabled={!product.inStock}
              style={{ width: '100%', cursor: product.inStock ? 'pointer' : 'not-allowed', opacity: product.inStock ? 1 : 0.45 }}
            >
              {product.inStock ? 'Add to Bag' : 'Sold Out'}
            </button>

            <p className="eyebrow" style={{ fontSize: '0.5625rem', marginTop: '1rem', lineHeight: 1.8 }}>
              {product.shipsOn ? `Ships ${product.shipsOn} · ` : ''}Complimentary shipping · 14-day returns
            </p>
          </div>

          {/* Feature chips */}
          {product.features.length > 0 && (
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', paddingBottom: '1.75rem', borderBottom: '1px solid var(--rule)' }}>
              {product.features.map(f => {
                const Icon = FEATURE_ICONS[f.icon] || Sparkles;
                return (
                  <span
                    key={f.label}
                    style={{
                      display: 'inline-flex', alignItems: 'center', gap: 7,
                      padding: '8px 12px', border: '1px solid var(--rule)',
                      fontFamily: 'var(--font-ui)', fontSize: '0.625rem',
                      letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--ink-body)'
                    }}
                  >
                    <Icon size={13} strokeWidth={1.25} style={{ color: 'var(--bronze)' }} />
                    {f.label}
                  </span>
                );
              })}
            </div>
          )}

          {/* Accordions */}
          <Accordion title="Description" defaultOpen>
            <p style={{ fontSize: '0.9375rem', lineHeight: 1.85 }}>{product.description}</p>
            {product.highlights?.length > 0 && (
              <ul style={{ listStyle: 'none', marginTop: '1.25rem', display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
                {product.highlights.map(h => (
                  <li key={h} style={{ fontSize: '0.875rem', color: 'var(--ink-body)', paddingLeft: '1rem', position: 'relative' }}>
                    <span style={{ position: 'absolute', left: 0, top: '0.72em', width: 6, height: 1, background: 'var(--bronze)' }} />
                    {h}
                  </li>
                ))}
              </ul>
            )}
          </Accordion>

          <Accordion title="Shipping">
            <p style={{ fontSize: '0.875rem', lineHeight: 1.85 }}>
              Complimentary shipping across India. Dispatched within two working days;
              metros typically receive in three to five. Cash on delivery available.
            </p>
          </Accordion>

          <Accordion title="Returns">
            <p style={{ fontSize: '0.875rem', lineHeight: 1.85 }}>
              Fourteen days from delivery, unworn and with tags attached. Reverse pickup
              arranged at no cost. Refunds are issued to the original method within a week
              of the garment reaching us.
            </p>
          </Accordion>
        </div>
      </section>

      {/* ── 2 · The cloth ────────────────────────────────────────────────── */}
      <section className="section-tight" style={{ backgroundColor: 'var(--paper-alt)' }}>
        <div className="container">
          <p className="eyebrow" style={{ marginBottom: '2rem' }}>The Cloth</p>
          <dl className="spec-row">
            <Spec term="Fabric" value={product.fabric} />
            {product.embroidery && <Spec term="Detailing" value={product.embroidery} />}
            {product.fit && <Spec term="Fit" value={product.fit} />}
            <Spec term="Care" value={product.care} />
          </dl>
        </div>
      </section>

      {/* ── 3 · Detail band ──────────────────────────────────────────────── */}
      {product.detailMedia.length > 0 && (
        <section className="theme-dark" style={{ backgroundColor: 'var(--ink-surface)', padding: 'clamp(2rem, 5vw, 4rem) 0' }}>
          <div className="container">
            <div className="detail-band">
              {product.detailMedia.map((src, i) => (
                <div key={i} className="img-frame" style={{ aspectRatio: '4 / 5' }}>
                  <img src={src} alt="" loading="lazy" />
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── 4 · Fit & sizing ─────────────────────────────────────────────── */}
      <section id="fit" className="section-tight" style={{ backgroundColor: 'var(--paper)' }}>
        <div className="container">
          <p className="eyebrow" style={{ marginBottom: '2rem' }}>Fit &amp; Sizing</p>

          {product.measurements.length > 0 ? (
            <div style={{ overflowX: 'auto' }}>
              <table className="size-table">
                <thead>
                  <tr>
                    <th>Size</th>
                    {Object.keys(product.measurements[0]).filter(k => k !== 'size').map(k => <th key={k}>{k}</th>)}
                  </tr>
                </thead>
                <tbody>
                  {product.measurements.map(row => (
                    <tr key={row.size}>
                      <td>{row.size}</td>
                      {Object.entries(row).filter(([k]) => k !== 'size').map(([k, v]) => <td key={k}>{v}</td>)}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ) : (
            <div style={{ overflowX: 'auto' }}>
              <table className="size-table">
                <thead><tr><th>Size</th><th>Chest</th></tr></thead>
                <tbody>
                  {product.sizeOptions.map(s => (
                    <tr key={s.label}><td>{s.label}</td><td>{s.chest || '—'}</td></tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}

          {product.modelNote && (
            <p style={{ fontSize: '0.8125rem', color: 'var(--ink-muted)', marginTop: '1.5rem' }}>
              {product.modelNote}
            </p>
          )}
        </div>
      </section>

      {/* ── 5 · Related ──────────────────────────────────────────────────── */}
      {related.length > 0 && (
        <section className="section" style={{ backgroundColor: 'var(--paper-alt)' }}>
          <div className="container">
            <div className="section-head">
              <div className="rule-center" />
              <p className="eyebrow">You May Also Like</p>
            </div>
            <div className="product-grid-responsive">
              {related.map(p => (
                <ProductCard
                  key={p.id}
                  product={p}
                  onAddToCart={onAddToCart}
                  onToggleWishlist={onToggleWishlist}
                  isWishlisted={wishlist.includes(p.id)}
                />
              ))}
            </div>
          </div>
        </section>
      )}
    </main>
  );
}

/* ── Gallery ─────────────────────────────────────────────────────────────
   Two-up grid on desktop, matching the reference. On phones it becomes a
   horizontal snap strip with a position counter, because a stacked column of
   ten portrait images pushes the buy controls a full screen down. */
function Gallery({ images, name }) {
  const [index, setIndex] = useState(0);

  const onScroll = e => {
    const el = e.currentTarget;
    setIndex(Math.round(el.scrollLeft / el.clientWidth));
  };

  return (
    <div className="pdp-gallery">
      <div className="gallery-grid no-scrollbar" onScroll={onScroll}>
        {images.map((src, i) => (
          <div key={src + i} className="gallery-frame">
            <img
              src={src}
              alt={i === 0 ? name : ''}
              loading={i < 2 ? 'eager' : 'lazy'}
            />
          </div>
        ))}
      </div>

      {images.length > 1 && (
        <p className="eyebrow mobile-only gallery-count">
          {index + 1} / {images.length}
        </p>
      )}
    </div>
  );
}

function Stepper({ children, onClick, label }) {
  return (
    <button
      onClick={onClick}
      aria-label={label}
      style={{
        width: 40, height: 46, display: 'flex', alignItems: 'center', justifyContent: 'center',
        background: 'transparent', border: 'none', cursor: 'pointer', color: 'var(--ink)'
      }}
    >
      {children}
    </button>
  );
}

function Accordion({ title, children, defaultOpen = false }) {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div style={{ borderBottom: '1px solid var(--rule)' }}>
      <button
        onClick={() => setOpen(o => !o)}
        aria-expanded={open}
        className="eyebrow eyebrow-ink"
        style={{
          width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          padding: '1.35rem 0', background: 'none', border: 'none', cursor: 'pointer', textAlign: 'left'
        }}
      >
        {title}
        <ChevronDown
          size={15}
          strokeWidth={1.25}
          style={{ transform: open ? 'rotate(180deg)' : 'none', transition: 'transform var(--medium) var(--ease)' }}
        />
      </button>
      {open && <div style={{ paddingBottom: '1.5rem' }}>{children}</div>}
    </div>
  );
}

function Spec({ term, value }) {
  return (
    <div>
      <dt className="eyebrow" style={{ fontSize: '0.5625rem', marginBottom: '0.6rem' }}>{term}</dt>
      <dd style={{ fontSize: '0.9375rem', color: 'var(--ink-body)', lineHeight: 1.75 }}>{value}</dd>
    </div>
  );
}

function NotFound() {
  return (
    <main id="main" className="section container" style={{ textAlign: 'center', minHeight: '60vh' }}>
      <div className="rule-center" />
      <h1 style={{ marginBottom: '1.5rem' }}>Not in the collection</h1>
      <p style={{ margin: '0 auto 2.5rem', maxWidth: '38ch' }}>
        This piece may have sold out or moved to the archive.
      </p>
      <Link to="/" className="link-rule">View Everything</Link>
    </main>
  );
}
