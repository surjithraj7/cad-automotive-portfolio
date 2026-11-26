import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { PROFILE } from '../data/portfolioData';

const NAV_ITEMS = [
  { href: '#overview', label: 'Overview' },
  { href: '#cad-projects', label: 'CAD Projects' },
  { href: '#skills', label: 'Technical Skills' },
  { href: '#experience', label: 'Experience & Resume' },
  { href: '#contact', label: 'Contact' },
];

export const Navbar: React.FC = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="navbar">
      <div className="container navbar-inner">
        <a href="#overview" className="brand">
          <span className="brand-mark">SR</span>
          <span>
            {PROFILE.name}
            <span className="brand-sub">CAD / CAM &amp; Automotive Engineering</span>
          </span>
        </a>

        <nav className="nav-links" aria-label="Primary navigation">
          {NAV_ITEMS.map((item) => (
            <a key={item.href} href={item.href} className="nav-link">
              {item.label}
            </a>
          ))}
        </nav>

        <div className="nav-cta-wrap">
          <a href="#cad-projects" className="nav-cta">
            Explore CAD Work
          </a>
        </div>

        <button
          type="button"
          className="mobile-menu-btn"
          aria-label="Toggle navigation menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      <div className={`mobile-drawer ${open ? 'open' : ''}`}>
        {NAV_ITEMS.map((item) => (
          <a
            key={item.href}
            href={item.href}
            className="nav-link"
            onClick={() => setOpen(false)}
          >
            {item.label}
          </a>
        ))}
        <a
          href="#cad-projects"
          className="nav-cta"
          style={{ textAlign: 'center', marginTop: '0.35rem' }}
          onClick={() => setOpen(false)}
        >
          Explore CAD Work
        </a>
      </div>
    </header>
  );
};
