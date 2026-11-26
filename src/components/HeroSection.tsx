import React, { useState } from 'react';
import { ArrowDownRight, Box, Compass, Layers } from 'lucide-react';
import { CAD_PROJECTS, PROFILE } from '../data/portfolioData';
import { ModelViewer3D } from './ModelViewer3D';

const HERO_MODELS = [
  { id: 'discbrake', label: 'Wave Brake Rotor (320 mm)', glb: './assets/models/discbrake.glb' },
  { id: 'vx01-formula', label: 'VX-01 Formula Concept', glb: './assets/models/vx01-formula.glb' },
  { id: 'buggy-22', label: 'Buggy 22 Spaceframe', glb: './assets/models/buggy-22.glb' },
  { id: 'car-engine', label: '2.0 L Inline-4 Cutaway', glb: './assets/models/car-engine.glb' },
];

export const HeroSection: React.FC = () => {
  const [selectedModel, setSelectedModel] = useState(HERO_MODELS[0]);

  return (
    <section id="overview" className="hero eng-grid-bg">
      <div className="container hero-grid">
        <div>
          <div className="hero-badge">
            <span className="hero-dot" />
            <span>Open to Junior CAD Designer / Mechanical &amp; Automotive Engineering Roles</span>
          </div>

          <div className="hero-identity">
            <div className="hero-avatar-frame">
              <img
                src={PROFILE.avatar}
                alt={`${PROFILE.name} — ${PROFILE.title}`}
                className="hero-avatar-img"
              />
            </div>
            <div>
              <h1 className="hero-name">{PROFILE.name}</h1>
              <p className="hero-role">{PROFILE.title}</p>
            </div>
          </div>

          <p className="hero-summary">{PROFILE.summary}</p>

          <div className="spec-pills" aria-label="Specializations">
            {PROFILE.specializations.map((spec) => (
              <span key={spec} className="spec-pill">
                <Compass size={13} color="#60a5fa" />
                {spec}
              </span>
            ))}
          </div>

          <div className="hero-actions">
            <a href="#cad-projects" className="btn-primary">
              <Layers size={17} />
              View CAD Portfolio ({CAD_PROJECTS.length} Projects)
            </a>
            <a href="#experience" className="btn-secondary">
              <ArrowDownRight size={17} />
              Shop-Floor &amp; Resume
            </a>
          </div>
        </div>

        <div className="hero-viewport-card">
          <div className="hero-viewport-header">
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.45rem', color: '#e2e8f0' }}>
              <Box size={14} color="#38bdf8" />
              INTERACTIVE 3D CAD INSPECTOR
            </span>
            <select
              aria-label="Select 3D CAD preview model"
              value={selectedModel.id}
              onChange={(e) => {
                const found = HERO_MODELS.find((m) => m.id === e.target.value);
                if (found) setSelectedModel(found);
              }}
              style={{
                background: '#151b26',
                color: '#cbd5e1',
                border: '1px solid rgba(59, 130, 246, 0.35)',
                borderRadius: '6px',
                padding: '0.25rem 0.5rem',
                fontFamily: 'var(--font-mono)',
                fontSize: '0.72rem',
              }}
            >
              {HERO_MODELS.map((m) => (
                <option key={m.id} value={m.id}>
                  {m.label}
                </option>
              ))}
            </select>
          </div>

          <div style={{ height: '340px' }}>
            <ModelViewer3D glbUrl={selectedModel.glb} title={selectedModel.label} />
          </div>

          <div className="hero-stats-bar">
            <div className="hero-stat">
              <span className="hero-stat-val">{CAD_PROJECTS.length}</span>
              <span className="hero-stat-lbl">Completed CAD / 3D Projects</span>
            </div>
            <div className="hero-stat">
              <span className="hero-stat-val">FreeCAD / Blender</span>
              <span className="hero-stat-lbl">Primary Modelling Stack</span>
            </div>
            <div className="hero-stat">
              <span className="hero-stat-val">CNC + G-Code</span>
              <span className="hero-stat-lbl">Shop-Floor Production</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
