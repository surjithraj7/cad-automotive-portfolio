import React, { useMemo, useState } from 'react';
import { Info } from 'lucide-react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { ProjectCard } from './components/ProjectCard';
import { ProjectModal } from './components/ProjectModal';
import { SkillsSection } from './components/SkillsSection';
import { ExperienceSection } from './components/ExperienceSection';
import { ContactFooter } from './components/ContactFooter';
import { CAD_PROJECTS, PROJECT_CATEGORIES } from './data/portfolioData';
import { CadProject, ProjectCategory } from './types/portfolio';

export const App: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<'All' | ProjectCategory>('All');
  const [modalState, setModalState] = useState<{
    project: CadProject;
    tab: 'gallery' | '3d' | 'compare';
  } | null>(null);

  const filteredProjects = useMemo(() => {
    if (selectedCategory === 'All') return CAD_PROJECTS;
    return CAD_PROJECTS.filter((p) => p.categories.includes(selectedCategory));
  }, [selectedCategory]);

  const countForCategory = (cat: 'All' | ProjectCategory) =>
    cat === 'All'
      ? CAD_PROJECTS.length
      : CAD_PROJECTS.filter((p) => p.categories.includes(cat)).length;

  return (
    <>
      <Navbar />

      <main>
        <HeroSection />

        <section id="cad-projects" className="section">
          <div className="container">
            <span className="eyebrow">Portfolio Showcase</span>
            <h2 className="section-title">CAD Design &amp; Automotive Engineering Projects</h2>
            <p className="section-lead">
              Verified models from my FreeCAD and Blender engineering workspace — featuring
              multi-angle studio renders, interactive 3D WebGL inspection, and real before-and-after
              engineering comparisons.
            </p>

            <div className="filter-bar" role="tablist" aria-label="Filter projects by category">
              {PROJECT_CATEGORIES.map((category) => (
                <button
                  key={category}
                  type="button"
                  role="tab"
                  aria-selected={selectedCategory === category}
                  className={`filter-btn ${selectedCategory === category ? 'active' : ''}`}
                  onClick={() => setSelectedCategory(category)}
                >
                  <span>{category}</span>
                  <span className="filter-count">{countForCategory(category)}</span>
                </button>
              ))}
            </div>

            {selectedCategory === 'Automotive Interior Design' && (
              <div className="category-note">
                <Info size={18} color="#60a5fa" style={{ flexShrink: 0, marginTop: '2px' }} />
                <span>
                  <strong>Cockpit &amp; Driver Cell Subsystems:</strong> These entries highlight the
                  cockpit, dashboard instrumentation, seating, harness, and steering assemblies
                  integrated within the Buggy 22 and VX-01 Formula CAD models (no separate standalone
                  passenger cabin model is claimed).
                </span>
              </div>
            )}

            <div className="projects-grid">
              {filteredProjects.map((project) => (
                <ProjectCard
                  key={project.id}
                  project={project}
                  onOpen={(proj, tab = 'gallery') => setModalState({ project: proj, tab })}
                />
              ))}
            </div>
          </div>
        </section>

        <SkillsSection />
        <ExperienceSection />
      </main>

      <ContactFooter />

      {modalState && (
        <ProjectModal
          project={modalState.project}
          initialTab={modalState.tab}
          onClose={() => setModalState(null)}
        />
      )}
    </>
  );
};

export default App;
