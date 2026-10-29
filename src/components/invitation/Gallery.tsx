import { useCallback, useEffect, useState } from 'react';

export interface GalleryItemData {
  src: string;
  alt: string;
  caption?: string;
}

export default function Gallery({ items }: { items: GalleryItemData[] }) {
  const [index, setIndex] = useState<number | null>(null);

  const close = useCallback(() => setIndex(null), []);
  const next = useCallback(() => setIndex((current) => (current === null ? null : (current + 1) % items.length)), [items.length]);
  const prev = useCallback(() => setIndex((current) => (current === null ? null : (current - 1 + items.length) % items.length)), [items.length]);

  useEffect(() => {
    if (index === null) return;
    const handler = (event: KeyboardEvent) => {
      if (event.key === 'Escape') close();
      if (event.key === 'ArrowRight') next();
      if (event.key === 'ArrowLeft') prev();
    };
    document.addEventListener('keydown', handler);
    return () => document.removeEventListener('keydown', handler);
  }, [close, index, next, prev]);

  return (
    <>
      <div className="inv-gallery">
        {items.map((item, itemIndex) => (
          <button
            className="inv-gallery-item"
            type="button"
            key={`${item.src}-${itemIndex}`}
            onClick={() => setIndex(itemIndex)}
            aria-label={`Buka foto: ${item.alt}`}
          >
            <img src={item.src} alt={item.alt} loading="lazy" decoding="async" />
            {item.caption && <span>{item.caption}</span>}
          </button>
        ))}
      </div>

      {index !== null && (
        <div className="inv-lightbox" role="dialog" aria-modal="true" aria-label="Galeri foto" onClick={close}>
          <button className="inv-lightbox-close" type="button" onClick={close} aria-label="Tutup">×</button>
          <button
            className="inv-lightbox-nav is-prev"
            type="button"
            onClick={(event) => { event.stopPropagation(); prev(); }}
            aria-label="Foto sebelumnya"
          >←</button>
          <figure className="inv-lightbox-figure" onClick={(event) => event.stopPropagation()}>
            <img src={items[index].src} alt={items[index].alt} />
            <figcaption>{items[index].caption || items[index].alt}</figcaption>
          </figure>
          <button
            className="inv-lightbox-nav is-next"
            type="button"
            onClick={(event) => { event.stopPropagation(); next(); }}
            aria-label="Foto berikutnya"
          >→</button>
        </div>
      )}
    </>
  );
}
