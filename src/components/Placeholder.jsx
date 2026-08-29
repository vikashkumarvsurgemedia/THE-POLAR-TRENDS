import React from 'react';
import { ImageIcon, Film } from 'lucide-react';

/* Content slots.

   Every zone of the product page renders whether or not its content exists
   yet. Where a photograph, film or colourway is still to come, the slot draws
   itself instead of collapsing — so the owner can see the finished shape of
   the page and knows exactly what to supply and at what crop.

   These are not decoration and they are not permanent. Each one appears only
   while its field is empty; the moment a real asset is added to the product
   record the slot is replaced by that asset and never renders again. Nothing
   has to be removed from the code later.

   Drawn quietly on purpose: paper-deep ground, one hairline, bronze label. A
   loud "MISSING IMAGE" box would read as a broken page in a client review,
   which is the opposite of what it's for. */

export function ImageSlot({ label, spec, aspect = '4 / 5', icon = 'image' }) {
  const Icon = icon === 'film' ? Film : ImageIcon;

  return (
    <div
      className="slot"
      style={{ aspectRatio: aspect }}
      role="img"
      aria-label={`${label} — image to be supplied`}
    >
      <Icon size={18} strokeWidth={1} className="slot-icon" />
      <p className="eyebrow slot-label">{label}</p>
      {spec && <p className="slot-spec">{spec}</p>}
    </div>
  );
}

/* For a whole zone that has no content yet — the detail band, the reviews
   rail. Carries the same note but sized for a band rather than a tile. */
export function SectionSlot({ title, note, children }) {
  return (
    <div className="slot slot-band">
      <p className="eyebrow slot-label">{title}</p>
      {note && <p className="slot-spec" style={{ maxWidth: '46ch' }}>{note}</p>}
      {children}
    </div>
  );
}
