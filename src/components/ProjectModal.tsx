import React, { useEffect, useState } from 'react';
import {
  Box,
  Columns2,
  Images,
  Info,
  Maximize2,
  X,
} from 'lucide-react';
import { CadProject } from '../types/portfolio';
import { ModelViewer3D } from './ModelViewer3D';
import { BeforeAfterSlider } from './BeforeAfterSlider';
import { Lightbox } from './Lightbox';

interface ProjectModalProps {
  project: CadProject;
  initialTab?: 'gallery' | '3d' | 'compare';
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({
  project,
  initialTab = 'gallery',
  onClose,
}) => {
  const [tab, setTab] = useState<'gallery' | '3d' | 'compare'>(initialTab);
  const [activeIdx, setActiveIdx] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);

  useEffect(() => {
    setTab(initialTab);
    setActiveIdx(0);
  }, [project.id, initialTab]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && !lightboxOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [onClose, lightboxOpen]);

  const activeImage = project.gallery[activeIdx] ?? project.gallery[0];

  return (
    <>
      <div
        className="modal-backdrop"
        role="dialog"
        aria-modal="true"
        aria-label={project.title}
        onClick={(e) => {
          if (e.target === e.currentTarget) onClose();
        }}
      >
        <div className="modal-dialog">
          <div className="modal-header">
            <div>
              <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '0.5rem', marginBottom: '0.2rem' }}>
                <span className="badge-cat">{project.primaryCategory}</span>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.72rem', color: 'var(--text-muted)' }}>
                  {project.sourceFile}
                </span>
              </div>
              <h3 style={{ margin: 0, fontFamily: 'var(--font-display)', fontSize: '1.25rem' }}>
                {project.title}
              </h3>
            </div>

            <button
              type="button"
              onClick={onClose}
              aria-label="Close project details"
              style={{
                background: 'var(--bg-card)',
                border: '1px solid var(--border-subtle)',
                color: 'var(--text-primary)',
                borderRadius: '8px',
                padding: '0.5rem',
                display: 'grid',
                placeItems: 'center',
              }}
            >
              <X size={18} />
            </button>
          </div>

          <div className="modal-body">
            {project.isSubsystemHighlight && project.subsystemNote && (
              <div className="category-note" style={{ marginBottom: 0 }}>
                <Info size={18} color="#60a5fa" style={{ flexShrink: 0, marginTop: '2px' }} />
                <span>{project.subsystemNote}</span>
              </div>
            )}

            <div className="modal-tabs" role="tablist">
              <button
                type="button"
                role="tab"
                aria-selected={tab === 'gallery'}
                className={`modal-tab ${tab === 'gallery' ? 'active' : ''}`}
                onClick={() => setTab('gallery')}
              >
                <Images size={15} />
                Image Gallery ({project.gallery.length})
              </button>

              {project.modelGlb && (
                <button
                  type="button"
                  role="tab"
                  aria-selected={tab === '3d'}
                  className={`modal-tab ${tab === '3d' ? 'active' : ''}`}
                  onClick={() => setTab('3d')}
                >
                  <Box size={15} />
                  Interactive 3D Preview
                </button>
              )}

              <button
                type="button"
                role="tab"
                aria-selected={tab === 'compare'}
                className={`modal-tab ${tab === 'compare' ? 'active' : ''}`}
                onClick={() => setTab('compare')}
              >
                <Columns2 size={15} />
                Before / After Comparison
              </button>
            </div>

            {tab === 'gallery' && (
              <div style={{ display: 'grid', gap: '0.85rem' }}>
                <div className="stage-box">
                  <img
                    src={activeImage.src}
                    alt={activeImage.caption}
                    style={{ width: '100%', height: '100%', objectFit: 'contain' }}
                  />
                  <button
                    type="button"
                    onClick={() => setLightboxOpen(true)}
                    style={{
                      position: 'absolute',
                      top: '0.75rem',
                      right: '0.75rem',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '0.4rem',
                      padding: '0.45rem 0.75rem',
                      borderRadius: '6px',
                      background: 'rgba(11, 14, 19, 0.85)',
                      border: '1px solid rgba(59, 130, 246, 0.45)',
                      color: '#ffffff',
                      fontSize: '0.78rem',
                      fontWeight: 500,
                    }}
                  >
                    <Maximize2 size={14} /> Full-Screen Preview
                  </button>
                </div>

                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '1rem', flexWrap: 'wrap' }}>
                  <p style={{ margin: 0, color: 'var(--text-secondary)', fontSize: '0.86rem' }}>
                    <strong style={{ color: 'var(--text-primary)' }}>{activeImage.label}:</strong>{' '}
                    {activeImage.caption}
                  </p>
                </div>

                <div className="thumb-strip">
                  {project.gallery.map((img, idx) => (
                    <button
                      key={img.src}
                      type="button"
                      className={`thumb-btn ${idx === activeIdx ? 'active' : ''}`}
                      onClick={() => setActiveIdx(idx)}
                    >
                      <img src={img.src} alt={img.label} loading="lazy" />
                      <span>{img.label}</span>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {tab === '3d' && project.modelGlb && (
              <div className="stage-box" style={{ height: '460px', aspectRatio: 'auto' }}>
                <ModelViewer3D glbUrl={project.modelGlb} title={project.title} />
              </div>
            )}

            {tab === 'compare' && (
              <div>
                <h4 style={{ margin: '0 0 0.75rem', fontFamily: 'var(--font-display)', fontSize: '1rem' }}>
                  {project.beforeAfter.title}
                </h4>
                <BeforeAfterSlider data={project.beforeAfter} />
              </div>
            )}

            <div className="detail-columns">
              <div style={{ display: 'grid', gap: '1rem' }}>
                <div className="detail-card">
                  <h4>Project Overview &amp; Contribution</h4>
                  <p style={{ margin: '0 0 0.7rem', color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
                    {project.description}
                  </p>
                  <p style={{ margin: 0, color: '#dbeafe', fontSize: '0.88rem' }}>
                    <strong>My Contribution:</strong> {project.myContribution}
                  </p>
                </div>

                <div className="detail-card">
                  <h4>Design Objectives</h4>
                  <ul className="detail-list">
                    {project.designObjectives.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>

                <div className="detail-card">
                  <h4>Engineering Concepts</h4>
                  <ul className="detail-list">
                    {project.engineeringConcepts.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>

                <div className="detail-card">
                  <h4>Technical Features</h4>
                  <ul className="detail-list">
                    {project.technicalFeatures.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>

              <div style={{ display: 'grid', gap: '1rem', alignContent: 'start' }}>
                <div className="detail-card">
                  <h4>Measured CAD Specifications</h4>
                  <div className="specs-table">
                    {project.specs.map((spec) => (
                      <div key={spec.label} className="spec-row">
                        <span className="spec-row-k">{spec.label}</span>
                        <span className="spec-row-v">{spec.value}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="detail-card">
                  <h4>Software &amp; Categories</h4>
                  <div className="project-software-row" style={{ marginBottom: '0.75rem' }}>
                    {project.software.map((sw) => (
                      <span key={sw} className="software-chip">
                        {sw}
                      </span>
                    ))}
                  </div>
                  <div className="project-software-row">
                    {project.categories.map((c) => (
                      <span
                        key={c}
                        style={{
                          fontSize: '0.72rem',
                          padding: '0.2rem 0.55rem',
                          borderRadius: '999px',
                          border: '1px solid var(--border-subtle)',
                          color: 'var(--text-secondary)',
                        }}
                      >
                        {c}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {lightboxOpen && (
        <Lightbox
          images={project.gallery}
          index={activeIdx}
          onClose={() => setLightboxOpen(false)}
          onChange={setActiveIdx}
        />
      )}
    </>
  );
};
