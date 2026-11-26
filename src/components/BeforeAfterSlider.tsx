import React, { useState } from 'react';
import { MoveHorizontal } from 'lucide-react';
import { BeforeAfterPair } from '../types/portfolio';

interface BeforeAfterSliderProps {
  data: BeforeAfterPair;
}

export const BeforeAfterSlider: React.FC<BeforeAfterSliderProps> = ({ data }) => {
  const [split, setSplit] = useState(50);

  return (
    <div style={{ display: 'grid', gap: '0.75rem', height: '100%' }}>
      <div className="ba-container" style={{ borderRadius: '8px', minHeight: '320px' }}>
        <img src={data.afterSrc} alt={data.afterLabel} className="ba-img" />
        <div
          className="ba-overlay"
          style={{ clipPath: `inset(0 ${100 - split}% 0 0)` }}
        >
          <img src={data.beforeSrc} alt={data.beforeLabel} className="ba-img" />
        </div>

        <div className="ba-divider" style={{ left: `${split}%` }} />
        <div className="ba-handle" style={{ left: `${split}%` }}>
          <MoveHorizontal size={18} />
        </div>

        <span className="ba-label" style={{ left: '0.75rem' }}>
          {data.beforeLabel}
        </span>
        <span className="ba-label" style={{ right: '0.75rem', borderColor: 'rgba(59,130,246,0.45)', color: '#93c5fd' }}>
          {data.afterLabel}
        </span>

        <input
          type="range"
          min={2}
          max={98}
          value={split}
          onChange={(e) => setSplit(Number(e.target.value))}
          className="ba-range"
          aria-label={`Compare ${data.beforeLabel} and ${data.afterLabel}`}
        />
      </div>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
          gap: '0.75rem',
          fontSize: '0.82rem',
          color: 'var(--text-secondary)',
        }}
      >
        <div style={{ background: 'var(--bg-card)', padding: '0.65rem 0.85rem', borderRadius: '8px', border: '1px solid var(--border-subtle)' }}>
          <strong style={{ color: 'var(--text-primary)', display: 'block', marginBottom: '0.15rem' }}>
            Before — {data.beforeLabel}
          </strong>
          {data.beforeNote}
        </div>
        <div style={{ background: 'var(--bg-card)', padding: '0.65rem 0.85rem', borderRadius: '8px', border: '1px solid var(--border-accent)' }}>
          <strong style={{ color: 'var(--accent-blue-bright)', display: 'block', marginBottom: '0.15rem' }}>
            After — {data.afterLabel}
          </strong>
          {data.afterNote}
        </div>
      </div>
    </div>
  );
};
