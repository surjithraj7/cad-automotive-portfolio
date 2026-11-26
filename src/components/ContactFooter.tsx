import React, { useState } from 'react';
import { Check, Copy, ExternalLink, Mail, Phone } from 'lucide-react';
import { PROFILE } from '../data/portfolioData';

export const ContactFooter: React.FC = () => {
  const [copied, setCopied] = useState<'email' | 'phone' | null>(null);

  const copyText = async (text: string, type: 'email' | 'phone') => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(type);
      setTimeout(() => setCopied(null), 1800);
    } catch {
      // Clipboard API fallback ignored cleanly
    }
  };

  return (
    <footer id="contact" className="section section-alt" style={{ paddingBottom: '3rem' }}>
      <div className="container">
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', flexWrap: 'wrap', marginBottom: '0.5rem' }}>
          <img
            src={PROFILE.avatar}
            alt={PROFILE.name}
            style={{
              width: '56px',
              height: '56px',
              borderRadius: '12px',
              objectFit: 'cover',
              objectPosition: 'center 15%',
              background: '#f8fafc',
              border: '1.5px solid rgba(59, 130, 246, 0.5)',
            }}
          />
          <div>
            <span className="eyebrow" style={{ marginBottom: '0.25rem' }}>Connect</span>
            <h2 className="section-title" style={{ margin: 0 }}>Open to Engineering &amp; CAD Design Opportunities</h2>
          </div>
        </div>
        <p className="section-lead">
          Available for Junior CAD Designer, Automotive Design Engineer, 3D Modelling Engineer,
          and CAD/CAM Engineer positions.
        </p>

        <div className="contact-grid">
          <div className="contact-card">
            <div className="skill-icon-box">
              <Mail size={19} />
            </div>
            <div style={{ flex: 1, minWidth: 0 }}>
              <div style={{ fontSize: '0.74rem', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)' }}>
                EMAIL
              </div>
              <a
                href={`mailto:${PROFILE.email}`}
                style={{ fontWeight: 600, fontSize: '0.92rem', wordBreak: 'break-all' }}
              >
                {PROFILE.email}
              </a>
            </div>
            <button
              type="button"
              onClick={() => copyText(PROFILE.email, 'email')}
              aria-label="Copy email address"
              style={{
                background: 'transparent',
                border: '1px solid var(--border-subtle)',
                color: 'var(--text-secondary)',
                borderRadius: '6px',
                padding: '0.4rem',
              }}
            >
              {copied === 'email' ? <Check size={15} color="#38bdf8" /> : <Copy size={15} />}
            </button>
          </div>

          <div className="contact-card">
            <div className="skill-icon-box">
              <Phone size={19} />
            </div>
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: '0.74rem', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)' }}>
                PHONE
              </div>
              <a href={`tel:${PROFILE.phone.replace(/\s+/g, '')}`} style={{ fontWeight: 600, fontSize: '0.92rem' }}>
                {PROFILE.phone}
              </a>
            </div>
            <button
              type="button"
              onClick={() => copyText(PROFILE.phone, 'phone')}
              aria-label="Copy phone number"
              style={{
                background: 'transparent',
                border: '1px solid var(--border-subtle)',
                color: 'var(--text-secondary)',
                borderRadius: '6px',
                padding: '0.4rem',
              }}
            >
              {copied === 'phone' ? <Check size={15} color="#38bdf8" /> : <Copy size={15} />}
            </button>
          </div>

          <a
            href={PROFILE.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="contact-card"
          >
            <div className="skill-icon-box">
              <ExternalLink size={19} />
            </div>
            <div style={{ minWidth: 0 }}>
              <div style={{ fontSize: '0.74rem', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)' }}>
                LINKEDIN
              </div>
              <span style={{ fontWeight: 600, fontSize: '0.9rem', wordBreak: 'break-all' }}>
                {PROFILE.linkedinLabel}
              </span>
            </div>
          </a>
        </div>

        <div
          style={{
            marginTop: '3rem',
            paddingTop: '1.25rem',
            borderTop: '1px solid var(--border-subtle)',
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            gap: '0.75rem',
            fontSize: '0.8rem',
            color: 'var(--text-muted)',
          }}
        >
          <span>© {new Date().getFullYear()} {PROFILE.name} — CAD Design &amp; Automotive Engineering Portfolio</span>
          <span style={{ fontFamily: 'var(--font-mono)' }}>
            All CAD visuals &amp; 3D GLB previews exported directly from completed FreeCAD &amp; Blender models.
          </span>
        </div>
      </div>
    </footer>
  );
};
