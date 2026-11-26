import React, { useEffect } from 'react';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';
import { ProjectImage } from '../types/portfolio';

interface LightboxProps {
  images: ProjectImage[];
  index: number;
  onClose: () => void;
  onChange: (nextIndex: number) => void;
}

export const Lightbox: React.FC<LightboxProps> = ({
  images,
  index,
  onClose,
  onChange,
}) => {
  const current = images[index];

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') onChange((index - 1 + images.length) % images.length);
      if (e.key === 'ArrowRight') onChange((index + 1) % images.length);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [index, images.length, onClose, onChange]);

  if (!current) return null;

  return (
    <div className="lightbox-backdrop" role="dialog" aria-modal="true" aria-label="Full screen image viewer">
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingBottom: '0.75rem' }}>
        <div>
          <strong style={{ fontSize: '0.95rem', color: '#f8fafc' }}>{current.label}</strong>
          <span style={{ marginLeft: '0.75rem', fontFamily: 'var(--font-mono)', fontSize: '0.78rem', color: '#94a3b8' }}>
            {index + 1} / {images.length}
          </span>
        </div>
        <button
          type="button"
          onClick={onClose}
          aria-label="Close full-screen preview"
          style={{
            background: '#151b26',
            border: '1px solid rgba(148,163,184,0.25)',
            color: '#f8fafc',
            borderRadius: '8px',
            padding: '0.45rem 0.7rem',
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.35rem',
          }}
        >
          <X size={16} /> Close
        </button>
      </div>

      <div className="lightbox-stage">
        {images.length > 1 && (
          <button
            type="button"
            onClick={() => onChange((index - 1 + images.length) % images.length)}
            aria-label="Previous image"
            style={{
              position: 'absolute',
              left: '0.5rem',
              background: 'rgba(15, 23, 42, 0.85)',
              border: '1px solid rgba(148,163,184,0.25)',
              color: '#ffffff',
              borderRadius: '50%',
              width: '42px',
              height: '42px',
              display: 'grid',
              placeItems: 'center',
            }}
          >
            <ChevronLeft size={20} />
          </button>
        )}

        <img src={current.src} alt={current.caption} />

        {images.length > 1 && (
          <button
            type="button"
            onClick={() => onChange((index + 1) % images.length)}
            aria-label="Next image"
            style={{
              position: 'absolute',
              right: '0.5rem',
              background: 'rgba(15, 23, 42, 0.85)',
              border: '1px solid rgba(148,163,184,0.25)',
              color: '#ffffff',
              borderRadius: '50%',
              width: '42px',
              height: '42px',
              display: 'grid',
              placeItems: 'center',
            }}
          >
            <ChevronRight size={20} />
          </button>
        )}
      </div>

      <p style={{ textAlign: 'center', color: '#cbd5e1', fontSize: '0.88rem', margin: '0.75rem 0 0' }}>
        {current.caption}
      </p>
    </div>
  );
};
